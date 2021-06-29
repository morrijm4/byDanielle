import React from 'react';
import styles from './Quote.module.css'

const Quote = (props) => {
    return ( 
        <div className={styles.quote}>
            <h1>"{props.children}"</h1>
            <p>— {props.person}</p>
        </div>
     );
}
 
export default Quote;