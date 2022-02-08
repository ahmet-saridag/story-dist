var slider = new MasterSlider();
var slider2 = new MasterSlider();
var saving_score = 0;
var value = 0;
$(document).ready(function () {

    $("html,body").scrollTop(0);

    var sliderArr = [];
    var limit = 90;

    if ($('.documentary-img-slider').length > 0) {
        $('.documentary-img-slider').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            center: true,
            autoplay: true,
            nav: true
        });
    }

    var mapSeeOne = document.querySelector(".map-see-one");
    var mapSeeTwo = document.querySelector(".map-see-two");
    var mapSeeThree = document.querySelector(".map-see-three");
    var basinStatus = document.querySelector(".basin-status");

    if (basinStatus) {
            basinStatus.addEventListener("click", function() {
            mapSeeOne.classList.add("block");
            mapSeeTwo.classList.add("block");
            mapSeeThree.classList.add("block");
            basinStatus.style.display = "none";
            document.querySelector(".see-more").click();
            document.querySelector(".see-more").style.display = "block";
        });
    }


    $('.Slidertext').each(function (inx, elm) {
        var text = $(elm).html();
        if (text.length > limit) {
            var trimmed_text = text.substr(0, limit) + "...";
            sliderArr.push({ full: text, short: trimmed_text });
            $(elm).html(trimmed_text);
        } else {
            sliderArr.push({ full: text, short: text });
            $(elm).html(text);
        }

        $(elm).mouseover(function (e) {
            $(this).html(sliderArr[inx].full);
        });

        $(elm).mouseout(function (e) {
            $(this).html(sliderArr[inx].short);
        });
    });

    $('.benkiser--page-section').viewportChecker({
        offset: ['50%'],
        repeat: true,
        callbackFunction: function (elem, action) {
            sectionID = $('.benkiser--page-section').index(elem);
            sectionTitle = $('.benkiser--page-section:eq(' + (sectionID) + ')').data('title');
            $('.mouse .section-title').text(sectionTitle);

            if (sectionID >= $('.benkiser--page-section').length - 1) {
                $('.mouse').hide();
            } else {
                $('.mouse').show();
            }
        }
    });

    if (window.location.hash != '') {
        $("html, body").animate({
            scrollTop: $(window.location.hash).offset().top - 40
        }, 1000);
    }

    $(".documentary-btn").click(function() {
        window.location.href = "belgesele-ozel.html";
    });

    $(".project-btn").click(function() {
        window.location.href = "projeler";
    });

    $(".home-btn").click(function() {
        window.location.href = "/";
    });

    $(".home-btn-en").click(function() {
        window.location.href = "/en";
    });
    $(".finish-su-endeksi-btn").click(function() {
        window.location.href = "/finish-su-endeksi";
    });

    $(".go-documentary").click(function() {
        window.location.href = "belgesele-ozel.html";
    });

    $(".belgesele-ozel-play").click(function() {
        window.location.href = "belgesele-ozel.html";
    });
    
    $(".documentary-btn-en").click(function() {
        window.location.href = "/en/documentary-specific";
    });

    $(".projects-btn").click(function() {
        window.location.href = "/en/projects";
    });

    $(".documentary-btn-en-home").click(function() {
        window.location.href = "/en";
    });

    $(".documentary-btn-home").click(function() {
        window.location.href = "/";
    });

    $(".documentary-btn-home-en").click(function() {
        window.location.href = "/en";
    });


    //Image Zoom
    var currentZoom = 1;
    var zoomMin = 1;
    var zoomMax = 2;
    if($('#big-map').length > 0) {
        $('#big-map').imgViewer({
            zoom: 1,
            zoomable: false
        });
    }

    $('.sec-map-zoom-in').click(function (e) {
        e.preventDefault();
        if (currentZoom < zoomMax) {
            currentZoom = currentZoom + 0.1;
        }
        $('#big-map').imgViewer('option', 'zoom', currentZoom);
    });
    $('.sec-map-zoom-out').click(function (e) {
        e.preventDefault();
        if (currentZoom > zoomMin) {
            currentZoom = currentZoom - 0.1;
        }
        $('#big-map').imgViewer('option', 'zoom', currentZoom);
    });

    // $('.time-line').hover(function(){
    //     $('.time-line').stop().animate({
    //         'background-color': 'rgba(45, 63, 75, .5)',
    //         'width': '300px'
    //     }, function(){
    //         $('.time-line-text').stop().animate({ opacity: 1 },);
    //         $('.time-line-text-2').stop().animate({ opacity: 1 },);
    //     });
    // }, function(){
    //     $('.time-line-text').stop().animate({ opacity: 0 }, function(){
    //         $('.time-line').stop().animate({
    //             'background-color': 'transparent',
    //             'width': '50px'
    //         });
    //     });
    //     $('.time-line-text-2').stop().animate({ opacity: 0 }, function(){
    //         $('.time-line').stop().animate({
    //             'background-color': 'transparent',
    //             'width': '50px'
    //         });
    //     });
    // });

    $(window).stellar({
        horizontalOffset: 40,
        verticalOffset: 150
    });

    $('.benkiser--fadeInUp').viewportChecker({
        offset: ['-10%'],
        repeat: true,
        classToAdd: 'visible animated fadeInUp'
    });
    $('.benkiser--fadeInDown').viewportChecker({
        offset: ['-10%'],
        repeat: true,
        classToAdd: 'visible animated fadeInDown'
    });
    $('.benkiser--fadeIn').viewportChecker({
        offset: ['-10%'],
        repeat: true,
        classToAdd: 'visible animated fadeIn'
    });

    slider.setup("masterslider", {
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
        preload: 4,
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


    slider2.setup("masterslider2", {
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
        preload: 4,
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
    slider2.control('bullets', { autohide: false, dir: "v", align: "bottom", insertTo: ".benkiser-slider-bullets" });

    $('.number-only').mask('0#');

    var facts = [];
    facts.push({
        value: 5,
        text: 'Su / Yarım pet şişe',
        src: 'assets/image/1-su_5.jpg',
    });
    facts.push({
        value: 7,
        text: 'Küp şeker / 1 adet',
        src: 'assets/image/2-kup-seker_7.jpg',
    });
    facts.push({
        value: 9,
        text: 'Kola / 1 litre',
        src: 'assets/image/3-kola_9.jpg',
    });
    facts.push({
        value: 10,
        text: 'Kağıt / 1 adet A4',
        src: 'assets/image/4-a4-kagıt_10.jpg',
    });
    facts.push({
        value: 28,
        text: 'Çay / 1 kg',
        src: 'assets/image/5-cay_28.jpg',
    });
    facts.push({
        value: 40,
        text: 'Ekmek / 1 dilim',
        src: 'assets/image/6-ekmek_40.jpg',
    });
    facts.push({
        value: 50,
        text: 'Portakal / 1 adet (100 gr)',
        src: 'assets/image/7-portakal_50.jpg',
    });
    facts.push({
        value: 70,
        text: 'Elma / 1 adet (100 gr)',
        src: 'assets/image/8-elma_70.jpg',
    });
    facts.push({
        value: 100,
        text: 'Pilav / 1 porsiyon',
        src: 'assets/image/9-pilav_100.jpg',
    });
    facts.push({
        value: 140,
        text: 'Kahve / 1 fincan, 7 gr kahve',
        src: 'assets/image/10-kahve_140.jpg',
    });
    facts.push({
        value: 170,
        text: 'Portakal suyu / 1 bardak (200 ml)',
        src: 'assets/image/11-portakal-suyu_170.jpg',
    });
    facts.push({
        value: 175,
        text: 'Karpuz / orta boy',
        src: 'assets/image/12-karpuz_175.jpg',
    });
    facts.push({
        value: 180,
        text: 'Domates / 1 kg',
        src: 'assets/image/13-1kg-domates_180.jpg',
    });
    facts.push({
        value: 190,
        text: 'Elma suyu / 1 bardak (200 ml)',
        src: 'assets/image/14-elma-suyu_190.jpg',
    });
    facts.push({
        value: 240,
        text: 'Çelik / 1 kg',
        src: 'assets/image/17-1kg-celik_240.jpg',
    });
    facts.push({
        value: 400,
        text: 'Yumurta / 2 adet',
        src: 'assets/image/15-yumurta_200.jpg',
    });
    facts.push({
        value: 900,
        text: 'Patates / 1 kg',
        src: 'assets/image/18-1kg-patates_900.jpg',
    });
    facts.push({
        value: 1300,
        text: 'Buğday / 1 kg',
        src: 'assets/image/19-1kg-bugday_1300.jpg',
    });
    facts.push({
        value: 1500,
        text: 'Dondurma / 1 külah',
        src: 'assets/image/20-dondurma_1500.jpg',
    });
    facts.push({
        value: 1800,
        text: 'Soya / 1 kg',
        src: 'assets/image/22-1kg-soya_1800.jpg',
    });
    facts.push({
        value: 2325,
        text: 'Hamburger / 150 gr biftek',
        src: 'assets/image/23-hamburger_2325.jpg',
    });
    facts.push({
        value: 2500,
        text: 'Hindistan Cevizi / 1 kg',
        src: 'assets/image/24-1kg-hindistan-cevizi_2500.jpg',
    });

    $("#range-slider").slider({
        range: "min",
        min: 0,
        max: 2500,
        step: 1,
        value: 0,
        create: function (event, ui) {
            $('.slider-wrapper').find('#range-slider').append("<span class='value'></span>");
            $('.slider-wrapper').find('.value').html('<span class="range-value">0</span> <br><span class="slider-litre">litre</span>');
        },
        slide: function (event, ui) {
            $('.slider-wrapper').find('.value').html('<span class="range-value">' + ui.value + '</span><br><span class="slider-litre">litre</span>');
            for (var i = 0; i < facts.length; i++) {
                var val = parseInt(ui.value);
                if (val - 3 >= facts[i].value && facts[i].value <= val + 3) {
                    $('.slider-output .text').html(facts[i].text);
                    $('.slider-output img').attr('src', facts[i].src);
                }
            }
        }
    });

    // RANGE SLIDER ENG START

    var facts_en = [];
    facts_en.push({
        value: 5,
        text: 'Water/Half of the plastic bottle',
        src: 'assets/image/1-su_5.jpg',
    });
    facts_en.push({
        value: 7,
        text: 'Cube sugar/1 piece',
        src: 'assets/image/2-kup-seker_7.jpg',
    });
    facts_en.push({
        value: 9,
        text: 'Coke/1 litre',
        src: 'assets/image/3-kola_9.jpg',
    });
    facts_en.push({
        value: 10,
        text: 'Sheet/1 A4',
        src: 'assets/image/4-a4-kagıt_10.jpg',
    });
    facts_en.push({
        value: 28,
        text: 'Tea/1 kg',
        src: 'assets/image/5-cay_28.jpg',
    });
    facts_en.push({
        value: 40,
        text: 'Bread/1 slice',
        src: 'assets/image/6-ekmek_40.jpg',
    });
    facts_en.push({
        value: 50,
        text: 'Orange/1 (100 gr)',
        src: 'assets/image/7-portakal_50.jpg',
    });
    facts_en.push({
        value: 70,
        text: 'Apple/1 (100 gr)',
        src: 'assets/image/8-elma_70.jpg',
    });
    facts_en.push({
        value: 100,
        text: 'Rice/1 portion ',
        src: 'assets/image/9-pilav_100.jpg',
    });
    facts_en.push({
        value: 140,
        text: 'Coffee/1 cup, 7 gr coffee',
        src: 'assets/image/10-kahve_140.jpg',
    });
    facts_en.push({
        value: 170,
        text: 'Orange Juice/1 glass (200 ml)',
        src: 'assets/image/11-portakal-suyu_170.jpg',
    });
    facts_en.push({
        value: 175,
        text: 'Watermelon/medium-sized',
        src: 'assets/image/12-karpuz_175.jpg',
    });
    facts_en.push({
        value: 180,
        text: 'Tomato/1 kg',
        src: 'assets/image/13-1kg-domates_180.jpg',
    });
    facts_en.push({
        value: 190,
        text: 'Apple Juice/1 glass (200 ml)',
        src: 'assets/image/14-elma-suyu_190.jpg',
    });
    facts_en.push({
        value: 240,
        text: 'Steel/1 kg',
        src: 'assets/image/17-1kg-celik_240.jpg',
    });
    facts_en.push({
        value: 400,
        text: '2 Eggs',
        src: 'assets/image/15-yumurta_200.jpg',
    });
    facts_en.push({
        value: 900,
        text: 'Potato/1 kg',
        src: 'assets/image/18-1kg-patates_900.jpg',
    });
    facts_en.push({
        value: 1300,
        text: 'Wheat/1 kg',
        src: 'assets/image/19-1kg-bugday_1300.jpg',
    });
    facts_en.push({
        value: 1500,
        text: 'Ice cream/1 cone',
        src: 'assets/image/20-dondurma_1500.jpg',
    });
    facts_en.push({
        value: 1800,
        text: 'Soybean/1 kg',
        src: 'assets/image/22-1kg-soya_1800.jpg',
    });
    facts_en.push({
        value: 2325,
        text: 'Burger/150 gr beefsteak',
        src: 'assets/image/23-hamburger_2325.jpg',
    });
    facts_en.push({
        value: 2500,
        text: 'Coconut / 1 kg',
        src: 'assets/image/24-1kg-hindistan-cevizi_2500.jpg',
    });

    $("#range-slider-en").slider({
        range: "min",
        min: 0,
        max: 2500,
        step: 1,
        value: 0,
        create: function (event, ui) {
            $('.slider-wrapper').find('#range-slider-en').append("<span class='value'></span>");
            $('.slider-wrapper').find('.value').html('<span class="range-value">0</span> <br><span class="slider-litre">liter</span>');
        },
        slide: function (event, ui) {
            $('.slider-wrapper').find('.value').html('<span class="range-value">' + ui.value + '</span><br><span class="slider-litre">liter</span>');
            for (var i = 0; i < facts_en.length; i++) {
                var val = parseInt(ui.value);
                if (val - 3 >= facts_en[i].value && facts_en[i].value <= val + 3) {
                    $('.slider-output .text').html(facts_en[i].text);
                    $('.slider-output img').attr('src', facts_en[i].src);
                }
            }
        }
    });

    // RANGE SLIDER ENG END

    $.get('/umbraco/surface/ajax/total', function (response) {
        // $('.total-saving').html(response + " Ton");
        function totalNumb(n, c, d, t) {
            var c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "." : d, t = t == undefined ? "," : t, s = n < 0 ? "-" : "", i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), j = (j = i.length) > 3 ? j % 3 : 0; return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
        }
        response = totalNumb(response);
        response = response.replace('.00', '');
        $('.total-saving').html(response.replace('-','') + " Ton");

    });

    $('.arrow.prev').click(function (e) {
        slider.api.previous();
    });

    $('.arrow.next').click(function (e) {
        slider.api.next();
    });

    $('.arrow2.prev').click(function (e) {
        slider2.api.previous();
    });

    $('.arrow2.next').click(function (e) {
        slider2.api.next();
    });

    $('.menu a, .mobile-menu-bg a, .hesapla, .page-1-manifesto').click(function (e) {
        if(!$(this).hasClass("promise-save")) {
            e.preventDefault();
        }
        if (!$(this).hasClass('redirect')) {
            var target = $(this).attr('href');
            $("html, body").animate({
                scrollTop: $(target).offset().top - 40
            }, 1000);

            if ($('.mobile-menu-bg').hasClass('active')) {
                $('.mobile-menu-bg').removeClass('active');
                $('.mobile-menu').removeClass('active');
                $('.hamburger').removeClass('active');
            }
        } else {
            window.location = $(this).attr('href');
            return true;
        }
    });
    var answers = [];
    answers[0] = null;
    answers[1] = 1;
    answers[2] = null;
    answers[3] = null;
    answers[4] = null;
    answers[5] = null;
    answers[6] = null;
    answers[7] = null;
    answers[8] = null;
    answers[9] = null;
    answers[10] = null;
    answers[11] = null;
    answers[12] = null;
    answers[13] = null;
    answers[14] = null;
    answers[15] = null;

    function getAnswer(index) {
        switch (index) {
            case 0:
                if ($('#city').val() == 0) {
                    $('#city').parent().find('button').css('border', 'solid 1px red');
                    answers[index] = null;
                    return false;
                } else {
                    $('#city').parent().find('button').css('border', 0);
                    answers[index] = $('#city').val();
                    return answers[index];
                }
                break;
            case 1:
                if (isNaN(parseInt($('#people').val()))) {
                    $('#people').css('border', 'solid 1px red');
                    answers[index] = null;
                    return false;
                } else {
                    $('#people').css('border', '1px solid #00a259');
                    answers[index] = parseInt($('#people').val());
                    return answers[index];
                }
                break;
            case 2:

                if (isNaN(parseInt($('#shower_how_many_times').val()))) {
                    $('#shower_how_many_times').css('border', 'solid 1px red');
                    answers[index] = null;
                    return false;
                } else {
                    $('#shower_how_many_times').css('border', '1px solid #00a259');
                    answers[index] = parseInt($('#shower_how_many_times').val());

                    return answers[index];
                }
                break;
            case 3:
                if ($("input[name='shower_how_long']:checked").length == 0) {
                    $("input[name='shower_how_long']").css('border', 'solid 1px red');
                    answers[index] = null;
                    return false;
                } else {
                    $("input[name='shower_how_long']").css('border', '1px solid #00a259');
                    answers[index] = parseInt($("input[name='shower_how_long']:checked").val());

                    return answers[index];
                }
                break;
            case 4:
                if ($("input[name='washing_how']:checked").length == 0) {
                    $("input[name='washing_how']").css('border', 'solid 1px red');
                    answers[index] = null;
                    return false;
                } else {
                    $("input[name='washing_how']").css('border', '1px solid #00a259');
                    answers[index] = parseInt($("input[name='washing_how']:checked").val());

                    return answers[index];
                }
                break;
            case 5:
                if (isNaN(parseInt($('#washing_how_many_times').val()))) {
                    $('#washing_how_many_times').css('border', 'solid 1px red');
                    answers[index] = null;
                    return false;
                } else {
                    $('#washing_how_many_times').css('border', '1px solid #00a259');
                    answers[index] = parseInt($('#washing_how_many_times').val());
                    return answers[index];
                }
                break;
            case 6:
                if ($("input[name='dishwashing_how']:checked").length == 0) {
                    $("input[name='dishwashing_how']").css('border', 'solid 1px red');
                    answers[index] = null;
                    return false;
                } else {
                    $("input[name='dishwashing_how']").css('border', '1px solid #00a259');
                    answers[index] = parseInt($("input[name='dishwashing_how']:checked").val());
                    return answers[index];
                }
                break;
            case 7:
                if (isNaN(parseInt($('#dishwashing_how_many_times').val()))) {
                    $('#dishwashing_how_many_times').css('border', 'solid 1px red');
                    answers[index] = null;
                    return false;
                } else {
                    $('#dishwashing_how_many_times').css('border', '1px solid #00a259');
                    answers[index] = parseInt($('#dishwashing_how_many_times').val());

                    return answers[index];
                }
                break;
            case 8:
                if ($("input[name='extra_water']:checked").length == 0) {
                    $("input[name='extra_water']").css('border', 'solid 1px red');
                    answers[index] = null;
                    return false;
                } else {
                    $("input[name='extra_water']").css('border', '1px solid #00a259');
                    answers[index] = parseInt($("input[name='extra_water']:checked").val());
                    return answers[index];
                }
                break;
            case 9:
                if ($("input[name='tap_water_how_many_times']:checked").length == 0) {
                    $("input[name='tap_water_how_many_times']").css('border', 'solid 1px red');
                    answers[index] = null;
                    return false;
                } else {
                    $("input[name='tap_water_how_many_times']").css('border', '1px solid #00a259');
                    answers[index] = parseInt($("input[name='tap_water_how_many_times']:checked").val());
                    return answers[index];
                }
                break;
            case 10:
                if (isNaN(parseInt($('#carwash_how_many_times').val()))) {
                    $('#carwash_how_many_times').css('border', 'solid 1px red');
                    answers[index] = null;
                    return false;
                } else {
                    $('#carwash_how_many_times').css('border', '1px solid #00a259');
                    answers[index] = parseInt($('#carwash_how_many_times').val());
                    return answers[index];
                }
                break;
            case 11:
                if (isNaN(parseInt($('#food_cost').val()))) {
                    $('#food_cost').css('border', 'solid 1px red');
                    answers[index] = null;
                    return false;
                } else {
                    $('#food_cost').css('border', '1px solid #00a259');
                    answers[index] = parseInt($('#food_cost').val());
                    return answers[index];
                }
                break;
            case 12:
                if (isNaN(parseInt($('#meat_consume').val()))) {
                    $('#meat_consume').css('border', 'solid 1px red');
                    answers[index] = null;
                    return false;
                } else {
                    $('#meat_consume').css('border', '1px solid #00a259');
                    answers[index] = parseInt($('#meat_consume').val());
                    return answers[index];
                }
                break;
            case 13:
                if (isNaN(parseInt($('#tea_how_many').val()))) {
                    $('#tea_how_many').css('border', 'solid 1px red');
                    answers[index] = null;
                    return false;
                } else {
                    $('#tea_how_many').css('border', '1px solid #00a259');
                    answers[index] = parseInt($('#tea_how_many').val());
                    return answers[index];
                }
                break;
            case 14:
                if ($("input[name='with_sugar']:checked").length == 0) {
                    $("input[name='with_sugar']").css('border', 'solid 1px red');
                    answers[index] = null;
                    return false;
                } else {
                    $("input[name='with_sugar']").css('border', '1px solid #00a259');
                    answers[index] = parseInt($("input[name='with_sugar']:checked").val());
                    return answers[index];
                }
                break;
            case 15:

                if (isNaN(parseInt($('#how_much_sugar').val()))) {
                    $('#how_much_sugar').css('border', 'solid 1px red');
                    answers[index] = null;
                    return false;
                } else {
                    $('#how_much_sugar').css('border', '1px solid #00a259');
                    answers[index] = parseInt($('#how_much_sugar').val());
                    return answers[index];
                }
                break;

            case 16:
                if (isNaN(parseInt($('#clothing_cost').val()))) {
                    $('#clothing_cost').css('border', 'solid 1px red');
                    answers[index] = null;
                    return false;
                } else {
                    $('#clothing_cost').css('border', '1px solid #00a259');
                    answers[index] = parseInt($('#clothing_cost').val());
                    return answers[index];
                }
                break;

        }
    }

    var currentIndex = 0;
    var total = $('.questions-safe').length;
    $('.buttons a.next').click(function (e) {
        e.preventDefault();
        if (currentIndex < total - 1) {
            var result = getAnswer(currentIndex);

            if (result === false) {
                return false;
            }

            if (currentIndex == 0) {
                currentIndex++;
            }

            if (currentIndex == 14 && result == 1) {
                currentIndex++;
            }

            if (currentIndex >= 16) {
                $(".buttons").find(".next").addClass('question-promise-btn').text("SÖZ VER");
                $(".buttons").find(".next").text("SÖZ VER");
                $(".buttons").find(".next-en").text("PROMISE");
                $(".buttons").find(".reset").addClass("active");
            } else {
                $(".buttons").find(".next").removeClass('question-promise-btn').text("İLERİ");
                $(".buttons").find(".next").text("İLERİ");
                $(".buttons").find(".next-en").text("FORWARD");
                $(".buttons").find(".reset").removeClass("active");
            }

            currentIndex++;

            $('.questions-safe').removeClass('visible');
            $($('.questions-safe').get(currentIndex)).addClass('visible');

            $('.questions-safe-dot').removeClass('active');
            $($('.questions-safe-dot').get(currentIndex)).addClass('active');

            for (var i = 0; i < answers.length; i++) {
                if (answers[i] === null) {
                    answers[i] = 0;
                } else {
                    answers[i] = parseInt(answers[i]);
                }
            }
            value = water_footprint(answers[0], answers[1], answers[2], answers[3], answers[4], answers[5], answers[6], answers[7], answers[8], answers[9], answers[10], answers[11], answers[12], answers[13], answers[15], answers[16]);

            var saving_shower_how_many_times = answers[2];
            var saving_shower_how_long = answers[3];
            var saving_washing_how = answers[4];
            var saving_washing_how_many_times = answers[5];
            var saving_diswashing_how = answers[6];
            var saving_diswashing_how_many_times = answers[7];
            var saving_cloating_cost = answers[16];
            var saving_car_wash = answers[10];

            if (answers[2] > 4) {
                $($('.promise li').get(0)).show();
            } else {
                $($('.promise li').get(0)).hide();
            }

            if (answers[3] != 0) {
                $($('.promise li').get(1)).show();
            } else {
                $($('.promise li').get(1)).hide();
            }

            /* if (answers[6] != 0) {
                $($('.promise li').get(2)).show();
            } else {
                $($('.promise li').get(2)).hide();
            } */
            if (answers[10] > 2) {
                $($('.promise li').get(4)).show();
            } else {
                $($('.promise li').get(4)).hide();
            }

            $('.your-water-footprint, .saving-footprint-with').html(value);


            if (currentIndex == total - 2) {
                grecaptcha.execute();
            }

            if (currentIndex == total - 1) {
                $('.buttons').hide();

                var form = $('#__AjaxAntiForgeryForm');
                var token = $('input[name="__RequestVerificationToken"]', form).val();

                $.post('/umbraco/surface/ajax/save', {
                    'sehir': answers[0],
                    'hanedekiKisiSayisi': answers[1],
                    'haftadaKacKereDusAliyorsunuz': answers[2],
                    'ortalamaDusSuereniz': answers[3],
                    'camasirlariniziNasilYikiyorsunuz': answers[4],
                    'haftadaKacKereCamasirYikiyorsunuz': answers[5],
                    'bulasiklariniziNasilYikiyorsunuz': answers[6],
                    'haftadaKacKezBulasikYikiyorsunuz': answers[7],
                    'bulasiklariniziMakineyeAtmadanOenceSudanGeciriyorMusunuz': answers[8],
                    'mutfakMusluklariniBirGuendeNeKadarSuereKullaniyorsunuz': answers[9],
                    'aracinizVarsaAydaKacKezYikatiyorsunuz': answers[10],
                    'aylikMutfakGiderinizHaneTL': answers[11],
                    'haftalikEtTueketiminizHaneKg': answers[12],
                    'guendeKacBardakCayIcersinizBardak': answers[13],
                    'sekerliMiSekersizMi': answers[14],
                    'bardakCayaKacAdetSekerAdet': answers[15],
                    'aylikKiyafetAlisverisiGideriniz': answers[16],
                    'suAyakIzi': value,
                    'suKazanimi': saving_score,
                    'captcha_token': captcha_token,
                    __RequestVerificationToken: token
                }, function (response) {
                        grecaptcha.reset(

                        )
                })
            }
        }
    });

    $('.buttons a.prev').click(function (e) {
        e.preventDefault();
        if (currentIndex == 2) {
            currentIndex--;
        }
        if (currentIndex >= 1) {

            if (currentIndex == 16) {
                if ($("input[name='with_sugar']:checked").length > 0 && parseInt($("input[name='with_sugar']:checked").val()) == 1) {
                    currentIndex--;
                }
            }
            currentIndex--;
            $('.questions-safe').removeClass('visible');
            $($('.questions-safe').get(currentIndex)).addClass('visible');

            $('.questions-safe-dot').removeClass('active');
            $($('.questions-safe-dot').get(currentIndex)).addClass('active');


            if (currentIndex >= 17) {
                $(".buttons").find(".next").addClass('question-promise-btn').text("SÖZ VER");
                $(".buttons").find(".next").text("SÖZ VER");
                $(".buttons").find(".next-en").text("PROMISE");
                $(".buttons").find(".reset").addClass("active");
            } else {
                $(".buttons").find(".next").removeClass('question-promise-btn').text("İLERİ");
                $(".buttons").find(".next").text("İLERİ");
                $(".buttons").find(".next-en").text("FORWARD");
                $(".buttons").find(".reset").removeClass("active");
            }
        }
    });

    $(".buttons a.reset, .share-buttons a.reset").click(function (e) {
        e.preventDefault();
        currentIndex = 0;
        $('.questions-safe').removeClass('visible');
        $($('.questions-safe').get(currentIndex)).addClass('visible');
        $(".buttons").find(".reset").removeClass("active");
        $('.questions-safe-dot').removeClass('active');
        $($('.questions-safe-dot').get(currentIndex)).addClass('active');
        $(".buttons").find(".next").removeClass('question-promise-btn').text("İLERİ");
        $(".buttons").show();
    });

    $('.promise li').click(function (e) {

        var extra = 0;

        if ($($('.promise li').get(0)).find('input').is(":checked")) {
            saving_shower_how_many_times = 4;
            saving_shower_how_long = 0;
        } else {
            saving_shower_how_many_times = answers[2];
            saving_shower_how_long = answers[3];
        }

        if ($($('.promise li').get(1)).find('input').is(":checked")) {
            saving_washing_how = 0;
            saving_washing_how_many_times = .5;
        } else {
            saving_washing_how = answers[4];
            saving_washing_how_many_times = answers[5];
        }

        // if ($($('.promise li').get(2)).find('input').is(":checked")) {
        //     saving_diswashing_how = 0;
        //     saving_diswashing_how_many_times = 2;
        // } else {
        //     saving_diswashing_how = answers[6];
        //     saving_diswashing_how_many_times = answers[7];
        // }

        if ($($('.promise li').get(3)).find('input').is(":checked")) {
            saving_cloating_cost = saving_cloating_cost / 2;
        } else {
            saving_cloating_cost = answers[16];
        }

        if ($($('.promise li').get(4)).find('input').is(":checked")) {
            saving_car_wash = 2;
        } else {
            saving_car_wash = answers[10];
        }

        if ($($('.promise li').get(2)).find('input').is(":checked")) {
            extra += 57;
        }

        if ($($('.promise li').get(5)).find('input').is(":checked")) {
            extra += 64;
        }

        if ($($('.promise li').get(6)).find('input').is(":checked")) {
            extra += 1250;
        }

        var saving = water_footprint(answers[0], answers[1], saving_shower_how_many_times, saving_shower_how_long, saving_washing_how, saving_washing_how_many_times, answers[6], answers[7], answers[8], answers[9], saving_car_wash, answers[11], answers[12], answers[13], answers[15], saving_cloating_cost);
        saving_score = parseInt(value) - parseInt(saving) + parseInt(extra);
        $('.saving-footprint').html((saving_score).toFixed(0));
        $('.saving-footprint-with').html((parseInt(value) - parseInt(saving_score)).toFixed(0));
    });

    //Questions dots.
    var qItem = $('.questions .questions-safe');
    var qDotHtml = '<div class="questions-safe-dots">';
    for (var i = 0; i < qItem.length; i++) {
        qDotHtml += '<div class="questions-safe-dot"><span></span></div>';
    }
    qDotHtml += '</div>';
    $('.questions').append(qDotHtml);
    $('.questions-safe-dot:eq(0)').addClass('active');

    $($('.questions-safe-dot').get(total - 1)).addClass('blue');
    $($('.questions-safe-dot').get(total - 2)).addClass('green');

    //Dropdown navigation action.
    $('.benkiser--dropdown-menu select').change(function () {
        $(this).parent('.benkiser--dropdown-menu').find('button').text($(this).find('option:selected').text());
    });

    $('.region select').change(function () {
        $(this).parent('.region').find('button').text($(this).find('option:selected').text());
    });

    var regionDrop = document.querySelector("#regionDrop");

    // Kapattım
    if ($(".mobile-map-item").length > 0) {
        document.querySelectorAll(".mobile-map-item")[0].style.display = "block";

        regionDrop.addEventListener("change", function () {
            var regParse = parseInt(regionDrop.value);
            var mobile_map_item = document.querySelectorAll(".mobile-map-item");
            for (i = 0; i < mobile_map_item.length; i++) { mobile_map_item[i].style.display = "none"; }
            document.querySelectorAll(".mobile-map-item")[regParse].style.display = "block";
        });
    }



    var timeLineMoneybox = document.querySelector(".time-line-moneybox");
    var mobileMenuBg = document.querySelector(".mobile-menu-bg");

    mobileMenuBg.addEventListener("click", function () {
        var timeLine = document.querySelector(".time-line");
        var timeLineParse = parseInt(timeLine.offsetWidth);
        if (timeLineParse == 250) {
            timeLine.style.width = "50px";
            timeLineMoneybox.style.right = "50px";
        }
    });

    if (timeLineMoneybox) {
        timeLineMoneybox.addEventListener("click", function () {
            var timeLine = document.querySelector(".time-line");
            var timeLineParse = parseInt(timeLine.offsetWidth);

            if (timeLineParse == 250) {
                timeLine.style.width = "50px";
                timeLineMoneybox.style.right = "50px";
            } else {
                timeLine.style.width = "250px";
                timeLineMoneybox.style.right = "250px";
            }
        });
    }



    //Scroll Top button.
    $('.top-arrow').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    //Mobile navigation.
    $('.hamburger').click(function () {
        if (!$('.mobile-menu-bg').hasClass('active')) {
            $('.mobile-menu-bg').addClass('active');
            $('.time-line').addClass('active');
            $('.hamburger').addClass('active');

        } else {
            $('.mobile-menu-bg').removeClass('active');
            $('.time-line').removeClass('active');
            $('.hamburger').removeClass('active');
        }
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.top-arrow').fadeIn(300);
        } else {
            $('.top-arrow').fadeOut(300);
        }
    });

    $('.share-buttons a.twitter-color').click(function (e) {
        e.preventDefault();
        ShareOnTwitter("Söz verdim! Artık " + saving_score + " lt daha az su tüketiyorum. #yarınınsuyu https://www.yarininsuyu.com/"+ language +"?share=social&score=" + saving_score + '&language=' + language + '&v=1.1');
    });

    $('.share-buttons a.facebook-color').click(function (e) {
        e.preventDefault();
        shareOnFacebook(saving_score);
    });

    $('.share-buttons a.instagram-color').click(function (e) {
        e.preventDefault();
        window.open('https://www.yarininsuyu.com/umbraco/surface/ajax/index?type=instagram&score=' + saving_score + '&language='+ language +'&v=1.1');
    });

    $('.ui-map-hotpoint').each(function (i, elm) {
        var ui_zIndex = $(this).attr('ui-zIndex');
        var ui_size = $(this).attr('ui-size');

        var x = $(this).attr('ui-position-value').split(',')[0];
        var y = $(this).attr('ui-position-value').split(',')[1];

        var a = $(this).attr('ui-size').split(',')[0];
        var b = $(this).attr('ui-size').split(',')[1];

        if ($(elm).attr('ui-position') == 'left') {
            $(elm).addClass('ui-position-controller').css({
                left: 0,
                marginLeft: x + '%',
                marginTop: y + '%',
                zIndex: ui_zIndex,
                width: a + "vw",
                height: b + "vw"
            });
        } else {
            $(elm).addClass('ui-position-controller').css({
                right: 0,
                marginRight: x + '%',
                marginTop: y + '%',
                zIndex: ui_zIndex,
                width: a + "vw",
                height: b + "vw"
            });
        }
    });

    $('[data-ref-id]').hover(function () {
        var id = $(this).data('ref-id');

        $(this).find('span').stop().fadeIn(300);
    }, function () {
        $('.ui-map-hotpoint span').stop().fadeOut(100);
    });

    var economicResearchMapsItem = document.querySelectorAll(".economic-research-maps-item");
    var economicResearchMapsShow = document.querySelector(".see-more");
    var economicResearchMapsItemNumb;

    if (window.innerWidth >= 680) {
        economicResearchMapsItemNumb = 6;
    } else {
        economicResearchMapsItemNumb = 0;
    }

    if (economicResearchMapsShow) {
        economicResearchMapsShow.addEventListener("click", function () {
            if (economicResearchMapsItemNumb == economicResearchMapsItem.length || economicResearchMapsItemNumb > 24) {
                economicResearchMapsShow.style.display = "none";
                // return false;
            } else {
                if ($(".map-first-touch").length > 0) {
                    $(".map-first-touch").removeClass("map-first-touch");
                    economicResearchMapsItemNumb += 0;
                } else {
                    economicResearchMapsItemNumb += 3;
                }
                for (var i = 0; i < economicResearchMapsItemNumb; i++) {
                    economicResearchMapsItem[i].style.display = "inline-block";
                    economicResearchMapsItem[i].style.opacity = "1";
                }
            }
        });
    }


    $(".see-more").trigger("click");

    if (document.querySelector(".more-button")) {
        document.querySelector(".more-button").addEventListener("click", function () {
            document.querySelector(".risk-more").style.display = "block";
            document.querySelector(".more-button").style.display = "none";
            $(window).trigger("resize");
        });
    }



});

var data = {
    people: 0,
    cities: [{
        id: 1,
        name: 'Adana',
        value: 74,
        adjusted: this.value * 1.2
    },
    {
        id: 2,
        name: 'Adıyaman',
        value: 61
    },
    {
        id: 3,
        name: 'Afyonkarahisar',
        value: 59
    },
    {
        id: 68,
        name: 'Aksaray',
        value: 69
    },
    {
        id: 5,
        name: 'Amasya',
        value: 87
    },
    {
        id: 6,
        name: 'Ankara',
        value: 79
    },
    {
        id: 7,
        name: 'Antalya',
        value: 103
    },
    {
        id: 75,
        name: 'Ardahan',
        value: 143
    },
    {
        id: 8,
        name: 'Artvin',
        value: 76
    },
    {
        id: 9,
        name: 'Aydın',
        value: 82
    },
    {
        id: 4,
        name: 'Ağrı',
        value: 104
    },
    {
        id: 10,
        name: 'Balıkesir',
        value: 83
    },
    {
        id: 74,
        name: 'Bartın',
        value: 74
    },
    {
        id: 72,
        name: 'Batman',
        value: 119
    },
    {
        id: 69,
        name: 'Bayburt',
        value: 36
    },
    {
        id: 11,
        name: 'Bilecik',
        value: 59
    },
    {
        id: 12,
        name: 'Bingöl',
        value: 76
    },
    {
        id: 13,
        name: 'Bitlis',
        value: 121
    },
    {
        id: 14,
        name: 'Bolu',
        value: 51
    },
    {
        id: 15,
        name: 'Burdur',
        value: 67
    },
    {
        id: 16,
        name: 'Bursa',
        value: 57
    },
    {
        id: 20,
        name: 'Denizli',
        value: 81
    },
    {
        id: 21,
        name: 'Diyarbakır',
        value: 47
    },
    {
        id: 81,
        name: 'Düzce',
        value: 63
    },
    {
        id: 22,
        name: 'Edirne',
        value: 74
    },
    {
        id: 23,
        name: 'Elazığ',
        value: 71
    },
    {
        id: 24,
        name: 'Erzincan',
        value: 84
    },
    {
        id: 25,
        name: 'Erzurum',
        value: 108
    },
    {
        id: 26,
        name: 'Eskişehir',
        value: 63
    },
    {
        id: 27,
        name: 'Gaziantep',
        value: 118
    },
    {
        id: 28,
        name: 'Giresun',
        value: 78
    },
    {
        id: 29,
        name: 'Gümüşhane',
        value: 42
    },
    {
        id: 30,
        name: 'Hakkari',
        value: 42
    },
    {
        id: 31,
        name: 'Hatay',
        value: 64
    },
    {
        id: 32,
        name: 'Isparta',
        value: 79
    },
    {
        id: 76,
        name: 'Iğdır',
        value: 46
    },
    {
        id: 46,
        name: 'Kahramanmaraş',
        value: 108
    },
    {
        id: 78,
        name: 'Karabük',
        value: 111
    },
    {
        id: 70,
        name: 'Karaman',
        value: 49
    },
    {
        id: 36,
        name: 'Kars',
        value: 147
    },
    {
        id: 37,
        name: 'Kastamonu',
        value: 71
    },
    {
        id: 38,
        name: 'Kayseri',
        value: 79
    },
    {
        id: 79,
        name: 'Kilis',
        value: 109
    },
    {
        id: 41,
        name: 'Kocaeli',
        value: 83
    },
    {
        id: 42,
        name: 'Konya',
        value: 70
    },
    {
        id: 43,
        name: 'Kütahya',
        value: 61
    },
    {
        id: 39,
        name: 'Kırklareli',
        value: 71
    },
    {
        id: 71,
        name: 'Kırıkkale',
        value: 55
    },
    {
        id: 40,
        name: 'Kırşehir',
        value: 96
    },
    {
        id: 44,
        name: 'Malatya',
        value: 105
    },
    {
        id: 45,
        name: 'Manisa',
        value: 62
    },
    {
        id: 47,
        name: 'Mardin',
        value: 104
    },
    {
        id: 33,
        name: 'Mersin',
        value: 83
    },
    {
        id: 48,
        name: 'Muğla',
        value: 84
    },
    {
        id: 49,
        name: 'Muş',
        value: 116
    },
    {
        id: 50,
        name: 'Nevşehir',
        value: 76
    },
    {
        id: 51,
        name: 'Niğde',
        value: 61
    },
    {
        id: 52,
        name: 'Ordu',
        value: 99
    },
    {
        id: 80,
        name: 'Osmaniye',
        value: 62
    },
    {
        id: 53,
        name: 'Rize',
        value: 73
    },
    {
        id: 54,
        name: 'Sakarya',
        value: 120
    },
    {
        id: 55,
        name: 'Samsun',
        value: 77
    },
    {
        id: 56,
        name: 'Siirt',
        value: 91
    },
    {
        id: 57,
        name: 'Sinop',
        value: 129
    },
    {
        id: 58,
        name: 'Sivas',
        value: 111
    },
    {
        id: 59,
        name: 'Tekirdağ',
        value: 62
    },
    {
        id: 60,
        name: 'Tokat',
        value: 69
    },
    {
        id: 61,
        name: 'Trabzon',
        value: 119
    },
    {
        id: 62,
        name: 'Tunceli',
        value: 102
    },
    {
        id: 64,
        name: 'Uşak',
        value: 63
    },
    {
        id: 65,
        name: 'Van',
        value: 80
    },
    {
        id: 77,
        name: 'Yalova',
        value: 134
    },
    {
        id: 66,
        name: 'Yozgat',
        value: 86
    },
    {
        id: 67,
        name: 'Zonguldak',
        value: 84
    },
    {
        id: 17,
        name: 'Çanakkale',
        value: 63
    },
    {
        id: 18,
        name: 'Çankırı',
        value: 97
    },
    {
        id: 19,
        name: 'Çorum',
        value: 67
    },
    {
        id: 34,
        name: 'İstanbul',
        value: 66
    },
    {
        id: 35,
        name: 'İzmir',
        value: 61
    },
    {
        id: 63,
        name: 'Şanlıurfa',
        value: 60
    },
    {
        id: 73,
        name: 'Şırnak',
        value: 33
    }
    ]
};

if (language == 'en'){
    data.cities.push({
        id: 100,
        name: 'Other',
        value: 1
    });
}

function water_footprint(city, people, shower_how_many_times, shower_how_long, washing_how, washing_how_many_times, dishwashing_how, dishwhasing_how_many_times, dishwasing_extra_water, kitchen_tap_usage, car_wash_how_many_times, food_cost, meat_consume, tea_consume, how_much_sugar, clothing) {
    var total = 0;
    var city_based_total = 0;
    var shower_based_total = 0;
    var washing_based_total = 0;
    var dishwashing_based_total = 0;
    var dishwashing_extra_water_based_total = 0;
    var kitchen_tap_usage_based_total = 0;
    var car_wash_based_total = 0;
    var food_cost_based_total = 0;
    var meat_consume_cost_based_total = 0;
    var tea_consume_cost_based_total = 0;
    var how_much_sugar_based_total = 0;
    var clothing_based_total = 0;
    //city
    for (var i = 0; i < data.cities.length; i++) {
        if (data.cities[i].id == city) {
            city_based_total = data.cities[i].value + data.cities[i].value * 1.2;
        }
    }
    //city
    switch (shower_how_long) {
        case 0:
            shower_based_total = 25 * shower_how_many_times / 7;
            break;
        case 1:
            shower_based_total = 100 * shower_how_many_times / 7;
            break;
        case 2:
            shower_based_total = 250 * shower_how_many_times / 7;
            break;
        case 3:
            shower_based_total = 350 * shower_how_many_times / 7;
            break;
    }

    shower_based_total += shower_based_total * 1.6;

    //shower

    //washing

    switch (washing_how) {
        case 0:
            washing_based_total = 90 * washing_how_many_times / 7 / people;
            break;
        case 1:
            washing_based_total = 100 * washing_how_many_times / 7 / people;
            break;
    }

    washing_based_total += washing_based_total * 1.7;

    //washing

    //dishwashing
    switch (dishwashing_how) {
        case 0:
            dishwashing_based_total = 60 * dishwhasing_how_many_times / 7 / people;
            break;
        case 1:
            dishwashing_based_total = 100 * dishwhasing_how_many_times / 7 / people;
            break;
    }

    switch (dishwasing_extra_water) {
        case 0:
            dishwashing_extra_water_based_total = 60 * dishwhasing_how_many_times / 7 / people;
            break;
    }

    dishwashing_based_total += dishwashing_based_total * 1.7;
    dishwashing_extra_water_based_total += dishwashing_extra_water_based_total * .2;
    //dishwashing

    //kitchen_tap_usage

    switch (kitchen_tap_usage) {
        case 0:
            kitchen_tap_usage_based_total = 12.5 / people;
            break;
        case 1:
            kitchen_tap_usage_based_total = 62.5 / people;
            break;
        case 2:
            kitchen_tap_usage_based_total = 150 / people;
            break;
        case 3:
            kitchen_tap_usage_based_total = 225 / people;
            break;
    }

    kitchen_tap_usage_based_total += kitchen_tap_usage_based_total * 0.2;

    //kitchen_tap_usage

    //car_wash_how_many_times
    car_wash_based_total = 300 / 7 * car_wash_how_many_times / people;
    car_wash_based_total += car_wash_based_total * 1.2;
    //car_wash_how_many_times

    //food_cost
    food_cost_based_total = food_cost * 0.315 + food_cost * 0.34 + food_cost * 0.027;
    //food_cost

    //food_cost
    meat_consume_cost_based_total = meat_consume * 13909.5 / 7 / people + meat_consume * 627 / 7 / people;
    //food_cost

    //food_cost
    tea_consume_cost_based_total = tea_consume * 2296 * 2 / 1000 + tea_consume * 735 * 2 / 1000;
    //food_cost

    //food_cost
    how_much_sugar_based_total = how_much_sugar * 364 * 0.4 / 1000 * tea_consume + how_much_sugar * 577 * 0.4 / 1000 * tea_consume;
    //food_cost

    //clothing
    clothing_based_total = 10 * clothing / 30 / people + 4 * clothing / 30 / people + 3 * clothing / 30 / people;
    //clothing

    total += Math.round(city_based_total);
    total += Math.round(shower_based_total);
    total += Math.round(washing_based_total);
    total += Math.round(dishwashing_based_total);
    total += Math.round(dishwashing_extra_water_based_total);
    total += Math.round(kitchen_tap_usage_based_total);
    total += Math.round(car_wash_based_total);
    total += Math.round(food_cost_based_total);
    total += Math.round(meat_consume_cost_based_total);
    total += Math.round(tea_consume_cost_based_total);
    total += Math.round(how_much_sugar_based_total);
    total += Math.round(clothing_based_total);

    return total.toFixed(0);
}


function ShareOnTwitter(message) {
    var popup = null;
    var windWidth = 600;
    var windHeight = 550;
    var windTop = parseInt((screen.availHeight - windHeight) / 3);
    var windLeft = parseInt((screen.availWidth - windWidth) / 2);

    var shareText = message;

    popup = window.open('http://twitter.com/intent/tweet?text=' + encodeURIComponent(shareText), 'ShareOnTwitter', 'width=' + windWidth + ', height=' + windHeight + ', left=' + windLeft + ', top=' + windTop + ', scrollbars, resizable');

    if (window.focus) {
        popup.focus()
    }
    if (!popup.closed) {
        popup.focus()
    }
}

function shareOnFacebook(score) {

    var popup = null;
    var windWidth = 600;
    var windHeight = 550;
    var windTop = parseInt((screen.availHeight - windHeight) / 3);
    var windLeft = parseInt((screen.availWidth - windWidth) / 2);

    var url = 'https://www.yarininsuyu.com/'+language+'?op=share&share=social&score=' + score + '&language=' + language + '&v=1.1';

    popup = window.open('http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), 'ShareOnFacebook', 'width=' + windWidth + ', height=' + windHeight + ', left=' + windLeft + ', top=' + windTop + ', scrollbars, resizable');

    if (window.focus) {
        popup.focus()
    }
    if (!popup.closed) {
        popup.focus()
    }
}