from flask import Blueprint, Flask, jsonify, request


register_bp = Blueprint('register', __name__)


@register_bp.route('/user/new', methods=['POST'])
def new_user():
    request_json_data = request.json
    return jsonify(msg=f'Usuário {request_json_data['username']} criado com sucesso!')


def init(app: Flask):
    app.register_blueprint(register_bp)
