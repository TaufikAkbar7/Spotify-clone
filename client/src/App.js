import React, { useEffect, useState } from 'react'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { getTokenFromUrl } from './components/spotify.js'

const App = () => {

  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const getToken = hash.access_token;

    if(getToken){
      setToken(getToken)
    }
  }, [])

  return (
    <div className="min-h-screen flex justify-center items-center">
       {
         token ? (
           <Dashboard/>
         ) : (
          <Login/> 
         )
       }
    </div>
  )
}

export default App
