from fastapi import Depends
from sqlalchemy import select, desc, UUID
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import Session

from configs.Database import get_async_session, Request, Result


class ResultRepository:
    db: AsyncSession

    def __init__(
            self, db: AsyncSession = Depends(get_async_session)
    ) -> None:
        self.db = db

    async def create(self, result: Result) -> Request:
        self.db.add(result)
        await self.db.commit()
        return result

    async def get_latest_result_for_user(self, user_id: UUID, n: int = 10) -> list[Result]:
        query = (
            select(Result)
            .join(Request)
            .filter(Request.user_id == user_id)
            .order_by(desc(Result.time))
            .limit(n)
        )
        results = await self.db.execute(query)
        return results.scalars().all()
