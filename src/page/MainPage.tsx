import React from 'react';
import Header from "../component/header/Header";
import Body from "../component/body/Body";

const MainPage = () => {
    return (
        <div className="max-w-screen-sm container mx-auto">
            <Header/>
            <Body/>
        </div>
    );
};

export default MainPage;