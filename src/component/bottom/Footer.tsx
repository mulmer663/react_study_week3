import React from 'react';
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
    return (
        <div className='h-24 border-t-2 shadow flex flex-row justify-evenly'>
            <FooterButton name={'번호생성'} logo={<PlusCircle/>} activeLogo={<PlusCircleSolid/>}/>
            <FooterButton name={'번호저장'} logo={<Bookmark/>} activeLogo={<BookmarkSolid/>}/>
            <FooterButton name={'당첨후기'} logo={<PencilSquare/>} activeLogo={<PencilSquareSolid/>}/>
            <FooterButton name={'마이페이지'} logo={<User/>} activeLogo={<UserSolid/>}/>
        </div>
    );
};

export default Footer;