

/*проверка формы*/
function validate2(forma)
	{	let flag = true;
		
		
		//почистим все выделения полей с ошибками
		for (let i=0; i<forma.elements.length; i++)
		{
			forma.elements[i].className="";
		}
		if (forma.name.value.trim().length === 0  || forma.name.value() != "^[А-ЯЁ][а-яё]*$")
		{
			forma.name.className="alert";
			flag = false;
		}
		if (forma.phone.value.trim().length < 12 || isNaN(forma.phone.value) || forma.phone.value.trim().length > 12)
		{	forma.phone.className="alert";
			flag = false;
		}
		if (flag) 
		{  //ошибок не было!
			alert("Форма ушла!");
			return true;
		}
		alert("Заполните поля верно!");
		return false;
	}
	

	
	
/*анимация дракона*/

// выбираем красивую гифку, делаем с нее скриншот с расширением .jpg
window.onload = function()
{
	var img = document.getElementById("dracon");
	
	var old = img.src;
	//гифки могут быть очень тяжелые, нужно дождаться загрузки!
	var zamena = new Image(); //	то же самое, что document.createElement("img")
	zamena.src = "images/dragongif.gif";
	
	zamena.addEventListener("load", function(){
			//при наведении - гифка, при уходе - простое фото
		
		img.onmouseover = function(){ 
			this.src = zamena.src; 
		};
		img.onmouseout = function(){ 
			this.src = old; 
		};
	})
	
}



/*Анимация блоков Родители, ГрафикСтоимость*/			
const animItems = document.querySelectorAll('._anim-items'); //объявляем в переменную все объекты, которые будут поддаваться анимации, и придумываем для них дежурный класс anim-items

// проверяем, существуют ли такие классы, которые указали в объявленной переменной
if(animItems.length > 0) { //т.к. это масив из элементов, проверяем его длину. Если она > 0, значит там объекты есть
	window.addEventListener('scroll', animOnScroll); //добавляем событие при скроле
	function animOnScroll() {
		for(let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight; // получаем высоту нашего объекта
			const animItemOffset = offset(animItem).top; //получаем позицию нашего объекта относительно верха. Ниже функция, позволяющая корректно эти значения получить
			const animStart = 4; //коэффициент, регулирующий момент старта анимации, т.е. анимация происходит, когда в видимой области прокручено 1/4 объекта
			
			// описываем момент, когда объект будет получать класс, т.е. анимироваться
			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > (animItemOffset - animItemPoint)) && pageYOffset < (animItemOffset + animItemHeight)) { // переменная куда поступают данные о количесвте проскроленных пикселей pageYOffset
				animItem.classList.add('_active');
			} else {
				animItem.classList.remove('_active');
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
	animOnScroll();
	}, 300);
}


/*предзагрузчик*/
/*window.addEventListener("load",startLoader);

function startLoader() {
    let start = document.querySelector(".start");
    start.classList.add("hide");
    setTimeout( function() {
        start.remove();
    },2000);
}

/*const yourSound = new Audio();
yourSound.src = 'audio/wings.mp3'; // ссылка на аудиофайл
document.getElementById('dracon1').onmouseover = function () {
    yourSound.play();
}*/