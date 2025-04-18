
/**
 * 柱状图
 */
export default `

    const res = {
        chart_data: [120, 250, 150, 80, 70, 110, 200, 100, 30],
        rank: [1, 222, 3, 4, 5, 6, 7, 8, 9],
        top: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    }

    const { chart_data, rank, top } = res;

    option =  {
        title: {
        // formatter:[
        //     '{a|这段文本采用样式a}'
        // ],
        text: \`{a|     招募流程人数统计图(单位:人)}\`,
        left: 50,
        top: 24,
        textStyle: {
            fontSize: 30,
            fontWeight: 600,
            rich: {
            a: {
                color: '#333',
                align: 'left',
                verticalAlign: 'top',
                backgroundColor: {
                image: icon,
                },
                width: 24,
                height: 24,
                position: 'right',
                fontSize: 18,
                fontWeight: 600,
            },
            },
        },
        },
        yAxis: {
        // interval:30,
        show: true,
        type: 'category',
        data: ['人才库', 'E-OT', 'MCS', '在线评测', 'MS1', 'MS2', 'OFFER', 'LPTC', '入司'],
        axisLabel: {
            show: true,
            color: '#333',
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            // interval:30,
            show: false,
        },
        inverse: true,
        splitLine: {
            show: true,
            interval: function (index, value) {
            return index == 0 || index == chart_data.length - 1 ? false : true;
            },
            lineStyle: {
            color: '#EDEDED',
            },
        },
        },
        xAxis: {
        type: 'value',
        show: false,
        position: 'top',
        boundaryGap: ['0%', '30%'],
        },
        series: [
        {
            data: chart_data,
            type: 'bar',
            barWidth: 20,
            itemStyle: {
            normal: {
                //这里是重点
                color: function (params) {
                //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                var colorList = [
                    '#86b2df',
                    '#7FCF52',
                    '#EECB5F',
                    '#E3935D',
                    '#F19737',
                    '#33CCCC',
                    '#CCEBF8',
                    '#D3C0C0',
                ];
                return colorList[params.dataIndex % 8];
                },
            },
            },
            label: {
            show: true,
            position: 'left',
            offset: [600, 0],
            color: '#333',
            align: 'center',
            formatter: function (params, index) {
                return \`{a|\${params.value}}{b|\${rank[params.dataIndex]}}{c|\${top[params.dataIndex]}}\`;
            },
            rich: {
                a: {
                width: 70,
                color: '#333',
                },
                b: {
                width: 60,
                color: '#333',
                },
                c: {
                width: 60,
                color: '#333',
                },
            },
            },
        },
        ],
        graphic: [
        {
            type: 'text',
            position: [685, 40],
            style: {
            fill: '#333',
            text: ['节点人数', '全司排名', 'TOP'].join('　　'),
            font: '12px Microsoft YaHei',
            textAlign: 'center',
            },
        },
        ],
    };

`;
