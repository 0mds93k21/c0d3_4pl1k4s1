// filter array 
let filterarray = [];

// gallery card array

let galleryarray = [

    {
        id: 1,
        onclick: "getValue(dataTsel)",
        img: "https://i.postimg.cc/rFZpDSTX/images-2022-10-07-T132212-320.jpg",
        text: "Paket Data Telkomsel"
    },
    
     /* Belum Aktif /
    {
        id: 2,
        onclick: "getValue(dataIsat)",
        img: "https://i.postimg.cc/bw8jNrDc/images-2022-10-07-T132401-607.jpg",
        text: "Voucher Indosat"
    },
    {
        id: 3,
        onclick: "getValue(dataXL)",
        img: "https://i.postimg.cc/rm2HgY16/download-3.jpg",
        text: "Voucher XL"
    },
    {
        id: 4,
        onclick: "getValue(dataAxis)",
        img: "https://i.postimg.cc/qRfqknKc/images-2022-10-07-T132537-156.jpg",
        text: "Voucher Axis"
    },
    {
        id: 5,
        onclick: "getValue(dataThree)",
        img: "https://i.postimg.cc/VkLmW5Y9/images-2022-10-07-T134356-702.jpg",
        text: "Voucher Three"
    },
    {
        id: 6,
        onclick: "getValue(dataSfren)",
        img: "https://i.postimg.cc/nL9KR4Zq/IMG-20221007-135231.jpg",
        text: "Voucher Smartfren"
    },
    /* Belum Aktif */

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