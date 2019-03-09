import FormGetStarted from '../Widgets/FormGetStarted';

const OfficeForm = () => {
    return (
        <div className="container-grid">
            <div className="office-form">
                <FormGetStarted />
            </div>
            <div className="office-form-bg"></div>
            

            <style jsx>{`
                .container-grid {
                    background-color: #fff;
                    display: grid;
                    grid-template-columns: repeat(1,1fr);
                }
                .office-form {
                        justify-items:center;
                        width:100%;
                        z-index:999;
                        margin: 0 auto;
                        text-align: center;
                    }
                .office-form-bg {
                    background-image: url(/static/images/office-form-bg.jpg);
                    background-position: top center;
                    background-repeat: no-repeat;
                    background-size: 100% auto;
                    display: inline-block;
                    width: 100%;
                    height: 260px;
                    justify-self: end;

                }

                @media(min-width:768px) {
                    .container-grid {
                        display: grid;
                        grid-template-columns: repeat(2,30% 70%);
                    }
                    .office-form {
                        display:flex;
                        justify-items:center;
                        
                    }
                    .office-form-bg {
                        /* background-image: url(/static/images/office-form-bg.jpg); */
                        background-position: left;
                        background-repeat: no-repeat;
                        background-size: 100% auto;
                        display: inline-block;
                        width: 830px;
                        height: 500px;
                        
                    }
                }
                @media(min-width:1024px) {
                    .container-grid {
                        display: grid;
                        /* grid-template-columns: repeat(2,1fr 3fr); */
                    }
                    .office-form {
                        justify-items:center;
                    }
                    .office-form-bg {
                        background-image: url(/static/images/office-form-bg.jpg);
                        background-position: 80%;
                        background-repeat: no-repeat;
                        background-size: auto 100%;
                        display: inline-block;
                        width: 830px;
                        height: 500px;
                        
                    }
                }

            `}</style>
        </div>
    );
};

export default OfficeForm;