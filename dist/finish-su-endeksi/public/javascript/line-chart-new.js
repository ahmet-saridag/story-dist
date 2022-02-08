let SuTuketimi,
    TarimEndeksi,
    SanayiEndeksi,
    HanehalkiEndeksi,
    fse,
    DAYS;
var myLine;
valuePercent = (data) => {
    return (data.previousValue % data.point).toFixed(2).replace('.', ',');
};

informationTemplate = (data) => {

    let rateStatus = () => {
        return data.raiseValue ? {
            arrow: '<img src="/finish-su-endeksi/public/images/up-green-arrow.svg">',
            class: 'values-up'
        } : {arrow: '<img src="/finish-su-endeksi/public/images/down-red-arrow.svg">', class: 'values-down'};
    };

    let template = `
        <div class="rate">
            <div class="rate-icon">
                <img src="/finish-su-endeksi/public/images/oval.svg">
            </div>
            <span id="fse-value">${data.value}</span>
        </div>
        <div class="point">
            <div class="point-icon">
                ${rateStatus().arrow}
            </div>
            <div class="point-values">
                <span class="${rateStatus().class}" id="fse-value-point">${data.point < 0 ? (data.point * -1) : data.point} Puan</span>
                <span class="${rateStatus().class}" id="fse-value-rate">(%${valuePercent(data)})</span>
            </div>
        </div>
    `;
    let target = document.querySelector('.information-values');
    (target && (target.innerHTML = template));
};

exchangeRatesTemplate = (data) => {
    let templateMarque = (props) => {
        return `
            <div class="date-range">
                <span class="name">${props.name}</span>
            </div>
            <div class="item-values">
                <span class="values ${props.degisim < 0 ? 'values-down' : 'values-up'}"><span>Alış</span></br>${props.alis}</span>
                <span class="values ${props.degisim < 0 ? 'values-down' : 'values-up'}"><span>Satış</span></br>${props.satis}</span>
                <span class="values ${props.degisim < 0 ? 'values-down' : 'values-up'}"><span>Puan</span></br>${(props.degisim).toFixed(2)}</span>
            </div>`;
    };

    let templateSidebar = (props) => {
        return `
            <div class="date-range">
                <span class="name">${props.name}</span>
            </div>
            <div class="item-values">
                <span class="${props.degisim < 0 ? 'values-down' : 'values-up'}">${props.alis}</span>
                <span class="${props.degisim < 0 ? 'values-down' : 'values-up'}">${props.satis}</span>
                <span class="${props.degisim < 0 ? 'values-down' : 'values-up'}">${(props.degisim).toFixed(2)}</span>
            </div>`;
    };

    let targets = {
        index: document.querySelector('.weekly-change .scrollbar'),
        detail: document.querySelector('.detail-weekly-change .detail-weekly-change-rate')
    };

    if (targets.index) {
        for (let currency of data) {
            if (currency.name.includes("Petrol")) { continue; }
            let currencyNode = document.createElement('DIV');
            currencyNode.className = 'change-item';
            currencyNode.innerHTML = templateSidebar(currency);

            targets.index.appendChild(currencyNode);
        }
    }

    if (targets.detail) {
        for (let currency of data) {
            if (currency.name.includes("Petrol")) { continue; }
            let currencyNode = document.createElement('DIV');
            currencyNode.className = 'detail-change-item';
            currencyNode.innerHTML = templateMarque(currency);

            targets.detail.appendChild(currencyNode);
        }
    }
};

drawChart = () => {

    window.chartColors = {
        red: "rgb(255, 99, 132)",
        orange: "rgb(245, 166, 35)",
        yellow: "rgb(255, 205, 86)",
        green: "rgb(100, 169, 24)",
        blue: "rgb(74, 144, 226)",
        purple: "rgb(144, 19, 254)",
        grey: "rgb(231, 233, 237)"
    };

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
                    label: "Tarım Tüketim Trendi",
                    fill: false,
                    backgroundColor: window.chartColors.green,
                    borderColor: window.chartColors.green,
                    data: TarimEndeksi,
                    hidden: true
                },
                {
                    label: "Sanayi Tüketim Trendi",
                    fill: false,
                    backgroundColor: window.chartColors.purple,
                    borderColor: window.chartColors.purple,
                    data: SanayiEndeksi,
                    hidden: true
                },
                {
                    label: "Hane içi Tüketim Trendi",
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
    myLine = new Chart(ctx, config);
};

const axiosNode = document.createElement('script');
axiosNode.src = 'https://unpkg.com/axios/dist/axios.min.js';
axiosNode.onload = function () {
    axios({
        url: 'https://finishtasarrufsozu.com/get_data',
        method: 'get'
    }).then(response => {

        const data = response.data.data;

        let suTuketimiParsed = [],
            tarimEndeksiParsed = [],
            sanayiEndeksiParsed = [],
            hanehalkiEndeksiParsed = [],
            fseParsed = [];

        for (let nT of data.suTuketimi) {
            suTuketimiParsed.push(nT.toFixed(2));
        }

        for (let nT of data.tarimEndeksi) {
            tarimEndeksiParsed.push(nT.toFixed(2));
        }

        for (let nT of data.sanayiEndeksi) {
            sanayiEndeksiParsed.push(nT.toFixed(2));
        }

        for (let nT of data.hanehalkiEndeksi) {
            hanehalkiEndeksiParsed.push(nT.toFixed(2));
        }

        for (let nT of data.fse) {
            fseParsed.push(nT.toFixed(2));
        }

        SuTuketimi = suTuketimiParsed;
        TarimEndeksi = tarimEndeksiParsed;
        SanayiEndeksi = sanayiEndeksiParsed;
        HanehalkiEndeksi = hanehalkiEndeksiParsed;
        fse = fseParsed;
        DAYS = data.dates;
        
        //Yıl Filtresi
        SuTuketimiFilter = suTuketimiParsed;
        TarimEndeksiFilter = tarimEndeksiParsed;
        SanayiEndeksi = sanayiEndeksiParsed;
        HanehalkiEndeksiFilter = hanehalkiEndeksiParsed;
        fseFilter = fseParsed;
        DAYSFilter = DAYS;

        let trChar = [];
        DAYS.forEach(item => {
            trChar.push(item.replaceAll('Å','Ş').replaceAll('Ä±','ı').replaceAll('Ä','ğ').replaceAll('Ã¼','ü'));
        })
        DAYS = trChar;
        let fseProps = {
            value: data.fse[data.fse.length - 1],
            raiseValue: data.fse[data.fse.length - 1] > data.fse[data.fse.length - 2],
            point: (data.fse[data.fse.length - 1] - data.fse[data.fse.length - 2]).toFixed(2),
            previousValue: data.fse[data.fse.length - 2]
        };

        informationTemplate(fseProps);

        drawChart();
        addChart(myLine, '22')
    }).catch(error => {
        console.error(error)
    });

    axios({
        url: 'https://finishtasarrufsozu.com/exchange-rates',
        method: 'get'
    }).then(response => {
        exchangeRatesTemplate(response.data);
    }).catch(error => {
        console.error(error);
    });
};

document.querySelector('head').appendChild(axiosNode);

$(".graphic-year-select").change(function(){
    addChart(myLine, $(this).val())
});

function addChart(chart, year) {
    
   let SuTuketimiFilter = [],
    TarimEndeksiFilter = [],
    SanayiEndeksiFilter = [],
    HanehalkiEndeksiFilter = [],
    fseFilter = [],
    DAYSFilter = [];
    filterYearIndexArray = [];
    DAYS.forEach((obj,index) => {
        if(obj.slice(-2).includes(year)){
            DAYSFilter.push(obj);
            filterYearIndexArray.push(index);
            SuTuketimiFilter.push(SuTuketimi[index]);
            TarimEndeksiFilter.push(TarimEndeksi[index]);
            SanayiEndeksiFilter.push(SanayiEndeksi[index]);
            HanehalkiEndeksiFilter.push(HanehalkiEndeksi[index]);
            fseFilter.push(fse[index]);
        }
    })
    
    chart.data.labels = DAYSFilter;
    chart.data.datasets[4].data = SuTuketimiFilter; //Su tüketimi 
    chart.data.datasets[3].data = HanehalkiEndeksiFilter; //Hane için Tüketim
    chart.data.datasets[2].data = SanayiEndeksiFilter; //Sanayi Tüketim Endeksi
    chart.data.datasets[1].data = TarimEndeksiFilter; // Tarım Tüketim Endeksi
    chart.data.datasets[0].data = fseFilter; // FSE
    chart.update();
}