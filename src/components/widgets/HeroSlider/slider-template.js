import React from 'react';
import { Link } from 'react-router-dom';
import Slick from 'react-slick';

import styles from './slider.css';

const SliderTemplates = (props) => {

    let template = null;

    const settings = {
        dots:true,
        infinite:true,
        arrows:false,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        ...props.settings
    }
    
    switch(props.type) {
        case('hero'):
            template = props.data.map( (item, i) => {
                return(
                    <div key={i}>
                        
                        <div className={styles.hero_item}>
                            <div className={styles.hero_image}
                                style={{
                                    background:`#1b1819 url(../images/hero/${item.image})`
                                }}>
                            </div>
                            
                            <Link to={`/hero/${item.id}`}>
                                <div className={styles.hero_title}>
                                    <h1>{item.title}</h1>
                                </div>
                                <div className={styles.hero_caption}>
                                <h5>{item.caption}</h5>
                            </div>
                            </Link>    

                        </div>

                    </div>
                )
            })

        break;
        default:
            template=null
    }

    return(
        <Slick {...settings}>
            {template}
        </Slick>
    )
}

export default SliderTemplates;