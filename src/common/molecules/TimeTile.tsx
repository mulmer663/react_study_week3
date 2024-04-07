import React from 'react';
import Tile from "../atom/Tile";
import {formatTime} from "../utils/Utils";
import GrayText from "../atom/GrayXxsText";

/**
 * 시간과 인덱스 텍스트를 받아 만드는 시간 타일 분자 컴포넌트
 * @param time 숫자
 * @param indexText 밑에 영어 꾸밈 표시글
 */
const TimeTile = ({time, indexText}: { time: number, indexText: string }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row justify-center gap-1">
                {/* 시간을 00 형식으로 포켓팅 시킨다 .*/}
                <Tile text={formatTime(time)[0]}/>
                <Tile text={formatTime(time)[1]}/>
            </div>
            <div>
                <GrayText text={indexText}/>
            </div>
        </div>
    );
};

export default TimeTile;