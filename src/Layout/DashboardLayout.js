import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';

import loadable from '@loadable/component';
const DashboardRoutes = loadable(() => import('./DashboardRoutes'));

const DashboardLayout = ({ location }) => {
        // const { isFluid, isVertical, navbarStyle } = useContext(AppContext);



        useEffect(() => {
                DashboardRoutes.preload();
        }, []);
        //alwayus make you top on page 
        useEffect(() => {
                window.scrollTo(0, 0);
        }, [location.pathname]);

        return (


                <>
                        <div className="content">
                                <div className="container">

                                </div>

                                <Switch>
                                        {/* <Route path="/" exact component={Dashboard} />
                                        <Route path="/dashboard-alt" exact component={DashboardAlt} /> */}
                                        <DashboardRoutes />
                                </Switch>

                        </div>

                </>

        );
};

DashboardLayout.propTypes = { location: PropTypes.object.isRequired };

export default DashboardLayout;
