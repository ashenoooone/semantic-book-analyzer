from fastapi import Depends

from models.RequestModel import Request
from repositories.RequestRepository import RequestRepository
from schemas.RequestSchema import RequestPostRequestSchema


class RequestService:
    request_repository: RequestRepository

    def __init__(self, request_repository: RequestRepository = Depends()):
        self.request_repository = request_repository

    def create(self, request: RequestPostRequestSchema):
        req = Request()
        req.time = request.time
        req.user_id = request.user_id
        req.book = request.book
        req.book_title = request.book_title
        return self.request_repository.create(
            req
        )
