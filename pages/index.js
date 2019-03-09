import React, { Component } from 'react';

import Layout from '../hoc/layout';
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
                <NBvideo />
                <AEbenefits />
                <BeTheHero />
                <OfficePlans />
                <OfficeForm />
                <Seen />
            </Layout>
        );
    }
}

export default Home;