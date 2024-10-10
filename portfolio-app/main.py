from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# インスタンス化する決まり文句
app = FastAPI()

# 通信するURL設定
origins = [
    "http://localhost:3000",
    "https://portfolio-app-red-psi.vercel.app/",
]

# セキュリティ対策
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers={"*"},
)

# /は、GETリクエストが来たらという意味
@app.get("/")
def Hello():
    return {"Hello":"JSON形式"}