getScriptAttribute = (attr) => {
    var scripts = document.getElementsByTagName("script");
    return scripts[scripts.length - 1].getAttribute(attr);
}

const barragesPage = (getScriptAttribute("page") == "barrage-rate"),
    imagesPath = "/finish-su-endeksi/public/images/",
    classes = (barragesPage) ? 
        { item: "rate-item", infoPrefix: "rate-" } :
        { item: "cities-item", infoPrefix: "" }

getDecimalPart = (double) => {
    var result = ((double - Math.floor(double)) * 100).toFixed();
    if(result % 10 == 0)
        result = result / 10;
    return result.toString();
}

getPercentage = (double) => Math.floor(double) + "," + getDecimalPart(double);

getRate = (double) => (double * 0.01).toFixed(2);

generateRateItem = (city, percentage, rate, icon) => {
    return `
    <div class="` + classes.item + `">
        <div class="` + classes.infoPrefix + `map-icon">
            <img src="` + imagesPath + icon +`">
        </div>
        <div class="` + classes.infoPrefix + `city-information">
            <span>` + city + `</span>
            <div class="` + classes.infoPrefix + `proportion-line-full">
                <div class="` + classes.infoPrefix + `proportion-line" style="width: calc(120px * ` + rate +`);"></div>
            </div>
            <span>%` + percentage + ` Doluluk</span>
        </div>
    </div>`
}

generateBarragesHtml = (istanbul, ankara, izmir, bursa, adana, gaziantep) => {
    return ((barragesPage) ? `<div class="rate-cities-4">` : ``) + 
    generateRateItem("İSTANBUL", getPercentage(istanbul), getRate(istanbul), "path-3315.svg") + 
    generateRateItem("ANKARA", getPercentage(ankara), getRate(ankara), "path-3251.svg") + 
    generateRateItem("İZMİR", getPercentage(izmir), getRate(izmir), "path-3223.svg") + 
    generateRateItem("BURSA", getPercentage(bursa), getRate(bursa), "bursa.svg") + 
    (barragesPage ? 
    `</div><div class="rate-cities-4">` + 
    (generateRateItem("ADANA", getPercentage(adana), getRate(adana), "adana.svg") + 
    generateRateItem("GAZİANTEP", getPercentage(gaziantep), getRate(gaziantep), "gaziantep.svg") + 
    `</div>`) : "");
}

setCitiesRate = (barragesHtml) => document.getElementsByClassName(classes.infoPrefix + "cities")[0].innerHTML = barragesHtml;

const axiosNode2 = document.createElement('script');

axiosNode2.src = 'https://unpkg.com/axios/dist/axios.min.js';
axiosNode2.onload = function () {
    axios({
        url: 'https://finishtasarrufsozu.com/get-barrages',
        method: 'get'
    }).then(response => {
        var { data } = response.data;
        setCitiesRate(
            generateBarragesHtml(
                data.istanbul,
                data.ankara,
                data.izmir,
                data.bursa,
                data.adana,
                data.gaziantep));
    }).catch(error => {
        console.error(error);
    });
};

document.querySelector('head').appendChild(axiosNode2);