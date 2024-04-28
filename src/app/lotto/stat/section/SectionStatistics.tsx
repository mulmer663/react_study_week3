import React, {useState} from 'react';
import clsx from "clsx";
import DoughnutChart from "../../../../component/body/chart/DoughnutChart";


const SectionStatistics = () => {
    const [isSection, setIsSection] = useState(true);

    function handleSortChange(str: string) {
        if (str === "section") {
            // 구간별 통계로 전환
            setIsSection(true);
        } else {
            // 짝수/홀수로 전환
            setIsSection(false);
        }
    }

    return (
        <div className='flex h-full flex-col justify-start'>
            <div className='flex h-10 w-10/12 flex-row items-center justify-end gap-4 place-self-center'>
                <div onClick={() => handleSortChange('section')}
                     className={clsx("cursor-pointer text-center border-2 w-16 h-6 px-0.5 nato-sans text-sm", {
                         'text-gray-600': !isSection,
                         'text-orange-400': isSection
                     })}>구간별
                </div>
                <div onClick={() => handleSortChange('even')}
                     className={clsx("cursor-pointer text-center border-2 w-20 h-6 px-0.5 nato-sans text-sm", {
                         'text-gray-600': isSection,
                         'text-orange-400': !isSection
                     })}>짝수/홀수
                </div>
            </div>
            <div className='h-80 grow overflow-y-auto sm:h-96 flex flex-row justify-center items-center'>
                <DoughnutChart isSection={isSection}/>
            </div>
        </div>
    );
};

export default SectionStatistics;