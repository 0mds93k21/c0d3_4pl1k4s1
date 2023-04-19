// filter array 
let filterarray = [];

// gallery card array

let galleryarray = [

    {
        id: 1,
        onclick: "getValue(dataTsel)",
        img: "https://sc.myzuu.my.id/assets/img/produk/paket-data/telkomsel/myzuu.jpg",
        text: "Paket Data Telkomsel"
    },
    
    {
        id: 2,
        onclick: "getValue(dataIsat)",
        img: "https://sc.myzuu.my.id/assets/img/produk/paket-data/indosat/myzuu.jpg",
        text: "Paket Data Indosat"
    },

     {
        id: 3,
        onclick: "getValue(dataAxis)",
        img: "https://sc.myzuu.my.id/assets/img/produk/paket-data/axis/myzuu.jpg",
        text: "Paket Data Axis"
    },
    
    {
        id: 4,
        onclick: "getValue(dataSfren)",
        img: "https://sc.myzuu.my.id/assets/img/produk/paket-data/smartfren/myzuu.jpg",
        text: "Paket Data Smartfren"
    },

    {
        id: 5,
        onclick: "getValue(dataThree)",
        img: "https://sc.myzuu.my.id/assets/img/produk/paket-data/three/myzuu.jpg",
        text: "Paket Data Three"
    },

    {
        id: 6,
        onclick: "getValue(dataXL)",
        img: "https://sc.myzuu.my.id/assets/img/produk/paket-data/xl/myzuu.jpg",
        text: "Paket Data XL"
    },

];



showgallery(galleryarray);


// create function to show card


function showgallery(curarra) {
    document.getElementById("paket-data").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.getElementById("paket-data").innerHTML += `

        <section class="paket-myzuu" id="katUtama">
        <div class="cardkat py-2 mb-2" onclick="${curarra[i].onclick}" data-bs-dismiss="offcanvas" aria-label="Close">
          <p>
            <img src="${curarra[i].img}" width="30" class="rounded-circle">
            <span class="ms-1">${curarra[i].text}</span>
          </p>
        </div>
      </section>
               `
    }

}