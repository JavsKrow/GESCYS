from dotenv import load_dotenv
import os


load_dotenv()  # Cargar variables de entorno

# PARAMETROS DE LA APP
PORT = os.environ["PORT"]

# PARAMETROS PARA CONEXION A LA BASE DE DATOS
MYSQL_USR = os.environ["MYSQL_USR"]
MYSQL_PASS = os.environ["MYSQL_PASS"]
MYSQL_HOST = os.environ["MYSQL_HOST"]
MYSQL_DB = os.environ["MYSQL_DB"]
SQLALCHEMY_DATABASE_URI = f"mysql://{MYSQL_USR}:{MYSQL_PASS}@{MYSQL_HOST}/{MYSQL_DB}"
