import SideNav from 'react-simple-sidenav';

import SideNavItems from './SideNavItems';

const SideNavigation = ({showNav, onHideNav }) => {
    return (
        <div>
            <SideNav
                showNav={showNav}
                onHideNav={onHideNav}    
                navStyle={{
                    background:'#fff',
                    maxWidth:'220px'
                }}
                >
                <SideNavItems/>
            </SideNav>
        </div>
    )
}

export default SideNavigation;