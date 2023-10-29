from fastapi import Depends
from sqlalchemy.orm import Session

from configs.Database import get_db_connection
from models.UserModel import User


class UserRepository:
    db: Session

    def __init__(
            self, db: Session = Depends(get_db_connection)
    ) -> None:
        self.db = db

    def create(self, user: User) -> User:
        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)
        return user
