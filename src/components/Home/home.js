import React from 'react';

import HeroSlider from '../widgets/HeroSlider/slider';
import VideoList from '../widgets/VideoList/videoList';
import styles from './home.css';


const Home = () => {
    return (
        <div>
            <HeroSlider
                type="hero"
                start={0}
                amount={6}
                settings={{
                    dots:false
                }}
            />
            <div className={styles.container}>
                <div className={styles.raw}>                    
                    <VideoList 
                        type="card"
                        title={true}
                        loadmore={true}
                        start={0}
                        amount={6}
                    />
                </div>                
            </div>       
            
        </div>
    )
}


export default Home;