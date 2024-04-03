import React from 'react';
import DrawBalls from "../../../common/molecules/DrawBalls";
import Button from "../../../common/atom/Button";

/**
 * 로또 추첨 번호를 뽑는 컴포넌트
 */
const DrawLotto = ({lottos, handleDrawButtonClick}: {
    lottos: number[][],
    handleDrawButtonClick: (index: number) => void
}) => {

    return (
        <div className='flex h-full flex-col content-center items-center justify-evenly'>
            <div className='content-center text-center text-3xl font-bold text-gray-600 font-gmarket'>1302회차</div>
            {lottos.map((lotto, index) => (
                <DrawBalls key={index} index={index} lotto={lotto} handleDrawButtonClick={handleDrawButtonClick}/>
            ))}
            <div className='flex w-11/12 flex-row justify-between'>
                <Button text={'초기화'}/>
                <Button text={'번호저장'}/>
                <Button text={'전체생성'}/>
            </div>
        </div>
    );
};

export default DrawLotto;