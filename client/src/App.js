import React, { Fragment } from 'react'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Search from "./pages/Search"
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom"

const App = () => {

  const code = new URLSearchParams(window.location.search).get("code")
  
  return (
    <Fragment>
      <Router>
        <Switch>
          {code ? (
            <Route path="/"><Dashboard token={code}/></Route>
          ) : (
            <Route path="/" component={Login}/>
          )}
          <Route path="/search" component={Search} exact/>
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
