import React, {useState} from 'react';
import Header from "../../component/header/lotto/Header";
import {Route, Routes} from "react-router-dom";
import Draw from "./draw/Draw";
import Search from "./search/Search";
import StatWrapper from "./stat/StatWrapper";
import {makeLuckyNumber} from "../../common/utils/Utils";

/**
 * 번호 생성 페이지
 * 상단 탭으로 다양한 곳으로 링크되는 중첩 라우터 포함
 */
const Lotto = () => {

    // LuckyLotto와 manualLotto가 쓰는 상태 컴포넌트
    const [savedNumbers, setSavedNumbers] = useState([0, 0, 0, 0, 0, 0]);

    // 공 클릭이벤트 해당 index의 number를 추첨으로 뽑고 (숫자가 0이 아니면 0으로 만들어 닫아버리고) setNumbers를 호출
    const handleLuckyClick = (index: number) => {
        setSavedNumbers(savedNumbers.map((num, i) => (i === index) ? num = makeLuckyNumber(savedNumbers, index) : num));
    };

    // 럭키 리셋 클릭이벤트 : 리셋버튼 클릭시 럭키 추첨 상태를 초기화
    const handleLuckyReset = () => {
        setSavedNumbers([0, 0, 0, 0, 0, 0]);
    };

    return (
        <div className="flex h-full grow flex-col justify-start">
            <Header savedNumbers={savedNumbers} handleLuckyClick={handleLuckyClick} handleLuckyReset={handleLuckyReset}/>
            <Routes>
                <Route path="/draw" element={<Draw savedNumbers={savedNumbers}/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/stat/*" element={<StatWrapper/>}/>
            </Routes>
        </div>
    );
};

export default Lotto;