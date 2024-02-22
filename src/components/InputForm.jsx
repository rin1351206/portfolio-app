import React, {useState} from 'react'

export const InputForm = ({taskList, setTaskList}) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
      {
        id: Date.now(), 
        text: inputText,
        completed: false
      }
    ]);
    setInputText("")
  }

  const handleChange  = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div className='input-form'>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText}/>
        <button type="submit" id='add-button'>
        <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  )
}



