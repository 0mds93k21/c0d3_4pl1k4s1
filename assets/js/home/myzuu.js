function rubah(angka) {
    var reverse = angka.toString().split('').reverse().join(''),
        ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return "Poin : " + ribuan;
}
document.getElementById("myzuu_poin").innerText = rubah(document.getElementById("myzuu_poin").textContent);


var tabs = $('.tab');
var selector = $('.tab').find('button').length;
//var selector = $(".tab").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();
$(".selector").css({
  "left": activeItem.position.left + "px", 
  "width": activeWidth + "px"
});

$(".tab").on("click","button",function(e){
  e.preventDefault();
  $('.tab button').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
  });
});



const allSkeleton = document.querySelectorAll('.skeleton')

window.addEventListener('load', function() {
  allSkeleton.forEach(item=> {
    item.classList.remove('skeleton')
  })
})