$(function() {
    addEventListener("load", function() {
        setTimeout(hideURLbar, 0);
    }, false);

    function hideURLbar() {
        window.scrollTo(0, 1);
    }


    LoadMain2();
    LoadMian4();
    // 加载图表6
    LoadMain6();
    // 加载图表2
    LoadMain3();
    LoadMain9();
});




function LoadMain9() {
    // 基于准备好的dom，初始化echarts实例
    var main9Chart = echarts.init(document.getElementById('main9'));
    // 指定图表的配置项和数据
    main9option = {
        title: {
            text: '2018年全球各国人均GDP与人口情况',
            subtext: '数据来源：IMF世界经济展望2019年4月版（古巴、朝鲜等非IMF成员的人口没计算在内）'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            formatter: function(params) {
                if (params.value.length > 1) {
                    return params.seriesName + ' :<br/>' +
                        params.value[0] + 'Log（人口）/万人 ' +
                        params.value[1] + 'Log(人均GDP)/亿美元 ';
                } else {
                    return params.seriesName + ' :<br/>' +
                        params.name + ' : ' +
                        params.value + 'kg ';
                }
            },
            axisPointer: {
                show: true,
                type: 'cross',
                lineStyle: {
                    type: 'dashed',
                    width: 1
                }
            }
        },
        legend: {
            data: ['（前）社会主义国家', '资本主义国家'],
            left: 'right'
        },
        xAxis: [{
            type: 'value',
            scale: true,
            axisLabel: {
                formatter: '{value} 万人'
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        }],
        yAxis: [{
            type: 'value',
            scale: true,
            axisLabel: {
                formatter: '{value} 亿美元'
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        }],
        series: [{
            name: '（前）社会主义国家',
            type: 'scatter',
            data: [
                [4.68, 3.92],
                [4.36, 2.12],
                [4.36, 3.02],
                [4.29, 2.74],
                [4.28, 2.45],
                [4.26, 2.29],
                [4.20, 2.99],
                [4.19, 3.58],
                [4.09, 3.29],
                [4.05, 4.16],
                [3.98, 5.14],
                [3.97, 2.85],
                [3.94, 1.79],
                [3.88, 2.76],
                [3.97, 3.27],
                [3.86, 2.84],
                [3.80, 2.98],
                [3.79, 2.32],
                [3.75, 2.54],
                [3.72, 2.46],
                [3.66, 3.00],
                [3.64, 2.26],
                [3.64, 2.57],
                [3.62, 2.48],
                [3.60, 2.51],
                [3.41, 3.98],
                [3.51, 2.55],
                [3.56, 3.47],
                [3.47, 3.62],
                [3.43, 2.83],
                [3.19, 4.30],
                [3.18, 3.21],
                [3.10, 2.80],
                [3.10, 3.51],
                [2.96, 3.06],
                [2.94, 3.49],
                [2.93, 3.97],
                [2.92, 2.96],
                [2.74, 3.56],
                [2.68, 3.48],
                [2.65, 3.98],
                [4.42, 2.32],
                [4.17, 2.61],
                [2.69, 3.18],


            ],
            markPoint: {
                data: [{
                    type: 'max',
                    name: '最大值'
                }, {
                    type: 'min',
                    name: '最小值'
                }]
            },
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        }, {
            name: '资本主义国家',
            type: 'scatter',
            data: [
                [5.06, 1.78],
                [4.92, 2.93],
                [4.91, 2.73],
                [4.88, 2.69],
                [4.87, 1.54],
                [4.85, 2.43],
                [4.81, 2.75],
                [4.80, 4.52],
                [4.78, 2.76],
                [4.75, 3.40],
                [4.73, 3.01],
                [4.73, 3.24],
                [4.71, 2.95],
                [4.70, 2.74],
                [4.69, 0.48],
                [4.67, 3.06],
                [4.67, 3.57],
                [4.63, 3.81],
                [4.63, 3.82],
                [4.62, 2.95],
                [4.62, 2.69],
                [4.61, 3.02],
                [4.59, 4.10],
                [4.53, 3.78],
                [4.53, 1.58],
                [4.51, 1.63],
                [4.50, 2.51],
                [4.50, 3.71],
                [4.49, 1.67],
                [4.49, 2.66],
                [4.49, 3.67],
                [4.45, 1.93],
                [4.41, 2.17],
                [4.41, 1.04],
                [4.37, 3.52],
                [4.37, 3.01],
                [4.31, 3.03],
                [4.29, 2.63],
                [4.26, 0.78],
                [4.25, 1.46],
                [4.25, 0.95],
                [4.23, 2.55],
                [4.22, 1.00],
                [4.21, 2.14],
                [4.21, 0.30],
                [4.21, 3.27],
                [4.20, 2.62],
                [4.16, 1.57],
                [4.07, 2.70],
                [4.07, 3.65],
                [4.05, 2.10],
                [4.04, 1.04],
                [4.04, 3.51],
                [4.03, 1.26],
                [4.02, 2.12],
                [3.99, 4.10],
                [3.97, 3.91],
                [3.97, 2.78],
                [3.96, 0.00],
                [3.95, 4.32],
                [3.92, 2.31],
                [3.91, 2.37],
                [3.90, 3.01],
                [3.87, 1.04],
                [3.86, 3.83],
                [3.85, 3.51],
                [3.84, 0.85],
                [3.83, 2.81],
                [3.83, 3.70],
                [3.80, 3.76],
                [3.80, 3.23],
                [3.77, 3.58],
                [3.77, 2.85],
                [3.76, 1.77],
                [3.76, 1.95],
                [3.76, 2.38],
                [3.74, 3.92],
                [3.73, 2.46],
                [3.69, 1.60],
                [3.67, 1.00],
                [3.67, 1.89],
                [3.66, 3.24],
                [3.64, 1.30],
                [3.63, 3.00],
                [3.63, 2.04],
                [3.63, 3.63],
                [3.61, 0.00],
                [3.61, 3.34],
                [3.59, 2.82],
                [3.59, 4.42],
                [3.58, 0.78],
                [3.57, 3.05],
                [3.56, 1.00],
                [3.55, 1.74],
                [3.53, 3.07],
                [3.53, 3.47],
                [3.53, 3.55],
                [3.51, 1.46],
                [3.51, 1.91],
                [3.49, 4.03],
                [3.41, 3.99],
                [3.40, 2.93],
                [3.40, 2.97],
                [3.40, 2.65],
                [3.39, 2.10],
                [3.36, 1.80],
                [3.34, 3.47],
                [3.32, 2.80],
                [3.32, 2.02],
                [3.31, 1.34],
                [3.31, 4.29],
                [3.31, 5.13],
                [3.27, 3.68],
                [3.24, 4.22],
                [3.23, 3.18],
                [3.23, 3.41],
                [3.22, 1.08],
                [3.19, 3.40],
                [3.17, 3.21],
                [3.15, 3.25],
                [3.13, 2.31],
                [3.11, 3.72],
                [3.06, 2.66],
                [3.05, 3.71],
                [3.05, 2.78],
                [2.99, 3.47],
                [2.97, 3.27],
                [2.95, 3.12],
                [2.94, 3.10],
                [2.94, 1.93],
                [2.93, 3.05],
                [2.92, 2.24],
                [2.91, 3.62],
                [2.90, 3.08],
                [2.87, 2.34],
                [2.86, 3.29],
                [2.86, 2.65],
                [2.86, 3.59],
                [2.83, 2.90],
                [2.71, 2.88],
                [2.68, 3.29],
                [2.66, 3.42],
                [2.63, 2.71],
                [2.55, 3.29],
                [2.49, 3.05],
                [2.48, 3.11],


            ],
            markPoint: {
                data: [{
                    type: 'max',
                    name: '最大值'
                }, {
                    type: 'min',
                    name: '最小值'
                }]
            },
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    main9Chart.setOption(main9option)
};

function LoadMain6() {
    // 基于准备好的dom，初始化echarts实例
    var main6Chart = echarts.init(document.getElementById('main6'));
    // 指定图表的配置项和数据
    var main6Option = {
        title: {
            text: '1979年社会主义国家发展情况',
            subtext: '数据来源：世界银行数据库 采集时间：1979年',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x: 'center',
            y: 'bottom',
            data: ['社会主义国家数量', '全球国家总量', '社会主义国家人口数量', '全球人口总量']
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        series: [{
            name: '数量占比',
            type: 'pie',
            radius: [20, 110],
            center: ['25%', '50%'],
            roseType: 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                value: 24,
                name: '社会主义国家数量'
            }, {
                value: 173,
                name: '全球国家总量'
            }, ]
        }, {
            name: '人口占比',
            type: 'pie',
            radius: [30, 110],
            center: ['75%', '50%'],
            roseType: 'area',
            data: [{
                value: 1595654385,
                name: '社会主义国家人口数量'
            }, {
                value: 4336510369,
                name: '全球人口总量'
            }, ]
        }]
    };
    main6Chart.setOption(main6Option);
}

function LoadMian4() {
    // 基于准备好的dom，初始化echarts实例
    var main4Chart = echarts.init(document.getElementById('main4'));
    // 指定图表的配置项和数据
    var data = {
        title: ['总计', '1949', '1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        plan_production: [413, 413, 426, 694, 722, 824, 859, 910, 1028, 1068, 1307, 1439, 1457, 1220, 1149, 1233, 1454, 1716, 1868, 1774, 1723, 1938, 2253, 2426, 2518, 2721, 2790, 2997, 2944, 3202, 3645, 4063, 4546, 4892, 5323, 5963, 7208, 9016, 10275, 12059, 15043, 16992, 18668, 21782, 26924, 35334, 48198, 60794, 71177, 78973, 84402, 89677, 99215, 109655, 120333, 135823, 159878, 183217, 216314, 257306, 314045, 340903, 401513, 484124, 540367, 595244, 643974, 689052, 744127, 820754, 824828],
        actual_production: [6148, 6148, 8080, 7594, 9378, 9929, 9955, 10241, 10802, 11385, 11535, 12508, 12997, 13449, 14458, 15251, 16384, 17755, 19451, 20557, 22468, 24310, 25641, 27749, 27800, 27502, 29415, 30456, 35429, 37734, 38643, 39859, 41787, 53339, 61617, 69885, 91290, 123950, 154100, 176404, 189963, 206488, 277562, 319162, 349588, 383599, 609553, 617782, 649897, 688510, 724164, 767205, 812749, 838295, 866602, 907242, 967250, 1028169, 1081428, 1098648, 1048799, 963343, 974744, 1001631, 1019800, 10337387, 1733931, 1123395, 1233271, 1307148, 1334442],
        attainment_rate: [0, 0, 0, 0, 0, 15.6, 4.2, 6.8, 15, 5.1, 21.3, 8.8, -0.3, -27.3, -5.6, 10.2, 18.3, 17, 10.7, -5.7, -4.1, 16.9, 19.4, 7, 3.8, 7.9, 2.3, 8.7, -1.6, 7.6, 11.7, 7.6, 7.8, 5.2, 9.1, 10.9, 15.2, 13.5, 8.8, 11.6, 11.3, 4.1, 3.8, 9.2, 14.2, 14, 13.1, 10.9, 10, 9.3, 7.8, 7.6, 8.4, 8.3, 9.1, 10, 10.1, 10.4, 12.7, 13, 9.6, 9.2, 10.4, 9.5, 7.9, 7.8, 7.3, 6.9, 6.7, 6.8, 6.6],
        productivity: [-0.7, -0.7, 9.9, 15.5, 5.6, 5.9, 0.3, 9, 5.5, 5.4, 1.3, 8.4, 3.9, 3.5, 7.5, 5.5, 7.4, 8.4, 9.6, 5.7, 9.3, 8.2, 5.5, 8.5, 9.9, 11.7, 8.5, 9.2, 11.4, 11.3, 13, 11.7, 8.8, 12.1, 4, 8.7, 11.2, 7.3, 5.7, 6.2, 7.7, 7.5, 5.8, 3.3, 5.7, 5, 6.2, 4.6, 5.7, 6.2, 5.3, 6, 5.9, 3.2, 3.4, 4.7, 6.6, 6.3, 7.9, 4.9, 2.2, -1.7, 3.8, 8.6, 4.1, 3.3, 4.2, 3.7, 2.9, 4.27, 2.9]
    };

    for (var pr in data) {
        data[pr] = data[pr].slice(1, -1);
    }

    function getTableLine(num) {
        var list = [];
        var bottom = 122;
        var height = 20;
        for (var i = 0; i < num; i++) {
            list.push({
                type: 'line',
                bottom: bottom - i * height,
                right: 80,
                style: {
                    fill: '#333'
                },
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 3200,
                    y2: 0
                }

            });
        }
        return list;
    }
    var lineList = getTableLine(5);

    option = {
        title: [{
            text: ' \n中国GDP \n美国GDP \n美国增长率\n中国增长率',
            bottom: 75,
            left: -5,
            textStyle: {
                lineHeight: 20,
                fontSize: 12,
                fontWeight: 'normal',
                formatter: function(value) {
                    return '{table|' + value + '}';
                },
                rich: {
                    table: {
                        align: 'center'
                    }
                }
            }
        }],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#283b56'
                }
            }
        },
        legend: {
            data: ['中国GDP(亿元)', '美国GDP(亿元)', '美国GDP增长率', '中国GDP增长率']
        },
        grid: {
            bottom: 150,
            left: 80,
            right: 80
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {}
            }
        },
        dataZoom: {
            show: true,
            start: 0,
            end: 50,
            maxSpan: 80
                // zoomLock: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: true,
            data: data.title,
            axisTick: {
                length: 108
            },
            axisLabel: {
                formatter: function(value, index) {
                    return '{table|' + value +
                        '}\n{table|' + data.plan_production[index] +
                        '}\n{table|' + data.actual_production[index] +
                        '}\n{table|' + data.attainment_rate[index] +
                        '%}\n{table|' + data.productivity[index] + '%}';
                },
                rich: {
                    table: {
                        lineHeight: 20,
                        align: 'center'
                    }
                }
            }
        }],
        yAxis: [{
            type: 'value',
            scale: true,
            minInterval: 1,
            name: '数量',
            splitLine: {
                show: false
            }
        }, {
            type: 'value',
            scale: true,
            name: '百分比',
            splitLine: {
                show: false
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }],
        series: [{
            name: '中国GDP(亿元)',
            type: 'bar',
            yAxisIndex: 0,
            data: data.plan_production
        }, {
            name: '美国GDP(亿元)',
            type: 'bar',
            yAxisIndex: 0,
            data: data.actual_production
        }, {
            name: '美国GDP增长率',
            type: 'line',
            yAxisIndex: 1,
            data: data.attainment_rate
        }, {
            name: '中国GDP增长率',
            type: 'line',
            yAxisIndex: 1,
            data: data.productivity
        }],
        graphic: lineList
    };
    // 使用刚指定的配置项和数据显示图表。
    main4Chart.setOption(option);
};

function LoadMain3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main3'));
    // 指定图表的配置项和数据
    // 这里我选的图片是透明背景的，如果使用白色背景的图片就可以遮盖节点后的线条了
    let plusImg = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTUwNzI5NDk0NjE4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjgxMDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjk2IDQ4MEg1NDRWMzI4YzAtNC40LTMuNi04LTgtOGgtNDhjLTQuNCAwLTggMy42LTggOHYxNTJIMzI4Yy00LjQgMC04IDMuNi04IDh2NDhjMCA0LjQgMy42IDggOCA4aDE1MnYxNTJjMCA0LjQgMy42IDggOCA4aDQ4YzQuNCAwIDgtMy42IDgtOFY1NDRoMTUyYzQuNCAwIDgtMy42IDgtOHYtNDhjMC00LjQtMy42LTgtOC04eiIgcC1pZD0iODEwNCI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHogbTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyIDM3MiAxNjYuNiAzNzIgMzcyLTE2Ni42IDM3Mi0zNzIgMzcyeiIgcC1pZD0iODEwNSI+PC9wYXRoPjwvc3ZnPg==";

    let minusImg = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTUwNzI5NDc2MDg5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijc5ODYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjk2IDQ4MEgzMjhjLTQuNCAwLTggMy42LTggOHY0OGMwIDQuNCAzLjYgOCA4IDhoMzY4YzQuNCAwIDgtMy42IDgtOHYtNDhjMC00LjQtMy42LTgtOC04eiIgcC1pZD0iNzk4NyI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHogbTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyIDM3MiAxNjYuNiAzNzIgMzcyLTE2Ni42IDM3Mi0zNzIgMzcyeiIgcC1pZD0iNzk4OCI+PC9wYXRoPjwvc3ZnPg==";

    let emptyImg = 'data:image/png;base64,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'

    // 获取节点显示的图片
    const getSymbolImg = (item) => {
        return `image://${item.children && item.children.length ? minusImg : item.children_bak && item.children_bak.length ? plusImg : emptyImg}`;
    };

    // 基础配置option
    const commonOption = {
        tooltip: {
            trigger: "item",
            triggerOn: "mousemove",
            enterable: true,
            alwaysShowContent: false,
            hideDelay: 100,
            formatter: '{b}'
        },
        animation: false,
        series: [{
            type: "tree",
            symbolSize: 30,
            symbol: "emptyCircle",
            left: "2%",
            right: "2%",
            top: 60,
            bottom: 170,
            orient: "vertical",
            expandAndCollapse: true,
            initialTreeDepth: -1,
            label: {
                normal: {
                    position: "top",
                    verticalAlign: "bottom",
                    align: "center",
                    fontSize: 12,
                    formatter: param => {
                        let name = param.data.name;
                        if (name.length >= 10) {
                            name = name.slice(0, 9) + "...";
                        }
                        name = name.split('').join("\n");
                        return name;
                    }
                }
            },
            leaves: {
                label: {
                    normal: {
                        position: "bottom",
                        verticalAlign: "top",
                        align: "center",
                        distance: 10
                    }
                }
            }
        }]
    };

    // 原始数据
    const originalData = {
        1: {
            name: '全球制度类型',
            id: 1,
            level: 0
        },
        2: {
            id: 2,
            name: '其他特殊制度',
            level: 1,
            parent_node_id: 1
        },
        3: {
            id: 3,
            name: '资本主义制度',
            level: 1,
            parent_node_id: 1
        },
        4: {
            id: 4,
            name: '委员会制共和制',
            level: 2,
            parent_node_id: 3
        },
        5: {
            id: 5,
            name: '议会制共和制',
            level: 2,
            parent_node_id: 3
        },
        6: {
            id: 6,
            name: '半总统制共和制',
            level: 2,
            parent_node_id: 3
        },
        7: {
            id: 7,
            name: '总统制共和制',
            level: 2,
            parent_node_id: 3
        },
        8: {
            id: 8,
            name: '绝对君主制',
            level: 2,
            parent_node_id: 3
        },
        9: {
            id: 9,
            name: '议会君主制',
            level: 2,
            parent_node_id: 3
        },
        10: {
            id: 10,
            name: '二元君主制',
            level: 2,
            parent_node_id: 3
        },
        11: {
            id: 11,
            name: '社会主义制度',
            level: 1,
            parent_node_id: 1
        },
        12: {
            id: 12,
            name: '代表团制',
            level: 2,
            parent_node_id: 11
        },
        13: {
            id: 13,
            name: '大国民议会制',
            level: 2,
            parent_node_id: 11
        },
        14: {
            id: 14,
            name: '苏维埃制',
            level: 2,
            parent_node_id: 11
        },
        15: {
            id: 15,
            name: '人民代表制',
            level: 2,
            parent_node_id: 11
        },
        16: {
            id: 16,
            name: '民众国制',
            level: 2,
            parent_node_id: 2
        },
        17: {
            id: 17,
            name: '政教合一制',
            level: 2,
            parent_node_id: 2
        },
        18: {
            id: 18,
            name: '教会制',
            level: 2,
            parent_node_id: 2
        },
        19: {
            id: 19,
            name: '封建制',
            level: 2,
            parent_node_id: 2
        },
    }

    // 数据处理
    const innerData = [];
    Object.values(originalData).forEach((item, index) => {
        if (innerData[item.level] && innerData[item.level].length) {
            innerData[item.level].push(item);
        } else {
            innerData[item.level] = [item];
        }
    });

    for (let i = innerData.length - 1; i >= 0; i--) {
        // 每个item和result中的每个对象是同一引用
        innerData[i].forEach((item, index, all) => {
            // 备份children数据
            item.children_bak = item.children;

            item.symbol = getSymbolImg(item);
            // 寻找父级，并丢入父级的children数组中
            if (i) {
                let parent = innerData[i - 1].find((it, i) => {
                    return +it.id === +item.parent_node_id;
                });
                if (parent) {
                    if (parent && parent.children && parent.children.length) {
                        parent.children.unshift(item);
                    } else {
                        parent.children = [item];
                    }
                }
            } else {
                item.label = {
                    normal: {
                        rotate: 0,
                        align: "center",
                        formatter: "{b}"
                    }
                };
            }
        });
    }

    // 关闭所有的下级
    const closeChildren = aimObj => {
        if (aimObj && aimObj.children_bak && aimObj.children_bak.length) {
            aimObj.children_bak.forEach((item, index) => {
                item.children = [];
                aimObj.symbol = getSymbolImg(aimObj);
                closeChildren(item);
            });
        }
    };

    // 单个节点的点击事件
    const clickFun = param => {
        console.log('param', param)
        let aimObj = originalData[param.data.id];

        if (aimObj && aimObj.children && aimObj.children.length) {
            aimObj.children = [];
            // 收起子集中打开的层级
            closeChildren(aimObj);
        } else if (aimObj) {
            aimObj.children = aimObj.children_bak || [];
        }
        aimObj.symbol = getSymbolImg(aimObj);
        // 手动关闭tooltip不然会出现不可关闭的tooltip
        myChart.dispatchAction({
            type: "hideTip"
        });
        myChart.clear();
        commonOption.series[0].data = innerData[0]

        myChart.setOption(
            commonOption,
            true
        );
    };

    commonOption.series[0].data = innerData[0]

    myChart.setOption(
        commonOption,
        true
    )

    myChart.on("click", clickFun);

};

function LoadMain2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main2'));

    // 指定图表的配置项和数据

    var value18 = [{
        name: "Aruba",
        value: 111732
    }, {
        name: "Afghanistan",
        value: -9.08319e+08
    }, {
        name: "Angola",
        value: 7.19425e+09
    }, {
        name: "Albania",
        value: -2.01868e+09
    }, {
        name: "Argentina",
        value: 5.42121e+09
    }, {
        name: "Armenia",
        value: -1.65888e+09
    }, {
        name: "Antigua and Barbuda",
        value: -3.59171e+08
    }, {
        name: "Australia",
        value: -5.21217e+10
    }, {
        name: "Austria",
        value: 1.93061e+10
    }, {
        name: "Azerbaijan",
        value: 1.64528e+10
    }, {
        name: "Burundi",
        value: -2.59356e+08
    }, {
        name: "Belgium",
        value: -4.28553e+09
    }, {
        name: "Benin",
        value: -5.36021e+08
    }, {
        name: "Burkina Faso",
        value: -9.63133e+08
    }, {
        name: "Bangladesh",
        value: 9.26185e+08
    }, {
        name: "Bulgaria",
        value: -1.18753e+10
    }, {
        name: "Bahrain",
        value: 2.25689e+09
    }, {
        name: "Bahamas",
        value: -1.22208e+09
    }, {
        name: "Bosnia and Herzegovina",
        value: -2.64383e+09
    }, {
        name: "Belarus",
        value: -4.9587e+09
    }, {
        name: "Belize",
        value: -1.44877e+08
    }, {
        name: "Bermuda",
        value: 9.06745e+08
    }, {
        name: "Bolivia",
        value: 1.9927e+09
    }, {
        name: "Brazil",
        value: -2.8192e+10
    }, {
        name: "Barbados",
        value: -4.75655e+08
    }, {
        name: "Brunei",
        value: 6.9389e+09
    }, {
        name: "Bhutan",
        value: -1.12487e+08
    }, {
        name: "Botswana",
        value: 1.4953e+08
    }, {
        name: "Central African Rep.",
        value: 0
    }, {
        name: "Canada",
        value: 3.17954e+09
    }, {
        name: "Switzerland",
        value: 1.36101e+10
    }, {
        name: "Chile",
        value: -6.65788e+09
    }, {
        name: "China",
        value: 4.20569e+11
    }, {
        name: "Ivory Coast",
        value: 4.51564e+08
    }, {
        name: "Cameroon",
        value: -4.4974e+08
    }, {
        name: "Dem. Rep. Congo",
        value: -1.51e+08
    }, {
        name: "Congo",
        value: 8.65774e+08
    }, {
        name: "Colombia",
        value: -6.46064e+09
    }, {
        name: "Comoros",
        value: -6.8714e+07
    }, {
        name: "Cape Verde",
        value: -2.05257e+08
    }, {
        name: "Costa Rica",
        value: -2.58055e+09
    }, {
        name: "Curacao",
        value: 0
    }, {
        name: "Northern Cyprus",
        value: -4.22295e+09
    }, {
        name: "Czech Rep.",
        value: -4.40795e+09
    }, {
        name: "Germany",
        value: 2.10893e+11
    }, {
        name: "Djibouti",
        value: -2.25386e+08
    }, {
        name: "Dominican Rep.",
        value: -1.29885e+08
    }, {
        name: "Denmark",
        value: 1.04131e+10
    }, {
        name: "Dominican Republic",
        value: -4.5197e+09
    }, {
        name: "Algeria",
        value: 3.39543e+10
    }, {
        name: "Ecuador",
        value: 1.76934e+09
    }, {
        name: "Egypt",
        value: -1.4146e+09
    }, {
        name: "Euro area",
        value: -2.11004e+11
    }, {
        name: "Eritrea",
        value: 0
    }, {
        name: "Spain",
        value: -1.52546e+11
    }, {
        name: "Estonia",
        value: -2.21656e+09
    }, {
        name: "Ethiopia",
        value: -1.80574e+09
    }, {
        name: "Finland",
        value: 6.15104e+09
    }, {
        name: "Fiji",
        value: -5.26411e+08
    }, {
        name: "France",
        value: -2.81834e+10
    }, {
        name: "Faroe Islands",
        value: -3.05789e+07
    }, {
        name: "Micronesia, Fed. Sts.",
        value: 0
    }, {
        name: "Gabon",
        value: 0
    }, {
        name: "United Kingdom",
        value: -1.34152e+11
    }, {
        name: "Georgia",
        value: -2.81121e+09
    }, {
        name: "Ghana",
        value: -3.32743e+09
    }, {
        name: "French Guiana",
        value: -4.3821e+08
    }, {
        name: "Gambia",
        value: -6.28846e+06
    }, {
        name: "Guinea-Bissau",
        value: -2.87803e+07
    }, {
        name: "Equatorial Guinea",
        value: 0
    }, {
        name: "Greece",
        value: -5.13128e+10
    }, {
        name: "Grenada",
        value: -2.51947e+08
    }, {
        name: "Guatemala",
        value: -1.41389e+09
    }, {
        name: "Guyana",
        value: -3.21364e+08
    }, {
        name: "Hong Kong SAR, China",
        value: 3.28721e+10
    }, {
        name: "Honduras",
        value: -2.12985e+09
    }, {
        name: "Croatia",
        value: -6.21397e+09
    }, {
        name: "Haiti",
        value: -2.04815e+08
    }, {
        name: "Hungary",
        value: -1.09311e+10
    }, {
        name: "Indonesia",
        value: 1.25992e+08
    }, {
        name: "India",
        value: -3.0972e+10
    }, {
        name: "Ireland",
        value: -1.52969e+10
    }, {
        name: "Iran",
        value: 0
    }, {
        name: "Iraq",
        value: 2.84403e+10
    }, {
        name: "Iceland",
        value: -4.33834e+09
    }, {
        name: "Israel",
        value: 2.4696e+09
    }, {
        name: "Italy",
        value: -6.6847e+10
    }, {
        name: "Jamaica",
        value: -2.79326e+09
    }, {
        name: "Jordan",
        value: -2.05405e+09
    }, {
        name: "Japan",
        value: 1.42116e+11
    }, {
        name: "Kazakhstan",
        value: 6.25011e+09
    }, {
        name: "Kenya",
        value: -1.9826e+09
    }, {
        name: "Kyrgyz Republic",
        value: -7.1324e+08
    }, {
        name: "Cambodia",
        value: -8.19975e+08
    }, {
        name: "Kiribati",
        value: -5.2472e+06
    }, {
        name: "St. Kitts and Nevis",
        value: -2.03331e+08
    }, {
        name: "South Korea",
        value: 3.1897e+09
    }, {
        name: "Kuwait",
        value: 6.02393e+10
    }, {
        name: "Lao PDR",
        value: 7.75438e+07
    }, {
        name: "Lebanon",
        value: -4.10266e+09
    }, {
        name: "Liberia",
        value: -3.54305e+08
    }, {
        name: "Libya",
        value: 3.57017e+10
    }, {
        name: "St. Lucia",
        value: -3.3986e+08
    }, {
        name: "Sri Lanka",
        value: -3.8854e+09
    }, {
        name: "Lesotho",
        value: 3.44735e+08
    }, {
        name: "Lithuania",
        value: -6.68761e+09
    }, {
        name: "Luxembourg",
        value: 4.35529e+09
    }, {
        name: "Latvia",
        value: -4.48274e+09
    }, {
        name: "Macao SAR, China",
        value: 3.35379e+09
    }, {
        name: "Morocco",
        value: -4.52848e+09
    }, {
        name: "Moldova",
        value: -9.7557e+08
    }, {
        name: "Madagascar",
        value: -1.77625e+09
    }, {
        name: "Maldives",
        value: -6.11703e+08
    }, {
        name: "Mexico",
        value: -1.67613e+10
    }, {
        name: "Marshall Islands",
        value: -5.51608e+06
    }, {
        name: "Macedonia",
        value: -1.2358e+09
    }, {
        name: "Mali",
        value: -1.06343e+09
    }, {
        name: "Malta",
        value: -7.76939e+07
    }, {
        name: "Myanmar",
        value: 1.24703e+09
    }, {
        name: "Montenegro",
        value: -2.25752e+09
    }, {
        name: "Mongolia",
        value: -6.90113e+08
    }, {
        name: "Mozambique",
        value: -1.1472e+09
    }, {
        name: "Mauritania",
        value: 0
    }, {
        name: "Mauritius",
        value: -9.75764e+08
    }, {
        name: "Malawi",
        value: -6.93381e+08
    }, {
        name: "Malaysia",
        value: 3.89144e+10
    }, {
        name: "Namibia",
        value: -9.49179e+06
    }, {
        name: "New Caledonia",
        value: -1.41871e+09
    }, {
        name: "Niger",
        value: -6.51442e+08
    }, {
        name: "Nigeria",
        value: 2.91503e+10
    }, {
        name: "Nicaragua",
        value: -1.4484e+09
    }, {
        name: "Netherlands",
        value: 3.89558e+10
    }, {
        name: "Norway",
        value: 7.29151e+10
    }, {
        name: "Nepal",
        value: 7.33342e+08
    }, {
        name: "New Zealand",
        value: -1.02637e+10
    }, {
        name: "Oman",
        value: 5.01899e+09
    }, {
        name: "Pakistan",
        value: -1.56545e+10
    }, {
        name: "Panama",
        value: -2.6409e+09
    }, {
        name: "Peru",
        value: -5.31763e+09
    }, {
        name: "Philippines",
        value: 1.44021e+08
    }, {
        name: "Palau",
        value: -3.4224e+07
    }, {
        name: "Papua New Guinea",
        value: 7.07903e+08
    }, {
        name: "Poland",
        value: -3.5829e+10
    }, {
        name: "Portugal",
        value: -3.19486e+10
    }, {
        name: "Paraguay",
        value: 1.99599e+08
    }, {
        name: "West Bank",
        value: 3.80599e+08
    }, {
        name: "French Polynesia",
        value: -4.30759e+08
    }, {
        name: "Qatar",
        value: 0
    }, {
        name: "Romania",
        value: -2.49861e+10
    }, {
        name: "Russia",
        value: 1.03935e+11
    }, {
        name: "Rwanda",
        value: 0
    }, {
        name: "Saudi Arabia",
        value: 1.32322e+11
    }, {
        name: "Sudan",
        value: -3.59387e+09
    }, {
        name: "Senegal",
        value: -1.88374e+09
    }, {
        name: "Singapore",
        value: 2.78313e+10
    }, {
        name: "Solomon Is.",
        value: -7.95956e+07
    }, {
        name: "Sierra Leone",
        value: -2.25444e+08
    }, {
        name: "El Salvador",
        value: -1.53217e+09
    }, {
        name: "Serbia",
        value: -1.05352e+10
    }, {
        name: "South Sudan",
        value: 0
    }, {
        name: "Sao Tome and Principe",
        value: -9.35064e+07
    }, {
        name: "Suriname",
        value: 3.247e+08
    }, {
        name: "Slovak Republic",
        value: -6.27115e+09
    }, {
        name: "Slovenia",
        value: -2.94603e+09
    }, {
        name: "Sweden",
        value: 4.08029e+10
    }, {
        name: "Swaziland",
        value: -2.31236e+08
    }, {
        name: "Sint Maarten (Dutch part)",
        value: 0
    }, {
        name: "Seychelles",
        value: -2.62947e+08
    }, {
        name: "Syria",
        value: 4.71952e+08
    }, {
        name: "Chad",
        value: 0
    }, {
        name: "Togo",
        value: -2.21964e+08
    }, {
        name: "Thailand",
        value: 9.3087e+08
    }, {
        name: "Tajikistan",
        value: 4.75711e+07
    }, {
        name: "East Timor",
        value: 2.02175e+09
    }, {
        name: "Tonga",
        value: -9.13061e+07
    }, {
        name: "Trinidad and Tobago",
        value: 8.49903e+09
    }, {
        name: "Tunisia",
        value: -1.71125e+09
    }, {
        name: "Turkey",
        value: -3.9425e+10
    }, {
        name: "Tuvalu",
        value: -3.70856e+06
    }, {
        name: "United Republic of Tanzania",
        value: -2.57709e+09
    }, {
        name: "Uganda",
        value: -1.22384e+09
    }, {
        name: "Ukraine",
        value: -1.2781e+10
    }, {
        name: "Uruguay",
        value: -1.72899e+09
    }, {
        name: "United States",
        value: -6.81391e+11
    }, {
        name: "St. Vincent and the Grenadines",
        value: -2.3033e+08
    }, {
        name: "Venezuela",
        value: 3.1297e+10
    }, {
        name: "Vietnam",
        value: -1.0823e+10
    }, {
        name: "Vanuatu",
        value: -1.41579e+08
    }, {
        name: "Samoa",
        value: -5.42463e+07
    }, {
        name: "Kosovo",
        value: -9.20938e+08
    }, {
        name: "Yemen",
        value: -1.25129e+09
    }, {
        name: "South Africa",
        value: -1.64109e+10
    }, {
        name: "Zambia",
        value: -5.96535e+08
    }, {
        name: "Zimbabwe",
        value: 0
    }, ];
    var value19 = [{
        name: "Aruba",
        value: 1.71676e+08
    }, {
        name: "Afghanistan",
        value: -8.46063e+08
    }, {
        name: "Angola",
        value: -7.57165e+09
    }, {
        name: "Albania",
        value: -1.84962e+09
    }, {
        name: "Argentina",
        value: 7.25412e+09
    }, {
        name: "Armenia",
        value: -1.4255e+09
    }, {
        name: "Antigua and Barbuda",
        value: -1.69025e+08
    }, {
        name: "Australia",
        value: -4.88984e+10
    }, {
        name: "Austria",
        value: 1.02976e+10
    }, {
        name: "Azerbaijan",
        value: 1.01749e+10
    }, {
        name: "Burundi",
        value: -1.61181e+08
    }, {
        name: "Belgium",
        value: -5.24123e+09
    }, {
        name: "Benin",
        value: -6.48935e+08
    }, {
        name: "Burkina Faso",
        value: -3.80039e+08
    }, {
        name: "Bangladesh",
        value: 3.55613e+09
    }, {
        name: "Bulgaria",
        value: -4.25633e+09
    }, {
        name: "Bahrain",
        value: 5.59976e+08
    }, {
        name: "Bahamas",
        value: -8.0898e+08
    }, {
        name: "Bosnia and Herzegovina",
        value: -1.13526e+09
    }, {
        name: "Belarus",
        value: -6.1326e+09
    }, {
        name: "Belize",
        value: -8.28387e+07
    }, {
        name: "Bermuda",
        value: 5.81361e+08
    }, {
        name: "Bolivia",
        value: 8.1354e+08
    }, {
        name: "Brazil",
        value: -2.43056e+10
    }, {
        name: "Barbados",
        value: -2.5962e+08
    }, {
        name: "Brunei",
        value: 3.97738e+09
    }, {
        name: "Bhutan",
        value: -6.59407e+07
    }, {
        name: "Botswana",
        value: -6.48183e+08
    }, {
        name: "Central African Rep.",
        value: 0
    }, {
        name: "Canada",
        value: -4.0737e+10
    }, {
        name: "Switzerland",
        value: 4.10345e+10
    }, {
        name: "Chile",
        value: 3.11246e+09
    }, {
        name: "China",
        value: 2.43257e+11
    }, {
        name: "Ivory Coast",
        value: 1.61759e+09
    }, {
        name: "Cameroon",
        value: -1.11867e+09
    }, {
        name: "Dem. Rep. Congo",
        value: -1.1231e+09
    }, {
        name: "Congo",
        value: -1.36579e+09
    }, {
        name: "Colombia",
        value: -4.64901e+09
    }, {
        name: "Comoros",
        value: -3.92272e+07
    }, {
        name: "Cape Verde",
        value: -2.44927e+08
    }, {
        name: "Costa Rica",
        value: -5.60581e+08
    }, {
        name: "Curacao",
        value: 0
    }, {
        name: "Northern Cyprus",
        value: -1.98648e+09
    }, {
        name: "Czech Rep.",
        value: -4.86977e+09
    }, {
        name: "Germany",
        value: 1.98872e+11
    }, {
        name: "Djibouti",
        value: -7.11002e+07
    }, {
        name: "Dominican Rep.",
        value: -1.11079e+08
    }, {
        name: "Denmark",
        value: 1.13235e+10
    }, {
        name: "Dominican Republic",
        value: -2.3029e+09
    }, {
        name: "Algeria",
        value: 4.31665e+08
    }, {
        name: "Ecuador",
        value: 3.12844e+08
    }, {
        name: "Egypt",
        value: -3.3493e+09
    }, {
        name: "Euro area",
        value: -1.13954e+10
    }, {
        name: "Eritrea",
        value: 0
    }, {
        name: "Spain",
        value: -6.37198e+10
    }, {
        name: "Estonia",
        value: 5.25532e+08
    }, {
        name: "Ethiopia",
        value: -2.19065e+09
    }, {
        name: "Finland",
        value: 5.12142e+09
    }, {
        name: "Fiji",
        value: -1.24265e+08
    }, {
        name: "France",
        value: -2.20588e+10
    }, {
        name: "Faroe Islands",
        value: -2.46355e+07
    }, {
        name: "Micronesia, Fed. Sts.",
        value: -3.82541e+07
    }, {
        name: "Gabon",
        value: 0
    }, {
        name: "United Kingdom",
        value: -9.22509e+10
    }, {
        name: "Georgia",
        value: -1.14115e+09
    }, {
        name: "Ghana",
        value: -1.89717e+09
    }, {
        name: "French Guiana",
        value: -4.0336e+08
    }, {
        name: "Gambia",
        value: 2.80038e+07
    }, {
        name: "Guinea-Bissau",
        value: -4.76104e+07
    }, {
        name: "Equatorial Guinea",
        value: 0
    }, {
        name: "Greece",
        value: -3.59132e+10
    }, {
        name: "Grenada",
        value: -1.97163e+08
    }, {
        name: "Guatemala",
        value: 2.72839e+08
    }, {
        name: "Guyana",
        value: -2.3059e+08
    }, {
        name: "Hong Kong SAR, China",
        value: 2.11556e+10
    }, {
        name: "Honduras",
        value: -5.56655e+08
    }, {
        name: "Croatia",
        value: -3.15804e+09
    }, {
        name: "Haiti",
        value: -1.22186e+08
    }, {
        name: "Hungary",
        value: -9.92181e+08
    }, {
        name: "Indonesia",
        value: 1.06285e+10
    }, {
        name: "India",
        value: -2.61864e+10
    }, {
        name: "Ireland",
        value: -5.00137e+09
    }, {
        name: "Iran",
        value: 0
    }, {
        name: "Iraq",
        value: -1.1285e+09
    }, {
        name: "Iceland",
        value: -1.25716e+09
    }, {
        name: "Israel",
        value: 7.483e+09
    }, {
        name: "Italy",
        value: -4.03213e+10
    }, {
        name: "Jamaica",
        value: -1.1275e+09
    }, {
        name: "Jordan",
        value: -1.2432e+09
    }, {
        name: "Japan",
        value: 1.45678e+11
    }, {
        name: "Kazakhstan",
        value: -4.12077e+09
    }, {
        name: "Kenya",
        value: -1.68851e+09
    }, {
        name: "Kyrgyz Republic",
        value: -2.0234e+08
    }, {
        name: "Cambodia",
        value: -7.41415e+08
    }, {
        name: "Kiribati",
        value: -1.65652e+07
    }, {
        name: "St. Kitts and Nevis",
        value: -1.80116e+08
    }, {
        name: "South Korea",
        value: 3.35933e+10
    }, {
        name: "Kuwait",
        value: 2.89722e+10
    }, {
        name: "Lao PDR",
        value: -6.09056e+07
    }, {
        name: "Lebanon",
        value: -6.74094e+09
    }, {
        name: "Liberia",
        value: -2.77191e+08
    }, {
        name: "Libya",
        value: 9.3806e+09
    }, {
        name: "St. Lucia",
        value: -1.36743e+08
    }, {
        name: "Sri Lanka",
        value: -2.147e+08
    }, {
        name: "Lesotho",
        value: 5.51878e+07
    }, {
        name: "Lithuania",
        value: 6.12465e+08
    }, {
        name: "Luxembourg",
        value: 3.54456e+09
    }, {
        name: "Latvia",
        value: 2.0686e+09
    }, {
        name: "Macao SAR, China",
        value: 6.0487e+09
    }, {
        name: "Morocco",
        value: -4.97133e+09
    }, {
        name: "Moldova",
        value: -4.8519e+08
    }, {
        name: "Madagascar",
        value: -1.79251e+09
    }, {
        name: "Maldives",
        value: -2.20831e+08
    }, {
        name: "Mexico",
        value: -7.6572e+09
    }, {
        name: "Marshall Islands",
        value: -2.64005e+07
    }, {
        name: "Macedonia",
        value: -6.09565e+08
    }, {
        name: "Mali",
        value: -6.54869e+08
    }, {
        name: "Malta",
        value: -5.5761e+08
    }, {
        name: "Myanmar",
        value: 9.8601e+08
    }, {
        name: "Montenegro",
        value: -1.15029e+09
    }, {
        name: "Mongolia",
        value: -3.53045e+08
    }, {
        name: "Mozambique",
        value: -1.22619e+09
    }, {
        name: "Mauritania",
        value: 0
    }, {
        name: "Mauritius",
        value: -6.54972e+08
    }, {
        name: "Malawi",
        value: -5.43639e+08
    }, {
        name: "Malaysia",
        value: 3.1801e+10
    }, {
        name: "Namibia",
        value: -3.05992e+08
    }, {
        name: "New Caledonia",
        value: -8.23626e+08
    }, {
        name: "Niger",
        value: -1.32006e+09
    }, {
        name: "Nigeria",
        value: 1.38675e+10
    }, {
        name: "Nicaragua",
        value: -7.055e+08
    }, {
        name: "Netherlands",
        value: 5.00188e+10
    }, {
        name: "Norway",
        value: 4.5169e+10
    }, {
        name: "Nepal",
        value: 2.14142e+07
    }, {
        name: "New Zealand",
        value: -3.0102e+09
    }, {
        name: "Oman",
        value: -5.01062e+08
    }, {
        name: "Pakistan",
        value: -3.99343e+09
    }, {
        name: "Panama",
        value: -2.122e+08
    }, {
        name: "Peru",
        value: -7.2287e+08
    }, {
        name: "Philippines",
        value: 8.44817e+09
    }, {
        name: "Palau",
        value: -6.14324e+06
    }, {
        name: "Papua New Guinea",
        value: -5.85124e+08
    }, {
        name: "Poland",
        value: -1.7867e+10
    }, {
        name: "Portugal",
        value: -2.54539e+10
    }, {
        name: "Paraguay",
        value: 6.03744e+08
    }, {
        name: "West Bank",
        value: -1.14337e+09
    }, {
        name: "French Polynesia",
        value: -1.7096e+08
    }, {
        name: "Qatar",
        value: 0
    }, {
        name: "Romania",
        value: -8.23413e+09
    }, {
        name: "Russia",
        value: 5.03836e+10
    }, {
        name: "Rwanda",
        value: 0
    }, {
        name: "Saudi Arabia",
        value: 2.09546e+10
    }, {
        name: "Sudan",
        value: -4.92657e+09
    }, {
        name: "Senegal",
        value: -8.53773e+08
    }, {
        name: "Singapore",
        value: 3.2418e+10
    }, {
        name: "Solomon Is.",
        value: -5.95879e+07
    }, {
        name: "Sierra Leone",
        value: -3.26985e+08
    }, {
        name: "El Salvador",
        value: -3.12196e+08
    }, {
        name: "Serbia",
        value: -2.79959e+09
    }, {
        name: "South Sudan",
        value: 0
    }, {
        name: "Sao Tome and Principe",
        value: -7.87806e+07
    }, {
        name: "Suriname",
        value: 1.113e+08
    }, {
        name: "Slovak Republic",
        value: -3.01806e+09
    }, {
        name: "Slovenia",
        value: -2.77257e+08
    }, {
        name: "Sweden",
        value: 2.59182e+10
    }, {
        name: "Swaziland",
        value: -4.14313e+08
    }, {
        name: "Sint Maarten (Dutch part)",
        value: 0
    }, {
        name: "Seychelles",
        value: -1.89462e+08
    }, {
        name: "Syria",
        value: -1.02953e+09
    }, {
        name: "Chad",
        value: 0
    }, {
        name: "Togo",
        value: -1.76669e+08
    }, {
        name: "Thailand",
        value: 2.21891e+10
    }, {
        name: "Tajikistan",
        value: -1.80308e+08
    }, {
        name: "East Timor",
        value: 1.28496e+09
    }, {
        name: "Tonga",
        value: -9.85127e+07
    }, {
        name: "Trinidad and Tobago",
        value: 1.63278e+09
    }, {
        name: "Tunisia",
        value: -1.23375e+09
    }, {
        name: "Turkey",
        value: -1.1358e+10
    }, {
        name: "Tuvalu",
        value: -1.69068e+07
    }, {
        name: "United Republic of Tanzania",
        value: -1.80991e+09
    }, {
        name: "Uganda",
        value: -1.04804e+09
    }, {
        name: "Ukraine",
        value: -1.736e+09
    }, {
        name: "Uruguay",
        value: -3.81285e+08
    }, {
        name: "United States",
        value: -3.72522e+11
    }, {
        name: "St. Vincent and the Grenadines",
        value: -1.97326e+08
    }, {
        name: "Venezuela",
        value: 4.29e+08
    }, {
        name: "Vietnam",
        value: -6.608e+09
    }, {
        name: "Vanuatu",
        value: 1.02802e+07
    }, {
        name: "Samoa",
        value: -1.12047e+07
    }, {
        name: "Kosovo",
        value: -5.21883e+08
    }, {
        name: "Yemen",
        value: -2.52742e+09
    }, {
        name: "South Africa",
        value: -7.90682e+09
    }, {
        name: "Zambia",
        value: 9.12562e+08
    }, {
        name: "Zimbabwe",
        value: -9.40911e+08
    }, ];
    var value20 = [{
        name: "Aruba",
        value: -4.60112e+08
    }, {
        name: "Afghanistan",
        value: -1.65929e+09
    }, {
        name: "Angola",
        value: 7.50595e+09
    }, {
        name: "Albania",
        value: -1.35354e+09
    }, {
        name: "Argentina",
        value: -1.623e+09
    }, {
        name: "Armenia",
        value: -1.26143e+09
    }, {
        name: "Antigua and Barbuda",
        value: -1.67107e+08
    }, {
        name: "Australia",
        value: -4.47142e+10
    }, {
        name: "Austria",
        value: 1.14785e+10
    }, {
        name: "Azerbaijan",
        value: 1.50404e+10
    }, {
        name: "Burundi",
        value: -3.00982e+08
    }, {
        name: "Belgium",
        value: 7.97733e+09
    }, {
        name: "Benin",
        value: -5.30338e+08
    }, {
        name: "Burkina Faso",
        value: -1.81448e+08
    }, {
        name: "Bangladesh",
        value: 2.1085e+09
    }, {
        name: "Bulgaria",
        value: -9.6462e+08
    }, {
        name: "Bahrain",
        value: 7.70072e+08
    }, {
        name: "Bahamas",
        value: -8.14043e+08
    }, {
        name: "Bosnia and Herzegovina",
        value: -1.03066e+09
    }, {
        name: "Belarus",
        value: -8.2801e+09
    }, {
        name: "Belize",
        value: -4.57367e+07
    }, {
        name: "Bermuda",
        value: 6.95959e+08
    }, {
        name: "Bolivia",
        value: 8.73746e+08
    }, {
        name: "Brazil",
        value: -7.57597e+10
    }, {
        name: "Barbados",
        value: -2.18413e+08
    }, {
        name: "Brunei",
        value: 5.0162e+09
    }, {
        name: "Bhutan",
        value: -3.23097e+08
    }, {
        name: "Botswana",
        value: -2.90725e+08
    }, {
        name: "Central African Rep.",
        value: 0
    }, {
        name: "Canada",
        value: -5.81603e+10
    }, {
        name: "Switzerland",
        value: 8.67015e+10
    }, {
        name: "Chile",
        value: 2.96892e+09
    }, {
        name: "China",
        value: 2.3781e+11
    }, {
        name: "Ivory Coast",
        value: 4.64533e+08
    }, {
        name: "Cameroon",
        value: -8.56305e+08
    }, {
        name: "Dem. Rep. Congo",
        value: -2.1735e+09
    }, {
        name: "Congo",
        value: 9.0033e+08
    }, {
        name: "Colombia",
        value: -8.73216e+09
    }, {
        name: "Comoros",
        value: -3.92973e+07
    }, {
        name: "Cape Verde",
        value: -2.22769e+08
    }, {
        name: "Costa Rica",
        value: -1.21387e+09
    }, {
        name: "Curacao",
        value: 0
    }, {
        name: "Northern Cyprus",
        value: -2.90595e+09
    }, {
        name: "Czech Rep.",
        value: -7.3512e+09
    }, {
        name: "Germany",
        value: 1.93034e+11
    }, {
        name: "Djibouti",
        value: 5.04892e+07
    }, {
        name: "Dominican Rep.",
        value: -8.01847e+07
    }, {
        name: "Denmark",
        value: 2.1051e+10
    }, {
        name: "Dominican Republic",
        value: -4.0235e+09
    }, {
        name: "Algeria",
        value: 1.22203e+10
    }, {
        name: "Ecuador",
        value: -1.58254e+09
    }, {
        name: "Egypt",
        value: -4.5038e+09
    }, {
        name: "Euro area",
        value: -7.82531e+09
    }, {
        name: "Eritrea",
        value: 0
    }, {
        name: "Spain",
        value: -5.63631e+10
    }, {
        name: "Estonia",
        value: 3.43667e+08
    }, {
        name: "Ethiopia",
        value: -4.2543e+08
    }, {
        name: "Finland",
        value: 3.16768e+09
    }, {
        name: "Fiji",
        value: -1.49456e+08
    }, {
        name: "France",
        value: -2.20343e+10
    }, {
        name: "Faroe Islands",
        value: 1.44276e+08
    }, {
        name: "Micronesia, Fed. Sts.",
        value: -2.45727e+07
    }, {
        name: "Gabon",
        value: 0
    }, {
        name: "United Kingdom",
        value: -9.24991e+10
    }, {
        name: "Georgia",
        value: -1.1988e+09
    }, {
        name: "Ghana",
        value: -2.74734e+09
    }, {
        name: "French Guiana",
        value: -3.2689e+08
    }, {
        name: "Gambia",
        value: 1.74996e+07
    }, {
        name: "Guinea-Bissau",
        value: -7.07904e+07
    }, {
        name: "Equatorial Guinea",
        value: 0
    }, {
        name: "Greece",
        value: -3.02751e+10
    }, {
        name: "Grenada",
        value: -2.03902e+08
    }, {
        name: "Guatemala",
        value: -5.63258e+08
    }, {
        name: "Guyana",
        value: -2.46354e+08
    }, {
        name: "Hong Kong SAR, China",
        value: 1.60122e+10
    }, {
        name: "Honduras",
        value: -6.81536e+08
    }, {
        name: "Croatia",
        value: -8.94405e+08
    }, {
        name: "Haiti",
        value: -1.01824e+08
    }, {
        name: "Hungary",
        value: 3.46346e+08
    }, {
        name: "Indonesia",
        value: 5.14428e+09
    }, {
        name: "India",
        value: -5.45159e+10
    }, {
        name: "Ireland",
        value: 2.31869e+09
    }, {
        name: "Iran",
        value: 0
    }, {
        name: "Iraq",
        value: 6.4883e+09
    }, {
        name: "Iceland",
        value: -8.81086e+08
    }, {
        name: "Israel",
        value: 8.372e+09
    }, {
        name: "Italy",
        value: -7.30176e+10
    }, {
        name: "Jamaica",
        value: -9.34005e+08
    }, {
        name: "Jordan",
        value: -1.88195e+09
    }, {
        name: "Japan",
        value: 2.20888e+11
    }, {
        name: "Kazakhstan",
        value: 1.38571e+09
    }, {
        name: "Kenya",
        value: -2.36867e+09
    }, {
        name: "Kyrgyz Republic",
        value: -4.74562e+08
    }, {
        name: "Cambodia",
        value: -5.38178e+08
    }, {
        name: "Kiribati",
        value: 194588
    }, {
        name: "St. Kitts and Nevis",
        value: -1.38581e+08
    }, {
        name: "South Korea",
        value: 2.88504e+10
    }, {
        name: "Kuwait",
        value: 3.69892e+10
    }, {
        name: "Lao PDR",
        value: 2.93092e+07
    }, {
        name: "Lebanon",
        value: -7.55205e+09
    }, {
        name: "Liberia",
        value: -4.15239e+08
    }, {
        name: "Libya",
        value: 1.68007e+10
    }, {
        name: "St. Lucia",
        value: -2.02755e+08
    }, {
        name: "Sri Lanka",
        value: -1.07503e+09
    }, {
        name: "Lesotho",
        value: -1.58319e+08
    }, {
        name: "Lithuania",
        value: -4.87571e+08
    }, {
        name: "Luxembourg",
        value: 3.58515e+09
    }, {
        name: "Latvia",
        value: 4.94442e+08
    }, {
        name: "Macao SAR, China",
        value: 1.10891e+10
    }, {
        name: "Morocco",
        value: -3.92517e+09
    }, {
        name: "Moldova",
        value: -4.81469e+08
    }, {
        name: "Madagascar",
        value: -9.64229e+08
    }, {
        name: "Maldives",
        value: -1.96081e+08
    }, {
        name: "Mexico",
        value: -5.02289e+09
    }, {
        name: "Marshall Islands",
        value: -1.43404e+07
    }, {
        name: "Macedonia",
        value: -1.98295e+08
    }, {
        name: "Mali",
        value: -1.18994e+09
    }, {
        name: "Malta",
        value: -4.19944e+08
    }, {
        name: "Myanmar",
        value: 1.57416e+09
    }, {
        name: "Montenegro",
        value: -9.52373e+08
    }, {
        name: "Mongolia",
        value: -8.85472e+08
    }, {
        name: "Mozambique",
        value: -1.67944e+09
    }, {
        name: "Mauritania",
        value: 0
    }, {
        name: "Mauritius",
        value: -1.00577e+09
    }, {
        name: "Malawi",
        value: -9.69283e+08
    }, {
        name: "Malaysia",
        value: 2.56438e+10
    }, {
        name: "Namibia",
        value: -5.34109e+08
    }, {
        name: "New Caledonia",
        value: -1.35988e+09
    }, {
        name: "Niger",
        value: -1.13597e+09
    }, {
        name: "Nigeria",
        value: 1.31112e+10
    }, {
        name: "Nicaragua",
        value: -7.803e+08
    }, {
        name: "Netherlands",
        value: 6.18204e+10
    }, {
        name: "Norway",
        value: 5.02581e+10
    }, {
        name: "Nepal",
        value: -1.27616e+08
    }, {
        name: "New Zealand",
        value: -3.42938e+09
    }, {
        name: "Oman",
        value: 4.63401e+09
    }, {
        name: "Pakistan",
        value: -1.354e+09
    }, {
        name: "Panama",
        value: -3.1129e+09
    }, {
        name: "Peru",
        value: -3.78207e+09
    }, {
        name: "Philippines",
        value: 7.17916e+09
    }, {
        name: "Palau",
        value: -1.86787e+07
    }, {
        name: "Papua New Guinea",
        value: -6.33032e+08
    }, {
        name: "Poland",
        value: -2.5875e+10
    }, {
        name: "Portugal",
        value: -2.42017e+10
    }, {
        name: "Paraguay",
        value: 4.9433e+07
    }, {
        name: "West Bank",
        value: -1.30694e+09
    }, {
        name: "French Polynesia",
        value: -1.79195e+07
    }, {
        name: "Qatar",
        value: 0
    }, {
        name: "Romania",
        value: -8.47845e+09
    }, {
        name: "Russia",
        value: 6.74522e+10
    }, {
        name: "Rwanda",
        value: -4.26823e+08
    }, {
        name: "Saudi Arabia",
        value: 6.6751e+10
    }, {
        name: "Sudan",
        value: -1.72537e+09
    }, {
        name: "Senegal",
        value: -5.88903e+08
    }, {
        name: "Singapore",
        value: 5.5421e+10
    }, {
        name: "Solomon Is.",
        value: -1.44156e+08
    }, {
        name: "Sierra Leone",
        value: -5.85297e+08
    }, {
        name: "El Salvador",
        value: -5.32816e+08
    }, {
        name: "Serbia",
        value: -2.69187e+09
    }, {
        name: "South Sudan",
        value: 0
    }, {
        name: "Sao Tome and Principe",
        value: -8.75758e+07
    }, {
        name: "Suriname",
        value: 6.508e+08
    }, {
        name: "Slovak Republic",
        value: -4.2105e+09
    }, {
        name: "Slovenia",
        value: -5.48463e+07
    }, {
        name: "Sweden",
        value: 2.91958e+10
    }, {
        name: "Swaziland",
        value: -3.88309e+08
    }, {
        name: "Sint Maarten (Dutch part)",
        value: 0
    }, {
        name: "Seychelles",
        value: -2.1439e+08
    }, {
        name: "Syria",
        value: -3.67388e+08
    }, {
        name: "Chad",
        value: 0
    }, {
        name: "Togo",
        value: -1.99708e+08
    }, {
        name: "Thailand",
        value: 1.14861e+10
    }, {
        name: "Tajikistan",
        value: -5.40288e+08
    }, {
        name: "East Timor",
        value: 1.67138e+09
    }, {
        name: "Tonga",
        value: -7.97527e+07
    }, {
        name: "Trinidad and Tobago",
        value: 4.17233e+09
    }, {
        name: "Tunisia",
        value: -2.10444e+09
    }, {
        name: "Turkey",
        value: -4.4616e+10
    }, {
        name: "Tuvalu",
        value: -1.40138e+07
    }, {
        name: "United Republic of Tanzania",
        value: -2.21078e+09
    }, {
        name: "Uganda",
        value: -1.60977e+09
    }, {
        name: "Ukraine",
        value: -3.016e+09
    }, {
        name: "Uruguay",
        value: -7.30841e+08
    }, {
        name: "United States",
        value: -4.30702e+11
    }, {
        name: "St. Vincent and the Grenadines",
        value: -2.08313e+08
    }, {
        name: "Venezuela",
        value: 5.585e+09
    }, {
        name: "Vietnam",
        value: -4.276e+09
    }, {
        name: "Vanuatu",
        value: -4.21778e+07
    }, {
        name: "Samoa",
        value: -4.36618e+07
    }, {
        name: "Kosovo",
        value: -6.77584e+08
    }, {
        name: "Yemen",
        value: -1.05414e+09
    }, {
        name: "South Africa",
        value: -5.49224e+09
    }, {
        name: "Zambia",
        value: 1.52508e+09
    }, {
        name: "Zimbabwe",
        value: -1.4437e+09
    }, ];
    var value21 = [{
        name: "Aruba",
        value: -2.60559e+08
    }, {
        name: "Afghanistan",
        value: -2.77434e+09
    }, {
        name: "Angola",
        value: 1.30846e+10
    }, {
        name: "Albania",
        value: -1.66884e+09
    }, {
        name: "Argentina",
        value: -5.34018e+09
    }, {
        name: "Armenia",
        value: -1.05887e+09
    }, {
        name: "Antigua and Barbuda",
        value: -1.17693e+08
    }, {
        name: "Australia",
        value: -4.44312e+10
    }, {
        name: "Austria",
        value: 6.79446e+09
    }, {
        name: "Azerbaijan",
        value: 1.71449e+10
    }, {
        name: "Burundi",
        value: -2.83583e+08
    }, {
        name: "Belgium",
        value: -5.48668e+09
    }, {
        name: "Benin",
        value: -5.16162e+08
    }, {
        name: "Burkina Faso",
        value: -1.60183e+08
    }, {
        name: "Bangladesh",
        value: -1.61843e+08
    }, {
        name: "Bulgaria",
        value: 2.7249e+08
    }, {
        name: "Bahrain",
        value: 3.24734e+09
    }, {
        name: "Bahamas",
        value: -1.20314e+09
    }, {
        name: "Bosnia and Herzegovina",
        value: -1.76732e+09
    }, {
        name: "Belarus",
        value: -5.0525e+09
    }, {
        name: "Belize",
        value: -1.99489e+07
    }, {
        name: "Bermuda",
        value: 8.67597e+08
    }, {
        name: "Bolivia",
        value: 5.37205e+08
    }, {
        name: "Brazil",
        value: -7.69704e+10
    }, {
        name: "Barbados",
        value: -2.54241e+08
    }, {
        name: "Brunei",
        value: 6.43008e+09
    }, {
        name: "Bhutan",
        value: -5.26215e+08
    }, {
        name: "Botswana",
        value: 5.11066e+08
    }, {
        name: "Central African Rep.",
        value: 0
    }, {
        name: "Canada",
        value: -4.97286e+10
    }, {
        name: "Switzerland",
        value: 5.51638e+10
    }, {
        name: "Chile",
        value: -4.2583e+09
    }, {
        name: "China",
        value: 1.36097e+11
    }, {
        name: "Ivory Coast",
        value: 2.66272e+09
    }, {
        name: "Cameroon",
        value: -7.48216e+08
    }, {
        name: "Dem. Rep. Congo",
        value: -1.2806e+09
    }, {
        name: "Congo",
        value: 2.07043e+09
    }, {
        name: "Colombia",
        value: -9.80231e+09
    }, {
        name: "Comoros",
        value: -5.5427e+07
    }, {
        name: "Cape Verde",
        value: -3.04538e+08
    }, {
        name: "Costa Rica",
        value: -2.26506e+09
    }, {
        name: "Curacao",
        value: -8.79497e+08
    }, {
        name: "Northern Cyprus",
        value: -1.09926e+09
    }, {
        name: "Czech Rep.",
        value: -5.02006e+09
    }, {
        name: "Germany",
        value: 2.28666e+11
    }, {
        name: "Djibouti",
        value: -1.71842e+08
    }, {
        name: "Dominican Rep.",
        value: -6.79065e+07
    }, {
        name: "Denmark",
        value: 2.2682e+10
    }, {
        name: "Dominican Republic",
        value: -4.3587e+09
    }, {
        name: "Algeria",
        value: 1.76739e+10
    }, {
        name: "Ecuador",
        value: -3.99959e+08
    }, {
        name: "Egypt",
        value: -5.4839e+09
    }, {
        name: "Euro area",
        value: -1.36085e+10
    }, {
        name: "Eritrea",
        value: 0
    }, {
        name: "Spain",
        value: -4.70612e+10
    }, {
        name: "Estonia",
        value: 3.08834e+08
    }, {
        name: "Ethiopia",
        value: -7.83057e+08
    }, {
        name: "Finland",
        value: -4.9001e+09
    }, {
        name: "Fiji",
        value: -1.95009e+08
    }, {
        name: "France",
        value: -2.94898e+10
    }, {
        name: "Faroe Islands",
        value: 1.94304e+08
    }, {
        name: "Micronesia, Fed. Sts.",
        value: -4.42214e+07
    }, {
        name: "Gabon",
        value: 0
    }, {
        name: "United Kingdom",
        value: -6.2175e+10
    }, {
        name: "Georgia",
        value: -1.84308e+09
    }, {
        name: "Ghana",
        value: -3.54132e+09
    }, {
        name: "French Guiana",
        value: -1.16138e+09
    }, {
        name: "Gambia",
        value: -1.08143e+08
    }, {
        name: "Guinea-Bissau",
        value: -1.40506e+07
    }, {
        name: "Equatorial Guinea",
        value: 0
    }, {
        name: "Greece",
        value: -2.85829e+10
    }, {
        name: "Grenada",
        value: -2.07008e+08
    }, {
        name: "Guatemala",
        value: -1.59867e+09
    }, {
        name: "Guyana",
        value: -3.72289e+08
    }, {
        name: "Hong Kong SAR, China",
        value: 1.38085e+10
    }, {
        name: "Honduras",
        value: -1.40869e+09
    }, {
        name: "Croatia",
        value: -3.75677e+08
    }, {
        name: "Haiti",
        value: -3.23624e+08
    }, {
        name: "Hungary",
        value: 1.13235e+09
    }, {
        name: "Indonesia",
        value: 1.68507e+09
    }, {
        name: "India",
        value: -6.25176e+10
    }, {
        name: "Ireland",
        value: 2.82777e+09
    }, {
        name: "Iran",
        value: 0
    }, {
        name: "Iraq",
        value: 2.6126e+10
    }, {
        name: "Iceland",
        value: -7.70299e+08
    }, {
        name: "Israel",
        value: 6.2653e+09
    }, {
        name: "Italy",
        value: -6.82251e+10
    }, {
        name: "Jamaica",
        value: -2.06319e+09
    }, {
        name: "Jordan",
        value: -2.95602e+09
    }, {
        name: "Japan",
        value: 1.29597e+11
    }, {
        name: "Kazakhstan",
        value: 1.01986e+10
    }, {
        name: "Kenya",
        value: -3.8193e+09
    }, {
        name: "Kyrgyz Republic",
        value: -4.77061e+08
    }, {
        name: "Cambodia",
        value: -7.64977e+08
    }, {
        name: "Kiribati",
        value: -1.7302e+07
    }, {
        name: "St. Kitts and Nevis",
        value: -1.02199e+08
    }, {
        name: "South Korea",
        value: 1.86558e+10
    }, {
        name: "Kuwait",
        value: 6.61458e+10
    }, {
        name: "Lao PDR",
        value: -2.06326e+08
    }, {
        name: "Lebanon",
        value: -5.40772e+09
    }, {
        name: "Liberia",
        value: -7.55655e+08
    }, {
        name: "Libya",
        value: 3.1924e+09
    }, {
        name: "St. Lucia",
        value: -2.42683e+08
    }, {
        name: "Sri Lanka",
        value: -4.61542e+09
    }, {
        name: "Lesotho",
        value: -2.10838e+08
    }, {
        name: "Lithuania",
        value: -1.97038e+09
    }, {
        name: "Luxembourg",
        value: 3.58454e+09
    }, {
        name: "Latvia",
        value: -8.98672e+08
    }, {
        name: "Macao SAR, China",
        value: 1.49991e+10
    }, {
        name: "Morocco",
        value: -7.9996e+09
    }, {
        name: "Moldova",
        value: -8.51954e+08
    }, {
        name: "Madagascar",
        value: -7.30563e+08
    }, {
        name: "Maldives",
        value: -3.83439e+08
    }, {
        name: "Mexico",
        value: -1.23568e+10
    }, {
        name: "Marshall Islands",
        value: -5.77925e+06
    }, {
        name: "Macedonia",
        value: -2.61702e+08
    }, {
        name: "Mali",
        value: -6.56428e+08
    }, {
        name: "Malta",
        value: -1.30703e+07
    }, {
        name: "Myanmar",
        value: -1.56112e+09
    }, {
        name: "Montenegro",
        value: -7.91214e+08
    }, {
        name: "Mongolia",
        value: -4.51218e+09
    }, {
        name: "Mozambique",
        value: -3.32886e+09
    }, {
        name: "Mauritania",
        value: 0
    }, {
        name: "Mauritius",
        value: -1.5603e+09
    }, {
        name: "Malawi",
        value: -1.13671e+09
    }, {
        name: "Malaysia",
        value: 3.24916e+10
    }, {
        name: "Namibia",
        value: -8.42609e+08
    }, {
        name: "New Caledonia",
        value: -1.39162e+09
    }, {
        name: "Niger",
        value: -1.43106e+09
    }, {
        name: "Nigeria",
        value: 1.06684e+10
    }, {
        name: "Nicaragua",
        value: -1.1661e+09
    }, {
        name: "Netherlands",
        value: 8.13197e+10
    }, {
        name: "Norway",
        value: 6.64536e+10
    }, {
        name: "Nepal",
        value: 2.88605e+08
    }, {
        name: "New Zealand",
        value: -4.82284e+09
    }, {
        name: "Oman",
        value: 8.84512e+09
    }, {
        name: "Pakistan",
        value: -2.207e+09
    }, {
        name: "Panama",
        value: -4.5226e+09
    }, {
        name: "Peru",
        value: -2.99005e+09
    }, {
        name: "Philippines",
        value: 5.64273e+09
    }, {
        name: "Palau",
        value: -2.53442e+07
    }, {
        name: "Papua New Guinea",
        value: -1.71702e+08
    }, {
        name: "Poland",
        value: -2.7355e+10
    }, {
        name: "Portugal",
        value: -1.47826e+10
    }, {
        name: "Paraguay",
        value: 1.9971e+08
    }, {
        name: "West Bank",
        value: -2.06951e+09
    }, {
        name: "French Polynesia",
        value: 1.75363e+08
    }, {
        name: "Qatar",
        value: 5.21236e+10
    }, {
        name: "Romania",
        value: -9.27655e+09
    }, {
        name: "Russia",
        value: 9.72739e+10
    }, {
        name: "Rwanda",
        value: -4.68515e+08
    }, {
        name: "Saudi Arabia",
        value: 1.58545e+11
    }, {
        name: "Sudan",
        value: -2.65293e+09
    }, {
        name: "Senegal",
        value: -1.14666e+09
    }, {
        name: "Singapore",
        value: 6.1044e+10
    }, {
        name: "Solomon Is.",
        value: -1.87722e+07
    }, {
        name: "Sierra Leone",
        value: -1.91351e+09
    }, {
        name: "El Salvador",
        value: -1.11176e+09
    }, {
        name: "Serbia",
        value: -5.08711e+09
    }, {
        name: "South Sudan",
        value: 0
    }, {
        name: "Sao Tome and Principe",
        value: -1.05762e+08
    }, {
        name: "Suriname",
        value: 4.31308e+08
    }, {
        name: "Slovak Republic",
        value: -4.90656e+09
    }, {
        name: "Slovenia",
        value: 9.73875e+07
    }, {
        name: "Sweden",
        value: 3.12968e+10
    }, {
        name: "Swaziland",
        value: 4.85206e+07
    }, {
        name: "Sint Maarten (Dutch part)",
        value: -4.51341e+06
    }, {
        name: "Seychelles",
        value: -3.01285e+08
    }, {
        name: "Syria",
        value: 0
    }, {
        name: "Chad",
        value: 0
    }, {
        name: "Togo",
        value: -3.01707e+08
    }, {
        name: "Thailand",
        value: 9.42685e+09
    }, {
        name: "Tajikistan",
        value: -4.76458e+08
    }, {
        name: "East Timor",
        value: 2.34605e+09
    }, {
        name: "Tonga",
        value: -8.49621e+07
    }, {
        name: "Trinidad and Tobago",
        value: 4.29016e+09
    }, {
        name: "Tunisia",
        value: -3.38575e+09
    }, {
        name: "Turkey",
        value: -7.4402e+10
    }, {
        name: "Tuvalu",
        value: -2.38622e+07
    }, {
        name: "United Republic of Tanzania",
        value: -4.38095e+09
    }, {
        name: "Uganda",
        value: -2.08725e+09
    }, {
        name: "Ukraine",
        value: -1.0233e+10
    }, {
        name: "Uruguay",
        value: -1.31461e+09
    }, {
        name: "United States",
        value: -4.44593e+11
    }, {
        name: "St. Vincent and the Grenadines",
        value: -1.98879e+08
    }, {
        name: "Venezuela",
        value: 1.6342e+10
    }, {
        name: "Vietnam",
        value: 2.36e+08
    }, {
        name: "Vanuatu",
        value: -6.09568e+07
    }, {
        name: "Samoa",
        value: -8.35986e+07
    }, {
        name: "Kosovo",
        value: -8.45175e+08
    }, {
        name: "Yemen",
        value: -5.27367e+08
    }, {
        name: "South Africa",
        value: -9.31883e+09
    }, {
        name: "Zambia",
        value: 1.0928e+09
    }, {
        name: "Zimbabwe",
        value: -2.43184e+09
    }, ];
    var value22 = [{
        name: "Aruba",
        value: 9.0838e+07
    }, {
        name: "Afghanistan",
        value: -5.74691e+09
    }, {
        name: "Angola",
        value: 1.38412e+10
    }, {
        name: "Albania",
        value: -1.25797e+09
    }, {
        name: "Argentina",
        value: -2.13804e+09
    }, {
        name: "Armenia",
        value: -1.05792e+09
    }, {
        name: "Antigua and Barbuda",
        value: -1.66821e+08
    }, {
        name: "Australia",
        value: -6.44829e+10
    }, {
        name: "Austria",
        value: 6.1433e+09
    }, {
        name: "Azerbaijan",
        value: 1.4976e+10
    }, {
        name: "Burundi",
        value: -2.61157e+08
    }, {
        name: "Belgium",
        value: -2.34717e+08
    }, {
        name: "Benin",
        value: -5.76969e+08
    }, {
        name: "Burkina Faso",
        value: -1.62303e+08
    }, {
        name: "Bangladesh",
        value: 2.5755e+09
    }, {
        name: "Bulgaria",
        value: -5.2862e+08
    }, {
        name: "Bahrain",
        value: 2.22207e+09
    }, {
        name: "Bahamas",
        value: -1.5048e+09
    }, {
        name: "Bosnia and Herzegovina",
        value: -1.48597e+09
    }, {
        name: "Belarus",
        value: -1.8622e+09
    }, {
        name: "Belize",
        value: -3.31131e+07
    }, {
        name: "Bermuda",
        value: 9.26988e+08
    }, {
        name: "Bolivia",
        value: 1.97004e+09
    }, {
        name: "Brazil",
        value: -7.40586e+10
    }, {
        name: "Barbados",
        value: -4.10969e+08
    }, {
        name: "Brunei",
        value: 5.68374e+09
    }, {
        name: "Bhutan",
        value: -3.77037e+08
    }, {
        name: "Botswana",
        value: -1.50175e+08
    }, {
        name: "Central African Rep.",
        value: 0
    }, {
        name: "Canada",
        value: -6.56977e+10
    }, {
        name: "Switzerland",
        value: 6.867e+10
    }, {
        name: "Chile",
        value: -1.07058e+10
    }, {
        name: "China",
        value: 2.15392e+11
    }, {
        name: "Ivory Coast",
        value: -3.20553e+08
    }, {
        name: "Cameroon",
        value: -9.55988e+08
    }, {
        name: "Dem. Rep. Congo",
        value: -1.26046e+09
    }, {
        name: "Congo",
        value: 2.4214e+09
    }, {
        name: "Colombia",
        value: -1.13655e+10
    }, {
        name: "Comoros",
        value: -4.1141e+07
    }, {
        name: "Cape Verde",
        value: -2.43559e+08
    }, {
        name: "Costa Rica",
        value: -2.41109e+09
    }, {
        name: "Curacao",
        value: -8.95047e+08
    }, {
        name: "Northern Cyprus",
        value: -1.52551e+09
    }, {
        name: "Czech Rep.",
        value: -3.1585e+09
    }, {
        name: "Germany",
        value: 2.48918e+11
    }, {
        name: "Djibouti",
        value: -1.47968e+08
    }, {
        name: "Dominican Rep.",
        value: -9.2105e+07
    }, {
        name: "Denmark",
        value: 2.0461e+10
    }, {
        name: "Dominican Republic",
        value: -3.97057e+09
    }, {
        name: "Algeria",
        value: 1.20925e+10
    }, {
        name: "Ecuador",
        value: -1.51944e+08
    }, {
        name: "Egypt",
        value: -6.972e+09
    }, {
        name: "Euro area",
        value: 1.72938e+11
    }, {
        name: "Eritrea",
        value: 0
    }, {
        name: "Spain",
        value: -3.4197e+09
    }, {
        name: "Estonia",
        value: -4.44797e+08
    }, {
        name: "Ethiopia",
        value: -2.98527e+09
    }, {
        name: "Finland",
        value: -5.01938e+09
    }, {
        name: "Fiji",
        value: -5.69606e+07
    }, {
        name: "France",
        value: -3.28851e+10
    }, {
        name: "Faroe Islands",
        value: 0
    }, {
        name: "Micronesia, Fed. Sts.",
        value: -2.38321e+07
    }, {
        name: "Gabon",
        value: 0
    }, {
        name: "United Kingdom",
        value: -1.13098e+11
    }, {
        name: "Georgia",
        value: -1.85378e+09
    }, {
        name: "Ghana",
        value: -4.91171e+09
    }, {
        name: "French Guiana",
        value: -1.03862e+09
    }, {
        name: "Gambia",
        value: -9.27829e+07
    }, {
        name: "Guinea-Bissau",
        value: -8.3242e+07
    }, {
        name: "Equatorial Guinea",
        value: 0
    }, {
        name: "Greece",
        value: -6.17214e+09
    }, {
        name: "Grenada",
        value: -1.93203e+08
    }, {
        name: "Guatemala",
        value: -1.30962e+09
    }, {
        name: "Guyana",
        value: -3.6667e+08
    }, {
        name: "Hong Kong SAR, China",
        value: 4.14734e+09
    }, {
        name: "Honduras",
        value: -1.58076e+09
    }, {
        name: "Croatia",
        value: -2.07948e+08
    }, {
        name: "Haiti",
        value: -4.31148e+08
    }, {
        name: "Hungary",
        value: 2.18867e+09
    }, {
        name: "Indonesia",
        value: -2.44179e+10
    }, {
        name: "India",
        value: -9.14712e+10
    }, {
        name: "Ireland",
        value: 9.24523e+09
    }, {
        name: "Iran",
        value: 0
    }, {
        name: "Iraq",
        value: 2.9541e+10
    }, {
        name: "Iceland",
        value: -5.51499e+08
    }, {
        name: "Israel",
        value: 1.4861e+09
    }, {
        name: "Italy",
        value: -7.3241e+09
    }, {
        name: "Jamaica",
        value: -1.44019e+09
    }, {
        name: "Jordan",
        value: -4.71124e+09
    }, {
        name: "Japan",
        value: 6.0117e+10
    }, {
        name: "Kazakhstan",
        value: 1.05767e+09
    }, {
        name: "Kenya",
        value: -4.21615e+09
    }, {
        name: "Kyrgyz Republic",
        value: -1.02546e+09
    }, {
        name: "Cambodia",
        value: -1.15138e+09
    }, {
        name: "Kiribati",
        value: 3.61999e+06
    }, {
        name: "St. Kitts and Nevis",
        value: -8.47472e+07
    }, {
        name: "South Korea",
        value: 5.0835e+10
    }, {
        name: "Kuwait",
        value: 7.91221e+10
    }, {
        name: "Lao PDR",
        value: -4.12677e+08
    }, {
        name: "Lebanon",
        value: -9.56395e+09
    }, {
        name: "Liberia",
        value: -4.79941e+08
    }, {
        name: "Libya",
        value: 2.38363e+10
    }, {
        name: "St. Lucia",
        value: -1.8293e+08
    }, {
        name: "Sri Lanka",
        value: -4.00915e+09
    }, {
        name: "Lesotho",
        value: -3.77094e+08
    }, {
        name: "Lithuania",
        value: -6.16549e+08
    }, {
        name: "Luxembourg",
        value: 3.19995e+09
    }, {
        name: "Latvia",
        value: -1.02051e+09
    }, {
        name: "Macao SAR, China",
        value: 1.68925e+10
    }, {
        name: "Morocco",
        value: -9.57127e+09
    }, {
        name: "Moldova",
        value: -6.4362e+08
    }, {
        name: "Madagascar",
        value: -9.31009e+08
    }, {
        name: "Maldives",
        value: -1.84492e+08
    }, {
        name: "Mexico",
        value: -1.84324e+10
    }, {
        name: "Marshall Islands",
        value: -1.96115e+07
    }, {
        name: "Macedonia",
        value: -3.19136e+08
    }, {
        name: "Mali",
        value: -2.72667e+08
    }, {
        name: "Malta",
        value: 1.51308e+08
    }, {
        name: "Myanmar",
        value: -1.25965e+09
    }, {
        name: "Montenegro",
        value: -7.6922e+08
    }, {
        name: "Mongolia",
        value: -5.3807e+09
    }, {
        name: "Mozambique",
        value: -6.78998e+09
    }, {
        name: "Mauritania",
        value: -1.22609e+09
    }, {
        name: "Mauritius",
        value: -8.27512e+08
    }, {
        name: "Malawi",
        value: -7.4467e+08
    }, {
        name: "Malaysia",
        value: 1.63157e+10
    }, {
        name: "Namibia",
        value: -8.93841e+08
    }, {
        name: "New Caledonia",
        value: -1.93376e+09
    }, {
        name: "Niger",
        value: -1.02169e+09
    }, {
        name: "Nigeria",
        value: 1.73743e+10
    }, {
        name: "Nicaragua",
        value: -1.1319e+09
    }, {
        name: "Netherlands",
        value: 8.95457e+10
    }, {
        name: "Norway",
        value: 6.35954e+10
    }, {
        name: "Nepal",
        value: 5.76933e+08
    }, {
        name: "New Zealand",
        value: -6.8873e+09
    }, {
        name: "Oman",
        value: 7.81922e+09
    }, {
        name: "Pakistan",
        value: -2.342e+09
    }, {
        name: "Panama",
        value: -3.7351e+09
    }, {
        name: "Peru",
        value: -5.38792e+09
    }, {
        name: "Philippines",
        value: 6.94948e+09
    }, {
        name: "Palau",
        value: -3.44843e+07
    }, {
        name: "Papua New Guinea",
        value: -2.29871e+09
    }, {
        name: "Poland",
        value: -1.8605e+10
    }, {
        name: "Portugal",
        value: -3.95729e+09
    }, {
        name: "Paraguay",
        value: -2.86208e+08
    }, {
        name: "West Bank",
        value: -1.82114e+09
    }, {
        name: "French Polynesia",
        value: 7.81292e+07
    }, {
        name: "Qatar",
        value: 6.20002e+10
    }, {
        name: "Romania",
        value: -8.20007e+09
    }, {
        name: "Russia",
        value: 7.12822e+10
    }, {
        name: "Rwanda",
        value: -7.47169e+08
    }, {
        name: "Saudi Arabia",
        value: 1.64764e+11
    }, {
        name: "Sudan",
        value: -6.25906e+09
    }, {
        name: "Senegal",
        value: -1.52832e+09
    }, {
        name: "Singapore",
        value: 5.02522e+10
    }, {
        name: "Solomon Is.",
        value: 2.63905e+07
    }, {
        name: "Sierra Leone",
        value: -1.21021e+09
    }, {
        name: "El Salvador",
        value: -1.27947e+09
    }, {
        name: "Serbia",
        value: -4.72987e+09
    }, {
        name: "South Sudan",
        value: 0
    }, {
        name: "Sao Tome and Principe",
        value: -9.88702e+07
    }, {
        name: "Suriname",
        value: 1.62371e+08
    }, {
        name: "Slovak Republic",
        value: 8.89672e+08
    }, {
        name: "Slovenia",
        value: 9.92669e+08
    }, {
        name: "Sweden",
        value: 3.04339e+10
    }, {
        name: "Swaziland",
        value: 6.00303e+08
    }, {
        name: "Sint Maarten (Dutch part)",
        value: 9.26291e+07
    }, {
        name: "Seychelles",
        value: -1.61313e+08
    }, {
        name: "Syria",
        value: 0
    }, {
        name: "Chad",
        value: 0
    }, {
        name: "Togo",
        value: -2.94136e+08
    }, {
        name: "Thailand",
        value: -1.69833e+09
    }, {
        name: "Tajikistan",
        value: -6.98699e+08
    }, {
        name: "East Timor",
        value: 2.73602e+09
    }, {
        name: "Tonga",
        value: -3.87596e+07
    }, {
        name: "Trinidad and Tobago",
        value: 3.38052e+09
    }, {
        name: "Tunisia",
        value: -3.72138e+09
    }, {
        name: "Turkey",
        value: -4.7963e+10
    }, {
        name: "Tuvalu",
        value: 6.42838e+06
    }, {
        name: "United Republic of Tanzania",
        value: -3.76434e+09
    }, {
        name: "Uganda",
        value: -1.65559e+09
    }, {
        name: "Ukraine",
        value: -1.4335e+10
    }, {
        name: "Uruguay",
        value: -2.05633e+09
    }, {
        name: "United States",
        value: -4.26197e+11
    }, {
        name: "St. Vincent and the Grenadines",
        value: -1.92877e+08
    }, {
        name: "Venezuela",
        value: 2.586e+09
    }, {
        name: "Vietnam",
        value: 9.429e+09
    }, {
        name: "Vanuatu",
        value: -6.86145e+07
    }, {
        name: "Samoa",
        value: 770743
    }, {
        name: "Kosovo",
        value: -3.79868e+08
    }, {
        name: "Yemen",
        value: -3.34617e+08
    }, {
        name: "South Africa",
        value: -2.03149e+10
    }, {
        name: "Zambia",
        value: 1.37181e+09
    }, {
        name: "Zimbabwe",
        value: -1.83595e+09
    }, ];
    var value23 = [{
        name: "Aruba",
        value: -3.3124e+08
    }, {
        name: "Afghanistan",
        value: -5.03451e+09
    }, {
        name: "Angola",
        value: 8.14507e+09
    }, {
        name: "Albania",
        value: -1.18469e+09
    }, {
        name: "Argentina",
        value: -1.31244e+10
    }, {
        name: "Armenia",
        value: -8.13036e+08
    }, {
        name: "Antigua and Barbuda",
        value: -2.044e+08
    }, {
        name: "Australia",
        value: -4.78725e+10
    }, {
        name: "Austria",
        value: 8.37769e+09
    }, {
        name: "Azerbaijan",
        value: 1.22317e+10
    }, {
        name: "Burundi",
        value: -2.58429e+08
    }, {
        name: "Belgium",
        value: -1.57521e+09
    }, {
        name: "Benin",
        value: -6.73175e+08
    }, {
        name: "Burkina Faso",
        value: -1.34516e+09
    }, {
        name: "Bangladesh",
        value: 2.05847e+09
    }, {
        name: "Bulgaria",
        value: 6.7864e+08
    }, {
        name: "Bahrain",
        value: 2.56011e+09
    }, {
        name: "Bahamas",
        value: -1.49393e+09
    }, {
        name: "Bosnia and Herzegovina",
        value: -9.68194e+08
    }, {
        name: "Belarus",
        value: -7.5673e+09
    }, {
        name: "Belize",
        value: -7.25862e+07
    }, {
        name: "Bermuda",
        value: 8.4065e+08
    }, {
        name: "Bolivia",
        value: 1.05398e+09
    }, {
        name: "Brazil",
        value: -7.48389e+10
    }, {
        name: "Barbados",
        value: -2.48161e+08
    }, {
        name: "Brunei",
        value: 3.77824e+09
    }, {
        name: "Bhutan",
        value: -4.72192e+08
    }, {
        name: "Botswana",
        value: 1.41339e+09
    }, {
        name: "Central African Rep.",
        value: 0
    }, {
        name: "Canada",
        value: -5.94451e+10
    }, {
        name: "Switzerland",
        value: 7.78146e+10
    }, {
        name: "Chile",
        value: -1.15245e+10
    }, {
        name: "China",
        value: 1.48204e+11
    }, {
        name: "Ivory Coast",
        value: -6.32724e+08
    }, {
        name: "Cameroon",
        value: -1.12777e+09
    }, {
        name: "Dem. Rep. Congo",
        value: -3.1088e+09
    }, {
        name: "Congo",
        value: 1.9364e+09
    }, {
        name: "Colombia",
        value: -1.25035e+10
    }, {
        name: "Comoros",
        value: 0
    }, {
        name: "Cape Verde",
        value: -1.07359e+08
    }, {
        name: "Costa Rica",
        value: -2.43117e+09
    }, {
        name: "Curacao",
        value: -7.64134e+08
    }, {
        name: "Northern Cyprus",
        value: -1.19302e+09
    }, {
        name: "Czech Rep.",
        value: -1.10589e+09
    }, {
        name: "Germany",
        value: 2.52403e+11
    }, {
        name: "Djibouti",
        value: -1.3358e+08
    }, {
        name: "Dominican Rep.",
        value: -7.21492e+07
    }, {
        name: "Denmark",
        value: 2.66856e+10
    }, {
        name: "Dominican Republic",
        value: -2.53665e+09
    }, {
        name: "Algeria",
        value: 1.18789e+09
    }, {
        name: "Ecuador",
        value: -9.21008e+08
    }, {
        name: "Egypt",
        value: -3.5337e+09
    }, {
        name: "Euro area",
        value: 2.9443e+11
    }, {
        name: "Eritrea",
        value: 0
    }, {
        name: "Spain",
        value: 2.07543e+10
    }, {
        name: "Estonia",
        value: 1.32688e+08
    }, {
        name: "Ethiopia",
        value: -2.99856e+09
    }, {
        name: "Finland",
        value: -4.31222e+09
    }, {
        name: "Fiji",
        value: -4.06942e+08
    }, {
        name: "France",
        value: -2.43814e+10
    }, {
        name: "Faroe Islands",
        value: 0
    }, {
        name: "Micronesia, Fed. Sts.",
        value: -2.1734e+06
    }, {
        name: "Gabon",
        value: 0
    }, {
        name: "United Kingdom",
        value: -1.51895e+11
    }, {
        name: "Georgia",
        value: -9.35477e+08
    }, {
        name: "Ghana",
        value: -5.70403e+09
    }, {
        name: "French Guiana",
        value: -1.18977e+09
    }, {
        name: "Gambia",
        value: -9.71092e+07
    }, {
        name: "Guinea-Bissau",
        value: -5.25088e+07
    }, {
        name: "Equatorial Guinea",
        value: 0
    }, {
        name: "Greece",
        value: -4.94651e+09
    }, {
        name: "Grenada",
        value: -2.12831e+08
    }, {
        name: "Guatemala",
        value: -1.35111e+09
    }, {
        name: "Guyana",
        value: -4.5603e+08
    }, {
        name: "Hong Kong SAR, China",
        value: 4.19068e+09
    }, {
        name: "Honduras",
        value: -1.76252e+09
    }, {
        name: "Croatia",
        value: 5.66902e+08
    }, {
        name: "Haiti",
        value: -5.60838e+08
    }, {
        name: "Hungary",
        value: 5.09438e+09
    }, {
        name: "Indonesia",
        value: -2.91092e+10
    }, {
        name: "India",
        value: -4.91227e+10
    }, {
        name: "Ireland",
        value: 1.44377e+10
    }, {
        name: "Iran",
        value: 0
    }, {
        name: "Iraq",
        value: 2.25903e+10
    }, {
        name: "Iceland",
        value: 9.25853e+08
    }, {
        name: "Israel",
        value: 8.58e+09
    }, {
        name: "Italy",
        value: 2.13806e+10
    }, {
        name: "Jamaica",
        value: -1.35685e+09
    }, {
        name: "Jordan",
        value: -3.50387e+09
    }, {
        name: "Japan",
        value: 4.63785e+10
    }, {
        name: "Kazakhstan",
        value: 1.2735e+09
    }, {
        name: "Kenya",
        value: -4.84215e+09
    }, {
        name: "Kyrgyz Republic",
        value: -1.01043e+09
    }, {
        name: "Cambodia",
        value: -1.9842e+09
    }, {
        name: "Kiribati",
        value: 3.59544e+07
    }, {
        name: "St. Kitts and Nevis",
        value: -6.27033e+07
    }, {
        name: "South Korea",
        value: 8.11482e+10
    }, {
        name: "Kuwait",
        value: 6.94928e+10
    }, {
        name: "Lao PDR",
        value: -4.36867e+08
    }, {
        name: "Lebanon",
        value: -1.11627e+10
    }, {
        name: "Liberia",
        value: -5.35769e+08
    }, {
        name: "Libya",
        value: 9.6e+06
    }, {
        name: "St. Lucia",
        value: -1.00327e+08
    }, {
        name: "Sri Lanka",
        value: -2.54058e+09
    }, {
        name: "Lesotho",
        value: -1.67685e+08
    }, {
        name: "Lithuania",
        value: 3.92833e+08
    }, {
        name: "Luxembourg",
        value: 3.46155e+09
    }, {
        name: "Latvia",
        value: -8.22518e+08
    }, {
        name: "Macao SAR, China",
        value: 2.07437e+10
    }, {
        name: "Morocco",
        value: -7.84402e+09
    }, {
        name: "Moldova",
        value: -4.9031e+08
    }, {
        name: "Madagascar",
        value: -7.35141e+08
    }, {
        name: "Maldives",
        value: -1.27394e+08
    }, {
        name: "Mexico",
        value: -3.08687e+10
    }, {
        name: "Marshall Islands",
        value: -2.89175e+07
    }, {
        name: "Macedonia",
        value: -1.77155e+08
    }, {
        name: "Mali",
        value: -3.74656e+08
    }, {
        name: "Malta",
        value: 2.70412e+08
    }, {
        name: "Myanmar",
        value: -3.88583e+08
    }, {
        name: "Montenegro",
        value: -6.49026e+08
    }, {
        name: "Mongolia",
        value: -4.73184e+09
    }, {
        name: "Mozambique",
        value: -6.25345e+09
    }, {
        name: "Mauritania",
        value: -1.26176e+09
    }, {
        name: "Mauritius",
        value: -7.50275e+08
    }, {
        name: "Malawi",
        value: -1.23618e+09
    }, {
        name: "Malaysia",
        value: 1.12052e+10
    }, {
        name: "Namibia",
        value: -9.82812e+08
    }, {
        name: "New Caledonia",
        value: -1.8036e+09
    }, {
        name: "Niger",
        value: -1.15027e+09
    }, {
        name: "Nigeria",
        value: 1.9049e+10
    }, {
        name: "Nicaragua",
        value: -1.1987e+09
    }, {
        name: "Netherlands",
        value: 8.54959e+10
    }, {
        name: "Norway",
        value: 5.34498e+10
    }, {
        name: "Nepal",
        value: 1.16016e+09
    }, {
        name: "New Zealand",
        value: -5.85179e+09
    }, {
        name: "Oman",
        value: 5.20365e+09
    }, {
        name: "Pakistan",
        value: -4.416e+09
    }, {
        name: "Panama",
        value: -4.084e+09
    }, {
        name: "Peru",
        value: -9.38764e+09
    }, {
        name: "Philippines",
        value: 1.13835e+10
    }, {
        name: "Palau",
        value: -2.92116e+07
    }, {
        name: "Papua New Guinea",
        value: -3.45011e+09
    }, {
        name: "Poland",
        value: -6.749e+09
    }, {
        name: "Portugal",
        value: 3.59489e+09
    }, {
        name: "Paraguay",
        value: 6.21288e+08
    }, {
        name: "West Bank",
        value: -2.38368e+09
    }, {
        name: "French Polynesia",
        value: 1.97455e+08
    }, {
        name: "Qatar",
        value: 6.0461e+10
    }, {
        name: "Romania",
        value: -2.07633e+09
    }, {
        name: "Russia",
        value: 3.34282e+10
    }, {
        name: "Rwanda",
        value: -5.5629e+08
    }, {
        name: "Saudi Arabia",
        value: 1.35442e+11
    }, {
        name: "Sudan",
        value: -5.82207e+09
    }, {
        name: "Senegal",
        value: -1.54969e+09
    }, {
        name: "Singapore",
        value: 5.11683e+10
    }, {
        name: "Solomon Is.",
        value: -3.85465e+07
    }, {
        name: "Sierra Leone",
        value: -7.37095e+08
    }, {
        name: "El Salvador",
        value: -1.58564e+09
    }, {
        name: "Serbia",
        value: -2.79458e+09
    }, {
        name: "South Sudan",
        value: 0
    }, {
        name: "Sao Tome and Principe",
        value: -8.12607e+07
    }, {
        name: "Suriname",
        value: -1.96006e+08
    }, {
        name: "Slovak Republic",
        value: 1.79728e+09
    }, {
        name: "Slovenia",
        value: 2.11209e+09
    }, {
        name: "Sweden",
        value: 3.04658e+10
    }, {
        name: "Swaziland",
        value: 8.43848e+08
    }, {
        name: "Sint Maarten (Dutch part)",
        value: 4.31788e+06
    }, {
        name: "Seychelles",
        value: -1.58609e+08
    }, {
        name: "Syria",
        value: 0
    }, {
        name: "Chad",
        value: 0
    }, {
        name: "Togo",
        value: -5.68256e+08
    }, {
        name: "Thailand",
        value: -4.86116e+09
    }, {
        name: "Tajikistan",
        value: -6.59248e+08
    }, {
        name: "East Timor",
        value: 2.39004e+09
    }, {
        name: "Tonga",
        value: -3.25025e+07
    }, {
        name: "Trinidad and Tobago",
        value: 5.41033e+09
    }, {
        name: "Tunisia",
        value: -3.87866e+09
    }, {
        name: "Turkey",
        value: -6.3642e+10
    }, {
        name: "Tuvalu",
        value: 6.80826e+06
    }, {
        name: "United Republic of Tanzania",
        value: -4.98795e+09
    }, {
        name: "Uganda",
        value: -1.85538e+09
    }, {
        name: "Ukraine",
        value: -1.6518e+10
    }, {
        name: "Uruguay",
        value: -1.93051e+09
    }, {
        name: "United States",
        value: -3.49544e+11
    }, {
        name: "St. Vincent and the Grenadines",
        value: -2.10277e+08
    }, {
        name: "Venezuela",
        value: 4.604e+09
    }, {
        name: "Vietnam",
        value: 7.745e+09
    }, {
        name: "Vanuatu",
        value: -5.15307e+06
    }, {
        name: "Samoa",
        value: -4.46819e+07
    }, {
        name: "Kosovo",
        value: -2.4118e+08
    }, {
        name: "Yemen",
        value: -1.53049e+09
    }, {
        name: "South Africa",
        value: -2.16385e+10
    }, {
        name: "Zambia",
        value: -1.61482e+08
    }, {
        name: "Zimbabwe",
        value: -2.52572e+09
    }, ];
    var value24 = [{
        name: "Aruba",
        value: -1.35499e+08
    }, {
        name: "Afghanistan",
        value: -3.93938e+09
    }, {
        name: "Angola",
        value: -3.74752e+09
    }, {
        name: "Albania",
        value: -1.42363e+09
    }, {
        name: "Argentina",
        value: -9.17903e+09
    }, {
        name: "Armenia",
        value: -8.82887e+08
    }, {
        name: "Antigua and Barbuda",
        value: 2.57671e+07
    }, {
        name: "Australia",
        value: -4.23173e+10
    }, {
        name: "Austria",
        value: 1.0585e+10
    }, {
        name: "Azerbaijan",
        value: 1.02088e+10
    }, {
        name: "Burundi",
        value: -3.93213e+08
    }, {
        name: "Belgium",
        value: -4.66799e+09
    }, {
        name: "Benin",
        value: -8.84915e+08
    }, {
        name: "Burkina Faso",
        value: -9.97626e+08
    }, {
        name: "Bangladesh",
        value: 7.55791e+08
    }, {
        name: "Bulgaria",
        value: 1.0035e+08
    }, {
        name: "Bahrain",
        value: 1.12367e+09
    }, {
        name: "Bahamas",
        value: -1.88528e+09
    }, {
        name: "Bosnia and Herzegovina",
        value: -1.37537e+09
    }, {
        name: "Belarus",
        value: -5.2277e+09
    }, {
        name: "Belize",
        value: -1.35861e+08
    }, {
        name: "Bermuda",
        value: 8.17578e+08
    }, {
        name: "Bolivia",
        value: 5.70409e+08
    }, {
        name: "Brazil",
        value: -1.04181e+11
    }, {
        name: "Barbados",
        value: 0
    }, {
        name: "Brunei",
        value: 5.25059e+09
    }, {
        name: "Bhutan",
        value: -4.83459e+08
    }, {
        name: "Botswana",
        value: 2.49027e+09
    }, {
        name: "Central African Rep.",
        value: 0
    }, {
        name: "Canada",
        value: -4.31862e+10
    }, {
        name: "Switzerland",
        value: 6.0032e+10
    }, {
        name: "Chile",
        value: -4.50091e+09
    }, {
        name: "China",
        value: 2.36047e+11
    }, {
        name: "Ivory Coast",
        value: 5.10035e+08
    }, {
        name: "Cameroon",
        value: -1.40011e+09
    }, {
        name: "Dem. Rep. Congo",
        value: -1.72261e+09
    }, {
        name: "Congo",
        value: 6.78875e+08
    }, {
        name: "Colombia",
        value: -1.97681e+10
    }, {
        name: "Comoros",
        value: 0
    }, {
        name: "Cape Verde",
        value: -1.68961e+08
    }, {
        name: "Costa Rica",
        value: -2.4531e+09
    }, {
        name: "Curacao",
        value: -5.05816e+08
    }, {
        name: "Northern Cyprus",
        value: -1.00821e+09
    }, {
        name: "Czech Rep.",
        value: 4.5772e+08
    }, {
        name: "Germany",
        value: 2.88186e+11
    }, {
        name: "Djibouti",
        value: -2.29894e+08
    }, {
        name: "Dominican Rep.",
        value: -3.7706e+07
    }, {
        name: "Denmark",
        value: 3.13485e+10
    }, {
        name: "Dominican Republic",
        value: -2.1702e+09
    }, {
        name: "Algeria",
        value: -9.50689e+09
    }, {
        name: "Ecuador",
        value: -5.22017e+08
    }, {
        name: "Egypt",
        value: -5.9721e+09
    }, {
        name: "Euro area",
        value: 3.21009e+11
    }, {
        name: "Eritrea",
        value: 0
    }, {
        name: "Spain",
        value: 1.41338e+10
    }, {
        name: "Estonia",
        value: 5.06332e+07
    }, {
        name: "Ethiopia",
        value: -5.72702e+09
    }, {
        name: "Finland",
        value: -3.57893e+09
    }, {
        name: "Fiji",
        value: -3.38987e+08
    }, {
        name: "France",
        value: -3.73556e+10
    }, {
        name: "Faroe Islands",
        value: 0
    }, {
        name: "Micronesia, Fed. Sts.",
        value: 2.24076e+07
    }, {
        name: "Gabon",
        value: 0
    }, {
        name: "United Kingdom",
        value: -1.61162e+11
    }, {
        name: "Georgia",
        value: -1.76403e+09
    }, {
        name: "Ghana",
        value: -3.69458e+09
    }, {
        name: "French Guiana",
        value: -9.81677e+08
    }, {
        name: "Gambia",
        value: -8.45573e+07
    }, {
        name: "Guinea-Bissau",
        value: 6.31029e+06
    }, {
        name: "Equatorial Guinea",
        value: 0
    }, {
        name: "Greece",
        value: -3.73573e+09
    }, {
        name: "Grenada",
        value: -4.0382e+07
    }, {
        name: "Guatemala",
        value: -1.22974e+09
    }, {
        name: "Guyana",
        value: -3.85183e+08
    }, {
        name: "Hong Kong SAR, China",
        value: 4.05716e+09
    }, {
        name: "Honduras",
        value: -1.44424e+09
    }, {
        name: "Croatia",
        value: 4.48061e+08
    }, {
        name: "Haiti",
        value: -7.50652e+08
    }, {
        name: "Hungary",
        value: 2.03841e+09
    }, {
        name: "Indonesia",
        value: -2.75099e+10
    }, {
        name: "India",
        value: -2.73143e+10
    }, {
        name: "Ireland",
        value: 8.91435e+09
    }, {
        name: "Iran",
        value: 0
    }, {
        name: "Iraq",
        value: 2.44278e+10
    }, {
        name: "Iceland",
        value: 6.59452e+08
    }, {
        name: "Israel",
        value: 1.18428e+10
    }, {
        name: "Italy",
        value: 4.0315e+10
    }, {
        name: "Jamaica",
        value: -1.11435e+09
    }, {
        name: "Jordan",
        value: -2.60779e+09
    }, {
        name: "Japan",
        value: 3.63515e+10
    }, {
        name: "Kazakhstan",
        value: 6.13985e+09
    }, {
        name: "Kenya",
        value: -6.37793e+09
    }, {
        name: "Kyrgyz Republic",
        value: -1.30127e+09
    }, {
        name: "Cambodia",
        value: -1.64047e+09
    }, {
        name: "Kiribati",
        value: 9.6027e+07
    }, {
        name: "St. Kitts and Nevis",
        value: -4.1695e+07
    }, {
        name: "South Korea",
        value: 8.4373e+10
    }, {
        name: "Kuwait",
        value: 5.39659e+10
    }, {
        name: "Lao PDR",
        value: -1.17833e+09
    }, {
        name: "Lebanon",
        value: -1.16714e+10
    }, {
        name: "Liberia",
        value: -1.61143e+09
    }, {
        name: "Libya",
        value: -1.90333e+10
    }, {
        name: "St. Lucia",
        value: 5.18301e+07
    }, {
        name: "Sri Lanka",
        value: -1.98768e+09
    }, {
        name: "Lesotho",
        value: -1.22513e+08
    }, {
        name: "Lithuania",
        value: 1.49978e+09
    }, {
        name: "Luxembourg",
        value: 3.44461e+09
    }, {
        name: "Latvia",
        value: -5.54545e+08
    }, {
        name: "Macao SAR, China",
        value: 1.89171e+10
    }, {
        name: "Morocco",
        value: -6.59727e+09
    }, {
        name: "Moldova",
        value: -5.6769e+08
    }, {
        name: "Madagascar",
        value: -1.45403e+08
    }, {
        name: "Maldives",
        value: -1.17822e+08
    }, {
        name: "Mexico",
        value: -2.3717e+10
    }, {
        name: "Marshall Islands",
        value: -4.87937e+06
    }, {
        name: "Macedonia",
        value: -7.15682e+07
    }, {
        name: "Mali",
        value: -6.75835e+08
    }, {
        name: "Malta",
        value: 9.91368e+08
    }, {
        name: "Myanmar",
        value: -1.83261e+09
    }, {
        name: "Montenegro",
        value: -6.98726e+08
    }, {
        name: "Mongolia",
        value: -1.93434e+09
    }, {
        name: "Mozambique",
        value: -5.79715e+09
    }, {
        name: "Mauritania",
        value: -1.47312e+09
    }, {
        name: "Mauritius",
        value: -7.14256e+08
    }, {
        name: "Malawi",
        value: -1.12854e+09
    }, {
        name: "Malaysia",
        value: 1.48465e+10
    }, {
        name: "Namibia",
        value: -1.2103e+09
    }, {
        name: "New Caledonia",
        value: -1.25211e+09
    }, {
        name: "Niger",
        value: -1.30519e+09
    }, {
        name: "Nigeria",
        value: 8.992e+08
    }, {
        name: "Nicaragua",
        value: -8.44e+08
    }, {
        name: "Netherlands",
        value: 7.59334e+10
    }, {
        name: "Norway",
        value: 5.49647e+10
    }, {
        name: "Nepal",
        value: 4.96225e+08
    }, {
        name: "New Zealand",
        value: -6.36683e+09
    }, {
        name: "Oman",
        value: 4.20634e+09
    }, {
        name: "Pakistan",
        value: -3.642e+09
    }, {
        name: "Panama",
        value: -6.6772e+09
    }, {
        name: "Peru",
        value: -8.92536e+09
    }, {
        name: "Philippines",
        value: 1.07559e+10
    }, {
        name: "Palau",
        value: -4.83937e+07
    }, {
        name: "Papua New Guinea",
        value: 2.38687e+09
    }, {
        name: "Poland",
        value: -1.1444e+10
    }, {
        name: "Portugal",
        value: 1.41839e+08
    }, {
        name: "Paraguay",
        value: -5.06726e+07
    }, {
        name: "West Bank",
        value: -2.14913e+09
    }, {
        name: "French Polynesia",
        value: 2.64324e+08
    }, {
        name: "Qatar",
        value: 4.94099e+10
    }, {
        name: "Romania",
        value: -1.38275e+09
    }, {
        name: "Russia",
        value: 5.75128e+10
    }, {
        name: "Rwanda",
        value: -9.43446e+08
    }, {
        name: "Saudi Arabia",
        value: 7.37582e+10
    }, {
        name: "Sudan",
        value: -3.54547e+09
    }, {
        name: "Senegal",
        value: -1.34784e+09
    }, {
        name: "Singapore",
        value: 6.08189e+10
    }, {
        name: "Solomon Is.",
        value: -4.95651e+07
    }, {
        name: "Sierra Leone",
        value: -4.7273e+08
    }, {
        name: "El Salvador",
        value: -1.21151e+09
    }, {
        name: "Serbia",
        value: -2.63463e+09
    }, {
        name: "South Sudan",
        value: -9.35399e+08
    }, {
        name: "Sao Tome and Principe",
        value: -1.03876e+08
    }, {
        name: "Suriname",
        value: -4.16349e+08
    }, {
        name: "Slovak Republic",
        value: 1.19882e+09
    }, {
        name: "Slovenia",
        value: 2.89181e+09
    }, {
        name: "Sweden",
        value: 2.65385e+10
    }, {
        name: "Swaziland",
        value: 9.28722e+08
    }, {
        name: "Sint Maarten (Dutch part)",
        value: -1.10799e+08
    }, {
        name: "Seychelles",
        value: -3.10277e+08
    }, {
        name: "Syria",
        value: 0
    }, {
        name: "Chad",
        value: 0
    }, {
        name: "Togo",
        value: -4.5786e+08
    }, {
        name: "Thailand",
        value: 1.5224e+10
    }, {
        name: "Tajikistan",
        value: -2.61174e+08
    }, {
        name: "East Timor",
        value: 1.10616e+09
    }, {
        name: "Tonga",
        value: -6.87529e+07
    }, {
        name: "Trinidad and Tobago",
        value: 4.00943e+09
    }, {
        name: "Tunisia",
        value: -4.34058e+09
    }, {
        name: "Turkey",
        value: -4.3644e+10
    }, {
        name: "Tuvalu",
        value: 0
    }, {
        name: "United Republic of Tanzania",
        value: -5.34372e+09
    }, {
        name: "Uganda",
        value: -2.17911e+09
    }, {
        name: "Ukraine",
        value: -4.596e+09
    }, {
        name: "Uruguay",
        value: -1.73259e+09
    }, {
        name: "United States",
        value: -3.73796e+11
    }, {
        name: "St. Vincent and the Grenadines",
        value: -1.86881e+08
    }, {
        name: "Venezuela",
        value: 4.919e+09
    }, {
        name: "Vietnam",
        value: 9.359e+09
    }, {
        name: "Vanuatu",
        value: 1.94536e+07
    }, {
        name: "Samoa",
        value: -4.76272e+07
    }, {
        name: "Kosovo",
        value: -5.01514e+08
    }, {
        name: "Yemen",
        value: -1.48825e+09
    }, {
        name: "South Africa",
        value: -1.86826e+10
    }, {
        name: "Zambia",
        value: -3.87328e+08
    }, {
        name: "Zimbabwe",
        value: -2.25433e+09
    }, ];
    var value25 = [{
        name: "Aruba",
        value: 1.1069e+08
    }, {
        name: "Afghanistan",
        value: -5.00682e+09
    }, {
        name: "Angola",
        value: -1.02728e+10
    }, {
        name: "Albania",
        value: -9.78126e+08
    }, {
        name: "Argentina",
        value: -1.7622e+10
    }, {
        name: "Armenia",
        value: -2.72428e+08
    }, {
        name: "Antigua and Barbuda",
        value: 9.28107e+07
    }, {
        name: "Australia",
        value: -5.80649e+10
    }, {
        name: "Austria",
        value: 7.3878e+09
    }, {
        name: "Azerbaijan",
        value: -2.22495e+08
    }, {
        name: "Burundi",
        value: -3.73268e+08
    }, {
        name: "Belgium",
        value: -6.9022e+08
    }, {
        name: "Benin",
        value: -7.44457e+08
    }, {
        name: "Burkina Faso",
        value: -8.94723e+08
    }, {
        name: "Bangladesh",
        value: 2.57962e+09
    }, {
        name: "Bulgaria",
        value: -2.081e+07
    }, {
        name: "Bahrain",
        value: 0
    }, {
        name: "Bahamas",
        value: -1.20317e+09
    }, {
        name: "Bosnia and Herzegovina",
        value: -9.15896e+08
    }, {
        name: "Belarus",
        value: -1.831e+09
    }, {
        name: "Belize",
        value: -1.74736e+08
    }, {
        name: "Bermuda",
        value: 8.85863e+08
    }, {
        name: "Bolivia",
        value: -1.93621e+09
    }, {
        name: "Brazil",
        value: -5.94343e+10
    }, {
        name: "Barbados",
        value: 0
    }, {
        name: "Brunei",
        value: 2.15665e+09
    }, {
        name: "Bhutan",
        value: -5.72316e+08
    }, {
        name: "Botswana",
        value: 1.19608e+09
    }, {
        name: "Central African Rep.",
        value: 0
    }, {
        name: "Canada",
        value: -5.61881e+10
    }, {
        name: "Switzerland",
        value: 7.38017e+10
    }, {
        name: "Chile",
        value: -4.6698e+09
    }, {
        name: "China",
        value: 3.04164e+11
    }, {
        name: "Ivory Coast",
        value: -2.01292e+08
    }, {
        name: "Cameroon",
        value: -1.1728e+09
    }, {
        name: "Dem. Rep. Congo",
        value: -1.48376e+09
    }, {
        name: "Congo",
        value: -4.62707e+09
    }, {
        name: "Colombia",
        value: -1.85858e+10
    }, {
        name: "Comoros",
        value: 0
    }, {
        name: "Cape Verde",
        value: -5.05933e+07
    }, {
        name: "Costa Rica",
        value: -1.9724e+09
    }, {
        name: "Curacao",
        value: -5.19341e+08
    }, {
        name: "Northern Cyprus",
        value: -2.79903e+08
    }, {
        name: "Czech Rep.",
        value: 4.60992e+08
    }, {
        name: "Germany",
        value: 2.88151e+11
    }, {
        name: "Djibouti",
        value: -3.01666e+08
    }, {
        name: "Dominican Rep.",
        value: -1.02706e+07
    }, {
        name: "Denmark",
        value: 2.65587e+10
    }, {
        name: "Dominican Republic",
        value: -1.2803e+09
    }, {
        name: "Algeria",
        value: -2.72294e+10
    }, {
        name: "Ecuador",
        value: -2.1121e+09
    }, {
        name: "Egypt",
        value: -1.67865e+10
    }, {
        name: "Euro area",
        value: 3.70656e+11
    }, {
        name: "Eritrea",
        value: 0
    }, {
        name: "Spain",
        value: 1.33795e+10
    }, {
        name: "Estonia",
        value: 4.37549e+08
    }, {
        name: "Ethiopia",
        value: -7.51106e+09
    }, {
        name: "Finland",
        value: -1.3936e+09
    }, {
        name: "Fiji",
        value: -7.24236e+07
    }, {
        name: "France",
        value: -1.07744e+10
    }, {
        name: "Faroe Islands",
        value: 0
    }, {
        name: "Micronesia, Fed. Sts.",
        value: 0
    }, {
        name: "Gabon",
        value: 0
    }, {
        name: "United Kingdom",
        value: -1.49805e+11
    }, {
        name: "Georgia",
        value: -1.68374e+09
    }, {
        name: "Ghana",
        value: -2.82364e+09
    }, {
        name: "French Guiana",
        value: -1.0202e+09
    }, {
        name: "Gambia",
        value: -9.91738e+07
    }, {
        name: "Guinea-Bissau",
        value: 2.09419e+07
    }, {
        name: "Equatorial Guinea",
        value: 0
    }, {
        name: "Greece",
        value: -4.59309e+08
    }, {
        name: "Grenada",
        value: -3.82566e+07
    }, {
        name: "Guatemala",
        value: -9.64e+07
    }, {
        name: "Guyana",
        value: -3.88223e+07
    }, {
        name: "Hong Kong SAR, China",
        value: 1.02641e+10
    }, {
        name: "Honduras",
        value: -1.29143e+09
    }, {
        name: "Croatia",
        value: 2.49156e+09
    }, {
        name: "Haiti",
        value: -2.70776e+08
    }, {
        name: "Hungary",
        value: 4.13854e+09
    }, {
        name: "Indonesia",
        value: -1.75187e+10
    }, {
        name: "India",
        value: -2.24568e+10
    }, {
        name: "Ireland",
        value: 3.16698e+10
    }, {
        name: "Iran",
        value: 0
    }, {
        name: "Iraq",
        value: 4.1213e+09
    }, {
        name: "Iceland",
        value: 8.81888e+08
    }, {
        name: "Israel",
        value: 1.53587e+10
    }, {
        name: "Italy",
        value: 2.81493e+10
    }, {
        name: "Jamaica",
        value: -4.30101e+08
    }, {
        name: "Jordan",
        value: -3.40579e+09
    }, {
        name: "Japan",
        value: 1.34134e+11
    }, {
        name: "Kazakhstan",
        value: -5.13444e+09
    }, {
        name: "Kenya",
        value: -4.28895e+09
    }, {
        name: "Kyrgyz Republic",
        value: -1.05243e+09
    }, {
        name: "Cambodia",
        value: -1.69163e+09
    }, {
        name: "Kiribati",
        value: 7.90051e+07
    }, {
        name: "St. Kitts and Nevis",
        value: -8.53852e+07
    }, {
        name: "South Korea",
        value: 1.0594e+11
    }, {
        name: "Kuwait",
        value: 8.58424e+09
    }, {
        name: "Lao PDR",
        value: -2.27694e+09
    }, {
        name: "Lebanon",
        value: -8.11997e+09
    }, {
        name: "Liberia",
        value: -8.59626e+08
    }, {
        name: "Libya",
        value: -9.346e+09
    }, {
        name: "St. Lucia",
        value: 1.12202e+08
    }, {
        name: "Sri Lanka",
        value: -1.88277e+09
    }, {
        name: "Lesotho",
        value: -7.76397e+07
    }, {
        name: "Lithuania",
        value: -1.17127e+09
    }, {
        name: "Luxembourg",
        value: 2.88194e+09
    }, {
        name: "Latvia",
        value: -1.3026e+08
    }, {
        name: "Macao SAR, China",
        value: 1.14584e+10
    }, {
        name: "Morocco",
        value: -2.1607e+09
    }, {
        name: "Moldova",
        value: -4.6772e+08
    }, {
        name: "Madagascar",
        value: -3.16007e+08
    }, {
        name: "Maldives",
        value: -2.94075e+08
    }, {
        name: "Mexico",
        value: -2.93274e+10
    }, {
        name: "Marshall Islands",
        value: -7.03224e+06
    }, {
        name: "Macedonia",
        value: -1.92572e+08
    }, {
        name: "Mali",
        value: 0
    }, {
        name: "Malta",
        value: 4.71591e+08
    }, {
        name: "Myanmar",
        value: -2.44976e+09
    }, {
        name: "Montenegro",
        value: -5.32562e+08
    }, {
        name: "Mongolia",
        value: -9.48455e+08
    }, {
        name: "Mozambique",
        value: -5.96785e+09
    }, {
        name: "Mauritania",
        value: -9.55947e+08
    }, {
        name: "Mauritius",
        value: -5.87298e+08
    }, {
        name: "Malawi",
        value: -9.30243e+08
    }, {
        name: "Malaysia",
        value: 9.06764e+09
    }, {
        name: "Namibia",
        value: -1.63514e+09
    }, {
        name: "New Caledonia",
        value: -1.10168e+09
    }, {
        name: "Niger",
        value: -1.48562e+09
    }, {
        name: "Nigeria",
        value: -1.57632e+10
    }, {
        name: "Nicaragua",
        value: -1.1438e+09
    }, {
        name: "Netherlands",
        value: 6.58277e+10
    }, {
        name: "Norway",
        value: 3.11056e+10
    }, {
        name: "Nepal",
        value: 2.44663e+09
    }, {
        name: "New Zealand",
        value: -5.25433e+09
    }, {
        name: "Oman",
        value: -1.0969e+10
    }, {
        name: "Pakistan",
        value: -2.776e+09
    }, {
        name: "Panama",
        value: -4.2741e+09
    }, {
        name: "Peru",
        value: -9.1695e+09
    }, {
        name: "Philippines",
        value: 7.26568e+09
    }, {
        name: "Palau",
        value: -2.42459e+07
    }, {
        name: "Papua New Guinea",
        value: 4.53448e+09
    }, {
        name: "Poland",
        value: -2.659e+09
    }, {
        name: "Portugal",
        value: 2.35181e+08
    }, {
        name: "Paraguay",
        value: -3.01395e+08
    }, {
        name: "West Bank",
        value: -2.06576e+09
    }, {
        name: "French Polynesia",
        value: 2.91117e+08
    }, {
        name: "Qatar",
        value: 1.37508e+10
    }, {
        name: "Romania",
        value: -2.15584e+09
    }, {
        name: "Russia",
        value: 6.88287e+10
    }, {
        name: "Rwanda",
        value: -1.10635e+09
    }, {
        name: "Saudi Arabia",
        value: -5.67238e+10
    }, {
        name: "Sudan",
        value: -5.46076e+09
    }, {
        name: "Senegal",
        value: 0
    }, {
        name: "Singapore",
        value: 5.37569e+10
    }, {
        name: "Solomon Is.",
        value: -3.60729e+07
    }, {
        name: "Sierra Leone",
        value: -1.00308e+09
    }, {
        name: "El Salvador",
        value: -9.25744e+08
    }, {
        name: "Serbia",
        value: -1.75113e+09
    }, {
        name: "South Sudan",
        value: -3.08715e+09
    }, {
        name: "Sao Tome and Principe",
        value: -6.861e+07
    }, {
        name: "Suriname",
        value: -7.98172e+08
    }, {
        name: "Slovak Republic",
        value: -1.50891e+09
    }, {
        name: "Slovenia",
        value: 1.88424e+09
    }, {
        name: "Sweden",
        value: 2.328e+10
    }, {
        name: "Swaziland",
        value: 1.05575e+09
    }, {
        name: "Sint Maarten (Dutch part)",
        value: 1.82179e+07
    }, {
        name: "Seychelles",
        value: -2.56566e+08
    }, {
        name: "Syria",
        value: 0
    }, {
        name: "Chad",
        value: 0
    }, {
        name: "Togo",
        value: -4.60839e+08
    }, {
        name: "Thailand",
        value: 3.21127e+10
    }, {
        name: "Tajikistan",
        value: -4.71819e+08
    }, {
        name: "East Timor",
        value: 2.24817e+08
    }, {
        name: "Tonga",
        value: -5.64826e+07
    }, {
        name: "Trinidad and Tobago",
        value: 1.12905e+09
    }, {
        name: "Tunisia",
        value: -3.84972e+09
    }, {
        name: "Turkey",
        value: -3.2109e+10
    }, {
        name: "Tuvalu",
        value: 0
    }, {
        name: "United Republic of Tanzania",
        value: -4.11974e+09
    }, {
        name: "Uganda",
        value: -1.68983e+09
    }, {
        name: "Ukraine",
        value: -1.89e+08
    }, {
        name: "Uruguay",
        value: -3.78056e+08
    }, {
        name: "United States",
        value: -4.34603e+11
    }, {
        name: "St. Vincent and the Grenadines",
        value: -1.12749e+08
    }, {
        name: "Venezuela",
        value: -1.6051e+10
    }, {
        name: "Vietnam",
        value: 9.06e+08
    }, {
        name: "Vanuatu",
        value: -8.20515e+07
    }, {
        name: "Samoa",
        value: -2.48649e+07
    }, {
        name: "Kosovo",
        value: -5.46947e+08
    }, {
        name: "Yemen",
        value: -3.02602e+09
    }, {
        name: "South Africa",
        value: -1.3911e+10
    }, {
        name: "Zambia",
        value: -7.67652e+08
    }, {
        name: "Zimbabwe",
        value: -1.52062e+09
    }, ];
    var value26 = [{
        name: "Aruba",
        value: 1.4107e+08
    }, {
        name: "Afghanistan",
        value: -3.80491e+09
    }, {
        name: "Angola",
        value: -3.07097e+09
    }, {
        name: "Albania",
        value: -9.00657e+08
    }, {
        name: "Argentina",
        value: -1.4693e+10
    }, {
        name: "Armenia",
        value: -2.38119e+08
    }, {
        name: "Antigua and Barbuda",
        value: 2.20486e+06
    }, {
        name: "Australia",
        value: -3.7026e+10
    }, {
        name: "Austria",
        value: 8.29106e+09
    }, {
        name: "Azerbaijan",
        value: -1.3634e+09
    }, {
        name: "Burundi",
        value: -3.54822e+08
    }, {
        name: "Belgium",
        value: 4.87494e+08
    }, {
        name: "Benin",
        value: -8.08744e+08
    }, {
        name: "Burkina Faso",
        value: -7.79601e+08
    }, {
        name: "Bangladesh",
        value: 9.28347e+08
    }, {
        name: "Bulgaria",
        value: 2.87071e+09
    }, {
        name: "Bahrain",
        value: 0
    }, {
        name: "Bahamas",
        value: -1.10629e+09
    }, {
        name: "Bosnia and Herzegovina",
        value: -8.58687e+08
    }, {
        name: "Belarus",
        value: -1.6691e+09
    }, {
        name: "Belize",
        value: -1.63456e+08
    }, {
        name: "Bermuda",
        value: 7.66034e+08
    }, {
        name: "Bolivia",
        value: -1.93155e+09
    }, {
        name: "Brazil",
        value: -2.35458e+10
    }, {
        name: "Barbados",
        value: 0
    }, {
        name: "Brunei",
        value: 1.76639e+09
    }, {
        name: "Bhutan",
        value: -6.17567e+08
    }, {
        name: "Botswana",
        value: 1.98469e+09
    }, {
        name: "Central African Rep.",
        value: 0
    }, {
        name: "Canada",
        value: -4.94231e+10
    }, {
        name: "Switzerland",
        value: 6.32049e+10
    }, {
        name: "Chile",
        value: -3.57438e+09
    }, {
        name: "China",
        value: 1.9638e+11
    }, {
        name: "Ivory Coast",
        value: 0
    }, {
        name: "Cameroon",
        value: -1.03713e+09
    }, {
        name: "Dem. Rep. Congo",
        value: -1.33415e+09
    }, {
        name: "Congo",
        value: 0
    }, {
        name: "Colombia",
        value: -1.21289e+10
    }, {
        name: "Comoros",
        value: 0
    }, {
        name: "Cape Verde",
        value: -4.59264e+07
    }, {
        name: "Costa Rica",
        value: -1.4898e+09
    }, {
        name: "Curacao",
        value: -5.65894e+08
    }, {
        name: "Northern Cyprus",
        value: -9.65417e+08
    }, {
        name: "Czech Rep.",
        value: 2.13878e+09
    }, {
        name: "Germany",
        value: 2.86842e+11
    }, {
        name: "Djibouti",
        value: -1.70032e+08
    }, {
        name: "Dominican Rep.",
        value: 4.79187e+06
    }, {
        name: "Denmark",
        value: 2.24596e+10
    }, {
        name: "Dominican Republic",
        value: -9.776e+08
    }, {
        name: "Algeria",
        value: -2.6179e+10
    }, {
        name: "Ecuador",
        value: 1.44077e+09
    }, {
        name: "Egypt",
        value: -2.01295e+10
    }, {
        name: "Euro area",
        value: 3.97997e+11
    }, {
        name: "Eritrea",
        value: 0
    }, {
        name: "Spain",
        value: 2.37687e+10
    }, {
        name: "Estonia",
        value: 4.47112e+08
    }, {
        name: "Ethiopia",
        value: -8.26936e+09
    }, {
        name: "Finland",
        value: -2.55106e+09
    }, {
        name: "Fiji",
        value: 0
    }, {
        name: "France",
        value: -2.11236e+10
    }, {
        name: "Faroe Islands",
        value: 0
    }, {
        name: "Micronesia, Fed. Sts.",
        value: 0
    }, {
        name: "Gabon",
        value: 0
    }, {
        name: "United Kingdom",
        value: -1.54873e+11
    }, {
        name: "Georgia",
        value: -1.84094e+09
    }, {
        name: "Ghana",
        value: -2.83205e+09
    }, {
        name: "French Guiana",
        value: -2.7449e+09
    }, {
        name: "Gambia",
        value: -9.55611e+07
    }, {
        name: "Guinea-Bissau",
        value: 1.00563e+07
    }, {
        name: "Equatorial Guinea",
        value: 0
    }, {
        name: "Greece",
        value: -1.96435e+09
    }, {
        name: "Grenada",
        value: -3.38932e+07
    }, {
        name: "Guatemala",
        value: 1.0234e+09
    }, {
        name: "Guyana",
        value: 1.27853e+08
    }, {
        name: "Hong Kong SAR, China",
        value: 1.27112e+10
    }, {
        name: "Honduras",
        value: -7.9901e+08
    }, {
        name: "Croatia",
        value: 1.38987e+09
    }, {
        name: "Haiti",
        value: -7.24593e+07
    }, {
        name: "Hungary",
        value: 7.70524e+09
    }, {
        name: "Indonesia",
        value: -1.67904e+10
    }, {
        name: "India",
        value: -1.21137e+10
    }, {
        name: "Ireland",
        value: 1.43485e+10
    }, {
        name: "Iran",
        value: 0
    }, {
        name: "Iraq",
        value: 3.8431e+09
    }, {
        name: "Iceland",
        value: 1.59901e+09
    }, {
        name: "Israel",
        value: 1.18793e+10
    }, {
        name: "Italy",
        value: 5.04558e+10
    }, {
        name: "Jamaica",
        value: -1.03005e+08
    }, {
        name: "Jordan",
        value: -3.61042e+09
    }, {
        name: "Japan",
        value: 1.87265e+11
    }, {
        name: "Kazakhstan",
        value: -8.92567e+09
    }, {
        name: "Kenya",
        value: -3.65306e+09
    }, {
        name: "Kyrgyz Republic",
        value: -7.92243e+08
    }, {
        name: "Cambodia",
        value: -1.77517e+09
    }, {
        name: "Kiribati",
        value: 3.58836e+07
    }, {
        name: "St. Kitts and Nevis",
        value: -1.02384e+08
    }, {
        name: "South Korea",
        value: 9.9243e+10
    }, {
        name: "Kuwait",
        value: 6.41706e+08
    }, {
        name: "Lao PDR",
        value: -1.2337e+09
    }, {
        name: "Lebanon",
        value: -9.86304e+09
    }, {
        name: "Liberia",
        value: 0
    }, {
        name: "Libya",
        value: -4.7052e+09
    }, {
        name: "St. Lucia",
        value: -3.12358e+07
    }, {
        name: "Sri Lanka",
        value: -1.9421e+09
    }, {
        name: "Lesotho",
        value: -1.98196e+08
    }, {
        name: "Lithuania",
        value: -4.9022e+08
    }, {
        name: "Luxembourg",
        value: 2.8939e+09
    }, {
        name: "Latvia",
        value: 3.76967e+08
    }, {
        name: "Macao SAR, China",
        value: 1.22152e+10
    }, {
        name: "Morocco",
        value: -4.53114e+09
    }, {
        name: "Moldova",
        value: -2.8558e+08
    }, {
        name: "Madagascar",
        value: -3.7786e+07
    }, {
        name: "Maldives",
        value: -8.39967e+08
    }, {
        name: "Mexico",
        value: -2.28284e+10
    }, {
        name: "Marshall Islands",
        value: -1.6213e+07
    }, {
        name: "Macedonia",
        value: -2.98631e+08
    }, {
        name: "Mali",
        value: 0
    }, {
        name: "Malta",
        value: 7.26913e+08
    }, {
        name: "Myanmar",
        value: -2.01101e+09
    }, {
        name: "Montenegro",
        value: -7.87805e+08
    }, {
        name: "Mongolia",
        value: -6.99671e+08
    }, {
        name: "Mozambique",
        value: -3.9123e+09
    }, {
        name: "Mauritania",
        value: -7.06786e+08
    }, {
        name: "Mauritius",
        value: -5.3198e+08
    }, {
        name: "Malawi",
        value: -7.37198e+08
    }, {
        name: "Malaysia",
        value: 6.92085e+09
    }, {
        name: "Namibia",
        value: -1.59525e+09
    }, {
        name: "New Caledonia",
        value: 0
    }, {
        name: "Niger",
        value: 0
    }, {
        name: "Nigeria",
        value: 2.71337e+09
    }, {
        name: "Nicaragua",
        value: -1.1334e+09
    }, {
        name: "Netherlands",
        value: 6.55726e+10
    }, {
        name: "Norway",
        value: 1.43012e+10
    }, {
        name: "Nepal",
        value: -1.6783e+08
    }, {
        name: "New Zealand",
        value: -4.76637e+09
    }, {
        name: "Oman",
        value: -1.2319e+10
    }, {
        name: "Pakistan",
        value: -6.895e+09
    }, {
        name: "Panama",
        value: -3.16e+09
    }, {
        name: "Peru",
        value: -5.30345e+09
    }, {
        name: "Philippines",
        value: -1.19887e+09
    }, {
        name: "Palau",
        value: 0
    }, {
        name: "Papua New Guinea",
        value: 5.18099e+09
    }, {
        name: "Poland",
        value: -1.369e+09
    }, {
        name: "Portugal",
        value: 1.20098e+09
    }, {
        name: "Paraguay",
        value: 4.14533e+08
    }, {
        name: "West Bank",
        value: -1.34804e+09
    }, {
        name: "French Polynesia",
        value: 0
    }, {
        name: "Qatar",
        value: -8.32445e+09
    }, {
        name: "Romania",
        value: -3.90391e+09
    }, {
        name: "Russia",
        value: 2.55426e+10
    }, {
        name: "Rwanda",
        value: -1.21099e+09
    }, {
        name: "Saudi Arabia",
        value: -2.38428e+10
    }, {
        name: "Sudan",
        value: -4.12742e+09
    }, {
        name: "Senegal",
        value: 0
    }, {
        name: "Singapore",
        value: 5.65011e+10
    }, {
        name: "Solomon Is.",
        value: -4.88035e+07
    }, {
        name: "Sierra Leone",
        value: -1.62359e+08
    }, {
        name: "El Salvador",
        value: -5.30643e+08
    }, {
        name: "Serbia",
        value: -1.51348e+09
    }, {
        name: "South Sudan",
        value: -2.50009e+09
    }, {
        name: "Sao Tome and Principe",
        value: -6.1494e+07
    }, {
        name: "Suriname",
        value: -1.01567e+08
    }, {
        name: "Slovak Republic",
        value: -1.29144e+09
    }, {
        name: "Slovenia",
        value: 2.33672e+09
    }, {
        name: "Sweden",
        value: 2.26218e+10
    }, {
        name: "Swaziland",
        value: 6.39719e+08
    }, {
        name: "Sint Maarten (Dutch part)",
        value: -2.57318e+07
    }, {
        name: "Seychelles",
        value: -2.86441e+08
    }, {
        name: "Syria",
        value: 0
    }, {
        name: "Chad",
        value: 0
    }, {
        name: "Togo",
        value: 0
    }, {
        name: "Thailand",
        value: 4.82372e+10
    }, {
        name: "Tajikistan",
        value: -3.62234e+08
    }, {
        name: "East Timor",
        value: -5.33075e+08
    }, {
        name: "Tonga",
        value: 0
    }, {
        name: "Trinidad and Tobago",
        value: -2.61183e+09
    }, {
        name: "Tunisia",
        value: -3.69426e+09
    }, {
        name: "Turkey",
        value: -3.3137e+10
    }, {
        name: "Tuvalu",
        value: 0
    }, {
        name: "United Republic of Tanzania",
        value: -2.00905e+09
    }, {
        name: "Uganda",
        value: -7.54242e+08
    }, {
        name: "Ukraine",
        value: -3.45e+09
    }, {
        name: "Uruguay",
        value: 8.25948e+08
    }, {
        name: "United States",
        value: -4.51692e+11
    }, {
        name: "St. Vincent and the Grenadines",
        value: -1.21769e+08
    }, {
        name: "Venezuela",
        value: -3.87e+09
    }, {
        name: "Vietnam",
        value: 8.235e+09
    }, {
        name: "Vanuatu",
        value: 0
    }, {
        name: "Samoa",
        value: -3.19364e+07
    }, {
        name: "Kosovo",
        value: -5.53651e+08
    }, {
        name: "Yemen",
        value: 0
    }, {
        name: "South Africa",
        value: -9.47863e+09
    }, {
        name: "Zambia",
        value: -9.53962e+08
    }, {
        name: "Zimbabwe",
        value: -5.9132e+08
    }, ];
    var value27 = [{
        name: "Aruba",
        value: 1.4107e+08
    }, {
        name: "Afghanistan",
        value: -4.23E+09
    }, {
        name: "Angola",
        value: -6.33E+08
    }, {
        name: "Albania",
        value: -9.81E+08
    }, {
        name: "Argentina",
        value: -3.16E+10
    }, {
        name: "Armenia",
        value: -2.80E+08
    }, {
        name: "Antigua and Barbuda",
        value: 3.45E+07
    }, {
        name: "Australia",
        value: -3.58E+10
    }, {
        name: "Austria",
        value: 8.00E+09
    }, {
        name: "Azerbaijan",
        value: 1.68E+09
    }, {
        name: "Burundi",
        value: -3.60E+08
    }, {
        name: "Belgium",
        value: 3.57E+09
    }, {
        name: "Benin",
        value: -9.27E+08
    }, {
        name: "Burkina Faso",
        value: -8.94E+08
    }, {
        name: "Bangladesh",
        value: -6.36E+09
    }, {
        name: "Bulgaria",
        value: 1.85E+09
    }, {
        name: "Bahrain",
        value: -1.60E+09
    }, {
        name: "Bahamas",
        value: -1.98E+09
    }, {
        name: "Bosnia and Herzegovina",
        value: -8.51E+08
    }, {
        name: "Belarus",
        value: -9.45E+08
    }, {
        name: "Belize",
        value: -1.31E+08
    }, {
        name: "Bermuda",
        value: 9.40E+08
    }, {
        name: "Bolivia",
        value: -2.37E+09
    }, {
        name: "Brazil",
        value: -7.23E+09
    }, {
        name: "Barbados",
        value: 0
    }, {
        name: "Brunei",
        value: 2.02E+09
    }, {
        name: "Bhutan",
        value: -5.40E+08
    }, {
        name: "Botswana",
        value: 1.98469e+09
    }, {
        name: "Central African Rep.",
        value: 0
    }, {
        name: "Canada",
        value: -4.64E+10
    }, {
        name: "Switzerland",
        value: 4.54E+10
    }, {
        name: "Chile",
        value: -5.96E+09
    }, {
        name: "China",
        value: 1.65E+11
    }, {
        name: "Ivory Coast",
        value: -1.05E+09
    }, {
        name: "Cameroon",
        value: -9.49E+08
    }, {
        name: "Dem. Rep. Congo",
        value: -1.21E+09
    }, {
        name: "Congo",
        value: 0
    }, {
        name: "Colombia",
        value: -1.03E+10
    }, {
        name: "Comoros",
        value: 0
    }, {
        name: "Cape Verde",
        value: -1.14E+08
    }, {
        name: "Costa Rica",
        value: -1.77E+09
    }, {
        name: "Curacao",
        value: -6.81E+08
    }, {
        name: "Northern Cyprus",
        value: -1.85E+09
    }, {
        name: "Czech Rep.",
        value: 1.92E+09
    }, {
        name: "Germany",
        value: 2.95E+11
    }, {
        name: "Djibouti",
        value: -2.94E+08
    }, {
        name: "Dominican Rep.",
        value: 2.02E+08
    }, {
        name: "Denmark",
        value: 2.63E+10
    }, {
        name: "Dominican Republic",
        value: -1.65E+08
    }, {
        name: "Algeria",
        value: -2.21E+10
    }, {
        name: "Ecuador",
        value: -3.73E+08
    }, {
        name: "Egypt",
        value: -7.94E+09
    }, {
        name: "Euro area",
        value: 3.97997e+11
    }, {
        name: "Eritrea",
        value: 0
    }, {
        name: "Spain",
        value: 2.50E+10
    }, {
        name: "Estonia",
        value: 8.61E+08
    }, {
        name: "Ethiopia",
        value: -5.57E+09
    }, {
        name: "Finland",
        value: -1.57E+09
    }, {
        name: "Fiji",
        value: -3.00E+08
    }, {
        name: "France",
        value: -1.33E+10
    }, {
        name: "Faroe Islands",
        value: 0
    }, {
        name: "Micronesia, Fed. Sts.",
        value: 0
    }, {
        name: "Gabon",
        value: 0
    }, {
        name: "United Kingdom",
        value: -9.84E+10
    }, {
        name: "Georgia",
        value: -1.33E+09
    }, {
        name: "Ghana",
        value: -2.00E+09
    }, {
        name: "French Guiana",
        value: 5.19E+08
    }, {
        name: "Gambia",
        value: -1.11E+08
    }, {
        name: "Guinea-Bissau",
        value: 3.87E+06
    }, {
        name: "Equatorial Guinea",
        value: 0
    }, {
        name: "Greece",
        value: -3.33E+09
    }, {
        name: "Grenada",
        value: -1.44E+08
    }, {
        name: "Guatemala",
        value: 1.19E+09
    }, {
        name: "Guyana",
        value: 1.27853e+08
    }, {
        name: "Hong Kong SAR, China",
        value: 1.59E+10
    }, {
        name: "Honduras",
        value: -3.80E+08
    }, {
        name: "Croatia",
        value: 3.00E+09
    }, {
        name: "Haiti",
        value: -2.65E+08
    }, {
        name: "Hungary",
        value: 4.42E+09
    }, {
        name: "Indonesia",
        value: -1.62E+10
    }, {
        name: "India",
        value: -3.82E+10
    }, {
        name: "Ireland",
        value: 2.91E+10
    }, {
        name: "Iran",
        value: 0
    }, {
        name: "Iraq",
        value: 1.49E+10
    }, {
        name: "Iceland",
        value: 8.99E+08
    }, {
        name: "Israel",
        value: 9.97E+09
    }, {
        name: "Italy",
        value: 9.97E+09
    }, {
        name: "Jamaica",
        value: -7.13E+08
    }, {
        name: "Jordan",
        value: -4.30E+09
    }, {
        name: "Japan",
        value: 1.96E+11
    }, {
        name: "Kazakhstan",
        value: -5.39E+09
    }, {
        name: "Kenya",
        value: -5.02E+09
    }, {
        name: "Kyrgyz Republic",
        value: -5.22E+08
    }, {
        name: "Cambodia",
        value: -1.74E+09
    }, {
        name: "Kiribati",
        value: 3.58836e+07
    }, {
        name: "St. Kitts and Nevis",
        value: -8.64E+07
    }, {
        name: "South Korea",
        value: 7.52E+10
    }, {
        name: "Kuwait",
        value: 7.76E+09
    }, {
        name: "Lao PDR",
        value: -1.19E+09
    }, {
        name: "Lebanon",
        value: -1.24E+10
    }, {
        name: "Liberia",
        value: -5.66E+08
    }, {
        name: "Libya",
        value: -4.7052e+09
    }, {
        name: "St. Lucia",
        value: -4.66E+07
    }, {
        name: "Sri Lanka",
        value: -2.31E+09
    }, {
        name: "Lesotho",
        value: -1.82E+08
    }, {
        name: "Lithuania",
        value: 4.63E+08
    }, {
        name: "Luxembourg",
        value: 3.07E+09
    }, {
        name: "Latvia",
        value: -2.46E+08
    }, {
        name: "Macao SAR, China",
        value: 1.67E+10
    }, {
        name: "Morocco",
        value: -3.91E+09
    }, {
        name: "Moldova",
        value: -5.62E+08
    }, {
        name: "Madagascar",
        value: -5.31E+07
    }, {
        name: "Maldives",
        value: -1.07E+09
    }, {
        name: "Mexico",
        value: -1.94E+10
    }, {
        name: "Marshall Islands",
        value: -1.6213e+07
    }, {
        name: "Macedonia",
        value: -9.36E+07
    }, {
        name: "Mali",
        value: -1.21E+09
    }, {
        name: "Malta",
        value: 1.34E+09
    }, {
        name: "Myanmar",
        value: -4.50E+09
    }, {
        name: "Montenegro",
        value: -8.81E+08
    }, {
        name: "Mongolia",
        value: -1.16E+09
    }, {
        name: "Mozambique",
        value: -2.59E+09
    }, {
        name: "Mauritania",
        value: -7.09E+08
    }, {
        name: "Mauritius",
        value: -7.52E+08
    }, {
        name: "Malawi",
        value: -1.02E+09
    }, {
        name: "Malaysia",
        value: 9.45E+09
    }, {
        name: "Namibia",
        value: -8.36E+08
    }, {
        name: "New Caledonia",
        value: 0
    }, {
        name: "Niger",
        value: -1.27E+09
    }, {
        name: "Nigeria",
        value: 1.04E+10
    }, {
        name: "Nicaragua",
        value: -6.94E+08
    }, {
        name: "Netherlands",
        value: 8.73E+10
    }, {
        name: "Norway",
        value: 2.24E+10
    }, {
        name: "Nepal",
        value: -8.15E+08
    }, {
        name: "New Zealand",
        value: -5.87E+09
    }, {
        name: "Oman",
        value: -1.08E+10
    }, {
        name: "Pakistan",
        value: -1.63E+10
    }, {
        name: "Panama",
        value: -4.94E+09
    }, {
        name: "Peru",
        value: -2.72E+09
    }, {
        name: "Philippines",
        value: -2.14E+09
    }, {
        name: "Palau",
        value: 0
    }, {
        name: "Papua New Guinea",
        value: 5.53E+09
    }, {
        name: "Poland",
        value: 6.02E+08
    }, {
        name: "Portugal",
        value: 1.17E+09
    }, {
        name: "Paraguay",
        value: 1.22E+09
    }, {
        name: "West Bank",
        value: -1.56E+09
    }, {
        name: "French Polynesia",
        value: 0
    }, {
        name: "Qatar",
        value: 6.43E+09
    }, {
        name: "Romania",
        value: -6.75E+09
    }, {
        name: "Russia",
        value: 3.33E+10
    }, {
        name: "Rwanda",
        value: -6.28E+08
    }, {
        name: "Saudi Arabia",
        value: 1.05E+10
    }, {
        name: "Sudan",
        value: -4.81E+09
    }, {
        name: "Senegal",
        value: -1.52E+09
    }, {
        name: "Singapore",
        value: 5.39E+10
    }, {
        name: "Solomon Is.",
        value: -4.64E+07
    }, {
        name: "Sierra Leone",
        value: -5.35E+08
    }, {
        name: "El Salvador",
        value: -5.01E+08
    }, {
        name: "Serbia",
        value: -2.32E+09
    }, {
        name: "South Sudan",
        value: -2.50009e+09
    }, {
        name: "Sao Tome and Principe",
        value: -7.31E+07
    }, {
        name: "Suriname",
        value: -1.77E+06
    }, {
        name: "Slovak Republic",
        value: -1.94E+09
    }, {
        name: "Slovenia",
        value: 3.48E+09
    }, {
        name: "Sweden",
        value: 1.70E+10
    }, {
        name: "Swaziland",
        value: 5.54E+08
    }, {
        name: "Sint Maarten (Dutch part)",
        value: 4.71E+07
    }, {
        name: "Seychelles",
        value: -2.95E+08
    }, {
        name: "Syria",
        value: 0
    }, {
        name: "Chad",
        value: 0
    }, {
        name: "Togo",
        value: -9.64E+07
    }, {
        name: "Thailand",
        value: 5.02E+10
    }, {
        name: "Tajikistan",
        value: 1.51E+08
    }, {
        name: "East Timor",
        value: -3.39E+08
    }, {
        name: "Tonga",
        value: -2.96E+07
    }, {
        name: "Trinidad and Tobago",
        value: 1.09E+09
    }, {
        name: "Tunisia",
        value: -4.08E+09
    }, {
        name: "Turkey",
        value: -4.73E+10
    }, {
        name: "Tuvalu",
        value: 0
    }, {
        name: "United Republic of Tanzania",
        value: -1.63E+09
    }, {
        name: "Uganda",
        value: -1.27E+09
    }, {
        name: "Ukraine",
        value: -2.44E+09
    }, {
        name: "Uruguay",
        value: 4.24E+08
    }, {
        name: "United States",
        value: -4.49E+11
    }, {
        name: "St. Vincent and the Grenadines",
        value: -1.35E+08
    }, {
        name: "Venezuela",
        value: -3.87e+09
    }, {
        name: "Vietnam",
        value: 6.12E+09
    }, {
        name: "Vanuatu",
        value: 0
    }, {
        name: "Samoa",
        value: -3.47E+06
    }, {
        name: "Kosovo",
        value: -4.49E+08
    }, {
        name: "Yemen",
        value: 0
    }, {
        name: "South Africa",
        value: -8.91E+09
    }, {
        name: "Zambia",
        value: -1.01E+09
    }, {
        name: "Zimbabwe",
        value: -3.08E+08
    }, ];
    var nameMap = {
        'Korea': "韩国",
        'Côte d\'Ivoire': '科特迪瓦',
        'Dem. Rep. Korea': '朝鲜',
        'Afghanistan': '阿富汗',
        'Angola': '安哥拉',
        'Albania': '阿尔巴尼亚',
        'United Arab Emirates': '阿联酋',
        'Argentina': '阿根廷',
        'Armenia': '亚美尼亚',
        'French Southern and Antarctic Lands': '法属南半球和南极领地',
        'Australia': '澳大利亚',
        'Austria': '奥地利',
        'Azerbaijan': '阿塞拜疆',
        'Barbados': '巴巴多斯',
        'Burundi': '布隆迪',
        'Belgium': '比利时',
        'Benin': '贝宁',
        'Burkina Faso': '布基纳法索',
        'Bangladesh': '孟加拉国',
        'Bulgaria': '保加利亚',
        'Bahamas': '巴哈马',
        'Bosnia and Herz.': '波斯尼亚和黑塞哥维那',
        'Belarus': '白俄罗斯',
        'Belize': '伯利兹',
        'Bermuda': '百慕大',
        'Bolivia': '玻利维亚',
        'Brazil': '巴西',
        'Brunei': '文莱',
        'Bhutan': '不丹',
        'Botswana': '博茨瓦纳',
        'Central African Rep.': '中非共和国',
        'Canada': '加拿大',
        'Cape Verde': '佛得角共和国',
        'Switzerland': '瑞士',
        'Chile': '智利',
        'China': '中国',
        'Ivory Coast': '象牙海岸',
        'Cameroon': '喀麦隆',
        'Congo': '刚果共和国',
        'Colombia': '哥伦比亚',
        'Costa Rica': '哥斯达黎加',
        'Cuba': '古巴',
        'Northern Cyprus': '北塞浦路斯',
        'Cyprus': '塞浦路斯',
        'Czech Rep.': '捷克共和国',
        'Germany': '德国',
        'Djibouti': '吉布提',
        'Dem. Rep. Congo': '刚果民主共和国',
        'Denmark': '丹麦',
        'Dominican Rep.': '多米尼加共和国',
        'Dominica': '多米尼克',
        'Algeria': '阿尔及利亚',
        'Ecuador': '厄瓜多尔',
        'Egypt': '埃及',
        'Eritrea': '厄立特里亚',
        'Spain': '西班牙',
        'Eq. Guinea': '赤道几内亚',
        'Estonia': '爱沙尼亚',
        'Ethiopia': '埃塞俄比亚',
        'Finland': '芬兰',
        'Fiji': '斐济',
        'Falkland Is.': '马尔维纳斯群岛',
        'France': '法国',
        'Gabon': '加蓬',
        'United Kingdom': '英国',
        'Georgia': '格鲁吉亚',
        'Ghana': '加纳',
        'Guinea': '几内亚',
        'Gambia': '冈比亚',
        'Guinea-Bissau': '几内亚比绍',
        'Greece': '希腊',
        'Greenland': '格陵兰',
        'Guatemala': '危地马拉',
        'French Guiana': '法属圭亚那',
        'Guyana': '圭亚那',
        'Honduras': '洪都拉斯',
        'Croatia': '克罗地亚',
        'Haiti': '海地',
        'Hungary': '匈牙利',
        'Indonesia': '印尼',
        'India': '印度',
        'Ireland': '爱尔兰',
        'Iran': '伊朗',
        'Iraq': '伊拉克',
        'Iceland': '冰岛',
        'Israel': '以色列',
        'Italy': '意大利',
        'Jamaica': '牙买加',
        'Jordan': '约旦',
        'Japan': '日本',
        'Kazakhstan': '哈萨克斯坦',
        'Kenya': '肯尼亚',
        'Kyrgyzstan': '吉尔吉斯斯坦',
        'Cambodia': '柬埔寨',
        'South Korea': '韩国',
        'Kosovo': '科索沃',
        'Kuwait': '科威特',
        'Lao PDR': '老挝',
        'Lebanon': '黎巴嫩',
        'Liberia': '利比里亚',
        'Libya': '利比亚',
        'Sri Lanka': '斯里兰卡',
        'Lesotho': '莱索托',
        'Lithuania': '立陶宛',
        'Luxembourg': '卢森堡',
        'Latvia': '拉脱维亚',
        'Morocco': '摩洛哥',
        'Moldova': '摩尔多瓦',
        'Madagascar': '马达加斯加',
        'Mexico': '墨西哥',
        'Macedonia': '马其顿',
        'Mali': '马里',
        'Myanmar': '缅甸',
        'Montenegro': '黑山',
        'Mongolia': '蒙古',
        'Mozambique': '莫桑比克',
        'Mauritania': '毛里塔尼亚',
        'Malawi': '马拉维',
        'Malaysia': '马来西亚',
        'Namibia': '纳米比亚',
        'New Caledonia': '新喀里多尼亚',
        'Niger': '尼日尔',
        'Nigeria': '尼日利亚',
        'Nicaragua': '尼加拉瓜',
        'Netherlands': '荷兰',
        'Norway': '挪威',
        'Nepal': '尼泊尔',
        'New Zealand': '新西兰',
        'Oman': '阿曼',
        'Pakistan': '巴基斯坦',
        'Panama': '巴拿马',
        'Peru': '秘鲁',
        'Philippines': '菲律宾',
        'Papua New Guinea': '巴布亚新几内亚',
        'Poland': '波兰',
        'Puerto Rico': '波多黎各',
        'North Korea': '北朝鲜',
        'Portugal': '葡萄牙',
        'Paraguay': '巴拉圭',
        'Qatar': '卡塔尔',
        'Romania': '罗马尼亚',
        'Russia': '俄罗斯',
        'Rwanda': '卢旺达',
        'W. Sahara': '西撒哈拉',
        'Saudi Arabia': '沙特阿拉伯',
        'Sudan': '苏丹',
        'S. Sudan': '南苏丹',
        'Senegal': '塞内加尔',
        'Solomon Is.': '所罗门群岛',
        'Sierra Leone': '塞拉利昂',
        'El Salvador': '萨尔瓦多',
        'Somaliland': '索马里兰',
        'Somalia': '索马里',
        'Serbia': '塞尔维亚共和国',
        'Suriname': '苏里南',
        'Slovakia': '斯洛伐克',
        'Slovenia': '斯洛文尼亚',
        'Sweden': '瑞典',
        'Swaziland': '斯威士兰',
        'Syria': '叙利亚',
        'Chad': '乍得',
        'Togo': '多哥',
        'Thailand': '泰国',
        'Tajikistan': '塔吉克斯坦',
        'Turkmenistan': '土库曼斯坦',
        'Tanzania': '坦桑尼亚',
        'East Timor': '东帝汶',
        'Trinidad and Tobago': '特里尼达和多巴哥',
        'Tunisia': '突尼斯',
        'Turkey': '土耳其',
        'United Republic of Tanzania': '坦桑尼亚联合共和国',
        'Uganda': '乌干达',
        'Ukraine': '乌克兰',
        'Uruguay': '乌拉圭',
        'United States': '美国',
        'Uzbekistan': '乌兹别克斯坦',
        'Venezuela': '委内瑞拉',
        'Vietnam': '越南',
        'Vanuatu': '瓦努阿图',
        'West Bank': '西岸',
        'Yemen': '也门',
        'South Africa': '南非',
        'Zambia': '赞比亚',
        'Zimbabwe': '津巴布韦',
        'Comoros': '科摩罗伊斯兰联邦共和国'
    };

    option = {
        backgroundColor: '#404a59',
        timeline: {
            axisType: 'category',
            data: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
            playInterval: 300,
            loop: false,
            bottom: "2.5%",
            symbolSize: 10,
            autoPlay: true

        },
        baseOption: {
            title: {
                text: '世界各国国际收支平衡情况',
                subtext: '数据来源：世界银行数据库',
                left: 'center',
                top: 10
            },
            visualMap: {
                name: '美元',
                max: 1e+11,
                min: -1e+11,
                calculable: true,
                inRange: {
                    color: ['#8dc1a9', '#73b9bc', '#759aa0', '#e69d87', '#ea7e53', '#dd6b66']
                }
            },
            series: [{
                type: 'map',
                map: 'world',
                roam: true,
                // nameMap: nameMap
            }]
        },
        options: [{
            series: {
                data: value18
            }
        }, {
            series: {
                data: value19
            }
        }, {
            series: {
                data: value20
            }
        }, {
            series: {
                data: value21
            }
        }, {
            series: {
                data: value22
            }
        }, {
            series: {
                data: value23
            }
        }, {
            series: {
                data: value24
            }
        }, {
            series: {
                data: value25
            }
        }, {
            series: {
                data: value26
            }
        }, {
            series: {
                data: value27
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)

};