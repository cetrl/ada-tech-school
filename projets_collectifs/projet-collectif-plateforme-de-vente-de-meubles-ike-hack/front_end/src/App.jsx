import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import Furniture from './pages/Furniture.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Furniture" element={<Furniture />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
