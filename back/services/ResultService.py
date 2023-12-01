from fastapi import Depends

from configs.Database import User
from repositories.ResultRepository import ResultRepository
from schemas.ResultSchema import GetTopTenResults


class ResultService:
    result_repository: ResultRepository

    def __init__(self,
                 result_repository: ResultRepository = Depends()):
        self.result_repository = result_repository

    async def get(self, user: User, limit: int) -> GetTopTenResults:
        result = GetTopTenResults()
        result.data = await self.result_repository.get_latest_result_for_user(user.id, limit)
        return result
