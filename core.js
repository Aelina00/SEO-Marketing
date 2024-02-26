$(document).ready(function () {
  //responsive menu toggle
  $("#menutoggle").click(function () {
    $(".xs-menu").toggleClass("displaynone");
  });
  //add active class on menu
  $("ul li").click(function (e) {
    e.preventDefault();
    $("li").removeClass("active");
    $(this).addClass("active");
  });
  //drop down menu
  $(".drop-down").hover(function () {
    $(".mega-menu").addClass("display-on");
  });
  $(".drop-down").mouseleave(function () {
    $(".mega-menu").removeClass("display-on");
  });
});

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].className = tabcontent[i].className.replace(" active", "");
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).className += " active";
  evt.currentTarget.className += " active";
}

const EL_play = document.querySelector("#play");
const EL_videoContainer = document.querySelector("#video-container");
const EL_video = document.querySelector("#video");

EL_play.addEventListener("click", () => {
  EL_videoContainer.classList.toggle("u-none");
  const isPaused = EL_video.paused;
  EL_video[isPaused ? "play" : "pause"]();
});
function enqueue_jquery() {
  wp_enqueue_script("jquery");
}
add_action('wp_enqueue_scripts', 'enqueue_jquery'); 


// прокручивание цифр
(function(){

    let counter = document.querySelectorAll('.counter');
    let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
    window.addEventListener('scroll', function(){  
      if( limit == counter.length ){ return; }
      
      for(let i = 0; i < counter.length; i++){
        let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
        let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
        if( pos < win && counter[i].dataset.stop === "0" ){
          counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
          let x = 0;
          limit++; // Счетчик будет запущен, увеличиваем переменную на 1
          let int = setInterval(function(){
            // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
            x = x + Math.ceil( counter[i].dataset.to / 50 ); 
            counter[i].innerText = x;
            if( x > counter[i].dataset.to ){
              //Как только досчитали - стираем интервал.
              counter[i].innerText = counter[i].dataset.to;
              clearInterval(int);
            }
          }, 60);
        }
      }
    });
    
    })();
add_action("wp_enqueue_scripts", "enqueue_jquery");

const slider = document.querySelector(".slider");
const items = slider.querySelectorAll(".slider__item");
const prev = slider.querySelector(".slider__prev");
const next = slider.querySelector(".slider__next");
let currentIndex = 0;

function showSlide(index) {
  items.forEach((item, i) => {
    item.style.opacity = i === index ? 1 : 0;
  });
  currentIndex = index;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showSlide(currentIndex);
}

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);

showSlide(currentIndex);
setInterval(nextSlide, 5000);
