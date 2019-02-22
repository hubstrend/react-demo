import React from 'react';
import Slick from 'react-slick';

const SliderTemplate = ({hero,type}) => {

    let template = null;

    switch(type) {
        case('hero'):
            template = hero.map((item,i) => (
                <div key={i}>
                    <div className="hero_item" 
                        style={{
                            background: `#1b1819 url(/static/images/hero/${item.image})`
                        }}>
    
                        <div className="hero_title">
                            <h1>{item.title}</h1>
                        </div>
                        
                        <div className="hero_caption">
                            <h2>{item.caption}</h2>
                        </div>
    
                    </div>
                    
                </div>
            ));             
            break;    
        default: teamplate=null;
    }

    // const template = () => (
    //     hero.map((item,i) => (
    //         <div key={i}>
    //             <div className="hero_item" 
    //                 style={{
    //                     background: `#1b1819 url(/static/images/hero/${item.image})`
    //                 }}>

    //                 <div className="hero_title">
    //                     <h1>{item.title}</h1>
    //                 </div>
                    
    //                 <div className="hero_caption">
    //                     <h2>{item.caption}</h2>
    //                 </div>

    //             </div>
                
    //         </div>
    //     ))
    // )
    
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <Slick {...settings}>

            {/* NEED to FIX */}
            {template}
            
            {/* {template()} */}
            
            <style global jsx>{`
                .hero_item {                  
                    background-size: cover !important;
                    background-repeat: no-repeat !important;
                    position: relative;
                    height: 330px;
                    margin-top: 60px;
                }
                .hero_item h1 {                  
                    font-size: 1.8rem;
                    line-height: 2rem;
                }
                .hero_item h2 {                  
                    font-size: 1.4rem;
                    font-weight: 300;
                    line-height: 1.6rem;
                }
                .hero_item a {
                    position: absolute;
                    width:100%;
                    top:25%;
                    text-decoration: none;
                    right: 0px;
                }
                                
                .hero_title {
                    color:#ffffff;
                    top:0px;
                    width:100%;
                    padding-top:80px;
                    font-weight: 300;
                    font-size:28px;
                    box-sizing: border-box;
                    text-align: center;
                    margin:0;
                }
                
                .hero_caption {
                    color:#ffffff;
                    top:0px;
                    width:100%;
                    /* padding:20px; */
                    font-weight: 100;
                    font-size:20px;
                    box-sizing: border-box;
                    text-align: center;
                }
                @media(min-width:768px){
                    .hero_item h1 {                  
                    font-size: 2.4rem;
                    line-height: 1.5rem;
                    }
                    .hero_item h2 {                  
                        font-size: 1.6rem;
                        font-weight: 300;
                        line-height: 1rem;
                    }
                }
                @media (min-width: 1920px) {
                    .hero_item h1 {                  
                    font-size: 3rem;
                    line-height: 1.5rem;
                    }
                    .hero_item h2 {                  
                        font-size: 2rem;
                        font-weight: 300;
                        line-height: 1rem;
                    }
                }
            `}</style>
        </Slick>
    );
};

export default SliderTemplate;