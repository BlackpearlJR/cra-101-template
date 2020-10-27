import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '@/views/pages/Home/HomePage';
import ProductPage from '@/views/pages/Product/ProductPage';
import Page404 from '@/views/pages/Error/404';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/product/:id(honda|toyota)" component={ProductPage} />

      <Route component={Page404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
