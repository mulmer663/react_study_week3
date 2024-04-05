import React from 'react';
import Footer from "../component/bottom/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MakeLotto from "../router/lotto/MakeLotto";
import NotFound from "../router/NotFound";

const MainPage = () => {
    return (
        <div className="container mx-auto flex max-w-screen-sm flex-col justify-between h-dvh max-h-dvh">
            <BrowserRouter>
                <Routes>
                    {/* 번호 생성 */}
                    <Route path="/" element={<MakeLotto />}></Route>
                    {/* 번호 저장 */}
                    <Route path="/save/*" element={<NotFound />}></Route>
                    {/* 당첨 후기 */}
                    <Route path="/review/*" element={<NotFound />}></Route>
                    {/* 마이 페이지 */}
                    <Route path="/mypage/*" element={<NotFound />}></Route>
                    {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default MainPage;