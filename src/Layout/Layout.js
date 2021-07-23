import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import ErrorLayout from './ErrorLayout';

const Layout = () => {


        return (
                <Router fallback={<span />}>

                        <Switch>
                                <Route path="/errors" component={ErrorLayout} />
                                <Route component={DashboardLayout} />
                        </Switch>
                </Router>
        );
};

export default Layout;
