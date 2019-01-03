import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplates from './slider-template';
import { URL } from '../../../config';

class HeroSlider extends Component {

    state = {
        hero:[]
    }

    componentWillMount() {
        // ?_start=0 --> starting       &_end=6 --> ending
        axios.get(`${URL}/hero?_start=${this.props.start}&_end=${this.props.amount}`)
        .then ( heroData => {
            this.setState({
                hero:heroData.data
            })
        })
    }

    render() {
        
        return(
            <div>
                <SliderTemplates data={this.state.hero} type={this.props.type} settings={this.props.settings} />
            </div>
        )
    }
}


export default HeroSlider;