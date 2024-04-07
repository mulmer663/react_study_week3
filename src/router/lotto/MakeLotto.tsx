import React from 'react';
import Header from "../../component/header/lotto/Header";
import Body from "../../component/body/lotto/Body";

/**
 * 번호 생성 페이지 라우터
 */
const MakeLotto = () => {
    return (
        <div className="flex grow h-full max-h-[720px] flex-col justify-between">
            <Header/>
            <Body/>
        </div>
    );
};

export default MakeLotto;