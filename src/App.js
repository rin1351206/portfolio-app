import './App.css';
import BlogPage from './components/General/BlogPage';
import Header from './components/General/Header';
import HomePage from './components/General/HomePage';
import TodosPage from './components/Todos/TodosPage';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
        
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path='/todos' element={<TodosPage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;