from flask import Flask

app = Flask(__name__)

# * CONFIGURACIONES DE LA APP ========================================
from config import SQLALCHEMY_DATABASE_URI

app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# * ESTABLECER CORS ===================================================
from flask_cors import CORS

cors = CORS(app, resources={r"/*": {"origins": "*"}})

# * INSTANCIAR DB ORM =================================================
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy(app)

# * INSTANCIAR SERIALIZADOR ===========================================
from flask_marshmallow import Marshmallow

ma = Marshmallow(app)

# * INSTANCIAR API ====================================================
from flask_restful import Api

api = Api(app, prefix="/gescys/v1")

# * ENDPOINTS =========================================================
import src.routes
