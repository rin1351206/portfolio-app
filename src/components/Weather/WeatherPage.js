import React, { useState } from 'react';
import axios from 'axios';
import '../../css/Weather.css';

function WeatherPage() {
    const [dataA, setDataA] = useState('');
    const [dataB, setDataB] = useState('');
    const [answer, setAnswer] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isComplete, setIsComplete] = useState(false)

    const submitData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.post('http://localhost:8000/weather/test', { dataA, dataB });
            setAnswer(response.data.answer)
        } catch (error) {
            console.error("APIリクエスト失敗", error);
        } finally {
            setIsLoading(false);
            setIsComplete(true);
        }
    };

    if(isLoading && !isComplete) {
        return (
            <div className='Center'>Loading...</div>
        )
    } else if(!isLoading && !isComplete) {
        return (
            <div className='Center'>
                <input type="number" value={dataA} onChange={e => setDataA(e.target.value)} />
                <input type="number" value={dataB} onChange={e => setDataB(e.target.value)} />
                <button onClick={submitData}>送信</button>
            </div>
        );
    } else {
        return(
            <div className='Center'>{answer}</div>
        )
    }
};

export default WeatherPage;