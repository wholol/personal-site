import './App.css';
import Navbar from './Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
