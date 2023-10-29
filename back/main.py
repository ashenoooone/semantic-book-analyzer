import uvicorn
from fastapi import FastAPI

from models.BaseModel import init
from routers.RequestsRouter import RequestsRouter
from routers.UserRouter import UserRouter

app = FastAPI()

app.include_router(UserRouter)
app.include_router(RequestsRouter)

# uvicorn main:app --reload
if __name__ == "__main__":
    init()
    uvicorn.run(app, host="0.0.0.0", port=8000)
