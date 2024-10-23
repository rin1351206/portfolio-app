import './App.css';
import axios from "axios";
import React from 'react';
import Header from './components/General/Header';
import HomePage from './components/General/HomePage';
import TodosPage from './components/Todos/TodosPage';
import WeatherPage from './components/Weather/WeatherPage';
import { BrowserRouter as  Router,Route, Routes} from "react-router-dom"

function App() {

  const [data, setData] = React.useState();
  
  // API接続
  //const url = "https://arcane-inlet-31752-4d5cb452b364.herokuapp.com/"
  const url = "http://127.0.0.1:8000"
  const GetData = () => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;