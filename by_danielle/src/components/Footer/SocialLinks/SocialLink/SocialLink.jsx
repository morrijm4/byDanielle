import React from 'react';
import styles from './SocialLink.module.css';

const SocialLink = (props) => {
    return ( 
        <a href={props.media.url} className={styles.social_link}>
            {props.media.icon}
        </a>
     );
}
 
export default SocialLink;