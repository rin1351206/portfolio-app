import React, { useState } from 'react';

function TodoList({ taskList, setTaskList }) {
    const handleDelete = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id));
    };

    const handleComplete = (id) => {
        setTaskList(taskList.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    completed: !task.completed
                };
            }
            return task;
        }));
    };

    return (
        <div className='todo-list'>
            <div className="todos">
                <div className="todoHeader">
                    <span className='todoDate'>作成日</span>
                    <span className='todoText'>タスク名</span>
                    <span className='todoStatus'>ステータス</span>
                </div>
            </div>
            <div className="todos">
                {taskList.map((task, index) => (
                    <div className={`todo ${task.completed ? "completed" : ""}`} key={index}>
                        <div className="todoDate">
                            <span>{task.insertDate}</span>
                        </div>
                        <div className="todoText">
                            <span>{task.text}</span>
                        </div>
                        <div className="icons">
                            <button className="icon-button" onClick={() => handleComplete(task.id)}>
                                <i className="fa-solid fa-check"></i>
                            </button>
                            <button className="icon-button" onClick={() => handleDelete(task.id)}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoList;

