from flask import request, abort
from flask_restful import Resource
from json_checker import Checker, CheckerError
from src.models import User, user_schema
from src import db

#* ENDPOINT: /gescys/v1/register
class Register(Resource):
    def post(self):
        data = request.get_json()
        
        register_chk = {
            "user_type_id": "int",
            "first_name": "str",
            "last_name": "str",
            "carnet": "str",
            "email": "str",
            "password": "str"
        }
        
        try:
            Checker(register_chk).validate(data)
        except CheckerError as e:
            abort(400, f"El formato de los datos es incorrecto: {e}")
        
        user_type_id = data["user_type_id"]
        first_name = data["first_name"]
        last_name = data["last_name"]
        carnet = data["carnet"]
        email = data["email"].lower()
        password = data["password"]
        
        # Buscar usuario por carnet o email
        user = User.query.filter((User.carnet == carnet) | (User.email == email)).first()
        
        if user:
            abort(400, "El usuario ya existe")
            
        new_user = User(user_type_id, first_name, last_name, carnet, email, password)
        
        db.session.add(new_user)
        db.session.commit()
        
        return user_schema.dump(new_user), 200


#* ENDPOINT: /gescys/v1/login
class Login(Resource):
    def post(self):
        data = request.get_json()
        
        login_chk = {
            "carnet": "str",
            "password": "str"
        }
        
        try:
            Checker(login_chk).validate(data)
        except CheckerError as e:
            abort(400, f"El formato de los datos es incorrecto: {e}")
            
        carnet = data["carnet"]
        password = data["password"]
        
        user = User.query.filter(User.carnet == carnet).first()
        
        if not user:
            abort(400, "El usuario no existe")
            
        if not user.check_password(password):
            abort(400, "La contraseña es incorrecta")
            
        return user_schema.dump(user), 200


        
        
        
        