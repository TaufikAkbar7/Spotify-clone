import React, { Fragment } from 'react'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'


const App = () => {

  const code = new URLSearchParams(window.location.search).get("code")
  
  return (
    <Fragment>
      {
        code ? (
          <Dashboard token={code} />
        ) : (
          <Login />
        )
      }
    </Fragment>
  )
}

export default App
