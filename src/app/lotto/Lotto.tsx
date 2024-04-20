import React from 'react';
import Header from "../../component/header/lotto/Header";
import {Route, Routes} from "react-router-dom";
import NotFound from "../error/NotFound";
import Draw from "./draw/Draw";
import Search from "./search/Search";

/**
 * 번호 생성 페이지
 * 상단 탭으로 다양한 곳으로 링크되는 중첩 라우터 포함
 */
const Lotto = () => {
    return (
        <div className="flex h-full grow flex-col justify-between max-h-[720px]">
            <Header/>
            <Routes>
                <Route path="/draw" element={<Draw/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/stat" element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default Lotto;