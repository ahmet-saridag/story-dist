window.chartColors = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(245, 166, 35)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(100, 169, 24)",
    blue: "rgb(74, 144, 226)",
    purple: "rgb(144, 19, 254)",
    grey: "rgb(231, 233, 237)"
};

var SuTuketimi = [
    771.99,
    772.24,
    772.64,
    773.13,
    773.72,
    775.00,
    775.52,
    775.95,
    776.28,
    776.67,
    776.79,
    776.78,
    776.63,
    776.07,
    775.58,
    775.21,
    774.82,
    774.42,
    772.98,
    773.03,
    773.41,
    774.12,
    775.84,
    777.00,
    778.13,
    779.31,
    782.09
];

var TarimEndeksi = [
    103.46,
    103.36,
    103.29,
    103.26,
    103.26,
    103.07,
    103.24,
    103.52,
    103.91,
    105.98,
    105.99,
    105.47,
    104.45,
    100.04,
    98.77,
    97.90,
    97.41,
    97.29,
    98.62,
    98.76,
    98.90,
    99.05,
    99.44,
    99.52,
    99.51,
    99.41,
    98.51
];

var SanayiEndeksi = [
    101.76,
    101.90,
    102.01,
    102.09,
    102.12,
    101.98,
    102.00,
    102.02,
    102.05,
    102.16,
    102.17,
    102.15,
    102.10,
    101.92,
    101.85,
    101.78,
    101.71,
    101.65,
    101.64,
    101.57,
    101.50,
    101.41,
    101.36,
    101.25,
    101.11,
    100.95,
    100.29
];

var HanehalkiEndeksi = [
    101.52,
    101.40,
    101.26,
    101.11,
    100.93,
    100.64,
    100.47,
    100.32,
    100.18,
    100.05,
    99.947,
    99.85,
    99.78,
    99.77,
    99.72,
    99.69,
    99.66,
    99.64,
    99.77,
    99.70,
    99.60,
    99.45,
    99.18,
    98.99,
    98.80,
    98.61,
    97.86
];

var fse = [
    88.26,
    88.25,
    88.13,
    88.07,
    88.03,
    87.81,
    87.97,
    88.08,
    88.24,
    89.05,
    89.09,
    88.89,
    88.49,
    86.71,
    86.23,
    85.85,
    85.66,
    85.61,
    86.18,
    86.23,
    86.29,
    86.35,
    86.50,
    86.53,
    86.52,
    86.29,
    86.19,
    86.05,
    85.96,
    86.44
];

var DAYS = [
    "20 Aralık 19",
    "27 Aralık 19",
    "03 Ocak 20",
    "10 Ocak 20",
    "17 Ocak 20",
    "24 Ocak 20",
    "31 Ocak 20",
    "07 Şubat 20",
    "14 Şubat 20",
    "21 Şubat 20",
    "28 Şubat 20",
    "06 Mart 20",
    "13 Mart 20",
    "20 Mart 20",
    "27 Mart 20",
    "03 Nisan 20",
    "10 Nisan 20",
    "17 Nisan 20",
    "24 Nisan 20",
    "01 Mayıs 20",
    "08 Mayıs 20",
    "15 Mayıs 20",
    "22 Mayıs 20",
    "29 Mayıs 20",
    "05 Haziran 20",
    "12 Haziran 20",
    "19 Haziran 20",
    "26 Haziran 20",
    "03 Temmuz 20",
    "10 Temmuz 20"
];

var config = {
    type: "line",
    data: {
        labels: DAYS,
        datasets: [
            {
                label: "FSE",
                backgroundColor: window.chartColors.blue,
                borderColor: window.chartColors.blue,
                data: fse,
                fill: false,
                hidden: false
            },
            {
                label: "Tarım Tüketim Endeksi",
                fill: false,
                backgroundColor: window.chartColors.green,
                borderColor: window.chartColors.green,
                data: TarimEndeksi,
                hidden: true
            },
            {
                label: "Sanayi Tüketim Endeksi",
                fill: false,
                backgroundColor: window.chartColors.purple,
                borderColor: window.chartColors.purple,
                data: SanayiEndeksi,
                hidden: true
            },
            {
                label: "Hanehalkı Tüketim Endeksi",
                fill: false,
                backgroundColor: window.chartColors.orange,
                borderColor: window.chartColors.orange,
                data: HanehalkiEndeksi,
                hidden: true
            },
            {
                label: "Su Tüketimi",
                backgroundColor: window.chartColors.yellow,
                borderColor: window.chartColors.yellow,
                data: SuTuketimi,
                fill: false,
                hidden: true
            }
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: false,
            text: "Finish Su Endeksi"
        },
        tooltips: {
            mode: "nearest",
            intersect: false
        },
        // annotation: {
        //     annotations: [
        //         {
        //             type: 'line',
        //             mode: 'horizontal',
        //             scaleID: 'y-axis-0',
        //             value: 100,
        //             borderColor: 'rgb(0,128,0)',
        //             borderWidth: 1,
        //             label: {
        //                 backgroundColor: "rgb(0,128,0)",
        //                 content: "Bolluk Sınırı",
        //                 enabled: true,
        //                 fontStyle: "normal",
        //                 yAdjust: -10,
        //                 cornerRadius: 0,
        //             }
        //         },
        //         {
        //             type: 'line',
        //             mode: 'horizontal',
        //             scaleID: 'y-axis-0',
        //             value: 70,
        //             borderColor: 'rgb(255, 0, 0)',
        //             borderWidth: 1,
        //             label: {
        //                 backgroundColor: "rgb(255, 0, 0)",
        //                 content: "Kuraklık Sınırı",
        //                 enabled: true,
        //                 fontStyle: "normal",
        //                 yAdjust: -10,
        //                 cornerRadius: 0,
        //             }
        //         }
        //     ]
        // },
        legend: {
            position: "bottom",
            align: "start",
            defaultFontFamily: "'Rajdhani', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            labels: {
                usePointStyle: true,
                padding: 20,
                fontSize: 12,
                boxWidth: 8,
                defaultFontFamily: "'Rajdhani', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                strokeStyle: "red",
            }
        },
        legendCallback: function (chart) {
            // Return the HTML string here.
            console.log(chart.data.datasets);
            var text = [];
            text.push('<ul class="' + chart.id + '-legend">');
            for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
                text.push('<li><span id="legend-' + i + '-item" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"   onclick="updateDataset(event, ' + '\'' + i + '\'' + ')">');
                if (chart.data.labels[i]) {
                    text.push(chart.data.labels[i]);
                }
                text.push('</span></li>');
            }
            text.push('</ul>');
            return text.join("");
        },
        hover: {
            mode: "nearest",
            intersect: true
        },
        scales: {
            xAxes: [
                {
                    display: true,
                    scaleLabel: {
                        display: false,
                        labelString: "Haftalık"
                    }
                }
            ],
            yAxes: [
                {
                    display: true,
                    scaleLabel: {
                        display: true
                    }
                }
            ]
        }
    }
};

var ctx = document.getElementById("main-chart").getContext("2d");
var myLine = new Chart(ctx, config);
