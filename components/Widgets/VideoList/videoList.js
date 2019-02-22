import React, { Component } from 'react';
import axios from 'axios';
import { CSSTransition ,TransitionGroup } from 'react-transition-group';

import Button from '../Button/buttons';

const URL = "http://localhost:3005";


class VideoList extends Component {

    state = {
        videos:[],
        start:this.props.start,
        end:this.props.start + this.props.amount,
        amount:this.props.amount
    }

    
    
    componentWillMount() {
        this.request(this.state.start,this.state.end)
    }

    

    request = (start,end) => {
        

        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
        .then( response => {
            this.setState({
                videos:[...this.state.videos,...response.data],
                start,
                end
            })
        })
    }

    loadmore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end,end)
    }


    // request = (start,end) => {
    //     axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
    //     .then( response => {
    //         this.setState({
    //             videos:[...this.state.videos,...response.data]
    //         })
    //     })
    // }
    
    renderVideos = (type) => {
        let template = null;

        switch(type) {
            case('card'):
                template = this.state.videos.map((item,i) => (
                    <CSSTransition
                        classNames={{
                            enter:"videoList_wrapper",
                            enterActive:"videoList_wrapper_enter"
                        }}
                        timeout={500}
                        key={i}
                        >
                            <div className="container">
                            <div className="colFour">
                                <div className="videoWrapper">
                                    <iframe
                                        title="videoplayer"
                                        width="600px"
                                        height="400px"
                                        src={`https://www.youtube.com/embed/${item.url}`}
                                        mozallowfullscreen="mozallowfullscreen" 
                                        msallowfullscreen="msallowfullscreen" 
                                        oallowfullscreen="oallowfullscreen" 
                                        webkitallowfullscreen="webkitallowfullscreen" 
                                    >

                                    </iframe>
                                    <h2>{item.title}</h2>
                                    <p>{item.price}</p>
                                </div> 
                            </div>
                            </div>
                            
                                
                    </CSSTransition> 
                ));
                break;
            default:
                template = null;
        }
        return template;

    }
    
    renderTitle = () => (
        <div 
            style={{
                textAlign: 'center',
                margin: '30px auto'
            }}
        >
            <h2>We Customize Digital Animation</h2>
        </div>
    )

    render() {    
        
        return (
            <div>

                {this.renderTitle()}

                <TransitionGroup
                    components="div"
                    className="list"
                >  
                { this.renderVideos( this.props.type )}
                </TransitionGroup> 

                <div className="clearfix"></div>

                <Button
                    type="loadmore"
                    loadMore={()=>this.loadmore()}
                    cta="Load More Videos"
                />                
            </div>
        );
    }
}

export default VideoList;