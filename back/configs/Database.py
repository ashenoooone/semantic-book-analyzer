from typing import AsyncGenerator

from fastapi import Depends
from fastapi_users_db_sqlalchemy import SQLAlchemyUserDatabase, SQLAlchemyBaseUserTableUUID
from sqlalchemy import String, Column
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker, declarative_base, relationship, mapped_column, Mapped

from configs.settings import get_settings

settings = get_settings()
DATABASE_URL = f"postgresql+asyncpg://{settings.db_user}:{settings.db_password}@{settings.db_host}/{settings.db_name}"

engine = create_async_engine(
    DATABASE_URL
)

async_session_maker = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

EntityMeta = declarative_base()


class User(SQLAlchemyBaseUserTableUUID, EntityMeta):
    __tablename__ = 'users'

    id: Mapped[int] = mapped_column(primary_key=True)
    token = Column(String)
    requests = relationship("Request", back_populates="user")
    reports = relationship("Report", back_populates="user")


async def create_db_and_tables():
    async with engine.begin() as conn:
        await conn.run_sync(EntityMeta.metadata.create_all)


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session_maker() as session:
        yield session


async def get_user_db(session: AsyncSession = Depends(get_async_session)):
    yield SQLAlchemyUserDatabase(session, User)
