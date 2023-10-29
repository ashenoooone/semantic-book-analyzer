import uuid

from fastapi import Depends

from repositories.UserRepository import UserRepository


class UserService:
    def __init__(self, user_repository: UserRepository = Depends()):
        self.request_repository = user_repository

    def generate_id(self, ip: str) -> str:
        return str(uuid.uuid5(uuid.NAMESPACE_DNS, ip))
