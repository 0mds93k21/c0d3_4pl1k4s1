//---------- Pengaturan ----------//

    // LINK TOKO
    const urlToko = "https://myzuu.webtoko.net"

    // AKTIVASI
    const aktivasi = "myzuu"


    // LINK Kategori
    const urlKategori = [
      {
        "nama": "WeTV",
        "url": "wetv-413518",
        "keterangan": "ID Tujuan",
        "gambar": "https://sc.myzuu.my.id/assets/img/produk/streaming/wetv/myzuu.png"
      },
      {
        "nama": "VIU",
        "url": "viu-413517",
        "keterangan": "ID Tujuan",
        "gambar": "https://sc.myzuu.my.id/assets/img/produk/streaming/viu/myzuu.png"
      },
      {
        "nama": "Spotify",
        "url": "spotify-413520",
        "keterangan": "ID Tujuan",
        "gambar": "https://sc.myzuu.my.id/assets/img/produk/streaming/spotify/myzuu.png"
      },
      {
        "nama": "JOOX",
        "url": "joox-413519",
        "keterangan": "ID Tujuan",
        "gambar": "https://sc.myzuu.my.id/assets/img/produk/streaming/joox/myzuu.png"
      },
    ]



    //---------- Jangan Dirubah ----------//

    // Hide 

    // Kontak & Barcode
    function getContact() {
      window.location.href = urlToko + "/ambil_kontak"
    }
    function getBarcode() {
      window.location.href = urlToko + "/scan_barcode"
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


    // LoopSubKat
    loopSubKat(urlKategori)
    function loopSubKat(data) {
      var url = urlKategori.url
      $("#katUtama").html("")
      if (url == "" || url == "#") {
        $("#katUtama").html(kategoriNone)
      } else
        if (url != "" || url != "#") {
          $.each(data, function (i, v) {
            $("#katUtama").append(`<div class="cardkat py-2 mb-2" onclick="getData('${v.url}', '${v.nama}', '${v.keterangan}', '${v.gambar}')" data-bs-dismiss="offcanvas" aria-label="Close">
            <p>
            <img src="${v.gambar}" width="30" class="rounded-circle">
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