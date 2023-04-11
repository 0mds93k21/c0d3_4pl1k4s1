$(function () {
    var bar = '';

    bar += '<div class="swiper-container swiper-slider-center">';
        bar += ' <div class="swiper-wrapper">';

            bar += ' <div class="swiper-slide">';
                bar += ' <a href="javascript:void(0)">';
                    bar += ' <img src="https://sc.myzuu.my.id/assets/img/home/slider/lebaran-spesial.png" alt="Myzuu" />';
                bar += ' </a>';
            bar += ' </div>';

            bar += ' <div class="swiper-slide">';
                bar += ' <a href="https://myzuu.webtoko.net/digital/201174">';
                    bar += ' <img src="https://sc.myzuu.my.id/assets/img/home/slider/pubg.png" alt="Myzuu" />';
                bar += ' </a>';
            bar += ' </div>';

            bar += ' <div class="swiper-slide">';
                bar += ' <a href="javascript:void(0)">';
                    bar += ' <img src="https://sc.myzuu.my.id/assets/img/home/slider/hyper-front.png" alt="Myzuu" />';
                bar += ' </a>';
            bar += ' </div>';

            bar += ' <div class="swiper-slide">';
                bar += ' <a href="https://myzuu.webtoko.net/digital/200540">';
                    bar += ' <img src="https://sc.myzuu.my.id/assets/img/home/slider/starlight-april.png" alt="Myzuu" />';
                bar += ' </a>';
            bar += ' </div>';

            bar += ' <div class="swiper-slide">';
                bar += ' <a href="https://myzuu.webtoko.net/digital/200540">';
                    bar += ' <img src="https://sc.myzuu.my.id/assets/img/home/slider/allstar-themed.png" alt="Myzuu" />';
                bar += ' </a>';
            bar += ' </div>';

        bar += ' </div>';

        bar += '<center>';
            bar += '<div class="swiper-pagination"></div>';
        bar += '</center>';
    bar += ' </div>';

    bar += '<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>';
    bar += '<script type="text/javascript" src="https://codingasik.my.id/CodingasikV1.js"></script>';
    bar += '<script src="https://unpkg.com/sweetalert@2.1.2/dist/sweetalert.min.js"></script>';

    $("#slider").html(bar);
});

function getValueByName(name) {
    var url = document.getElementById('Myzuu').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}