from fastapi import Depends, UploadFile

from configs.Database import Request, User, Result
from modules.get_book_intro.main import get_book_intro
from modules.tags_extract.main import get_keywords
from repositories.RequestRepository import RequestRepository
from repositories.ResultRepository import ResultRepository
from schemas.RequestSchema import RequestCreate
from itertools import chain


class RequestService:
    request_repository: RequestRepository
    result_repository: ResultRepository

    def __init__(self, request_repository: RequestRepository = Depends(),
                 result_repository: ResultRepository = Depends()):
        self.request_repository = request_repository
        self.result_repository = result_repository

    async def create(self, files: list[UploadFile], user: User) -> RequestCreate:
        result_req = RequestCreate()

        for file in files:
            req = Request()
            req.book = file.file.read()
            req.bookTitle = file.filename
            req.user_id = user.id
            created_req = await self.request_repository.create(req)
            intro = await get_book_intro(file)
            tags = []
            for i in intro:
                tags += list(await get_keywords(i))
            result: Result = Result()
            result.bookTitle = created_req.bookTitle
            result.requestId = created_req.id
            result.tags = tags
            print(intro, tags)
            created_result = await self.result_repository.create(result)
            result_req.result.append(created_result)

        return result_req
