import React, {useEffect, useState} from 'react';
import BarChart from "../../../../component/body/chart/BarChart";
import clsx from "clsx";

export type dataFormat = {
    number: number
    count: number
}

const initData: dataFormat[] = [];

const NumberStatistics = () => {
    const [data, setData] = useState(initData);
    const [isNumber, setIsNumber] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://127.0.0.1:8000/api/lotto/stat/number");
            return res.json();
        }

        fetchData()
            .then(res => {
                res.sort((a: { number: number; }, b: { number: number; }) => b.number - a.number);
                setData(res);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    const handleSortChange = (str: string) => {
        const sortedData = [...data]; // 데이터 복사본 생성

        if (str === "count") {
            // 당첨수 최대 번호순으로 정렬
            sortedData.sort((a, b) => a.count - b.count);
            setIsNumber(false);
        } else {
            // 번호순으로 정렬
            sortedData.sort((a, b) => b.number - a.number);
            setIsNumber(true);
        }

        setData(sortedData); // 정렬된 데이터로 상태 업데이트
    };

    return (
        <div className='flex h-full flex-col justify-start'>
            <div className='flex h-10 w-10/12 flex-row items-center justify-end gap-4 place-self-center'>
                <div onClick={() => handleSortChange('number')}
                     className={clsx("cursor-pointer text-center border-2 w-16 h-6 px-0.5 nato-sans text-sm", {
                         'text-gray-600': !isNumber,
                         'text-orange-400': isNumber
                     })}>번호순
                </div>
                <div onClick={() => handleSortChange('count')}
                     className={clsx("cursor-pointer text-center border-2 w-16 h-6 px-0.5 nato-sans text-sm", {
                         'text-gray-600': isNumber,
                         'text-orange-400': !isNumber
                     })}>당첨순
                </div>
            </div>
            {
                isLoading ?
                    <div className='h-80 grow overflow-y-auto sm:h-96 flex flex-row items-center justify-center'>
                        <div
                            className='h-20 w-40 px-4 py-1 animate-pulse border-4 rounded-lg text-lg font-semibold text-gray-300 nato-sans'>
                            Now Loading...
                        </div>
                    </div>
                    : <div className='h-80 grow overflow-y-auto sm:h-96 flex flex-row items-center justify-center'>
                        <BarChart data={data}/>
                    </div>
            }
        </div>
    );
};

export default NumberStatistics;