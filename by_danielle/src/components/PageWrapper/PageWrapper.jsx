import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/Navbar';
import Head from 'next/head'

const PageWrapper = ({ children }) => {
    return ( 
        <>
            <Head>
                <title>By Danielle</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                name="description"
                content="Web site created using create-react-app"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
                <script src="https://kit.fontawesome.com/871f242353.js" crossOrigin="anonymous"></script>
            </Head>
            <NavBar />
            <div>{ children }</div>
            <Footer />
        </>
     );
}
 
export default PageWrapper;