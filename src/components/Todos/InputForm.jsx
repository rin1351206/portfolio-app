import React, {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export const InputForm = ({taskList, setTaskList}) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputText !== "") {
      setTaskList([
        ...taskList,
        {
          id: Date.now(),
          insertDate: new Date().toLocaleDateString(),
          text: inputText,
          completed: false
        }
      ]);
      setInputText("")
    }
  }

  const handleChange  = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div className='input-form'>
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="タスク名" variant="outlined" onChange={handleChange} value={inputText} size='small' className='input-text' style={{marginRight: '10px'}}/>
        <Button type='submit' variant="outlined" className='add-btn' style={{marginLeft: '10px'}}>追加</Button>
      </form>
    </div>
  )
}




