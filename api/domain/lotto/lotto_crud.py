from datetime import datetime

import httpx
from sqlalchemy import select
from sqlalchemy.orm import Session

from models import Lotto


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
        print(f"{round_num}회차 정보를 저장합니다.")
    else:
        print(f"{round_num}회차 정보가 있으므로 생략합니다.")

    return lotto


