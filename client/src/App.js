import React, { Fragment } from 'react'
import { Login, Dashboard, Search, Librarys, Library } from "./pages"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact/>
          <Route path="/dashboard" component={Dashboard} exact/>
          <Route path="/search" component={Search} exact/>
          <Route path="/librarys" component={Librarys} exact/>
          <Route path="/library" component={Library} exact/>
          {/* <Route path="/library/:id" component={Library} exact/> */}
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
