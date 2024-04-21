from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from starlette.config import Config

config = Config('.env')

SQLALCHEMY_DATABASE_URL = config('SQLALCHEMY_DATABASE_URL')
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


SQLALCHEMY_DATABASE_URL_ASYNC = config('SQLALCHEMY_DATABASE_URL_ASYNC')
async_engine = create_async_engine(SQLALCHEMY_DATABASE_URL_ASYNC, echo=False)

async def get_async_db():
    db = AsyncSession(bind=async_engine)
    try:
        yield db
    finally:
        await db.close()