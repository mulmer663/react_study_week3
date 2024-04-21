import logging
from datetime import datetime

import httpx
from sqlalchemy import select, union_all
from sqlalchemy.orm import Session
from sqlalchemy.sql.functions import func

from models import Lotto

# 로깅 설정
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("myapp")

async def insert_lotto_data(round_num, db: Session):
    # 해당 회차가 존재하는 지 확인
    result = await db.execute(select(Lotto).where(Lotto.draw_round == round_num))
    lotto = result.scalars().first()

    # 없다면 api 호출해 저장
    if lotto is None:
        url = f"https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo={round_num}"
        response = await httpx.AsyncClient().get(url)
        data = response.json()
        # drwNoDate는 날짜 포멧팅
        draw_date = datetime.strptime(data['drwNoDate'], '%Y-%m-%d')
        lotto = Lotto(draw_round=data['drwNo'], draw_date=draw_date, total_amount=data['totSellamnt'],
                      first_winner_amount=data['firstWinamnt']
                      , first_winner_count=data['firstPrzwnerCo'], first_total_amount=data['firstAccumamnt'],
                      draw_number1=data['drwtNo1'], draw_number2=data['drwtNo2']
                      , draw_number3=data['drwtNo3'], draw_number4=data['drwtNo4'], draw_number5=data['drwtNo5'],
                      draw_number6=data['drwtNo6'], bonus_number=data['bnusNo'])
        db.add(lotto)
        await db.commit()
        logger.info(f"{round_num}회차 정보를 저장합니다.")
    else:
        logger.info(f"{round_num}회차 정보가 있으므로 생략합니다.")

    # 로직 후 한 번 더 조회
    result = await db.execute(select(Lotto).where(Lotto.draw_round == round_num))
    lotto = result.scalars().first()
    return lotto


async def select_statistics_number(db):
    # 유니온 쿼리를 서브 쿼리로 만듬
    sub_query = union_all(
        select(Lotto.draw_number1.label('number')),
        select(Lotto.draw_number2.label('number')),
        select(Lotto.draw_number3.label('number')),
        select(Lotto.draw_number4.label('number')),
        select(Lotto.draw_number5.label('number')),
        select(Lotto.draw_number6.label('number')),
        select(Lotto.bonus_number.label('number')),
    )

    # 해당 서브 쿼리로 count, group by 쿼리 만들어서 날림
    result = await db.execute(select(sub_query.c.number.label('number'), func.count(sub_query.c.number).label('count'))
                              .group_by(sub_query.c.number)
                              .order_by(sub_query.c.number))

    return result.fetchall()
