import Head from 'next/head';

import NavBar from '../components/Widgets/NavBar';
import Footer from '../components/Widgets/Footer';

const Layout = ({ children, title }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            
            <NavBar />
            {children}
            <div className="clearfix"></div>
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
            `}</style>
        </div>
    );
};

export default Layout;