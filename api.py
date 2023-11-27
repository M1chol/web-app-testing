from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware

app_api = FastAPI()

# CORS (Cross-Origin Resource Sharing) configuration
origins = ["http://127.0.0.1:5000"]  # Update this with the actual origin of your Flask app

app_api.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app_api.post('/api/send-text')
async def send_text_api(text: str = Form(...)):
    print(f"Received text from API: {text}")
    return {"message": "Text received successfully"}