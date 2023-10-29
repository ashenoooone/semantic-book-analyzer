from sqlalchemy import Column, Text, ForeignKey
from sqlalchemy.orm import relationship, Mapped, mapped_column

from models.BaseModel import EntityMeta


class Report(EntityMeta):
    __tablename__ = 'reports'

    id: Mapped[int] = mapped_column(primary_key=True)
    text = Column(Text)
    userId: Mapped[int] = mapped_column(ForeignKey("users.id"))
    user = relationship("User", back_populates="reports")
