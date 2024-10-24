from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

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

class TodoItem(BaseModel):
    id: Optional[int]
    text: str
    deadline: str
    priority: str
    completed: bool

todos = []

@app.post("/weather/test")
async def test(request: Request):
    data = await request.json()
    dataA = data.get("dataA",0)
    dataB = data.get("dataB",0)
    answer = int(dataA) + int(dataB)
    return {"answer":answer}

@app.post("/todos")
async def create_todo(todo: TodoItem):
    todo.id = len(todos) + 1
    todos.append(todo)
    return todo

@app.get("/todos")
async def get_todos():
    return todos

@app.get("/todos/{todo_id}")
async def get_todo(todo_id: int):
    for todo in todos:
        if todo.id == todo_id:
            return todo
    raise HTTPException(status_code=404, detail="Todo not found")

@app.put("/todos/{todo_id}")
async def update_todo(todo_id: int, updated_todo: TodoItem):
    for index, todo in enumerate(todos):
        if todo.id == todo_id:
            todos[index] = updated_todo
            return updated_todo
    raise HTTPException(status_code=404, detail="Todo not found")

@app.delete("/todos/{todo_id}")
async def delete_todo(todo_id: int):
    for index, todo in enumerate(todos):
        if todo.id == todo_id:
            del todos[index]
            return {"message": "Todo deleted"}
    raise HTTPException(status_code=404, detail="Todo not found")

# uvicorn main:app --reload