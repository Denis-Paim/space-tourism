
import './App.css';
import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Destination from "./pages/Destination";
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import NavBar from './componentes/navBar/NavBar';

function App() {
  
  return (
   <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/destination' element={<Destination/>} />
      <Route path='/crew' element={<Crew/>} />
      <Route path='/technology' element={<Technology/>} />
    </Routes>
   </>
  );
}


export default App;
