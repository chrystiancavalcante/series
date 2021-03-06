import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import Series from './Series'
import NewSeries from './NewSeries'
import EditSeries from './EditSeries'

//functional-stateless component
const About = () => <section className="intro-section"><h1> Sobre </h1></section>

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header page-scroll">
                <Link className="navbar-brand page-scroll" to={'/'}>
                <img src="/images/logo.png" alt="Series" height="30" />
                </Link>
              </div>
        
              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                  <Link to='/new'>Nova Série</Link>
                </li>
                  <li>
                  <Link to='/about'>Sobre</Link>
                </li>
                </ul>
              </div>
        
            </div>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/series-edit/:id' component={EditSeries} />
          <Route path='/series/:genre' component={Series} />
          <Route exact path='/about' component={About} />
          <Route exact path='/new' component={NewSeries} />       
        </div>
     </Router>
    )
  }
}

export default App
