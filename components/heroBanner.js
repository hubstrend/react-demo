

const HeroBanner = () => {
    return(
        <div className="hero_item">
            <div className="hero_image">
                <div className="hero_title">
                    <h1>LETS MAKE IT SIMPLE"</h1>
                </div>
                    <div className="hero_caption">
                    <h5>Graphic Content Sulotions. Shop & Get Animated.</h5>
                </div>
            </div>    
            
            
            <style jsx>{`
                .hero_item {
                    background: #1b1819;
                    background-repeat: no-repeat;
                    position: relative;
                }
                
                .hero_item a {
                    position: absolute;
                    width:100%;
                    top:25%;
                    text-decoration: none;
                    right: 0px;
                }
                
                .hero_image {
                    height: 330px;
                    background-size: cover !important;
                    background-repeat: no-repeat !important;
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
                h1 {
                    margin:0;
                }
            `}</style>

        </div>
    )
}

export default HeroBanner;