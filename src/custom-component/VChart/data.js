const optionline = {
    label: '折线图',
    disabled: false,
    chart: 'optionline',
    xAxis: {
        data: ['A', 'B', 'C', 'D', 'E'],
    },
    yAxis: {},
    series: [
        {
            data: [10, 22, 28, 23, 19],
            type: 'line',
            label: {
                show: true,
                position: 'bottom',
                textStyle: {
                    fontSize: 20,
                },
            },
        },
    ],
}

const optionbar = {
    label: '柱状图',
    disabled: false,
    chart: 'optionbar',
    xAxis: {
        data: ['A', 'B', 'C', 'D', 'E'],
    },
    yAxis: {},
    series: [
        {
            type: 'bar',
            data: [
                10,
                22,
                28,
                {
                    value: 43,
                    // 设置单个柱子的样式
                    itemStyle: {
                        color: '#91cc75',
                        shadowColor: '#91cc75',
                        borderType: 'dashed',
                        opacity: 0.5,
                    },
                },
                49,
            ],
            itemStyle: {
                barBorderRadius: 5,
                borderWidth: 1,
                borderType: 'solid',
                borderColor: '#73c0de',
                shadowColor: '#5470c6',
                shadowBlur: 3,
            },
        },
    ],
}
const optionpie = {
    label: '圆环图',
    disabled: false,
    chart: 'optionpie',
    title: {
        text: '圆环图',
        left: 'center',
        top: 'center',
    },
    series: [
        {
            type: 'pie',
            data: [
                {
                    value: 335,
                    name: 'A',
                },
                {
                    value: 234,
                    name: 'B',
                },
                {
                    value: 1548,
                    name: 'C',
                },
            ],
            radius: ['40%', '70%'],
        },
    ],
}
const optionscatter = {
    label: '散点图',
    disabled: false,
    chart: 'optionscatter',
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    yAxis: {},
    series: [
        {
            type: 'scatter',
            data: [220, 182, 191, 234, 290, 330, 310],
        },
    ],
}

const optiongroup = {
    label: '趋势图',
    disabled: false,
    chart: 'optiongroup',
    legend: {
        data: ['Altitude (km) vs Temperature (°C)'],
    },
    tooltip: {
        trigger: 'axis',
        formatter: 'Temperature : <br/>{b}km : {c}°C',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C',
        },
    },
    yAxis: {
        type: 'category',
        axisLine: { onZero: false },
        axisLabel: {
            formatter: '{value} km',
        },
        boundaryGap: true,
        data: ['0', '10', '20', '30', '40', '50', '60', '70', '80'],
    },
    graphic: [
        {
            type: 'group',
            rotation: Math.PI / 4,
            bounding: 'raw',
            right: 110,
            bottom: 110,
            z: 100,
        },
        {
            type: 'group',
            left: '10%',
            top: 'center',
        },
    ],
    series: [
        {
            name: '高度(km)与气温(°C)变化关系',
            type: 'line',
            smooth: true,
            data: [15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5],
        },
    ],
}
export const optionsum = {
    optionline,
    optionbar,
    optionpie,
    optionscatter,
    optiongroup,
}