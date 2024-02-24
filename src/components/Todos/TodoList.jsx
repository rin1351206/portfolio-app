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
            <table className="table table-striped">
                <thead>
                    <tr className="todoHeader">
                        <th></th>
                        <th className='todoDate'>作成日</th>
                        <th className='todoText'>タスク名</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {taskList.map((task, index) => (
                        <tr className={`todo ${task.completed ? "completed" : ""}`} key={index}>
                            <td className='todoAction'>
                                <button className="icon-button" onClick={() => handleComplete(task.id)}>
                                    <i className="fa-solid fa-check"></i>
                                </button>
                            </td>
                            <td className="todoDate">
                                <span>{task.insertDate}</span>
                            </td>
                            <td className="todoText">
                                <span>{task.text}</span>
                            </td>
                            <td className="todoAction">
                                <button className="icon-button" onClick={() => handleDelete(task.id)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </td>
                            <td className="todoPriority">
                                <span>{task.priority}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;


