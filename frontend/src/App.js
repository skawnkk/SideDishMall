import React from "react"
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import Home from "./Home"


function App() {
  return (
    <Router>
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/logIn" component={About} />
      </main>
    </Router>
  )
}

export default App