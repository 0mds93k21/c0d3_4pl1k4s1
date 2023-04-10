$(function () {
    var bar = '';

    bar += '<div class="card-blog">';

   
        bar += '<div class="card-body-blog">';
            bar += '<a href="https://myzuu.webtoko.net/digital/194780">';
                bar += '<img src="https://sc.myzuu.my.id/assets/img/info/blog/1.png" alt="Myzuu" class="img-card-myzuu" />';
                bar += '<div class="text-card-blog">';
                    bar += '<h2 class="title-blog">Pusat Bantuan</h2>';
                    bar += '<p class="paragraph-blog">';
                        bar += 'Punya kendala atau pertanyaan terkait Myzuu? Hubungi kami di sini';
                    bar += '</p>';
                    bar += '<a href="https://myzuu.webtoko.net/digital/194780" class="link-blog">hubungi</a>';
                bar += '</div>';
            bar += '</a>';
        bar += '</div>';

        bar += '<div class="card-body-blog">';
            bar += '<a href="https://myzuu.webtoko.net/pages?voucher">';
                bar += '<img src="https://sc.myzuu.my.id/assets/img/info/blog/2.png" alt="Myzuu" class="img-card-myzuu" />';
                bar += '<div class="text-card-blog">';
                    bar += '<h2 class="title-blog">Promo Voucher Favorit</h2>';
                    bar += '<p class="paragraph-blog">';
                        bar += 'Yuk Cek Berbagai Promo Menarik Di Aplikasi Myzuu Sekarang!';
                    bar += '</p>';
                    bar += '<a href="https://myzuu.webtoko.net/pages?voucher" class="link-blog">Cek Disini!</a>';
                bar += '</div>';
            bar += '</a>';
        bar += '</div>';

        bar += '<div class="card-body-blog">';
            bar += '<a href="https://bio.andrep.my.id/">';
                bar += '<img src="https://sc.myzuu.my.id/assets/img/info/blog/3.png" alt="Myzuu" class="img-card-myzuu" />';
                bar += '<div class="text-card-blog">';
                    bar += '<h2 class="title-blog">Cara TopUp MyzuuPay</h2>';
                    bar += '<p class="paragraph-blog">';
                        bar += 'Yuk Cek Cara TopUp Untuk MyzuuPay Disini!';
                    bar += '</p>';
                    bar += '<a href="https://bio.andrep.my.id/" class="link-blog">Cek Disini!</a>';
                bar += '</div>';
            bar += '</a>';
        bar += '</div>';
        
    bar += '</div>';

    $("#blog").html(bar);
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