import React, { Component } from 'react';
import Header from '../components/Header/header';
import Footer from '../components/footer';

// const Layout = ({ children }) => (
//     <div>
//         <Header
//             onHideNav={()=> this.toggleSidenav(false)}
//             onOpenNav={()=> this.toggleSidenav(true)}
//         />
//         {children}
//         <div>FOOTER</div>
//     </div>
// )

// export default Layout;


class Layout extends Component {

    state = {
        showNav:false
    }

    toggleSidenav = (action) => {
        this.setState({
            showNav:action
        })
    }

    
    render() {
        return (
            <div>
                <Header
                    showNav={this.state.showNav}
                    onHideNav={()=> this.toggleSidenav(false)}
                    onOpenNav={()=> this.toggleSidenav(true)}
                />
                {this.props.children}
                <Footer />

                <style global jsx>{`
                               
                `}</style>
            </div>
        )
    }
}

export default Layout;