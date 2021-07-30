import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Error from 'pages/Error/Error'
import HomepageLayout from 'components/layouts/Homepage/HomepageLayout';
import DashboardLayout from 'components/layouts/Dashboard/DashboardLayout';
import AuthLayout from 'components/layouts/Auth/AuthLayout';
import PrivateRouter from 'routes/PrivateRouter'
import AuthorizedRouter from 'routes/AuthorizedRouter'

import Home from 'pages/Homepage/Home'
import Contact from 'pages/Homepage/Contact'
import Dashboard from 'pages/Dashboard/Dashboard'
import Login from 'pages/Auth/Login'

function Router() {

    const [authenticated, setAuthenticated] = useState(true)

    return (
        <div className="router">
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                >
                    <Switch>
                        <Redirect from="/" to="/home" exact />

                        <Route path='/home/:path?/:id?' exact>
                            <HomepageLayout>
                                <Switch>
                                    <Route path='/home' exact component={Home} />
                                    <Route path='/home/contact' component={Contact} />
                                    <Route path='/home/product/:id' component={Contact} />
                                    <Redirect from='*' to='/error' />
                                </Switch>
                            </HomepageLayout>
                        </Route>

                        <AuthorizedRouter authed={authenticated} path='/auth/:path?' exact component={() => (
                            <AuthLayout>
                                <Switch>
                                    <Route path='/auth' exact component={Login} />
                                    <Redirect from='*' to='/error' />
                                </Switch>
                            </AuthLayout>
                        )} />
                        <PrivateRouter authed={authenticated} path='/admin/:fpath?/:spath?/:param' exact component={() => (
                            <DashboardLayout>
                                <Switch>
                                    <Route path='/admin' exact component={Dashboard} />
                                    <Redirect from='*' to='/error' />
                                </Switch>
                            </DashboardLayout>
                        )} />

                        <Route path="/error" exact component={Error} />
                        <Redirect from='*' to='/error' />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default Router