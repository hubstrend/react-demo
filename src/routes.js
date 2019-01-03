import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import About from './components/About/index';
import Contact from './components/Contact/index';
import VideoList from './components/widgets/VideoList/videoList';

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/about" exact component={About} />
                    <Route path="/videos" exact component={VideoList} />
                    <Route path="/" exact component={Home}/>
                </Switch>
            </Layout>
        )
    }
}

export default Routes;


