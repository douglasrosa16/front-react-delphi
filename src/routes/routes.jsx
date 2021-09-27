import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UsersList from '../pages/UsersList';
import CreateUser from '../pages/CreateUser';
import Header from '../component/Header';
import About from '../pages/About';

function Routes() {
  return (
    <BrowserRouter>
      <Header /> 
      <Switch>               
        <Route exact path="/" component={UsersList} />        
        <Route exact path="/cadastro-users" component={CreateUser} />        
        <Route exact path="/about" component={About} />        
        <Route exact path="/users/:id" component={() => <h1>Usuário com ID</h1>} />
        <Route exact path="*" component={() => <h1>Página não encontrada</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;