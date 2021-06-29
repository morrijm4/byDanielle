import React, { Component } from 'react';
import ActiveLink from './ActiveLink';
import { PageData } from "../../pages/PageData";
import Button from "react-bootstrap/Button";
import Fade from 'react-reveal/Fade'
import styles from './Navbar.module.css';
import Image from 'next/image'

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return(
            <>
                <Fade cascade duration={1500}>
                    <nav className={styles.NavbarItems}>
                        <div className={styles.navbarLogo}>
                            <Image 
                                src='/images/Best-Social-Media-Manager-New-Orleans.png' 
                                alt="Danielle Morrison" 
                                width={350}
                                height={105}
                                layout="responsive"
                            />
                        </div>
                        <div className={styles.menu_icon} onClick={ this.handleClick }>
                            <i className={ this.state.clicked ? "fas fa-times" : "fas fa-bars" }></i>
                        </div>
                        <ul className={styles.nav_menu}>
                            {PageData.map((item) => {
                                return (
                                    <li key={item.title}>
                                        <ActiveLink activeClassName={styles.active} href={item.url}>
                                            <a className={styles.nav_links}>{item.title}</a>
                                        </ActiveLink>
                                    </li>
                                )
                            })}
                        </ul>
                        <div>
                            <Button 
                                bsPrefix={styles.btn__email} 
                                href="mailto:daniellemdesignstudio@gmail.com?subject=Hi Danielle!"
                                type="button"
                            >
                                Email
                            </Button>
                        </div>
                    </nav>
                </Fade>
            </>
        )
    }
}

export default NavBar