from sqlalchemy.orm import Session

from app.repository.user import UserRepository

from app.model.user import User


def test_user_creation(session: Session):
    user_repo = UserRepository(session)

    new_user = User()
    new_user.mail = 'lucas@mail.com'
    new_user.username = 'hidekimsk'
    new_user.password = 'superman123'

    user_repo.insert_user(new_user)

    users_in_database = len(user_repo.get_all_users())

    assert users_in_database > 0


def test_user_deletion(session_with_one_user: Session):
    user_repo = UserRepository(session_with_one_user)
    users_in_database = len(user_repo.get_all_users())

    user_to_delete = user_repo.get_user_by_id(1)

    user_repo.delete_user(user_to_delete)

    users_in_database = len(user_repo.get_all_users())

    assert users_in_database == 0

def test_get_user_by_id(session_with_one_user: Session):
    user_repo = UserRepository(session_with_one_user)

    id_to_find = 1
    user_we_want = user_repo.get_user_by_id(id_to_find)
    
    assert user_we_want.id == 1
