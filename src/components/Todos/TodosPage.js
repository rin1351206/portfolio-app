import React,{useState} from 'react'
import Title from './Title'
import {InputForm} from './InputForm'
import TodoList from './TodoList'


function TodosPage() {

  const [taskList, setTaskList] = useState([]);

  return (
    <div className='body'>
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList}/>
    </div>
  )
}

export default TodosPage
