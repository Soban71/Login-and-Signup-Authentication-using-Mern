import './App.css';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { useState } from 'react';



function App() 
{
  const [user , setLoginuser]=useState({});
  return (
    <div>
  <BrowserRouter>
  <Routes>
  <Route exact path="/" element={<Login/>}/>
  <Route path="/Components/Signup" element={<Signup/>}/>
 
  </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
