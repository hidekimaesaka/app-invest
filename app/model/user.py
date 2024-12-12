from app.database.user import UserBase

from sqlalchemy.orm import mapped_column, Mapped


class User(UserBase):

    __tablename__ = 'User'

    id: Mapped[int] = mapped_column(primary_key=True)
    mail: Mapped[str]
    username: Mapped[str]
    password: Mapped[str]
