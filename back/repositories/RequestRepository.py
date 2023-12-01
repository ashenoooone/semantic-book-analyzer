from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import Session

from configs.Database import get_async_session, Request


class RequestRepository:
    db: AsyncSession

    def __init__(
            self, db: AsyncSession = Depends(get_async_session)
    ) -> None:
        self.db = db

    async def create(self, request: Request) -> Request:
        self.db.add(request)
        await self.db.commit()
        return request
