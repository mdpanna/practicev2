import React from 'react';
import HeaderSection from '../homepagesection/Header';
import Newsfeed from '../homepagesection/Newsfeed';
import Search from '../homepagesection/Search';
import Footer from '../homepagesection/Footer';
import Setting from '../Commonsection/Setting';
import Notification from '../Commonsection/Notification';

function Homepage(){
    return(
        <>
        <HeaderSection />
        <Search />
        <Newsfeed />
        <Footer />
        <Setting />
        <Notification />
        </>

    )
}

export default Homepage;