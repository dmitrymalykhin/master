var dt=new Date();
var month = dt.getMonth()+1;
if (month<10) month='0'+month;
var day = dt.getDate() + 1;
if (day<10) day='0'+day;
var year = dt.getFullYear();
MyDate.value=day+'.'+month+'.'+year;

let elements = $('.modal-overlay, .modal');

$('.open-modal').click(function(){
  elements.addClass('active');
});

$('.close-modal').click(function(){
  elements.removeClass('active');
});

function complete() {
  alert("Ваша заявка успешно отправленна. Наш менеджер свяжется с вами в ближайшее время!");
};
$(document).ready(function() {
 
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  })
  
});
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  
  function updateClock() {
    var t = getTimeRemaining(endtime);
    

    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline="September 09 2019 19:00:00 GMT+0300"; //for Ukraine
var deadline = new Date(Date.parse(new Date()) + 1 * 2 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);

