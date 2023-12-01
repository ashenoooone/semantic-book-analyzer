from typing import List, Annotated

from fastapi import APIRouter, Depends, status, UploadFile, File, Form, Query

from configs.Database import User
from services.RequestService import RequestService
from services.ResultService import ResultService
from services.UserService import current_active_user

ResultRouter = APIRouter(prefix="/v1/results", tags=["results"])


@ResultRouter.get(
    "/",
)
async def get(
        user: User = Depends(current_active_user),
        results_service: ResultService = Depends(),
        limit: int = Query(10, ge=1, le=100)
):
    try:
        res = await results_service.get(user, limit)
        return res.model_dump()
    except ValueError as e:
        return {"error": str(e)}
