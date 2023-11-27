from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__, static_url_path='/static')
CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1:5000"}})

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)