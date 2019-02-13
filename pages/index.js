import React, {Component} from "react";
import {connect} from "react-redux";
import 'isomorphic-fetch'

import HeroBanner from '../components/heroBanner';
import Videos from '../components/videos';
 

const Home = ( {videos } ) => (
    
	<div>
		<HeroBanner />
		<Videos videos={videos}/>
	</div>
)

Home.getInitialProps = async() => {


    const res = await fetch(
		'http://localhost:3005/videos'
	)
	const json = await res.json()
    return { videos: json}   

}

export default connect()(Home)