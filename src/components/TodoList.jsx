import React from 'react'

function TodoList() {
    return (
    <div className='todo-list'>
        <div className="todos">
            <div className="todo">
                <div className="todoText">
                    <span>そうじ</span>
                </div>
                <div className="icons">
                    <button className="btn btn-primary">
                        <i class="fa-solid fa-check"></i>
                    </button>
                    <button className='btn btn-danger'>
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodoList
