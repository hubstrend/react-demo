import React from 'react';

import styles from './footer.css';
import { Link } from 'react-router-dom';
import { CURRENT_YEAR } from '../../config';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Link to="/" className={styles.logo}>
                <img alt="Abstrak logo" src="/images/abstrak_logo.png" />
            </Link>
            <div className={styles.right}>
                @ABSTRAK {CURRENT_YEAR} All Rights Reserve.
            </div>
        </div>        
    )
}

export default Footer;