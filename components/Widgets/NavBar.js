import Link from 'next/link';

const NavBar = () => {

   const logo = () => (
        <Link href="/">
            <a className="logo-nav">
                <img alt="NatureBox logo" src="/static/images/naturebox-logo.svg"/>
                <span className="corp-logo-text">Office</span>
            </a>
        </Link>
   )
        

    return (
        <nav>
            {logo()}

            <style jsx>{`
                nav {
                    position: fixed
                    top:0;
                    right:0;
                    left:0;
                    z-index:999;
                    border-bottom: .25rem solid #ef5e12;
                }
                .logo-nav img {
                    width: 206px;
                }
            `}</style>
        </nav>
    );
};

export default NavBar;