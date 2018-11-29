import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import {NavBar} from './components/layouts/NavBar'
import {Footer} from './components/layouts/Footer'
import {Index} from './components/pages/Index'
import {About} from './components/pages/About'


class Main extends Component {
  render() {    
    return (
      <BrowserRouter>
          <div>
          <NavBar/>
            <Route exact path='/' component={Index}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/news' component={() => (<div>just news</div>)}/>
          <Footer/>
          </div>
      </BrowserRouter>
    )
  }
}



ReactDOM.render(<Main/>, document.getElementById('root'))
