import React, { useState, useEffect } from 'react';
import TodoModal from './TodoModal';

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  

  useEffect(() => {
    // ここで初期Todoリストをロードする、例えばAPIから
  }, []);

  const addTodo = () => {
    if (!inputValue) return;
    let d = new Date()
    setTodos([...todos, { id: Date.now(), text: inputValue, date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() }]);
    setInputValue('');
  };
  
  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  };

  const filteredTodos = searchTerm
    ? todos.filter(todo => todo.text.toLowerCase().includes(searchTerm.toLowerCase()))
    : todos;

  return (
    <div className='container'>
      <h1>Todoリスト</h1>
      <button onClick={openModal}>追加</button> {/* 追加ボタン */}
      {isModalOpen && <TodoModal closeModal={closeModal} addTodo={addTodo} />}
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Todoを検索"
      />
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>作成日</th>
            <th>タスク名</th>
            <th>優先度</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.date}</td>
              <td>{todo.text}</td>
              <td></td>
              <td>
                <i class="fa-solid fa-trash-can" style={{color: 'red', cursor: 'pointer'}} onClick={() => deleteTodo(todo.id)}></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoPage;