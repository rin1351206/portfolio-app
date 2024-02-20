import React, { useState } from 'react';

function TodoModal({ closeModal, addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="新しいTodoを追加"
          />
          <button type="submit">追加</button>
        </form>
      </div>
    </div>
  );
}

export default TodoModal;