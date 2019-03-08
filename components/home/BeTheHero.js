
const BeTheHEro = () => (
    <div className="be-the-hero-wrapper">
        <div className="be-the-hero">
            <div className="raise-the-snack-title">
                <div className="raise-the-snack">
                    <h1>Raise the snack bar</h1>
                    <p className="description text-2">Sweet or savory, vegan or gluten free, there’s snacks to suit every taste and diet, no matter how picky your office is. Everything is made with simple, high quality ingredients and tastes amazing too!</p>
                </div>

                <ul className="checklists">
                    <li className="fas fa-check"><span className="list">No artificial flavors, colors or sweeteners</span></li>
                    <li className="fas fa-check"><span className="list">No corn syrup of any kind</span></li>
                    <li className="fas fa-check"><span className="list">No hydrogenated oils or MSG</span></li>
                </ul>
            </div>
            <div className="product-container">
                    <div className="product-img product-left"><img className="" src="/static/images/snack_01.jpg" alt=""/></div>
                    <div className="product-img product-right"><img className="" src="/static/images/snack_02.jpg" alt=""/></div>
                    <div className="product-img product-left"><img className="" src="/static/images/snack_03.jpg" alt=""/></div>
                    <div className="product-img product-right"><img className="" src="/static/images/snack_04.jpg" alt=""/></div>
                    <div className="product-img product-left"><img className="" src="/static/images/snack_05.jpg" alt=""/></div>
                    <div className="product-img product-right"><img className="" src="/static/images/snack_06.jpg" alt=""/></div>
                    <div className="product-img product-left"><img className="" src="/static/images/snack_07.jpg" alt=""/></div>
                    <div className="product-img product-right"><img className="" src="/static/images/snack_08.jpg" alt=""/></div>
            </div>
            {/* <div className="snack-img-container">                
                <div className="product-container">
                    <div className="nested-img">
                        <div className="product-img product-left"><img className="" src="/static/images/snack_01.jpg" alt=""/></div>
                        <div className="product-img product-right"><img className="" src="/static/images/snack_02.jpg" alt=""/></div>
                    </div>
                    <div className="nested-img">
                        <div className="product-img product-left"><img className="" src="/static/images/snack_03.jpg" alt=""/></div>
                        <div className="product-img product-right"><img className="" src="/static/images/snack_04.jpg" alt=""/></div>
                    </div>
                </div>                    
                <div className="product-container">
                    <div className="nested-img">
                        <div className="product-img product-left"><img className="" src="/static/images/snack_05.jpg" alt=""/></div>
                        <div className="product-img product-right"><img className="" src="/static/images/snack_06.jpg" alt=""/></div>
                    </div>
                    <div className="nested-img">
                        <div className="product-img product-left"><img className="" src="/static/images/snack_07.jpg" alt=""/></div>
                        <div className="product-img product-right"><img className="" src="/static/images/snack_08.jpg" alt=""/></div>
                    </div>
                </div>
            </div> */}
            
            <style jsx>{`
                .be-the-hero {
                    display:grid;
                    grid-template-columns: repeat(1,1fr);
                    justify-items: center;
                }
                

                .product-container {
                    display:grid;
                    grid-template-columns: repeat(2,1fr);
                    /* grid-template-columns: repeat(auto-fit, minmax(100px,1fr)); */
                    justify-items:center;                    
                    padding:0 15px;
                    margin-top: -50px;
                    grid-column-gap:7.5px;
                }
                /* .product-container {
                    display:grid;
                    grid-template-columns: repeat(2,1fr);
                    justify-items:center;
                    grid-gap:15px;
                    padding:0 15px;
                    margin-top: -50px;
                } */

                .raise-the-snack {
                    padding: 0 15px;
                }
                .raise-the-snack-title h1 {
                    font-size:1.75rem;
                    line-height: 2rem;
                    letter-spacing: .01532rem;
                    font-weight:500;
                    margin:.5rem 0;
                }
                .raise-the-snack-title .description {
                    font-size:.875rem;
                    line-height: 1.5rem;
                    letter-spacing: .03125rem;
                    font-weight:400;
                    margin-top:0;
                }

                .checklists {
                    background-color: #faf8f5;
                    display:grid;                
                    list-style-position:inside;      
                    padding: 12px 15px 50px;   
                }
                ul li {
                    color: #ef5e12;
                    padding-bottom: 12px;
                }
                ul li span {
                    font-family: 'Roboto', sans-serif;
                    font-size: .875rem;
                    font-weight: 400;
                    margin-left: .5rem;
                    color: #706c68;
                    letter-spacing: .03125rem;
                    line-height:1.5rem;
                }

                img {
                    height: auto;
                    width: 100%;
                }

                @media(min-width:768px) {
                    img {
                        height: 100px;
                        width: 100px;
                    }
                    .raise-the-snack-title {
                        background-color: #faf8f5;
                    }
                    .be-the-hero {
                        margin-top: 80px;
                        display:grid;
                        grid-template-columns: repeat(2,1fr);
                        justify-items: center;
                        align-items: end;
                    }
                    .raise-the-snack-title {
                        grid-column: 1 / span 2;
                    }
                    .raise-the-snack {
                        padding-right: 200px;
                    }
                    .product-container {
                        width: 430px;
                        padding:0 15px;
                        margin-top: -140px;
                        margin-bottom: 40px;
                        display:grid;
                        grid-template-columns: repeat(4,1fr);
                        /* grid-template-columns: repeat(auto-fit, minmax(100px,1fr)); */
                        /* grid-column-gap:7.5px;                       */
                        grid-column: 2/3;

                    }


                }
            `}</style>
        </div>
    </div>
)

export default BeTheHEro;