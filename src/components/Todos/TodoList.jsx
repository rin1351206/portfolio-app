import React, { useState } from 'react';
import { Button, TextField, Dialog, Checkbox, FormControlLabel } from '@mui/material';
import '../../App.css';

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
            <table className="table table-striped" style={{width: '70%', margin: 'auto'}} >
                <thead>
                    <tr className="todoHeader">
                        <th></th>
                        <th className='todoDate'>作成日</th>
                        <th className='todoText'>タスク名</th>
                        <th className='todoPrimary'>優先度</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {taskList.map((task, index) => (
                        <tr className={`todo ${task.completed ? "completed" : ""}`} key={index}>
                            <td className='todoAction'>
                            <Checkbox
                              sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                              onChange={() => handleComplete(task.id)}
                            />
                            </td>
                            <td className="todoDate" id='todocontent'>
                                <span>{task.insertDate}</span>
                            </td>
                            <td className="todoText" id='todocontent'>
                                <span>{task.text}</span>
                            </td>
                            <td className="todoPriority" id='todocontent'>
                                <span>{task.priority}</span>
                            </td>
                            <td className="todoAction" id='todocontent'>
                                <button className="icon-button" onClick={() => handleDelete(task.id)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;


