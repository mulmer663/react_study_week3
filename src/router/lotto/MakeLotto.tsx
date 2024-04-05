import React from 'react';
import Header from "../../component/header/lotto/Header";
import Body from "../../component/body/lotto/Body";

const MakeLotto = () => {
    return (
        <div className="flex h-full flex-col justify-between">
            <Header/>
            <Body/>
        </div>
    );
};

export default MakeLotto;