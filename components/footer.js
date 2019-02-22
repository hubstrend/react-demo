// import Link from 'next/link';


const Footer = () => (
    <div className="footer">
        <div className="logo">
            <a href="/"><img alt="Abstrak logo" src="/static/images/abstrak_logo.png" /></a>
        </div>
        <div className="right">
            @ABSTRAK {new Date().getFullYear()} All Rights Reserve.
        </div>

        <style jsx>{`
            .footer {
                position: relative;
                height: 60px;
                width: 100%;
                padding: 0 5px 0;
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

            @media (min-width: 768px) {   
                        .footer {                        
                        padding: 0 10% 0;
                    }
                }
        `}</style>
    </div>    
)

export default Footer;