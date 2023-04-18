const urlToko = "https://myzuu.webtoko.net"
const aktivasi = "myzuu"

const urlKategori = [
    {
        
        "Telkomsel": {
            "nama": "Telkomsel",
            "gambar": "https://sc.myzuu.my.id/assets/img/produk/paket-data/telkomsel/myzuu.jpg",
            "data": [

                {
                    "nama": "Bulk",
                    "url": "bulk-428810",
                },
                {
                    "nama": "Flash",
                    "url": "flash-429123",
                },
                {
                    "nama": "Mini",
                    "url": "mini-429129",
                },

            ]
        },

        "Indosat": {
            "nama": "Indosat",
            "gambar": "https://sc.myzuu.my.id/assets/img/produk/paket-data/indosat/myzuu.jpg",
            "data": [

                {
                    "nama": "Umum",
                    "url": "umum-429808",
                },
                {
                    "nama": "Yellow",
                    "url": "yellow-429809",
                },
                {
                    "nama": "Freedom Combo",
                    "url": "freedom-combo-429810",
                },
                {
                    "nama": "Freedom Harian",
                    "url": "freedom-harian-429811",
                },
                {
                    "nama": "Freedom Internet",
                    "url": "freedom-internet-429812",
                },

            ]
        },

        "Axis": {
            "nama": "Axis",
            "gambar": "https://sc.myzuu.my.id/assets/img/produk/paket-data/axis/myzuu.jpg",
            "data": [

                {
                    "nama": "Mini",
                    "url": "mini-429884",
                },
                {
                    "nama": "Bronet",
                    "url": "bronet-429885",
                },
                {
                    "nama": "Owsem",
                    "url": "owsem-429886",
                },
                {
                    "nama": "Ekstra",
                    "url": "ekstra-429887",
                },

            ]
        },

        "Smartfren": {
            "nama": "Smartfren",
            "gambar": "https://sc.myzuu.my.id/assets/img/produk/paket-data/smartfren/myzuu.jpg",
            "data": [

                {
                    "nama": "Umum",
                    "url": "umum-431977",
                },
                {
                    "nama": "Unlimited",
                    "url": "unlimited-431978",
                },
                {
                    "nama": "Volume",
                    "url": "volume-431979",
                },
                {
                    "nama": "Nonstop",
                    "url": "nonstop-431981",
                },
                {
                    "nama": "Unlimited Nonstop",
                    "url": "unlimited-nonstop-431982",
                },

            ]
        },

        "Three": {
            "nama": "Three",
            "gambar": "https://sc.myzuu.my.id/assets/img/produk/paket-data/three/myzuu.jpg",
            "data": [

                {
                    "nama": "Umum",
                    "url": "umum-431990",
                },
                {
                    "nama": "Mini",
                    "url": "mini-431991",
                },
                {
                    "nama": "AlwaysOn",
                    "url": "alwayson-431992",
                },
                {
                    "nama": "GetMore",
                    "url": "getmore-431993",
                },
                {
                    "nama": "Mix",
                    "url": "mix-431994",
                },
                {
                    "nama": "Happy",
                    "url": "happy-431995",
                },

            ]
        },

        "XL Axiata": {
            "nama": "Voucher XL",
            "gambar": "https://i.postimg.cc/rm2HgY16/download-3.jpg",
            "data": [

                {
                    "nama": "",
                    "url": "",
                },
                {
                    "nama": "",
                    "url": "",
                },

            ]
        },
    }

]

// Oper-data
var dataIsat = urlKategori[0]["Indosat"]
var dataTsel = urlKategori[0]["Telkomsel"]
var dataThree = urlKategori[0]["Three"]
var dataXL = urlKategori[0]["XL Axiata"]
var dataAxis = urlKategori[0]["Axis"]
var dataSfren = urlKategori[0]["Smartfren"]

//---------- Jangan Dirubah ----------//

// Hide 

// Kontak & Barcide
function getContact() {
    window.location.href = urlToko + "/ambil_kontak"
}

// Loading
var loadAwal = `<div id="loads" class="loading">
    <div class="loadingspinner">
    <div id="square1"></div>
    <div id="square2"></div>
    <div id="square3"></div>
    <div id="square4"></div>
    <div id="square5"></div>
    </div>
    <p id="text-load" class="fw-bold mt-2 text-center t-load">Masukan nomor yang valid terlebih dahulu...</p>
    </div>`

var loads = `<div id="loads-2" class="loading">
    <div class="loadingspinner">
    <div id="square1"></div>
    <div id="square2"></div>
    <div id="square3"></div>
    <div id="square4"></div>
    <div id="square5"></div>
    </div>
    </div>`

var noSalah = `<div id="no-salah" class="container text-center produk-none animate__animated animate__fadeIn">
    <img src="https://i.ibb.co/f8gVVGD/eror.jpg">
    <p class="fw-bold mt-3">Nomor yang dimasukan salah nih...</p>
    </div>`

var produkNone = `<div id="produk-none" class="text-center container produk-none animate__animated animate__fadeIn">
    <img src="https://i.ibb.co/VwtjssF/digital-marketing.webp">
    <p class="fw-bold mt-3">Sepertinya produk ini belum tersedia...</p>
    </div>`

var kategoriNone = `<div id="produk-none" class="text-center mt-3 container produk-none animate__animated animate__fadeIn">
    <img src="https://i.ibb.co/VwtjssF/digital-marketing.webp">
    <p class="fw-bold mt-3">Kategori belum tersedia...</p>
    </div>`

//---------- Data API ----------//


// Get Value
function getValue(data) {
    var gambar = data.gambar
    var nama = data.nama

    var dataKat = data.data
    var nama1 = dataKat[0].nama
    var url1 = dataKat[0].url

    loopSubKat(dataKat, gambar, nama)
    getData(url1, nama1)

}


// LoopSubKat
loopSubKat(dataTsel.data, dataTsel.gambar, dataTsel.nama)
function loopSubKat(data, gambar, nama) {
    $("#imgOperator").attr("src", gambar)
    $("#namaOperator").html(nama)
    $("#nameVoucher").html(nama)
    $("#subKat").html("")
    var url = data[0].url

    if (url == "" || url == "#") {
        $("#subKat").html(kategoriNone)
    } else
        if (url != "" || url != "#") {
            $.each(data, function (i, v) {
                $("#subKat").append(`<div class="cardSubkat py-2 mb-2" onclick="getData('${v.url}', '${v.nama}')" data-bs-dismiss="offcanvas" aria-label="Close">
            <p>
            <img src="${gambar}" width="30" class="rounded-circle">
            <span class="ms-1">${v.nama}</span>
            </p>
            </div>`)
            })
        }
}

// Loop Produk
function loopProduk(data) {
    $("#dataProduk").html("")

    $.each(data, function (i, v) {
        var strHarga = v.harga.split("Rp")
        var strProd = strHarga[1]
        var hargaProd = `Rp ${strProd}`

        $('#dataProduk').append(`<div class="cerd" style="margin-bottom:20px" data-bs-toggle="offcanvas" data-bs-target="#Id3" aria-controls="Id3" onclick="showDetail('${v.nama}','${hargaProd}','${v.url}')">
          <p class="nama-produk">${v.nama}</p>
          <p class="harga-produk">${hargaProd}</p>
          </div>`)
    });
}

// Beli
function tombolBeli(link, isiCat) {
    $("#btnBli").attr("href", link + "?catatan=" + isiCat)
}

// search
$(document).ready(function () {
    $("#search").on("input", function () {
        var value = $(this).val().toLowerCase();
        $("section .cerd").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#src").on("input", function () {
        var value = $(this).val().toLowerCase();
        $("section .cardkat").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#src-kiri").on("input", function () {
        var value = $(this).val().toLowerCase();
        $("section .cardSubkat").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
})