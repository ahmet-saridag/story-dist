$(document).ready(function() {
    var fp = new fullpage('#fullpage', {
        licenseKey: 'BAF5608F-E5EA4C49-849DBDFC-D721EAC5'
    });

    var slider3 = new MasterSlider();

    slider3.setup("masterslider3", {
        width: 750,
        minHeight: 0,
        space: 0,
        start: 1,
        grabCursor: true,
        swipe: true,
        mouse: true,
        keyboard: false,
        layout: "partialview",
        wheel: false,
        autoplay: false,
        instantStartLayers: false,
        mobileBGVideo: false,
        loop: true,
        shuffle: false,
        preload: 1,
        heightLimit: true,
        autoHeight: true,
        smoothHeight: true,
        endPause: false,
        overPause: true,
        fillMode: "fill",
        centerControls: true,
        startOnAppear: false,
        layersMode: "center",
        autofillTarget: "",
        hideLayers: false,
        fullscreenMargin: 0,
        speed: 20,
        dir: "h",
        parallaxMode: 'swipe',
        view: "wave"
    });
});