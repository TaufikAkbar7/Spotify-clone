import React, { Fragment } from 'react'
import { Login, Dashboard, Search, Library } from "./pages"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact/>
          <Route path="/dashboard" component={Dashboard} exact/>
          <Route path="/search" component={Search} exact/>
          <Route path="/library" component={Library} exact/>
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
