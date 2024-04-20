from datetime import datetime

import requests
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import Lotto
from util.utils import calculate_round

router = APIRouter(
    prefix="/api/lotto",
)


@router.get("/add")
def get_lotto_data(db: Session = Depends(get_db)):
    # 최신 회차를 구함
    current_round = calculate_round()

    # 해당 회차가 존재하는 지 확인
    current_lotto = db.query(Lotto).get(current_round)
    # 없다면 api 호출해 저장
    if current_lotto is None:
        url = f"https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo={current_round}"
        response = requests.get(url)
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
        db.commit()
        print(f"{current_round}회차 정보를 저장하였습니다.")
        return lotto
    else:
        print(f"{current_round}회차 정보가 있으므로 생략합니다.")
        return current_lotto


@router.get("/init")
async def init_lotto_data(db: Session = Depends(get_db)):
    # 최신 회차를 구함
    current_round = calculate_round()

    # 최신 회차 -1 까지의 회차 반복
    for i in range(1, current_round - 1):
        round_num = i
        # 해당 회차가 존재하는 지 확인
        lotto = db.query(Lotto).get(round_num)
        # 없다면 api 호출해 저장
        if lotto is None:
            url = f"https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo={round_num}"
            response = requests.get(url)
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
            db.commit()
            print(f"{round_num}회차 정보를 초기화 하였습니다.")
        else:
            print(f"{round_num}회차 정보가 있으므로 생략합니다.")

    return {"message": f"{current_round - 1}회차 까지 초기화 완료했습니다."}
