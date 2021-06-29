import React from 'react';
import Quote from './Quote/Quote';
import styles from './Reviews.module.css'

const Reviews = () => {
    return ( 
        <>
            <Quote person="Molly FRANICHEVICH">
                HER POSITIVE ATTITUDE IS INFECTIOUS AND MOTIVATING.
            </Quote>
            <Quote person="MEGAN JUBA">
                I KNEW I COULD GIVE HER LITTLE DIRECTION AND THE PRODUCT WOULD BE BEAUTIFUL AND WELL THOUGHT OUT.
            </Quote>
            <a href="#" className={styles.reviews}>— MORE REVIEWS</a>
        </>
     );
}
 
export default Reviews;