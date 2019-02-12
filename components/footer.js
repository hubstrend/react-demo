import Link from 'next/link';
import { CURRENT_YEAR } from '../config';

const Footer = () => {
    return (
        <div className="footer">
            <Link href={`/`}>
                <a className="logo">
                    <img alt="Abstrak logo" src="/static/images/abstrak_logo.png" />
                </a>                
            </Link>
            <div className="right">
                @ABSTRAK {CURRENT_YEAR} All Rights Reserve.
            </div>

            <style jsx>{`
                .footer {
                    position: relative;
                    height: 60px;
                    width: 100%;
                    padding: 0 20% 0;
                    margin-top: 20px;
                    background: #242424;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .logo img {
                    height: 20px;
                    padding: 10px;
                }
                
                .right {
                    flex-grow: 1;
                    color: #878787;
                    font-size: 12px;
                }
            `}</style>
        </div>        
    )
}

export default Footer;