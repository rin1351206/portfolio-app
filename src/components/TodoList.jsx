import React, { useState } from 'react'

function TodoList({taskList,setTaskList}) {

    const handleDelete = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id))
    }

    const handleComplete = (id) => {

    }

    return (
    <div className='todo-list'>
        <div className="todos">
            {taskList.map((task,index) => (
                <div className={'todo ={(task.completed ? "completed" : "")}'} key={index}>
                <div className="todoText">
                    <span>{task.text}</span>
                </div>
                <div className="icons">
                    <button>
                        <i className="fa-solid fa-check" onClick={() => handleComplete(task.id)}></i>
                    </button>
                    <button>
                        <i className="fa-solid fa-trash" onClick={() => handleDelete(task.id)}></i>
                    </button>
                </div>
            </div>
            ))}
        </div>
    </div>
    )
}

export default TodoList
