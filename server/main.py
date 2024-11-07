from config import PORT
from src import app, db


if __name__ == "__main__":
    #! This is only for the first time to create the database
    with app.app_context():
        db.create_all()

    app.run(debug=True, host='0.0.0.0', port=PORT)
