import React from 'react';
import styles from './Other.module.css'

const Other = () => {
    return ( 
        <div className={styles.other}>
            <a href="#">Inquire</a>
            <a href="mailto:daniellemdesignstudio@gmail.com?subject=Hi Danielle!">Email</a>
            <div>Leave a Review</div>
        </div>
     );
}
 
export default Other;