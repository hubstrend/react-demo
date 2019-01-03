import React, { Component } from 'react';
import { CSSTransition , TransitionGroup } from 'react-transition-group';
import axios from 'axios';

import { URL } from '../../../config';
import styles from './videoList.css';
import Button from  '../Buttons/buttons';

class VideoList extends Component {

    state = {
        items:[],
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
                items:[...this.state.items,...response.data],
                start,
                end
            })
        })
    }

    loadmore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end,end)
    }

    renderVideos = (type) => {
        let template = null;

        switch(type) {
            case 'card':
                template = this.state.items.map((item,i)=>(
                    
                        <CSSTransition
                        classNames={{
                            enter:styles.videoList_wrapper,
                            enterActive:styles.videoList_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                        <div className={styles.colFour}>
                            <div className={styles.videoWrapper}>
                                <iframe
                                    title="videoplayer"
                                    width="600px"
                                    height="300px"
                                    src={`https://www.youtube.com/embed/${item.url}`}
                                    allowfullscreen="allowfullscreen"
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
                            
                    </CSSTransition> 
                                       
                ))
                break;
            default:
                template = null;
        }

        return template;

    }



    render() {
        return(
            <div>
                <div className={styles.secTitle}>
                    <h3 className={styles.mainTitle}>Title</h3>
                    <h5>Lorem ipsum lor sumet</h5>
                </div>

                <div className={styles.clearfix}></div>
                
                <TransitionGroup
                    components="div"
                    className="list"
                >                
                    { this.renderVideos( this.props.type )}
                </TransitionGroup>                
                
                <div className={styles.clearfix}></div>
                <Button
                    type="loadmore"
                    loadMore={()=>this.loadmore()}
                    cta="Load More Videos"
                />

            </div>
        )
    }



}

export default VideoList;