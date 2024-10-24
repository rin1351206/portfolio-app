import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from './Title';
import { InputForm } from './InputForm';
import TodoList from './TodoList';

function TodosPage() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:8000/todos');
        setTaskList(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className='body'>
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default TodosPage;
