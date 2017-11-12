import os
from flask import Flask, render_template

app = Flask(__name__, static_folder='../public')

@app.route('/')
def hello():
    return render_template('index.html', publicPath=os.environ.get('PUBLIC_PATH', '/public'))
