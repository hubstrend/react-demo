import Link from 'next/link';
import FontAwesome from 'react-fontawesome';

import SideNav from './sideNav/SideNav';

const NavBar = (props) => {

   
        const navBars = () => (
            <div className="bars">
                <FontAwesome name="bars"
                    onClick={props.onOpenNav}
                    style={{
                        color: '#dfdfdf',
                        padding: '10px',
                        cursor: 'pointer'
                    }}
                />
            </div>
        )

    return (
        <nav>           
            <SideNav {...props}/>
            <div className="navbar">
                
                <div className="container-logo container">
                    {navBars()}
                    <div className="logo-wrapper">
                        <Link href="/">
                            <a className="logo">
                                <img className="logo-img" alt="NatureBox logo" src="/static/images/naturebox-logo.png"/>
                                
                            </a>
                        </Link>
                        <span className="corp-logo-text">Office</span>
                        
                        
                    </div>
                    <div className="support">
                            <Link href='/'><a>Our Snacks</a></Link>
                            <Link href='/'><a>Refer an Office</a></Link>
                        </div>
                    
                    <div className="nav-buttons-mobile">
                        <button><Link href='/'><a>Order</a></Link></button>
                        <button><Link href='/'><a>Sample</a></Link></button>
                    </div>
                    <div className="nav-buttons">
                        <button><Link href='/'><a>Order snacks</a></Link></button>
                        <button><Link href='/'><a>Get a free sample</a></Link></button>
                    </div>
                </div>
            </div>            
            
            

            <style jsx>{`
                .nav-buttons {
                    display:none;
                }
                .support{
                    display:none;
                }
                
                .nav-buttons-mobile button a,
                .nav-buttons button a {
                    text-decoration:none;
                    color: #fff;
                }
                .nav-buttons-mobile button {
                    font-size: .75rem;
                    height: .75rem;
                    line-height: 1px;
                    min-width: 60px;
                    width: 60px;
                    background-color:#ef5e12;
                    border:none;
                    border-radius: .1875rem;
                    text-align: center;
                    padding: 1rem 0;
                    text-decoration:none;
                    color: #fff;
                    margin: 10px;
                }
                .nav-buttons button {
                    font-size: 1rem;                    
                    line-height: 0;
                    min-width: 42px;
                    width: 162px;
                    height: .75rem;
                    background-color:#ef5e12;
                    border:none;
                    border-radius: .1875rem;
                    text-align: center;
                    padding: 1rem 0;
                    text-decoration:none;
                    color: #fff;
                    margin: 10px;
                }
                .support a {
                    margin: 0 15px;
                    text-decoration: none;
                    color: #231f1a;
                    font-size: .875rem;
                    line-height: 1.5rem;
                    letter-spacing: .03125rem;
                    font-weight: 400;
                }
                

                nav {
                    position: fixed;
                    background-color: #fff;
                    height: 60px;
                    top:0;
                    right:0;
                    left:0;
                    z-index:99999;
                    border-bottom: .25rem solid #ef5e12;
                }     

                .navbar {
                    display:grid;
                    /* grid-template-columns: repeat(1,1fr ); */
                }

                .container-logo {
                    display:grid;
                    /* grid-template-columns: repeat(3,1fr); */
                    grid-template-columns: 8% 62% 30%;
                    justify-items:start;
                    align-items:center;
                }

                
               
                .nav-buttons-mobile {
                    display:flex;
                    justify-self: end;
                }

                .logo-wrapper {
                    margin:0;
                    padding:8px 8px 8px 0;
                    display:grid;
                    grid-template-columns: repeat(1,1fr);
                    justify-items: end;
                }                
                .logo img {
                    height:10px;
                    width: auto;
                }
                .corp-logo-text{
                    text-transform: uppercase;
                    float:right;
                    margin-top: -10px;
                    font-size:10px;
                    letter-spacing:2px;
                    font-weight:700;
                    color: #b0ada5;
                    line-height:1.5rem;
                }
                @media(min-width:768px){
                    .nav-buttons-mobile {
                        display: none;
                    }
                    .support{
                        display:flex;                       
                    }
                    .nav-buttons {
                        display:flex;
                        justify-self: end;
                    }
                    .container-logo {
                        /* grid-template-columns: repeat(3,1fr); */
                        grid-template-columns: 15% 55% 30%;
                    }
                }
            `}</style>
        </nav>
    );
};

export default NavBar;