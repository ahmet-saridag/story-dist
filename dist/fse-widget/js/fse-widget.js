function defineMedia () {
    const queryString = new URLSearchParams(window.location.search);
    const param = (queryString.get('media') || 'media_def');
    const stylePairs = {
        "media_def": './css/fse-widget.css',
        "media_01": './css/fse-widget-media-01.css'
    }

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = stylePairs[param];

    document.querySelector('head').appendChild(style);
}

function takeMeHome () {
    window.open(window.location.origin + '/finish-su-endeksi/');
}

function valuePercent (data) {
    return (data.previousValue % data.point).toFixed(2).replace('.', ',');
}

function informationTemplate (data) {

    function rateStatus () {
        return data.raiseValue ? {
            arrow: '<img src="/finish-su-endeksi/public/images/up-green-arrow.svg">',
            class: 'values-up'
        } : {arrow: '<img src="/finish-su-endeksi/public/images/down-red-arrow.svg">', class: 'values-down'};
    }

    let template = `
        <div class="rate">
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
    target.innerHTML = template;
}

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

        let fseProps = {
            value: data.fse[data.fse.length - 1],
            raiseValue: data.fse[data.fse.length - 1] > data.fse[data.fse.length - 2],
            point: (data.fse[data.fse.length - 1] - data.fse[data.fse.length - 2]).toFixed(2),
            previousValue: data.fse[data.fse.length - 2]
        };

        informationTemplate(fseProps);

    }).catch(error => {
        console.error(error)
    });
};

window.addEventListener('DOMContentLoaded', function () {
    defineMedia();
});

document.querySelector('head').appendChild(axiosNode);