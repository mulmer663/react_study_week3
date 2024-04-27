import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import get_async_db
from domain.lotto import lotto_router
from domain.lotto.lotto_router import get_lotto_data

app = FastAPI()

origins = [
    "http://127.0.0.1:3000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['GET', 'POST', 'PUT', 'DELETE'],
    allow_headers=["Accept", "Accept-Language", "Content-Language", "Content-Type"],
)

app.include_router(lotto_router.router)


@app.get("/")
def hello():
    return {"message": "hello Lotto!"}


# startup 이벤트 핸들러
async def startup_event():
    async for db in get_async_db():
        # 이곳에서 db 세션을 직접적으로 호출해 필요한 비동기 함수를 콜 할수 있음
        await get_lotto_data(db=db)  


# 시작 이벤트 함수
@app.on_event("startup")
async def startup_wrapper():
    await startup_event()
