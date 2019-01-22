import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Footer } from './components/layouts/Footer';
import { Index } from './components/pages/Index';
import { About } from './components/pages/About';
import { Auth } from './components/pages/Auth';
import { Gtask } from './components/pages/Gtask';
import NavBar from './components/layouts/NavBar';
import Users from './components/Users';
import Figure from './components/pages/Figure';

const Main = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
      <Route path="/auth" component={Auth} />
      <Route path="/figure" component={Figure} />
      <Route path="/task1" component={Gtask} />
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<Main />, global.document.getElementById('root'));
