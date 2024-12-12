from pytest import fixture

from sqlalchemy import create_engine
from sqlalchemy.orm import create_session

from app.model.user import User

from app.database.user import UserBase


@fixture
def engine():
    engine = create_engine('sqlite:///:memory:')
    UserBase.metadata.create_all(engine)
    return engine


@fixture
def session(engine):
    return create_session(bind=engine)


@fixture
def session_with_one_user(engine):
    session = create_session(bind=engine)

    user_data = {
        "username": "hidekimsk",
        "mail": "hideki@mail.com",
        "password": "santosfccampeaomundialdacasaverd.com"
    }

    user = User(**user_data)
    session.add(user)
    session.commit()

    return session
