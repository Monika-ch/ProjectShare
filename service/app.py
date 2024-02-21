from flask import Flask
from flask import Blueprint
from controllers.prompts import prompt_bp
app = Flask(__name__)
app.register_blueprint(prompt_bp)
if __name__ == '__main__':
    app.run(debug=True)