import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import {NavBar} from './components/layouts/NavBar'
import {Footer} from './components/layouts/Footer'
import {Index} from './components/pages/Index'
import {About} from './components/pages/About'
import {Users} from './components/Users'
import {Auth} from './components/pages/Auth'
import {Figure} from './components/pages/Figure'

class Main extends Component {
  render() {    
    return (
      <BrowserRouter>
          <div>
          <NavBar/>
            <Route exact path='/' component={Index}/>
            <Route path='/about' component={About}/>
            <Route path='/users' component={Users}/>
            <Route path='/auth' component={Auth}/>
            <Route path='/figure' component={Figure}/>
          <Footer/>
          </div>
      </BrowserRouter>
    )
  }
}



ReactDOM.render(<Main/>, document.getElementById('root'))
