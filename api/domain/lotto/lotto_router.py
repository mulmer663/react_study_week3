from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_async_db
from domain.lotto import lotto_crud, lotto_schema
from util.utils import calculate_round

router = APIRouter(
    prefix="/api/lotto",
)


@router.get("/add", response_model=lotto_schema.Lotto)
async def get_lotto_data(db: Session = Depends(get_async_db)):
    # 최신 회차를 구함
    current_round = calculate_round()
    data = await lotto_crud.insert_lotto_data(current_round, db=db)
    return data


@router.get("/init")
async def init_lotto_data(db: Session = Depends(get_async_db)):
    # 최신 회차를 구함
    current_round = calculate_round()
    # 최신 회차 -1 까지의 회차 반복
    for i in range(1, current_round):
        await lotto_crud.insert_lotto_data(i, db=db)

    return {"message": f"{current_round - 1}회차 까지 초기화 완료했습니다."}


@router.get("/stat/number", response_model=List[lotto_schema.LottoStatCount])
async def get_lotto_statistics_number(db: Session = Depends(get_async_db)):
    # 저장 되어 있던 정보를 통계정보로 불러옴
    data = await lotto_crud.select_statistics_number(db=db)
    return data
