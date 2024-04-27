import React, {useEffect, useState} from 'react';
import BarChart from "../../../../component/body/chart/BarChart";

export type dataFormat = {
    number: number
    count: number
}

const initData: dataFormat[] = [];

const NumberStatistics = () => {
    const [data, setData] = useState(initData);
    const [minItem, setMinItem] = useState({number: 0, count: 0});
    const [maxItem, setMaxItem] = useState({number: 0, count: 0});

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://127.0.0.1:8000/api/lotto/stat/number");
            return res.json();
        }

        fetchData()
            .then(res => {
                res.sort((a: { number: number; }, b: { number: number; }) => b.number - a.number);
                setData(res);

                // 최대 및 최소 당첨 번호 계산
                if (res.length > 0) {
                    const maxItem = res.reduce((prev: dataFormat, current: dataFormat) => (prev.count > current.count) ? prev : current);
                    const minItem = res.reduce((prev: dataFormat, current: dataFormat) => (prev.count < current.count) ? prev : current);

                    setMaxItem(maxItem);
                    setMinItem(minItem);
                }
            })
            .catch(err => console.log(err));
    }, []);

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const sortType = e.target.value;
        const sortedData = [...data]; // 데이터 복사본 생성

        if (sortType === "countMax") {
            // 당첨수 최대 번호순으로 정렬
            sortedData.sort((a, b) => a.count - b.count);
        } else {
            // 번호순으로 정렬
            sortedData.sort((a, b) => b.number - a.number);
        }

        setData(sortedData); // 정렬된 데이터로 상태 업데이트
    };

    return (
        <div className='flex h-full flex-col justify-start'>
            <div className='flex h-20 flex-row items-center justify-evenly'>
                <div className='rounded border-2 border-gray-100 bg-gray-100 px-4 py-1 text-center text-xs font-nato-sans sm:text-base sm:px-8'>
                    최대 당첨: {maxItem.number}번 ({maxItem.count}회)
                </div>
                <div className='rounded border-2 border-gray-100 bg-gray-100 px-4 py-1 text-center text-xs font-nato-sans sm:text-base sm:px-8'>
                    최소 당첨: {minItem.number}번 ({minItem.count}회)
                </div>
                <select className='rounded border-2 border-gray-100 bg-gray-100 px-2 py-1 text-xs font-nato-sans sm:text-base sm:px-4' name="sort" id="sort" onChange={handleSortChange}>
                    <option value="number">번호 순</option>
                    <option value="countMax">당첨 순</option>
                </select>
            </div>
            <div className='h-96 grow overflow-y-auto'>
                <BarChart data={data}/>
            </div>
        </div>
    );
};

export default NumberStatistics;