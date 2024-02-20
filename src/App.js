import './App.css';
import BlogPage from './components/BlogPage';
import Header from './components/Header';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
