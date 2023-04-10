//---------- Pengaturan ----------//

    // LINK TOKO
    const urlToko = "https://myzuu.webtoko.net"

    // AKTIVASI
    const aktivasi = "myzuu"

    // LINK KATEGORI
    const urlKategori = [
    {
      "Telkomsel" : {
        "reguler" : "umum-419930",
        "transfer": "pulsa-transfer-419931",
        "gambar" : "https://sc.myzuu.my.id/assets/img/produk/pulsa/telkomsel/myzuu.jpg",
      },

      "Indosat" :
      {
        "reguler" : "umum-419940",
        "transfer": "pulsa-transfer-419941",
        "gambar" : "https://sc.myzuu.my.id/assets/img/produk/pulsa/indosat/myzuu.jpg",
      },

      "Axis" : {
        "reguler" : "umum-420108",
        "transfer": "pulsa-transfer-420109",
        "gambar" : "https://sc.myzuu.my.id/assets/img/produk/pulsa/axis/myzuu.jpg",
      },

      "Smartfren" : {
        "reguler" : "umum-420164",
        "transfer": "pulsa-transfer-420165",
        "gambar" : "https://sc.myzuu.my.id/assets/img/produk/pulsa/smartfren/myzuu.jpg",
      },

      "Three" : {
        "reguler" : "umum-420220",
        "transfer": "pulsa-transfer-420221",
        "gambar" : "https://sc.myzuu.my.id/assets/img/produk/pulsa/three/myzuu.jpg",
      },

      "XL Axiata" : {
        "reguler" : "umum-420271",
        "transfer": "pulsa-transfer-420272",
        "gambar" : "https://sc.myzuu.my.id/assets/img/produk/pulsa/xl/myzuu.jpg",
      },

      "By.U" : {
        "reguler" : "umum-420275",
        "gambar" : "https://sc.myzuu.my.id/assets/img/produk/pulsa/by.u/myzuu.jpg",
      },

    }
    ]

    //---------- Jangan Dirubah ----------//

    // Kontak
    function getContact() {
      window.location.href = urlToko+"/ambil_kontak"
    }


    // Loading
    var loadAwal = `<div id="loads" class="loading">
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

    var produkNone  = `<div id="produk-none" class="text-center container produk-none animate__animated animate__fadeIn">
    <img src="https://i.ibb.co/VwtjssF/digital-marketing.webp">
    <p class="fw-bold mt-3">Sepertinya produk ini belum tersedia...</p>
    </div>`

    //---------- Data API ----------//

    // Loop Produk
    function loopProduk(data) {
      $("#dataProduk").html("")

      $.each(data, function(i, v){
        var strHarga = v.harga.split("Rp")
        var strProd = strHarga[1]
        var hargaProd = `Rp ${strProd}`

        $('#dataProduk').append(`<div class="col-6" style="margin-bottom:20px" data-bs-toggle="offcanvas" data-bs-target="#Id3" aria-controls="Id3" onclick="showDetail('${v.nama}','${hargaProd}','${v.url}')">
          <div class="cerd">
          <p class="nama-produk">${v.nama}</p>
          <p class="harga-produk">${hargaProd}</p>
          </div>
          </div>`)
      });
    }

    // Beli
    function tombolBeli(link, isiCat) {
     $("#btnBli").attr("href", link+"?catatan="+isiCat)
   }


    //---------- Operatoring ----------//

    // Var Input & Change

    // Clear
    clrAll()
    function clrAll(){
      $("#img-operator").hide()
      $("#box-operator").hide()
      $("#box-pilihan").hide()
      $("#dataAPI").html(loadAwal)
      $("#img-operator").removeAttr("height")

    } 

    // Load Operator
    function loadOperator(val) {
      var imgOpera =  urlKategori[0][val].gambar
      $("#box-operator").show()
      $("#box-pilihan").show()
      $("#imgOperator").attr("height", "35")
      $("#imgOperator").attr("src", imgOpera)
      $("#namaOperator").html(val)
    }