import React from 'react'
import Dashboard from './components/Dashboard'
import Login from './components/Login'

const App = () => {

  const code = new URLSearchParams(window.location.search).get("code")

  return (
    <div className="min-h-screen flex justify-center items-center">
      {code ? <Dashboard code={code}/> : <Login/>}
    </div>
  )
}

export default App
