import datetime

from sqlalchemy import Column, DateTime, String, ForeignKey, LargeBinary
from sqlalchemy.orm import relationship, Mapped, mapped_column

from models.BaseModel import EntityMeta


class Request(EntityMeta):
    __tablename__ = 'requests'

    id: Mapped[int] = mapped_column(primary_key=True)
    time = Column(DateTime, default=datetime.datetime.utcnow())
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    user: Mapped["User"] = relationship("User", back_populates="requests")
    result: Mapped["Result"] = relationship("Results", back_populates="requests")
    book = Column(LargeBinary)
    bookTitle = Column(String)
