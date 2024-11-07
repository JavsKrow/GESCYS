from werkzeug.security import generate_password_hash, check_password_hash
from src import db, ma


class User(db.Model):
    __tablename__ = "users"
    
    id = db.Column(db.Integer, primary_key=True)
    user_type_id = db.Column(db.Integer, db.ForeignKey("user_types.id"), nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    carnet = db.Column(db.String(20), nullable=False, unique=True)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.Text, nullable=False)
    
    def __init__(self, user_type_id, first_name, last_name, carnet, email, password):
        self.user_type_id = user_type_id
        self.first_name = first_name
        self.last_name = last_name
        self.carnet = carnet
        self.email = email
        self.password = generate_password_hash(password)
        
    def check_password(self, password):
        return check_password_hash(self.password, password)


class UserSchema(ma.Schema):
    class Meta:
        fields = ("id", "user_type_id", "first_name", "last_name", "carnet", "email")


user_schema = UserSchema()
users_schema = UserSchema(many=True)
    
    
    