import React from 'react';
import Header from "../component/header/Header";
import Body from "../component/body/Body";
import Footer from "../component/bottom/Footer";

const MainPage = () => {
    return (
        <div className="container mx-auto flex max-w-screen-sm flex-col justify-between h-dvh max-h-dvh">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default MainPage;