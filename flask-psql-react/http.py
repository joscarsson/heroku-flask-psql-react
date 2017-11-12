from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Yes, it works! Amazing! Hej Matilda!'
