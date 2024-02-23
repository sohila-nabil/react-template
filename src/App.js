import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import NavBar from './components/navBar/NavBar';
import Contact from './components/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route  path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
