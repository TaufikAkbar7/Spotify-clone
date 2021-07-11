import React from 'react'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'


const App = () => {

  const code = new URLSearchParams(window.location.search).get("code")
  
  return (
    <div className="min-h-screen flex justify-center items-center">
      {
        code ? (
          <Dashboard token={code} />
        ) : (
          <Login />
        )
      }
    </div>
  )
}

export default App
