import React, { Component } from 'react';
import axios from 'axios';
import SliderTemplate from './sliderTemplate';

const URL = "http://localhost:3005";

class HeroSlider extends Component {

    state = {
        hero:[]
    }

    componentWillMount() {
        axios.get(`${URL}/hero?_start=${this.props.start}&_end=${this.props.amount}`)
        .then ( heroData => {
            this.setState({
                hero:heroData.data
            })
        })
    }

// Using FETCH
    // componentWillMount() {
    //     fetch(`http://localhost:3005/hero`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         this.setState({
    //             hero:data
    //         })
    //     })
    // }

    render() {
        return (
            <div>
                <SliderTemplate hero={this.state.hero} type={this.props.type}/>              
            </div>
        );
    }
}

export default HeroSlider;