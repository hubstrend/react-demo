import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './videolist.css';

const VideoList = (item) => {
    return (
        <div key={item.id}>
            <CSSTransition
                classNames={{
                    enter:styles.videoList_wrapper,
                    enterActive:styles.videoList_wrapper_enter
                }}
                timeout={500}
                
            >
                <div className={styles.colFour}>
                    <div className={styles.videoWrapper}>
                        <iframe
                            title="videoplayer"
                            width="600px"
                            height="300px"
                            src={`https://www.youtube.com/embed/${item.url}`}
                            // allowfullscreen="allowfullscreen"
                            // mozallowfullscreen="mozallowfullscreen" 
                            // msallowfullscreen="msallowfullscreen" 
                            // oallowfullscreen="oallowfullscreen" 
                            // webkitallowfullscreen="webkitallowfullscreen"
                        >

                        </iframe>
                        <h2>{item.title}</h2>
                        <p>{item.price}</p>
                    </div> 
                </div>
                    
            </CSSTransition> 
        </div>
    );
};

export default VideoList;