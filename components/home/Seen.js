

const Seen = () => {
    return (
        <div className="container-flex seen">
            <div className="right">
                <div className="seen-img-01 seen-img">
                    <img src="/static/images/seen-img-01-logo.jpg" alt=""/>
                </div>
            </div>
            <div className="left">
                <div className="seen-img-02 seen-img">
                    <img src="/static/images/seen-img-02-logo.jpg" alt=""/>
                </div>
            </div>
            

            <style jsx>{`
                
                .container-flex {
                    background-color: #faf8f5;
                    padding-top: 80px;
                    padding-bottom: 60px;
                    display: grid;
                    grid-template-columns: repeat(1,1fr);
                    grid-gap: 3rem;
                }                
                .seen img {
                    width: 300px;
                    height: 26px;
                }
                .right {
                    display:grid;
                    justify-items:center;
                }
                .left {
                    display:grid;
                    justify-items:center;
                }

                @media(min-width:768px) {
                    .container-flex {                    
                        grid-template-columns: repeat(1,1fr);
                    } 
                    .seen img {
                    background-size: 100% auto;
                    width: 490px;
                    height: 42px;
                }
                }
                @media(min-width:1024px) {
                    .container-flex {                    
                        grid-template-columns: repeat(2,1fr);
                    } 
                    .right {
                        display:grid;
                        justify-items:end;
                    }
                    .left {
                        display:grid;
                        justify-items:start;
                    }
                }






            `}</style>
        </div>
    );
};

export default Seen;