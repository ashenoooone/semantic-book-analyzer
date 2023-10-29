from typing import List, Optional

from fastapi import APIRouter, Depends, status

from models.RequestModel import Request
from schemas.RequestSchema import RequestPostRequestSchema, RequestCreate
from services.RequestService import RequestService

RequestsRouter = APIRouter(prefix="/v1/requests", tags=["requests"])


@RequestsRouter.post(
    "/",
    response_model=RequestCreate,
    status_code=status.HTTP_201_CREATED,
)
def create(
        request: RequestPostRequestSchema,
        requests_service: RequestService = Depends(),
):
    return requests_service.create(request).normalize()
