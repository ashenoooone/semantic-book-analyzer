import uvicorn
from fastapi import FastAPI

from configs.Database import create_db_and_tables
from routers.RequestsRouter import RequestsRouter
from routers.UserRouter import UserRouter

app = FastAPI()

app.include_router(UserRouter)
app.include_router(RequestsRouter)


@app.on_event("startup")
async def on_startup():
    await create_db_and_tables()


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8888)
