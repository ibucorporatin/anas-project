import "./App.css";
import React, { useState } from 'react'

import { Route, Routes,BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";



const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  function handleLogin(username, password,setError) {
    if (username === 'user' && password === '12345678') {
      setAuthenticated(true);
    }else{
setError("invalid credential")
    }
  }

  return (
    <>
 <BrowserRouter>
    <Routes>

      <Route path="/" element= {authenticated ? <Home/> : <Login onLogin={handleLogin} />} />
 
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App