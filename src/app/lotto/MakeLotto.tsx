import React from 'react';
import Header from "../../component/header/lotto/Header";
import {Route, Routes} from "react-router-dom";
import NotFound from "../NotFound";
import Draw from "./draw/Draw";

/**
 * 번호 생성 페이지
 * 중첩 라우터 포함
 */
const MakeLotto = () => {
    return (
        <div className="flex h-full grow flex-col justify-between max-h-[720px]">
            <Header/>
            <Routes>
                <Route path="/draw" element={<Draw/>}/>
                <Route path="/search" element={<NotFound/>}/>
                <Route path="/stat" element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default MakeLotto;