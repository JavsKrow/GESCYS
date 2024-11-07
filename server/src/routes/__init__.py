from src import api
from .auth import *


api.add_resource(Register, '/register')
api.add_resource(Login, '/login')
