import React, { useState } from 'react'

 function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

  
    function handleSubmit(event) {

      event.preventDefault();
      if(password.length<8){
        setError("password must be graater than 8 character")
      }else{
        onLogin(username, password,setError);
      }
      
    }
  
    return (
      <form onSubmit={handleSubmit}>
        {error&&<h3>{error}</h3>}
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} /><br/>
        <input type="password" value={password} onChange={(event) =>{
             setPassword(event.target.value);
             error&&setError("")
        } } /><br/>
        <button type="submit">Log in</button>
      </form>
    );
  }
  export default Login