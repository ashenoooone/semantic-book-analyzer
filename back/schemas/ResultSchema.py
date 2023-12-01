from pydantic import BaseModel

from configs.Database import Result


class GetTopTenResults(BaseModel):
    data: list[Result] = []

    class Config:
        arbitrary_types_allowed = True
