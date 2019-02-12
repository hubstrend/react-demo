import FontAwesome from 'react-fontawesome';
import Link from 'next/link';

import SideNav from './SideNav/sideNav';

const Header = (props) => {

    
    const navBars = () => {
        return (
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
    }

    const logo = () => {
        return (            
            <Link href={`/`}>
                <a className="logo">
                    <img alt="abstrak logo" src="/static/images/abstrak_logo.png" />
                </a>                
            </Link>
        )
    }


    return (
        <header className="header">
            <SideNav {...props}/>
            <div className="headerOpt">
                {navBars()}
                {logo()}
            </div>

            <style jsx>{`
                .header {
                    position: relative;
                    height: 60px;
                    width: 100%;
                    padding: 0 20% 0;
                    background: #242424;
                    display: flex;
                    border-bottom: 1px solid #000000;
                    align-items: center;
                }
                
                .headerOpt {
                    display: flex;
                }
                
                .logo {
                    flex-grow: 1;
                    padding-top: 8px;
                }
                
                .logo img {
                    width: 35px;
                }                
            `}</style>
        </header>        
    )
    
}

export default Header;