import React, {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import '../../App.css';

export const InputForm = ({taskList, setTaskList}) => {
  const [inputText, setInputText] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState(''); 
  const [Terror, setTerror] = useState(false);
  const [Derror, setDerror] = useState(false);
  const [Perror, setPerror] = useState(false);
  const [ThelperText, setThelperText] = useState('');
  const [DhelperText, setDhelperText] = useState('');
  const [PhelperText, setPhelperText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputText !== "" && inputText.length <= 20 && deadline !== "" && priority !== "") {
      setTaskList([
        ...taskList,
        {
          id: Date.now(),
          completed: false,
          deadline: deadline,
          text: inputText,
          priority: priority
        }
      ]);
      setInputText("");
      setDeadline("");
      setPriority(''); 
      setTerror(false);
      setDerror(false);
      setPerror(false);
      setThelperText('');
      setDhelperText('');
      setPhelperText('');
    } else if (inputText.length > 20) {
      setTerror(true);
      setThelperText('20文字以内で入力してください。');
    } else if (inputText == ""){
      setTerror(true);
      setThelperText('タスク名を入力してください。');
    } 
    if(deadline == ""){
      setDerror(true);
      setDhelperText('期限日を入力してください。');
    }
    if(priority == ""){
      setPerror(true);
      setPhelperText('優先度を入力してください。')
    }
  }

  const handleChangeText  = (e) => {
    setInputText(e.target.value);
    if(e.target.value.length <= 20){
      setTerror(false);
      setThelperText('');
    }
  }

  const handleChangeDeadline = (e) => {
    setDeadline(e.target.value);
    if(e.target.value !== ""){
      setDerror(false);
      setDhelperText('');
    }
  }

  const handleChangePriority = (event) => {
    setPriority(event.target.value);
    if(event.target.value !== ""){
      setPerror(false);
      setPhelperText('');
    } else {
      setPerror(true);
      setPhelperText('優先度を選択してください。');
    }
  }

  return (
    <div className='input-form' style={{height:'100px'}}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', padding: '20px'}}>
        <div style={{margin:'5px', verticalAlign: 'middle'}}>
      <TextField 
          error={Derror}
          id="deadline" 
          label="期限日"
          type="date"
          onChange={handleChangeDeadline} 
          helperText = {DhelperText}
          value={deadline} 
          className='input-text' 
          style={{marginRight: '10px', marginBottom: '20px',width: '200px'}}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField 
          error={Terror}
          id="task-name" 
          label="タスク名"
          variant="outlined" 
          helperText={ThelperText}
          onChange={handleChangeText} 
          value={inputText} 
          className='outline-basic' 
          style={{marginRight: '10px', marginBottom: '20px', width: '300px'}}
        />
        <FormControl variant="outlined" style={{ width: 190, marginRight: '10px', marginBottom: '20px' }} error={Perror}>
          <InputLabel id="priority-label">優先度</InputLabel>
          <Select
            labelId="priority-label"
            id="priority"
            value={priority}
            onChange={handleChangePriority}
            label="優先度"
            style={{width:'170px'}}
          >
            <MenuItem value={'高'}>高</MenuItem>
            <MenuItem value={'中'}>中</MenuItem>
            <MenuItem value={'低'}>低</MenuItem>
          </Select>
          <FormHelperText>{PhelperText}</FormHelperText>
        </FormControl>
        <Button type='submit' variant="outlined" size="large" className='add-btn' style={{position:'relative',top:'6px'}}>追加</Button>
        </div>
      </form>
    </div>
  )
}
