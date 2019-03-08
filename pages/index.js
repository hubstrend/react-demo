import React, { Component } from 'react';

import Layout from '../hoc/Layout';
import HeaderHome from '../components/home/HeaderHome';
import NBvideo from '../components/home/NBvideo';
import AEbenefits from '../components/home/AEbenefits';
import BeTheHero from '../components/home/BeTheHero';
import OfficePlans from '../components/home/OfficePlans';
import OfficeForm from '../components/home/OfficeForm';
import Seen from '../components/home/Seen';

class Home extends Component {
    render() {
        return (
            <Layout title="Home">
                <HeaderHome />
                <div className="clearfix"></div>
                <NBvideo />
                <div className="clearfix"></div>
                <AEbenefits />
                <div className="clearfix"></div>
                <BeTheHero />
                <div className="clearfix"></div>
                <OfficePlans />
                <OfficeForm />
                <Seen />
            </Layout>
        );
    }
}

export default Home;