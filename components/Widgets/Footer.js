import Link from 'next/link';

const Footer = () => {
    return (
        <footer>            
            <div>
                <Link href="/">
                    <a className="footer-link">Go To NatureBox.com</a>
                </Link>
            </div>
            <div className="copyright">
                &copy; {new Date().getFullYear()} NatureBox. All Rights Reserved. <Link href="https://naturebox.com/privacy"><a target="_blank">Privacy & Terms</a></Link>
            </div>

            <style jsx>{`
                footer {
                    margin-top: 0;
                    padding: 10px;
                    border-top: 1px solid #e4e0db;
                    background: #fff;
                    text-align: center;
                }
                .footer-link {
                    font-family: 'Roboto', sans-serif;
                    color: #ef5e12;
                    font-size: .875rem;
                    line-height: 1.25rem;
                    letter-spacing: .03125rem;
                    font-weight: 400;
                    font-style: normal;                  
                }
                footer .copyright {
                    font-family: 'Roboto', sans-serif;
                    color: ##706c68;
                    font-size: .75rem;
                    letter-spacing: .03125rem;
                    line-height: .875rem;
                    padding: 0;
                    font-weight: 400;
                    font-style: normal;
                    padding-bottom: 10px;
                }
                footer a {
                    text-decoration: none;
                }
            `}</style>
        </footer>
        
    );
};

export default Footer;