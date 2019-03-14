import Head from 'next/head';
import React,{ Component } from 'react';

import NavBar from '../components/Widgets/navbar/NavBar';
import Footer from '../components/Widgets/Footer';

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

        const { title } = this.props;

        return (
            <div>
                <Head>
                    <title>{title}</title>
                </Head>
                
                <NavBar 
                    showNav={this.state.showNav}
                    onHideNav={()=> this.toggleSidenav(false)}
                    onOpenNav={()=> this.toggleSidenav(true)}
                />

                {this.props.children}
                
                <Footer />

                <style global jsx>{`
                    html {
                        overflow-x: hidden;
                        margin: 0;
                        padding: 0;
                    }
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: 'Roboto', sans-serif;
                        color: #231f1a;
                        font-size: 1rem;
                        line-height: 1.625rem;
                        letter-spacing: .03125rem;
                        font-weight: 400;
                        font-style: normal;
                    }
                    .container {
                        width: 100%;
                        margin: 0 auto;
                        }


                    .form-input span Link {
                        text-decoration: none !important;
                        color: #ef5e12 !important;
                        margin: 15px auto 30px;
                    }                    
                    .form-input span a {
                        text-decoration: none !important;
                        color: #ef5e12 !important;
                    }
                    .form-input .cta {
                        background-color: rgba(0,0,0,0);                    
                        border: none;
                        border-radius: .1875rem;
                        color: #ef5e12 !important;
                        text-decoration: none !important;
                        font-size: 1rem;
                        height: 3rem;
                        line-height: 1;
                        min-width: 6.25rem;
                        padding: 1rem 38px;
                        text-align: center;
                        border: 1px solid #ef5e12;                    
                    }
                    .form-input a:-webkit-any-link {
                        text-decoration: none !important;
                        color: #ef5e12 !important;
                    }


                    @media (min-width: 576px) {
                    .container {
                        max-width: 540px;
                    }
                    }

                    @media (min-width: 768px) {
                    .container {
                        max-width: 720px;
                    }
                    }

                    @media (min-width: 992px) {
                    .container {
                        max-width: 960px;
                    }
                    }

                    @media (min-width: 1200px) {
                    .container {
                        max-width: 1140px;
                    }
                    }

                    .container-fluid {
                        width: 100%;
                        padding-right: 15px;
                        padding-left: 15px;
                        margin-right: auto;
                        margin-left: auto;
                        }

                    .row {
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-wrap: wrap;
                        flex-wrap: wrap;
                        margin-right: -15px;
                        margin-left: -15px;
                        }

                    .no-gutters {
                        margin-right: 0;
                        margin-left: 0;
                        }
                    .align-vert {
                        -ms-flex-line-pack: center !important;
                        margin: 0 auto;
                        }
                    .text-center {
                        text-align: center !important;
                        }
                    .clearfix {
                        clear: both;
                    }

                    .option {
                            font-weight: 300;
                            font-size: 12px;
                            color: #bababa;
                            padding: 10px;
                            border-top: 1px solid #d5d5d5;
                        }
                        
                    .option a {
                        color: #4c4c4c;
                        text-decoration: none;
                    }
                    
                    .option span {
                        color:#4c4c4c;
                        margin-right: 10px;
                    } 

                    .bars {
                        display:block;
                    }

                   
                    .form-input a:-webkit-any-link {
                        text-decoration: none;
                        color: #ef5e12 !important;
                    }
                    @media(min-width:768px){
                        .bars {
                            display:none;
                        }
                    }
                `}</style>
            </div>
        );
    };
}
export default Layout; 