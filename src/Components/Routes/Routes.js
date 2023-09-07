// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../Layout'
import Homepage from '../Homepage/Homepage';
import { QuickOrderTable } from '../QuickOrderTable/QuickOrderTable';
import PaymentDetailsPage from '../PaymentDetails/PaymentDetails';

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/order" component={QuickOrderTable} />
          <Route path="/payments" component={PaymentDetailsPage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
