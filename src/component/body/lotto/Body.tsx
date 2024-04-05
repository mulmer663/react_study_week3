import React, {useState} from 'react';
import TimerArea from "./timer/TimerArea";
import LuckyLotto from "./luckylotto/LuckyLotto";
import DrawLotto from "./drawlotto/DrawLotto";
import {makeLottoNumber, makeLuckyNumber} from "../../../common/utils/Utils";

const initLotto: number[][] = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
/**
 * 몸톰 컴포넌트
 * 일단 타이머, 럭키 숫자뽑기, 로또만들기 3개를 가지고 있다
 */
const Body = () => {
    // LuckyLotto가 쓰는 상태 컴포넌트
    const [luckyNumbers, setLuckyNumbers] = useState([0, 0, 0, 0, 0, 0]);
    // DrawLotto가 쓰는 2D 로또 배열 컴포넌트
    const [lottos, setLottos] = useState(initLotto);

    // 공 클릭이벤트 해당 index의 number를 추첨으로 뽑고 (숫자가 0이 아니면 0으로 만들어 닫아버리고) setNumbers를 호출
    const handleBallClick = (index: number) => {
        setLuckyNumbers(luckyNumbers.map((num, i) => (i === index) ? num = makeLuckyNumber(luckyNumbers, index) : num));
    };

    // 럭키 리셋 클릭이벤트 : 리셋버튼 클릭시 럭키 추첨 상태를 초기화
    const handleLuckyReset = () => {
        setLuckyNumbers([0, 0, 0, 0, 0, 0]);
    };

    // 로또 추첨 버튼 클릭 이벤트 : luckyNumbers를 가지고 새 로또 배열을 만든다.
    const handleDrawButtonClick = (index: number) => {
        setLottos(lottos.map((lotto, i) => (i === index) ? makeLottoNumber(luckyNumbers) : lotto));
    };

    // 로또 추첨 초기화 버튼 클릭하면 리셋
    const handleInitClick = () => {
        setLottos(initLotto);
    }

    // 전체 추첨은 그냥 전체 추첨 해줌
    const handleAllDrawClick = () => {
        setLottos(lottos.map((lotto) => (lotto[0] === 0) ? makeLottoNumber(luckyNumbers) : lotto));
    }

    return (
        <div className='flex h-full flex-col justify-start'>
            <TimerArea/>
            <LuckyLotto luckyNumbers={luckyNumbers} handleBallClick={handleBallClick} handleReset={handleLuckyReset}/>
            <DrawLotto lottos={lottos} handleDrawButtonClick={handleDrawButtonClick} handleInitClick={handleInitClick} handleAllDrawClick={handleAllDrawClick}/>
        </div>
    );
};

export default Body;