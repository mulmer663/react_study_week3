import React, {useState} from 'react';
import TimerArea from "../../../component/header/lotto/timer/TimerArea";
import LuckyLotto from "../../../component/header/lotto/luckylotto/LuckyLotto";
import DrawLotto from "../../../component/body/lotto/drawlotto/DrawLotto";
import {makeLottoNumber, makeLuckyNumber} from "../../../common/utils/Utils";

const initLotto: number[][] = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
/**
 * 번호 추첨 페이지
 * 일단 타이머, 럭키 숫자뽑기, 로또만들기 3개를 가지고 있다
 */
const Draw = ({savedNumbers} : {savedNumbers: number[]}) => {
    // DrawLotto가 쓰는 2D 로또 배열 컴포넌트
    const [lottos, setLottos] = useState(initLotto);

    // 로또 추첨 버튼 클릭 이벤트 : luckyNumbers를 가지고 새 로또 배열을 만든다.
    const handleDrawButtonClick = (index: number) => {
        setLottos(lottos.map((lotto, i) => (i === index) ? makeLottoNumber(savedNumbers) : lotto));
    };

    // 로또 추첨 초기화 버튼 클릭하면 리셋
    const handleInitClick = () => {
        setLottos(initLotto);
    }

    // 전체 추첨은 그냥 전체 추첨 해줌
    const handleAllDrawClick = () => {
        setLottos(lottos.map(() => makeLottoNumber(savedNumbers)));
    }

    return (
        <div className='flex h-full flex-col justify-start max-h-[720px]'>
            <DrawLotto lottos={lottos} handleDrawButtonClick={handleDrawButtonClick} handleInitClick={handleInitClick} handleAllDrawClick={handleAllDrawClick}/>
        </div>
    );
};

export default Draw;