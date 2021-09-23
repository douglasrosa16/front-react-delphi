import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UsersList from '../pages/UsersList';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>        
        <Route exact path="/" component={UsersList} />        
        <Route exact path="/users" component={() => <h1>Lista de Usuários</h1>} />
        <Route exact path="/users/:id" component={() => <h1>Usuário com ID</h1>} />
        <Route exact path="*" component={() => <h1>Página não encontrada</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;