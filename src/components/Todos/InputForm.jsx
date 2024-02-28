import React, {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const InputForm = ({taskList, setTaskList}) => {
  const [inputText, setInputText] = useState('');
  const [deadline, setDeadline] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputText !== "" && inputText.length <= 20) {
      setTaskList([
        ...taskList,
        {
          id: Date.now(),
          deadline: deadline,
          text: inputText,
          completed: false
        }
      ]);
      setInputText("");
      setDeadline("");
      setError(false);
      setHelperText('');
    } else if (inputText.length > 20) {
      setError(true);
      setHelperText('20文字以内で入力してください。');
    } else if (inputText == ""){
      setError(true);
      setHelperText('タスク名を入力してください。');
    }
  }

  const handleChangeText  = (e) => {
    setInputText(e.target.value);
    if(e.target.value.length <= 20){
      setError(false);
      setHelperText('');
    }
  }

  const handleChangeDeadline = (e) => {
    setDeadline(e.target.value);
  }

  return (
    <div className='input-form'>
      <form onSubmit={handleSubmit}>
        
        <TextField 
          error={error}
          id="task-name" 
          label="タスク名"
          variant="filled" 
          helperText={helperText}
          onChange={handleChangeText} 
          value={inputText} 
          className='input-text' 
          style={{marginRight: '10px'}}
        />
        <TextField 
          id="deadline" 
          label="期限日"
          type="date"
          onChange={handleChangeDeadline} 
          value={deadline} 
          className='input-text' 
          style={{marginRight: '10px'}}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button type='submit' variant="outlined" size="large" className='add-btn' style={{marginLeft: '10px', marginTop: '10px'}}>追加</Button>
      </form>
    </div>
  )
}
