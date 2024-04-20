from sqlalchemy import Column, Integer, DateTime

from database import Base


class Lotto(Base):
    __tablename__ = 'lotto'

    draw_round = Column(Integer, primary_key=True)           # 회차
    draw_date = Column(DateTime, nullable=False)             # 당첨일
    total_amount = Column(Integer, nullable=False)           # 누적 당첨금
    first_winner_amount = Column(Integer, nullable=False)    # 1등 당첨금
    first_winner_count = Column(Integer, nullable=False)     # 1등 당첨 인원
    first_total_amount = Column(Integer, nullable=False)     # 1등 당첨 총액
    draw_number1 = Column(Integer, nullable=False)           # 당첨 번호 1
    draw_number2 = Column(Integer, nullable=False)           # 당첨 번호 2
    draw_number3 = Column(Integer, nullable=False)           # 당첨 번호 3
    draw_number4 = Column(Integer, nullable=False)           # 당첨 번호 4
    draw_number5 = Column(Integer, nullable=False)           # 당첨 번호 5
    draw_number6 = Column(Integer, nullable=False)           # 당첨 번호 6
    bonus_number = Column(Integer, nullable=False)           # 보너스 번호


