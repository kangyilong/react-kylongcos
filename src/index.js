import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Redirect
} from 'react-router-dom';

import Root from './root';
import Body from './js/components/body';
import Body02 from './js/components/body02';
import Body03 from './js/components/body03';
import Body04 from './js/components/body04';
import Body05 from './js/components/body05';
import Body06 from './js/components/body06';
import Body07 from './js/components/body07';

ReactDOM.render(
  (<HashRouter>
  <Root>
    <Route exact component={ Body } path="/" render={()=>{<Redirect to="/body01"/>}}></Route>
    <Route component={ Body } path="/body01"></Route>
    <Route component={ Body02 } path="/body02"></Route>
    <Route component={ Body03 } path="/body03"></Route>
    <Route component={ Body04 } path="/body04"></Route>
    <Route component={ Body05 } path="/body05"></Route>
    <Route component={ Body06 } path="/body06"></Route>
    <Route component={ Body07 } path="/body07"></Route>
  </Root>
  </HashRouter>),
  document.getElementById('root')
)
