// Custom JS

$(function() {
	// Настройки верхнего слайдера с текстовыми сообщениями
	$('.slider-theses').slick({
		prevArrow: '<i class="fa fa-chevron-left arrow-left" aria-hidden="true"></i>',
		nextArrow: '<i class="fa fa-chevron-right arrow-right" aria-hidden="true"></i>',
		adaptiveHeight: true,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 15000
	});

	// Живые цифры
	$('.counter').counterUp({
		delay: 3,
		time: 500
	});

	// Настройка слайдера пользователей
	$('.sliders-employees').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		prevArrow: '<i class="fa fa-arrow-circle-left sliders-employees-circle-left" aria-hidden="true"></i>',
		nextArrow: '<i class="fa fa-arrow-circle-right sliders-employees-circle-right" aria-hidden="true"></i>',
		responsive: [
			{
				breakpoint: 992,
					settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
					settings: {
					slidesToShow: 1
				}
			}
		]
	});

	// Функция которая делает плавный скроллинг к элементу с id или class указанным в атрибуте href ссылки
	$('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
		var scroll_el = "#" + $(this).attr('href'); // возьмем содержимое атрибута href. В первых скобках указываем или решетку (#) или точку (.), это необходимо для того чтобы указать как искать элемент для перехода, по id или class.
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top - 20 }, 1000); // анимируем скроллинг к элементу scroll_el
		}
		return false; // выключаем стандартное действие
	});

	// Кнопка для перехода вверх страницы
	$('.go_to_top').click( function(){ // ловим клик по ссылке с классом go_to_top
		$('html, body').animate({ scrollTop: 0 }, 500); // анимируем скроолинг к верху страницы
		return false; // выключаем стандартное действие
	});
});


// Инициализация анимации wow.js
new WOW().init();

// Настройка раскрывающихся вопросов
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight){
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		} 
	});
}

// Появление кнопки вверх
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		// document.getElementById("go_to_top").style.display = "block";
		document.getElementById("go_to_top").classList.add("go_to_top_active");
	} else {
		// document.getElementById("go_to_top").style.display = "none";
		document.getElementById("go_to_top").classList.remove("go_to_top_active");
	}
}

// Липкое меню
var sticky = new Waypoint.Sticky({
	element: $('.sticky-element')[0]
})

// Липкое мобильное меню
var sticky = new Waypoint.Sticky({
	element: $('.sticky-element-mobyle')[0]
})

// Модальное окно "Заказ звонка"
var modal = document.getElementById('modal-call-order');
var btn = document.getElementById("call-order-button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
	modal.style.display = "block";
}

span.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

// Мобильное меню
function openNav() {
	document.getElementById("mobyle-menu").style.width = "100%";
}
function closeNav() {
	document.getElementById("mobyle-menu").style.width = "0%";
}
$('#mobyle-menu a').bind('click', function(){
	closeNav();
});


// Прелоадер
var myVar;

function finishLoad() {
	myVar = setTimeout(showPage, 1000);
}

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("mainBlock").style.opacity = 1;
}