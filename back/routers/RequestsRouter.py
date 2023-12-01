from typing import List, Annotated

from fastapi import APIRouter, Depends, status, UploadFile, File, Form

from configs.Database import User
from services.RequestService import RequestService
from services.UserService import current_active_user

RequestsRouter = APIRouter(prefix="/v1/requests", tags=["requests"])


@RequestsRouter.post(
    "/",
    status_code=status.HTTP_201_CREATED,
)
async def create(
        files: Annotated[list[UploadFile], Form()],
        user: User = Depends(current_active_user),
        requests_service: RequestService = Depends(),
):
    try:
        res = await requests_service.create(files, user)
        return res.model_dump()
    except ValueError as e:
        return {"error": str(e)}
