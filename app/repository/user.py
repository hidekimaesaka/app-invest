from sqlalchemy import select

from sqlalchemy.orm import Session

from app.model.user import User


class UserRepository:
    def __init__(self, session: Session):
        self.session = session

    def get_user_by_id(self, id: int):
        statement = select(User).where(User.id == id)
        query = self.session.execute(statement).scalar()
        return query
    
    def get_all_users(self):
        statement = select(User)
        query = self.session.execute(statement).scalars()
        return query.all()

    def insert_user(self, user: User):
        self.session.add(user)
        self.session.commit()
    
    def delete_user(self, user: User):
        self.session.delete(user)
        self.session.commit()
