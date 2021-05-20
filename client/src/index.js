import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './index.css';
import Index from './views/Index';
import Characters from './views/screens/Characters';
import CreateCharacter from './views/screens/CreateCharacter';
import PsiPowers from './views/screens/PsiPowers';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact render={props => <Index {...props} />} />
      <Route path='/characters' exact render={props => <Characters {...props} />} />
      <Route path='/create' exact render={props => <CreateCharacter {...props} />} />
      <Route path='/psi-powers' exact render={props => <PsiPowers {...props} />} />
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
