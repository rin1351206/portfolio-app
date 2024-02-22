import '../Todo.css'
import React from 'react'
import Title from './Title'
import InputForm from './InputForm'
import TodoList from './TodoList'


function TodosPage() {
  return (
    <div className='body'>
      <Title />
      <InputForm />
      <TodoList />
    </div>
  )
}

export default TodosPage
