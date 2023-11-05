from fastapi import Depends
from sqlalchemy.orm import Session

from configs.Database import get_async_session
from models.RequestModel import Request


class RequestRepository:
    db: Session

    def __init__(
            self, db: Session = Depends(get_async_session)
    ) -> None:
        self.db = db

    async def create(self, request: Request) -> Request:
        self.db.add(request)
        return request
