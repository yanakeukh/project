import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Nav from './Components/Nav/Nav'
import Logo from './Components/Logo/Logo'
import Info from './Components/Info/Info'
import Block from './Components/Block/Block'
import Jobs from './Components/Jobs/Jobs'
import Services from './Components/Services/Services'
import Cards from './Components/Cards/Cards'
import Paralax from './Components/Paralax/Paralax'
import Serv from './Components/Services/Services'

import Footer from './Components/Footer/Footer'

import Contacts from './Components/Contacts/Contacts'


import Writetous from './Components/Writetous/Writetous'

function App() {
  return (
      <Router>
          <Nav />
              <Route path='/' exact>
                  <Logo />
                  <Info />
                  <Block />
                  <Jobs />
                  <Paralax />
                  <Cards />
              </Route>
              <Route path="/services">
                  <Services />
              </Route>
              <Route path='/writetous'>
                  <Writetous />
              </Route>
              <Route path='/contacts'>
                  <Contacts />
              </Route>
            <Footer />
      </Router>

  );
}

export default App;


