import React from 'react';
import DrawBalls from "../../../../common/molecules/DrawBalls";
import Button from "../../../../common/atom/Button";
import DangerAlert from "../../../../common/atom/DangerAlert";
import {popupDangerAlert} from "../../../../common/utils/Utils";

/**
 * 로또 추첨 번호를 뽑는 컴포넌트
 */
const DrawLotto = ({lottos, handleDrawButtonClick, handleInitClick, handleAllDrawClick}: {
    lottos: number[][],
    handleDrawButtonClick: (index: number) => void
    handleInitClick: () => void
    handleAllDrawClick: () => void
}) => {

    // 미구현 기능이므로 dangerAlert을 띄우는 함수를 콜한다.
    const handleSaveClick = () => {
        popupDangerAlert();
    }

    return (
        <div className='relative flex h-full flex-col content-center items-center justify-evenly'>
            <DangerAlert/>
            <div className='content-center text-center text-3xl font-bold text-gray-600 font-gmarket'>1302회차</div>
            {lottos.map((lotto, index) => (
                <DrawBalls key={index} index={index} lotto={lotto} handleDrawButtonClick={handleDrawButtonClick}/>
            ))}
            <div className='flex w-11/12 flex-row justify-between'>
                <Button text={'초기화'} handleClick={handleInitClick}/>
                <Button text={'번호저장'} handleClick={handleSaveClick}/>
                <Button text={'전체생성'} handleClick={handleAllDrawClick}/>
            </div>
        </div>
    );
};

export default DrawLotto;