import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/layout';
import Home from './components/Home/home';
import About from './components/About/index';
import Contact from './components/Contact/index';


const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/contact" exact component={Contact} />
                <Route path="/about" exact component={About} />
                <Route path="/" exact component={Home} />
            </Switch>
        </Layout>
    )
}

export default Routes;