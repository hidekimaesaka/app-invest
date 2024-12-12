from flask import Flask

from app.routes import register


def create_app():
    app = Flask(__name__)

    register.init(app)

    return app
