import './App.css';
import BlogPage from './compornents/BlogPage';
import Header from './compornents/Header';
import HomePage from './compornents/HomePage';
import TodosPage from './compornents/TodosPage';
import TodoDetailPage from './compornents/TodoDetailPage';
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
        <Route path='/todos/:id' element={<TodoDetailPage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;