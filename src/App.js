import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import Home from "./Home"
import Characters from "./Characters"

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters/george">George</Link>
        </li>
        <li>
          <Link to="/characters/elaine">Elaine</Link>
        </li>
        <li>
          <Link to="/characters/jerry">Jerry</Link>
        </li>
        <li>
          <Link to="/characters/kramer">Kramer</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/characters/:id" component={Characters} />
      </Switch>
    </>
  )
}
export default App
