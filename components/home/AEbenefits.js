import Link from 'next/link';

const AEbenefits = () => (
    <div className="container">
        <div className="ae-benefits-wrapper">
            <div className="unli-happiness">
                <div className="unli-happiness-title">
                    <h1>Unlimited Happiness</h1>
                    <p className="description text-2">Here at NatureBox, we take office snacking pretty seriously. We believe snacks can be crazy delicious but also better for your employees, so they can munch away while focusing on your companies biggest priorities. Snacking, solved!</p>
                </div>
                
                <ul className="checklists">
                    <li className="fas fa-check"><span className="list">Truly unlimited snacks - never run out</span></li>
                    <li className="fas fa-check"><span className="list">Fixed monthly price - never go over budget</span></li>
                    <li className="fas fa-check"><span className="list">Freedom of choice & variety for all</span></li>
                    <li className="fas fa-check"><span className="list">Free kitchen setup - jars, scoops & trays</span></li>
                    <li className="fas fa-check"><span className="list">Free shipping, every time!</span></li>

                    <div className="catalog">
                        <Link href="/office/catalog">
                            <a>Browse our snacks</a>
                        </Link>
                    </div>
                </ul>
                                
            
                <div className="rela-absol-hide">            
                    <div className="blueberry-img"></div>
                </div>
                <div className="rela-absol">            
                    <div className="office-snack-img"></div>
                </div>
            </div>
            
            
            
            
        </div>
        
        

        <style jsx>{`
            .ae-benefits-wrapper {
                display:grid;
                grid-template-columns: repeat(1,1fr);
                justify-items: center;
            }
            .unli-happiness-title {
                padding: 0 15px;
            }
            .ae-benefits-wrapper h1 {
                font-size:1.75rem;
                line-height: 2rem;
                letter-spacing: .01532rem;
                font-weight:500;
                margin:.5rem 0;
            }
            .ae-benefits-wrapper .description {
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
                padding: 12px 15px 80px;   
            }
            .ae-benefits-wrapper ul li {
                color: #ef5e12;
                padding-bottom: 12px;
            }
            .ae-benefits-wrapper ul li span {
                font-family: 'Roboto', sans-serif;
                font-size: .875rem;
                font-weight: 400;
                margin-left: .5rem;
                color: #706c68;
                letter-spacing: .03125rem;
                line-height:1.5rem;
            }

            .catalog a {
                color: #ef5e12;
                text-decoration: none;
            }

            .rela-absol-hide {
                    display: none;
                }

            .rela-absol{
                position: relative;
                margin: 0;
                padding: 0;
            }
            .office-snack-img {
                background: url(/static/images/office-snack-img.jpg);
                background-repeat: no-repeat;
                background-size: 100% auto;
                width: 290px;
                height: 220px;
                z-index: 999;
                margin: -80px auto 0;
            }

            @media(min-width:768px) {
                .ae-benefits-wrapper {
                }

                .unli-happiness {
                    margin-left: 20%;
                    padding-top: 30px;
                    background-color: #faf8f5;
                }
                .unli-happiness-title,
                .checklists {
                    margin-left: 30%;
                }
                .office-snack-img {
                    position:absolute;
                    left: -150px;
                    bottom: -80px;
                }

                .checklists {     
                    padding-bottom: 15px;   
                }

                .rela-absol-hide {
                    display: block;
                    position: relative;
                    margin: 0;
                    padding: 0;
                }
                .blueberry-img {                
                    background: url(/static/images/blueberry-img.png);
                    background-repeat: no-repeat;
                    background-size: 100% auto;
                    width: 100px;
                    height: 88px;
                    position: absolute;
                    right: 20px;
                    bottom: -35px;
                }
            }
            @media(min-width:1024px){
                .office-snack-img {
                    width: 380px;
                    height: 288px;
                    position:absolute;
                    left: -150px;
                    bottom: -80px;
                }
            }

        `}</style>
    </div>
)

export default AEbenefits;