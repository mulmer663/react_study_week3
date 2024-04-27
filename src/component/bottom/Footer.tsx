import React, {useState} from 'react';
import FooterButton from "../../common/molecules/FooterButton";
import PlusCircle from "../../common/svg/PlusCircle"
import PlusCircleSolid from "../../common/svg/PlusCircleSolid"
import Bookmark from "../../common/svg/Bookmark";
import BookmarkSolid from "../../common/svg/BookmarkSolid";
import PencilSquare from "../../common/svg/PencilSquare";
import PencilSquareSolid from "../../common/svg/PencilSquareSolid";
import User from "../../common/svg/User";
import UserSolid from "../../common/svg/UserSolid";


/**
 * 하단 메뉴 컴포넌트
 */
const Footer = () => {
    // 활성화 여부를 상태로 저장
    const [activeArr, setActiveArr] = useState([true, false, false, false]);

    // 클릭 인덱스와 일치하는 것만 활성화 시키고 나머지는 다 비활성화
    const handleClick = (index: number) => {
        setActiveArr(activeArr.map((isActive, i) => (i === index)));
    }

    return (
        <div className='flex h-20 flex-row justify-evenly border-t-2 shadow min-h-20'>
            <FooterButton link={"/"} name={'번호생성'} logo={<PlusCircle/>} activeLogo={<PlusCircleSolid/>} index={0} handleClick={handleClick}
                          isActive={activeArr[0]}/>
            <FooterButton link={"/save"} name={'번호저장'} logo={<Bookmark/>} activeLogo={<BookmarkSolid/>} index={1} handleClick={handleClick}
                          isActive={activeArr[1]}/>
            <FooterButton link={"/review"} name={'당첨후기'} logo={<PencilSquare/>} activeLogo={<PencilSquareSolid/>} index={2} handleClick={handleClick}
                          isActive={activeArr[2]}/>
            <FooterButton link={"/mypage"} name={'마이페이지'} logo={<User/>} activeLogo={<UserSolid/>} index={3} handleClick={handleClick}
                          isActive={activeArr[3]}/>
        </div>
    );
};

export default Footer;