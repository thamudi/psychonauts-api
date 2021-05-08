import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './index.css';
import Index from './views/Index';
import Construction from './views/screens/Construction';
import Characters from './views/screens/Characters';
import PsiPowers from './views/screens/PsiPowers';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <>{process.env.REACT_APP_STATE !== 'cons' ?
        <>
          <Route path='/' exact render={props => <Index {...props} />} />
          <Route path='/characters' exact render={props => <Characters {...props} />} />
          <Route path='/psi-powers' exact render={props => <PsiPowers {...props} />} />
          <Redirect to='/' />
        </>
        :
        <Route path='/' exact render={props => <Construction {...props} />} />
      }
      </>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
