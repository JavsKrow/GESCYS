from src import db, ma


class UserType(db.Model):
    __tablename__ = "user_types"
    
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(50), nullable=False)
    
    users = db.relationship("User", backref="user_type", lazy=True)
    
    def __init__(self, description):
        self.description = description
        
        
class UserTypeSchema(ma.Schema):
    class Meta:
        fields = ("id", "description")


user_type_schema = UserTypeSchema()
user_types_schema = UserTypeSchema(many=True)

    