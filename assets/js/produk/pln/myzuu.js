//---------- Pengaturan ----------//

    // LINK TOKO
    const urlToko = "https://myzuu.webtoko.net"

    // AKTIVASI
    const aktivasi = "myzuu"

    // NAMA KATEGORI PLN
    const namaKategori = "Token Listrik"

    // LINK GAMBAR PLN
    const urlGambarKat = "https://i.postimg.cc/4xvJsjQ1/pln.jpg"

    // LINK Kategori
    const urlKategori = [
      {
        "nama": "TOKEN",
        "url": "token-421105",
        "cekID": "pln"
      }
    ]


    //---------- Jangan Dirubah ----------//

    // Kontak & Barcode
    function getContact() {
      window.location.href = urlToko + "/ambil_kontak"
    }
    function getBarcode() {
      window.location.href = urlToko + "/scan_barcode"
    }

    // Bagian Judul & Gambar
    $("#imgOperator").attr("src", urlGambarKat)
    $("#namaOperator").html(namaKategori)

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
      $.each(data, function (i, v) {
        $("#dataPilihan").append(`<div class="container btn-pulsa text-center" id="tombol_${v.nama}" onclick="getData('${v.url}','${v.nama}', '${v.cekID}')">
          <p class="p-1">${v.nama}</p>
          </div> `)
      })
    }



    // Get Data

    // Loop Produk
    function loopProduk(data, kode) {
      $("#dataProduk").html("")

      $.each(data, function (i, v) {
        var strHarga = v.harga.split("Rp")
        var strProd = strHarga[1]
        var hargaProd = `Rp ${strProd}`
        if (kode == "" || kode == "#") {
          hargaProd = "Cek Tagihan"
          $('#dataProduk').append(`<div class="cerd" style="margin-bottom:20px" data-bs-toggle="offcanvas" data-bs-target="#Id3" aria-controls="Id3" onclick="showDetail('${v.nama}','${hargaProd}','${v.url}','${kode}')">
            <p class="nama-produk">${v.nama}</p>
            <p class="harga-produk">Cek Tagihan</p>
            </div>`)
        } else {
          $('#dataProduk').append(`<div class="col-6" style="margin-bottom:20px" data-bs-toggle="offcanvas" data-bs-target="#Id3" aria-controls="Id3" onclick="showDetail('${v.nama}','${hargaProd}','${v.url}','${kode}')">
            <div class="cerd">
            <p class="nama-produk">${v.nama}</p>
            <p class="harga-produk">${hargaProd}</p>
            </div>
            </div>`)
        }
      });
    }

    // CekID
    function cekNomorPel(kode) {
      var noPel = $("#nomoTel").val();
      var urlz = "https://nielz.my.id/validation/api/bill"
      var zenkey = "8272b58207a73d9"

      $.ajax({
        method: "GET",
        url: `${urlz}/${kode}/?no=${noPel}&key=${zenkey}`,
        beforeSend: function () {
          $('#nama').html('Mengecek...')
          $('#daya').html('Mengecek...')
          $("#btls").removeClass("d-flex")
          $("#btnMT").show()
          $("#btnBli").hide()
          $("#btnBtl").hide()
        },

        success: function (response) {
          if (response.hasOwnProperty('error_msg')) {
            $('#nama').html(response.error_msg);
            $('#daya').html(response.error_msg);
            $("#btls").removeClass("d-flex")
            $("#btnBli").hide()
            $("#btnMT").hide()
            $("#btnBtl").show()
          }

          else {
            $('#nama').html(response.nickname);
            $('#daya').html(response.segment_power);
            $("#btls").addClass("d-flex")
            $("#btnBli").show()
            $("#btnBtl").show()
            $("#btnMT").hide()
          }
        }
      })
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
    })