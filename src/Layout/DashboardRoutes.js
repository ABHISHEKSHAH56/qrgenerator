import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from 'view/Page/HomePage';
import Second from 'view/Page/Second';




const DashboardRoutes = () => (
        <Switch>

                <Route path="/" exact component={HomePage} />
                <Route path="/qrgenrate" exact component={Second} />
                <Redirect to="/errors/404" />
        </Switch>
);

export default DashboardRoutes;
