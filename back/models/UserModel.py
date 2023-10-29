from sqlalchemy import Column, String
from sqlalchemy.orm import relationship, Mapped, mapped_column

from models.BaseModel import EntityMeta


class User(EntityMeta):
    __tablename__ = 'users'

    id: Mapped[int] = mapped_column(primary_key=True)
    token = Column(String)
    requests = relationship("Request", back_populates="user")
    reports = relationship("Report", back_populates="user")
