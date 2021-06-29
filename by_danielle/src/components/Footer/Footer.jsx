import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Reviews from './Reviews/Reviews';
import CarouselWrapper from './CarouselItems/CarouselWrapper';
import SocialLinks from './SocialLinks/SocialLinks';
import Other from './Other/Other';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Footer.module.css';

const Footer = () => {
    return ( 
        <Container bsPrefix={styles.footer_wrapper}>
            <Row>
                <Col md={7}>
                    <Reviews />
                </Col>
                <Col md={5}>
                    <CarouselWrapper />
                </Col>
            </Row>
            <SocialLinks />
            <Other />
        </Container>
     );
};
 
export default Footer;