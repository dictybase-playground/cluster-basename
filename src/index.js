import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Router } from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"

ReactDOM.render(
  <Router
    history={createBrowserHistory({
      basename: process.env.REACT_APP_BASENAME,
    })}>
    <App />
  </Router>,
  document.getElementById("root"),
)
