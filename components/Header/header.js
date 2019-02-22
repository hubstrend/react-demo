import FontAwesome from 'react-fontawesome';

import SideNav from './SideNav/sideNav';


const Header = (props) => {

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
    

    const logo = () => (
            <a href={`/`} className="logo">
                <img alt="abstrak logo" src="/static/images/abstrak_logo.png" />
            </a>     
        )
    return(
        
        <header>
            <SideNav {...props}/>
            <div className="headerOpt">
                {navBars()}
                {logo()}
            </div>
            

            <style jsx>{`
                header {
                    position: fixed;
                    height: 60px;
                    width: 100%;
                    top: 0;
                    padding: 0 5px 0;
                    background: #242424;
                    display: flex;
                    border-bottom: 1px solid #000000;
                    align-items: center;
                    z-index: 1;
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
                @media (min-width: 768px) {   
                        header {                        
                        padding: 0 10% 0;
                    }
                }   
            `}</style>
        </header>
    )
}

export default Header;