import datetime

from pydantic import BaseModel


class Lotto(BaseModel):
    draw_round: int
    draw_date: datetime.datetime
    total_amount: int
    first_winner_amount: int
    first_winner_count: int
    first_total_amount: int
    draw_number1: int
    draw_number2: int
    draw_number3: int
    draw_number4: int
    draw_number5: int
    draw_number6: int
    bonus_number: int
