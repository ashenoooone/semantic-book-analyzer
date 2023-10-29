from fastapi import APIRouter, Depends
from fastapi import Request
from fastapi.responses import JSONResponse

from services.UserService import UserService

UserRouter = APIRouter(
    prefix="/v1/user"
)


@UserRouter.post("/generate_id")
async def generate_id(request: Request, user_service: UserService = Depends()):
    return JSONResponse(content={"id": user_service.generate_id(request.client.host)})
