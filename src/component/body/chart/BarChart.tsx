import React from 'react';
import * as echarts from 'echarts/core';
import EChartsReact from "echarts-for-react";
import {dataFormat} from "../../../app/lotto/stat/number/NumberStatistics";

const BarChart = ({data}: { data: dataFormat[] }) => {
    // 데이터 변환
    const categoryData  = data.map((item: { number: number; count: number }) => item.number);
    const valueData = data.map((item: { number: number; count: number }) => item.count);

    const option = {
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            type: 'category',
            data: categoryData,
            axisTick: {
                show: false, // 축 틱 숨기기
            },
        },
        xAxis: {
            type: 'value',
        },
        series: [
            {
                data: valueData,
                type: 'bar',
                label: {
                    show: true,
                    position: 'right',
                    valueAnimation: true
                }
            },
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
    };

    return <EChartsReact echarts={echarts} option={option} style={{ width: '95%', height: '110rem', marginTop: -50}} />;
};

export default BarChart;