

const OfficePlans = () => {
    return (        
        <div className="container-grid">
            
            <div className="rela-absol">
                <div className="pineapple-img"></div>
            </div>
            
            <h1>Truly unlimited snacks</h1>
            <h3>ONE PRICE. NO SURPRICESES.</h3>
            <div className="main-plan">
                <p className="text-2-bold">Unlimited bulk snacks</p>
                <div className="price"><span className="dollar">$</span>20</div>
                <p className="text-4">per employee/month</p>
            </div>
            <h3>OPTIONAL BOOSTERS</h3>
            <p className="text-4">per employee/month</p>
            <div className="addon-plans">
                <div className="plans">COFFEE - $6</div>
                <div className="plans">JERKY - $4</div>
            </div>
            <ul>
                <li className="fas fa-check"><span className="list">Dedicated support</span></li>
                <li className="fas fa-check"><span className="list">Free shipping</span></li>
                <li className="fas fa-check"><span className="list">Free setup</span></li>
            </ul>            
            <div className="nested-bulk-order">
                <h3>BULK ORDER</h3>
                <p>Need one-time delivery? Order items a la carte for the office or special events. No matter the occasion, we got you!</p>
            </div>
            <div className="rela-absol">
                <div className="waffle-img"></div>
            </div>
            
            
            

            <style jsx>{`
                .container-grid {
                    background-color:#faf8f5;
                    display: grid;
                    justify-items: center;
                    text-align:center;
                    width: 100%;
                }

                .rela-absol {
                    position: relative;
                    margin: 0;
                    padding: 0;
                }
                .pineapple-img {
                    background: url(/static/images/pineapple-img.png);
                    background-repeat: no-repeat;
                    background-size: 100% auto;
                    width:161px;
                    height:235px;
                    position: absolute;
                    top: -60px;
                    left: -700px;
                }
                .waffle-img {
                    background: url(/static/images/waffle-img.png);
                    background-repeat: no-repeat;
                    background-size: 100% auto;
                    width:198px;
                    height:199px;                    
                    z-index:9999;
                    position: absolute;
                    left: 400px;
                    bottom: -40px;

                }

                .container-grid h1 {
                    font-size:2.25rem;
                    letter-spacing: .01875rem;
                    line-height: 2.5rem;
                    margin-bottom: 1rem;
                    font-weight: 500;
                    margin-top: 60px;
                }

                .main-plan {
                    background-color: #fff;
                    width: 240px;
                    border-top: 9px solid #ef5e12;
                    padding-top: 16px;
                    padding-bottom: 26px;
                    margin-top: 10px;
                }
                .dollar {
                    font-size:1rem;
                    line-height: 1.625rem;
                    font-weight: 500;
                    vertical-align: top;
                }
                .price {
                    font-size: 3.75rem;
                    letter-spacing: .025rem;
                    line-height: 3.375rem;
                    font-weight: 500;
                    padding-top: 16px;
                }
                .text-2-bold {
                    color: #231f1a;
                    font-size: 1rem;
                    font-weight: 500;
                }

                .container-grid h3 {
                    margin-top: 40px;
                    margin-bottom: 0;
                    font-size:1.25rem;
                    letter-spacing: .0625rem;
                    line-height: 1.5rem;
                    font-weight: 500;
                }
                .text-4 {
                    font-size: .875rem;
                    color:#706c68;
                    line-height: 1.5rem;
                    letter-spacing: .03125rem;
                    font-weight: 400;
                    margin:5px auto;;
                }

                .container-grid .addon-plans {
                    display:grid;
                    grid-template-columns: repeat(2,1fr);
                    grid-gap: 1.5rem;
                    margin-bottom: 30px;
                }
                .plans  {
                    background-color:#fff;
                    font-family: 'Roboto', sans-serif;
                    font-size: 1rem;
                    font-weight: 500;
                    line-height: 1.625rem;
                    letter-spacing: .0375rem;
                    width: 200px;
                    padding-top: 16px;
                    padding-bottom: 16px;
                }
                

                .container-grid ul {
                    display:grid;
                    margin:0 0 0 ;
                    padding:0;
                    list-style-position:inside;
                    text-align:center;                    
                }
                .container-grid ul li {
                    padding-bottom: 12px;
                    color: #ef5e12;
                }
                .container-grid ul li span {
                    font-family: 'Roboto', sans-serif;
                    font-size: 1.125rem;
                    font-weight: 400;
                    margin-left: .5rem;
                    color: #231f1a;
                    letter-spacing: .0375rem;
                    line-height:1.75rem;
                }

                .nested-bulk-order {
                    display:grid;
                    justify-items:center;
                    width:470px;
                    text-align:center;
                    border-top:1px solid #e4e0db;
                    margin: 36px auto 60px;
                }
                .nested-bulk-order h3{
                    margin-top:40px;
                    margin-bottom: 0;
                }
                .nested-bulk-order p{
                    margin:0 auto;
                }
            
            `}</style>
        </div>
    );
};

export default OfficePlans;