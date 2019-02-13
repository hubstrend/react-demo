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
                   .secTitle {
                    text-align: center;
                    margin-bottom: 30px;
                }

                .mainTitle {
                    margin-top: 20px;
                }

                .container {
                    align-items:center;
                    align-content: center;
                    width: 80%;
                    margin: 30px auto;
                }

                .videoWrapper iframe {
                    width:100%;
                    min-height:300px;
                }

                .videoWrapper {
                    margin: 10px;
                    background: #fff;
                    margin: 0 5px;                    
                }

                .videoWrapper h2 {
                    font-size: 20px;
                    font-weight: 400;
                    color: #4d4d4d;
                    margin: 15px 0;
                    padding: 0 10px;
                    line-height: 1.4rem;
                    margin:0;                    
                }

                .videoWrapper p {
                    color: red;
                    margin: 15px 0;
                    padding: 0 10px;
                    line-height: .9rem;
                    margin-top:0;
                    margin-bottom:30px;
                }
                .videoWrapper iframe {
                    border: 0;
                    max-width: 100%;
                    height: auto;
                }


                /******** LOAD MORE ********/
                .videoList_wrapper {
                    box-sizing: border-box;
                    opacity: 0;
                    transform: translateY(100%);
                    transition: all .5s ease-in;
                }

                .videoList_wrapper_enter {
                    opacity: 1;
                    transform: translateY(0%);
                }


                /******** GRID ********/

                @media (min-width: 320px) {
                    .colFour {
                        position: relative;
                        width: 100%;
                    }

                    .colFour  {
                        -ms-flex: 0 0 100%;
                        flex: 0 0 100%;
                        max-width: 100%;
                    }
                }

                @media (min-width: 601px) {   
                    .colFour {
                        -ms-flex: 0 0 33.333333%;
                        flex: 0 0 33.333333%;
                        max-width: 33.333333%;
                        float: left;
                    }
                } 

                @media (min-width: 1920px) {   
                    .colFour  {
                        -ms-flex: 0 0 33.333333%;
                        flex: 0 0 33.333333%;
                        max-width: 33.333333%;
                        float: left;
                    }
                } 

                .clearfix::after {
                    display: block;
                    clear: both;
                    content: "";
                }          
                .option {
                    font-weight: 300;
                    font-size: 12px;
                    color: #bababa;
                    padding: 10px;
                    border-top: 1px solid #404040;
                }
                
                .option a {
                    color: inherit;
                    text-decoration: none;
                }
                
                .option span {
                    color:white;
                    margin-right: 10px;
                }  
                `}</style>
            </div>
        )
    }
}

export default Layout;