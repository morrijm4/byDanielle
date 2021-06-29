import React from 'react';
import SocialLink from './SocialLink/SocialLink'
import { SocialMediaData } from './SocialMediaData'
import styles from './SocialLinks.module.css'

const SocialLinks = () => {
    return ( 
        <div className={styles.social_links}>
            {SocialMediaData.map((item) => {
                return (
                    <SocialLink key={item.order} media={item} />
                )
            })}
        </div>
     );
}
 
export default SocialLinks;