import React from 'react';
import Header from "../component/header/Header";
import Body from "../component/body/Body";
import Footer from "../component/bottom/Footer";

const MainPage = () => {
    return (
        <div className="max-w-screen-sm container mx-auto h-dvh max-h-dvh flex flex-col justify-between">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default MainPage;