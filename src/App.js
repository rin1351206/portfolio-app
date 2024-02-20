import './App.css';
<<<<<<< HEAD
import BlogPage from './compornents/BlogPage';
import Header from './compornents/Header';
import HomePage from './compornents/HomePage';
import TodosPage from './compornents/TodosPage';
import TodoDetailPage from './compornents/TodoDetailPage';
=======
import BlogPage from './components/BlogPage';
import Header from './components/Header';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

>>>>>>> origin/Windows
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
<<<<<<< HEAD
        <Route path='/todos' element={<TodosPage />} />
        <Route path='/todos/:id' element={<TodoDetailPage />} />
=======
        <Route path="/login" element={<LoginPage />} />
>>>>>>> origin/Windows
      </Routes>
    </div>
    </Router>
  );
}

export default App;
