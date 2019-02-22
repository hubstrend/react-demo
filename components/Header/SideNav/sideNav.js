import SideNav from 'react-simple-sidenav';

import SideNavItems from './sideNav_items';

const SideNavigation = ({showNav, onHideNav }) => {
    return (
        <div>
            <SideNav
                showNav={showNav}
                onHideNav={onHideNav}    
                navStyle={{
                    background:'#242424',
                    maxWidth:'220px'
                }}
                >
                <SideNavItems/>
            </SideNav>
        </div>
    )
}

export default SideNavigation;