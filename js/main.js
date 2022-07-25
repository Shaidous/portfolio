import $, { removeData } from "jquery"


/*
=====================скролл до навигации при нажатии на кнопку=====================
*/
var btn = $('#button');

$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
btn.addClass('show');
} else {
btn.removeClass('show');
}
});

btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
});

/*
=====================Плавная прокрутка навигации=====================
*/
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 600,
      framesCount = 250;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});
/*
=====================Шкала умений(автообновлении прогрессии в %)=====================
*/
const skill = document.querySelectorAll('.skill-per');

setTimeout( function(e) {
for (let i=0; i<skill.length; i++){
  skill[i].style.opacity = 1;
  skill[i].style.width = skill[i].getAttribute('data-done') + '%';
}}, 500)


/*
=====================Линия прокрутки=====================Start
*/
var line = document.querySelector('#line'),
    bodyHeight = document.body.clientHeight,
    doc = document.documentElement;

setTimeout(function() {
   setWidthLine();
},0);

document.addEventListener('scroll', function() {
   setWidthLine();
});

document.addEventListener('resize', function() {
   setWidthLine();
});

function setWidthLine() {
   var scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0),
       percent;
   scrollTop += doc.clientHeight;
   
   percent = scrollTop / bodyHeight * 100;
   line.style.width = 0;
   line.style.width = percent + '%';
}
/*
=====================Линия прокрутки=====================END
*/

