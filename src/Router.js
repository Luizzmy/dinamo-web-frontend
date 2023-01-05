import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import { ChakraProvider } from '@chakra-ui/react'
import PersonalIndustrial from './components/pages/Personal-industrial';
import Seguridadhigiene from './components/pages/Seguridad-higiene';
import Mantenimiento from './components/pages/Mantenimiento';
import Empresa from './components/pages/Empresa';
import Header from './components/Header';
import Footer from './components/Footer';

const Router = () => (
  <ChakraProvider>
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/personal-industrial" component={PersonalIndustrial} />
        <Route exact path="/seguridad-e-higiene" component={Seguridadhigiene} />
        <Route exact path="/mantenimiento" component={Mantenimiento} />
        <Route exact path="/empresa" component={Empresa} />
        <Route component={NotFound} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  </ChakraProvider>
);

export default Router;
