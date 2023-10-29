from datetime import datetime
from typing import Optional, Any

from pydantic import BaseModel, Field


class RequestPostRequestSchema(BaseModel):
    time: Optional[datetime] = Field(default=datetime.today())
    user_id: int
    book: Any
    book_title: str


class RequestCreate(BaseModel):
    user_id: int
    result: str
    book_title: str
    book: bytes
