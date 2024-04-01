import React, {useState} from 'react';
import DrawBalls from "../../../common/molecules/DrawBalls";
import Button from "../../../common/atom/Button";

const initLotto: number[][] = [[5, 8, 16, 22, 32, 41], [1, 16, 19, 21, 26, 43],
    [2, 6, 9, 16, 32, 36], [9, 11, 16, 28, 37, 42], [16, 22, 25, 31, 39, 44]];

/**
 * 로또 추첨 번호를 뽑는 컴포넌트
 */
const DrawLotto = () => {
    const [lottos, setLottos] = useState(initLotto);

    return (
        <div className='flex h-full flex-col content-center items-center justify-evenly'>
            <div className='content-center text-center text-3xl font-bold text-gray-600 font-gmarket'>1302회차</div>
            {lottos.map((lotto, index) => (
                <DrawBalls key={index} index={index} lottos={lotto}/>
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