import React, { useState } from 'react';
import { Button, TextField, Modal, Checkbox, FormControlLabel } from '@mui/material';
import '../../App.css';

function TodoList({ taskList, setTaskList }) {
    const [open, setOpen] = useState(false);
    const [selectedTasks, setSelectedTasks] = useState([]);

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

    const handleProgressChange = (id, event) => {
        setTaskList(taskList.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    progress: event.target.value
                };
            }
            return task;
        }));
    };

    const handleSelect = (id) => {
        if (selectedTasks.includes(id)) {
            setSelectedTasks(selectedTasks.filter((taskId) => taskId !== id));
        } else {
            setSelectedTasks([...selectedTasks, id]);
        }
    };

    const handleDeleteSelected = () => {
        if (selectedTasks.length > 0) {
            setOpen(true);
        }
    };

    const handleConfirmDelete = () => {
        setTaskList(taskList.filter((task) => !selectedTasks.includes(task.id)));
        setSelectedTasks([]);
        setOpen(false);
    };

    const handleCancelDelete = () => {
        setSelectedTasks([]);
        setOpen(false);
    };

    const handleDeleteAll = () => {
        if (taskList.length > 0) {
            if (window.confirm('全てのタスクを削除しますか？')) {
                setTaskList([]);
            }
        }
    };

    return (
        <div className='todo-list'>
            {taskList.length > 0 && (
                <table className="table table-striped" style={{width: '70%', margin: 'auto', position: 'relative'}} >
                    <thead>
                        <tr className="todoHeader">
                            <th className='checkBox'></th>
                            <th className='todoDate'>期限日</th>
                            <th className='todoText'>タスク名</th>
                            <th className='todoPrimary'>優先度</th>
                            <th className='todoProgress'>進捗</th>
                            <th></th>
                            <th>
                                <button onClick={handleDeleteAll}>
                                        <i className="fa-solid fa-trash"></i>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskList.map((task) => (
                            <tr className={`todo ${task.completed ? "completed" : ""} ${selectedTasks.includes(task.id) ? "selected" : ""}`} key={task.id}>
                                <td className='checkBox'>
                                <Checkbox 
                                    checked={task.completed}
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                    onChange={() => handleComplete(task.id)}
                                />
                                </td>
                                <td className="todoDate" id='todocontent'>
                                    <span>{task.deadline}</span>
                                </td>
                                <td className="todoText" id='todocontent'>
                                    <span>{task.text}</span>
                                </td>
                                <td className="todoPriority" id='todocontent'>
                                    <span>{task.priority}</span>
                                </td>
                                <td className="todoProgress" id='todocontent'>
                                    <input type="range" min="0" max="100" value={task.progress || 0} onChange={(event) => handleProgressChange(task.id, event)} />
                                </td>
                                <td>
                                    
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
            )}
        </div>
    );
}

export default TodoList;




