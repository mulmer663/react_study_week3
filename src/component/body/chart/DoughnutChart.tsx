import React, {useEffect, useState} from 'react';
import {dataFormat} from "../../../app/lotto/stat/number/NumberStatistics";
import * as echarts from "echarts/core";
import EChartsReact from "echarts-for-react";

type doughnutData = {
    name: string,
    value: number,
}

const initData: dataFormat[] = [];

const initSectionData: doughnutData[] = [{name: '1 ~ 10', value: 0},
    {name: '11 ~ 20', value: 0},
    {name: '21 ~ 30', value: 0},
    {name: '31 ~ 40', value: 0},
    {name: '41 ~ 45', value: 0},
];
const initEvenData: doughnutData[] = [{name: '짝수', value: 0}, {name: '홀수', value: 0}]


const DoughnutChart = ({isSection}: { isSection: boolean }) => {

    const [data, setData] = useState(initData);
    const [sectionData, setSectionData] = useState(initSectionData);
    const [evenData, setEvenData] = useState(initEvenData);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://127.0.0.1:8000/api/lotto/stat/number");
            return res.json();
        }

        fetchData()
            .then(res => {
                res.sort((a: { number: number; }, b: { number: number; }) => b.number - a.number);
                // 데이터 세팅 1
                const newSectionData = [...initSectionData];
                res.map((item: { number: number; count: number }) => {
                    if (item.number >= 1 && item.number <= 10) {
                        newSectionData[0].value += item.count;
                    } else if (item.number >= 11 && item.number <= 20) {
                        newSectionData[1].value += item.count;
                    } else if (item.number >= 21 && item.number <= 30) {
                        newSectionData[2].value += item.count;
                    } else if (item.number >= 31 && item.number <= 40) {
                        newSectionData[3].value += item.count;
                    } else {
                        newSectionData[4].value += item.count;
                    }
                });

                // 데이터 세팅 2
                const newEvenData = [...initEvenData];
                data.map((item: { number: number; count: number }) => {
                    if (item.number % 2 === 0) {
                        newEvenData[0].value += item.count;
                    } else {
                        newEvenData[1].value += item.count;
                    }
                });

                setData(res);
                setSectionData(newSectionData);
                setEvenData(newEvenData);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    // 데이터 세팅 2
    data.map((item: { number: number; count: number }) => {
        if (item.number % 2 === 0) {
            evenData[0].value += item.count;
        } else {
            evenData[1].value += item.count;
        }
    });

    const option = {
        tooltip: {
            trigger: 'item',
        },
        legend: {
            top: '5%',
            left: 'center',
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['50%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold',
                    },
                },
                data: isSection ? sectionData : evenData,
                color: [
                    '#f2b526',
                    '#3d74ad',
                    '#de4c10',
                    '#9295a4',
                    '#2eaa62',
                ]
            },
        ],
    };

    if (isLoading) {
        return <div className='h-20 w-40 px-4 py-1 animate-pulse border-4 rounded-lg text-lg font-semibold text-gray-300 nato-sans'>
            Now Loading...
        </div>;
    }

    return <EChartsReact echarts={echarts} option={option} style={{
        width: '95%', height: '90%', display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}/>;
};

export default DoughnutChart;