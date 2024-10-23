from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

# インスタンス化する決まり文句
app = FastAPI()

# 通信するURL設定
origins = [
    "http://localhost:3000",
    # "https://portfolio-app-red-psi.vercel.app/",
]

# セキュリティ対策
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/weather/test")
async def test(request: Request):
    data = await request.json()
    dataA = data.get("dataA",0)
    dataB = data.get("dataB",0)
    answer = int(dataA) + int(dataB)
    return {"answer":answer}

# uvicorn main:app --reload