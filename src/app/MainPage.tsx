import React from 'react';
import Footer from "../component/bottom/Footer";
import {Navigate, Route, Routes} from "react-router-dom";
import MakeLotto from "./lotto/MakeLotto";
import NotFound from "./NotFound";

/**
 * 라우터로 감싼 메인 페이지
 * 하단의 버튼으로 경로가 변하는 형식
 */
const MainPage = () => {
    return (
        <div className="container mx-auto flex max-w-screen-sm flex-col justify-between bg-white min-h-[680px] h-svh">
            <Routes>
                <Route path="/" element={<Navigate replace to="/lotto/draw" />}/>
                {/* 번호 생성 */}
                <Route path="/lotto/*" element={<MakeLotto/>}/>
                {/* 번호 저장 */}
                <Route path="/save/*" element={<NotFound/>}/>
                {/* 당첨 후기 */}
                <Route path="/review/*" element={<NotFound/>}/>
                {/* 마이 페이지 */}
                <Route path="/mypage/*" element={<NotFound/>}/>
                {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default MainPage;