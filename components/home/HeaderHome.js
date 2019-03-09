

const HeaderHome = () => {
    return (
        <div className="hero-wrapper">
            <div className="hero-home-container">
                <div className="container">
                    <div className="hero-text">
                        <h1 className="-hero-title">Unlimited snacks to fuel your hungry team!</h1>
                        <h2 className="hero-sub-title">All you can eat snacks for one predictable monthly price!</h2>
                        <button className="cta">Get a free sample</button>
                    </div>
                </div>
                
            </div>

            <style jsx>{`
                .hero-wrapper {
                    background-color: #f7f8fb;
                    margin-top:60px;
                }
                .hero-home-container {
                    background: #f7f8fb url(/static/images/hero-home-mobile.jpg);
                    background-position: top center;
                    background-repeat: no-repeat;
                    background-size: 100% auto;
                    display: inline-block;
                    width: 100%;
                    height: 348px;
                    box-sizing: border-box;                    
                }
                .hero-home-container .hero-text {
                    text-align: center;
                    width: 270px;
                    display: block;
                    margin: 0 auto;
                    padding-top: 40px;
                    padding-left: 16px;
                }
                .hero-home-container .hero-text h1 {
                    font-size: 32px;
                    line-height: 1.07;
                    max-width: 440px;
                    font-weight: 400;
                    margin-bottom: 20px;
                }
                .hero-home-container .hero-text h2 {
                    margin: 15px;
                    font-size: .875rem;   
                    line-height: 1.5rem;
                    font-weight: 300;       
                }
                .cta {
                    background-color: #ef5e12;
                    border: none;
                    border-radius: .1875rem;
                    color: #fff;
                    font-size: 1rem;
                    height: 3rem;
                    line-height: 1;
                    min-width: 6.25rem;
                    padding: 1rem;
                    text-align: center;

                }

               
                @media(min-width:768px) {
                    .hero-home-container {
                    background: #f7f8fb url(/static/images/hero-home.jpg);
                    background-position: 50% right;
                    background-repeat: no-repeat;
                    background-size: auto 100%;
                    display: inline-block;
                    width: 100%;
                    height: 456px;
                    box-sizing: border-box;
                }
                .hero-home-container .hero-text {
                    text-align: left;
                    width: 440px;
                    font-weight: 400;
                    margin: 0;
                    padding: 0;
                }
                .hero-home-container .hero-text h1 {
                    font-size: 60px;
                    line-height: 1.07;
                    
                }
                .hero-home-container .hero-text h2 {
                    margin: 20px 0; 
                }
                }

                @media(min-width:992px){
                    .hero-home-container {                    
                        background-position: right;                    
                    }
                }              

                @media(min-width:1920px) {
                    .container {
                        width: 60%;
                    }
                }


            `}</style>
        </div>
    );
};

export default HeaderHome;