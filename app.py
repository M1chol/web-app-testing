# app.py
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send-text', methods=['POST'])
def send_text():
    text = request.form.get('text')
    print(f"Received text from web UI: {text}")
    return {"message": "Text received successfully"}

if __name__ == "__main__":
    app.run(debug=True)