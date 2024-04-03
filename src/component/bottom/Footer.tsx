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
    const [buttonArr, setButtonArr] = useState([true, false, false, false]);

    const handleClick = (index: number) => {
        setButtonArr(buttonArr.map((isActive, i) => (i === index)));
    }

    return (
        <div className='flex h-24 flex-row justify-evenly border-t-2 shadow'>
            <FooterButton name={'번호생성'} logo={<PlusCircle/>} activeLogo={<PlusCircleSolid/>} index={0} handleClick={handleClick}
                          isActive={buttonArr[0]}/>
            <FooterButton name={'번호저장'} logo={<Bookmark/>} activeLogo={<BookmarkSolid/>} index={1} handleClick={handleClick}
                          isActive={buttonArr[1]}/>
            <FooterButton name={'당첨후기'} logo={<PencilSquare/>} activeLogo={<PencilSquareSolid/>} index={2} handleClick={handleClick}
                          isActive={buttonArr[2]}/>
            <FooterButton name={'마이페이지'} logo={<User/>} activeLogo={<UserSolid/>} index={3} handleClick={handleClick}
                          isActive={buttonArr[3]}/>
        </div>
    );
};

export default Footer;