from sqlalchemy import create_engine

from sqlalchemy.orm import DeclarativeBase, create_session


class UserBase(DeclarativeBase):
    ...


engine = create_engine('sqlite:///user.db')

session = create_session(bind=engine)
