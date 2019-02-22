import React, { Component } from 'react';

import Layout from '../hoc/Layout';
import HeroSlider from '../components/Widgets/Slider/slider';
import VideoList from '../components/Widgets/VideoList/videoList';

class Home extends Component {
    render() {
        return (
            <Layout title="Abstrak">
                <HeroSlider 
                    type="hero"
                    start={0}
                    amount={3}
                />
                <VideoList 
                    type="card"
                    loadmore={true}
                    start={0}
                    amount={3}
                />
            </Layout>
        );
    }
}

export default Home;