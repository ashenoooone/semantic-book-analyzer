import datetime

from sqlalchemy import Column, ForeignKey, String, DateTime, ARRAY
from sqlalchemy.orm import relationship, Mapped, mapped_column

from configs.Database import EntityMeta


class Result(EntityMeta):
    __tablename__ = 'results'

    id: Mapped[int] = mapped_column(primary_key=True)
    time = Column(DateTime, default=datetime.datetime.utcnow())
    requestId: Mapped[int] = mapped_column(ForeignKey("requests.id"))
    request = relationship("Request")
    tags = Column(ARRAY(String))
    bookTitle = Column(String)
