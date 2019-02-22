import React, { Component } from 'react';
import Head from 'next/head';

import Header from '../components/Header/header';
import Footer from '../components/footer';

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
            <div className="wrapper-layout">
                <Head>
                    <title>{title}</title>
                </Head>

                <Header 
                    showNav={this.state.showNav}
                    onHideNav={()=> this.toggleSidenav(false)}
                    onOpenNav={()=> this.toggleSidenav(true)}
                />

                {this.props.children}

                <Footer />

                <style global jsx>{`
                    html {   
                        overflow-x: hidden;
                    }
                    body {
                        font-family: 'Roboto', sans-serif;
                        background: #ececec;
                        margin: 0;
                        padding: 0;
                    }
                    .wrapper-layout {
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                            align-items:center;
                            align-content: center;
                            width: 80%;
                            margin: 20px auto;
                        }
                    a {
                        text-decoration: none;
                    }

                    .clearfix::after {
                        display: block;
                        clear: both;
                        content: "";
                    }

                    .secTitle {
                            text-align: center;
                            margin-bottom: 30px;
                        }

                    .mainTitle {
                        margin-top: 20px;
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
                            margin: 0;

                            padding: 5px 10px;
                            line-height: .9rem;
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


                        .about h1,
                        .contact h1 {
                            text-align: center;
                            padding-top: 80px;
                        }

                `}</style>
            </div>
                );
            }
    
    }

export default Layout;