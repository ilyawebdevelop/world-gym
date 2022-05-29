import * as flsFunctions from "./modules/functions.js";
import './components.js';
import AirDatepicker from 'air-datepicker';


flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, Thumbs } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, Thumbs]);

// Инициализация слайдера intro__slider
const introMainSlider = document.querySelector('.intro__slider');
let mySwiperIntroMain = new Swiper(introMainSlider, {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	navigation: {
		nextEl: '.intro__navigation-next',
		prevEl: '.intro__navigation-prev',
	},
	breakpoints: {  
		0: {
			pagination: {
				el: '.intro__pagination',
				clickable: true,
				type: 'bullets',
			},			
		},  
	}
});

// Инициализация навигационного слайдера about-main
const aboutSliderSm = document.querySelector('.about-main__slider-sm');
let mySwiperAboutMainSm = new Swiper(aboutSliderSm, {
	slidesPerView: 3,
	spaceBetween: 15,
	navigation: {
		nextEl: '.about-main__navigation-next',
		prevEl: '.about-main__navigation-prev',
	}
});

// Инициализация слайдера about-main
const aboutSliderLg = document.querySelector('.about-main__slider-lg');
let mySwiperAboutMainLg = new Swiper(aboutSliderLg, {
	slidesPerView: 1,
	spaceBetween: 0,
	navigation: {
		nextEl: '.about-main__navigation-next',
		prevEl: '.about-main__navigation-prev',
	},
	thumbs: {
		swiper: mySwiperAboutMainSm,
	}
});

// Инициализация слайдера team-main__slider
const teamSliderMain = document.querySelector('.team-main__slider');
let mySwiperTeamMain = new Swiper(teamSliderMain, {
	slidesPerView: 4,
	spaceBetween: 30,
	pagination: {
		el: '.pagination_team',
		clickable: true,
		type: 'bullets',
	},
	loop: true,
	navigation: {
		nextEl: '.navigation__arrow-next',
		prevEl: '.navigation__arrow-prev',
	},
	breakpoints: {  
		0: {
			slidesPerView: 1,
			loop: false,
			spaceBetween: 10,
		},  
		576: {
			slidesPerView: 2,
			loop: false,
			spaceBetween: 30,
		}, 
		767: {
			slidesPerView: 3,
			loop: true,
		},
		991: {
			slidesPerView: 4,
		}
	}
});

// Инициализация слайдера gallery
const gallerySliderMain = document.querySelector('.gallery-slider');
let mySwiperGalleryMain = new Swiper(gallerySliderMain, {
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: '.gallery-slider__arrow-right',
		prevEl: '.gallery-slider__arrow-left',
	},
});

// Инициализация навигационного слайдера about-main
const serviceSliderSm = document.querySelector('.service__slider-sm');
let mySwiperServiceMainSm = new Swiper(serviceSliderSm, {
	slidesPerView: 4,
	spaceBetween: 15,
	navigation: {
		nextEl: '.service__navigation-next',
		prevEl: '.service__navigation-prev',
	}
});

// Инициализация слайдера about-main
const serviceSliderLg = document.querySelector('.service__slider-lg');
let mySwiperServiceMainLg = new Swiper(serviceSliderLg, {
	slidesPerView: 1,
	spaceBetween: 0,
	navigation: {
		nextEl: '.service__navigation-next',
		prevEl: '.service__navigation-prev',
	},
	thumbs: {
		swiper: mySwiperServiceMainSm,
	}
});

// Инициализация слайдера news
const newsSlider = document.querySelector('.news-slider');
let mySwiperNews = new Swiper(newsSlider, {
	slidesPerView: 1,
	spaceBetween: 0,
	pagination: {
		el: '.pagination',
		clickable: true,
		type: 'bullets',
	},
	navigation: {
		nextEl: '.navigation__arrow-next',
		prevEl: '.navigation__arrow-prev',
	},
});

// Инициализация слайдера news-article-about
const newsSliderAbout = document.querySelector('.about-news__slider');
let mySwiperNewsAbout = new Swiper(newsSliderAbout, {
	slidesPerView: 5,
	spaceBetween: 19,
	pagination: {
		el: '.pagination',
		clickable: true,
		type: 'bullets',
	},
	navigation: {
		nextEl: '.about-main__navigation-next',
		prevEl: '.about-main__navigation-prev',
	},
});

// Инициализация слайдера main-advantages
const newsSliderAdvantages = document.querySelector('.about-main__card-swiper');

// Создаем медиа условие, проверяющее viewports на ширину менее 768 пикселей.
const mediaQuery = window.matchMedia('(max-width: 767px)')
if (mediaQuery.matches) {
  let mySwiperAdvantages = new Swiper(newsSliderAdvantages, {
		slidesPerView: 1,
		spaceBetween: 19,		
	});
}
// Инициализация слайдера services-main
const newsSliderServicesMain = document.querySelector('.services-main__slider');

// Создаем медиа условие, проверяющее viewports на ширину менее 768 пикселей.
if (mediaQuery.matches) {
  let mySwiperServicesMain = new Swiper(newsSliderServicesMain, {
		slidesPerView: 1,
		spaceBetween: 15,		
		pagination: {
			el: '.pagination',
			clickable: true,
			type: 'bullets',
		},
		navigation: {
			nextEl: '.about-main__navigation-next',
			prevEl: '.about-main__navigation-prev',
		},
		breakpoints: {  
			0: {
				spaceBetween: 10,		
			},  
			576: {
				spaceBetween: 15,		
			}, 
		}
	});
}

// Инициализация слайдера soon-slider-main
const soonSliderMain = document.querySelector('.soon__slider');

// Создаем медиа условие, проверяющее viewports на ширину менее 768 пикселей.
if (mediaQuery.matches) {
  let mySwiperSoonMain = new Swiper(soonSliderMain, {
		slidesPerView: 1,
		spaceBetween: 15,
		loop: false,
		breakpoints: {  
			0: {
				spaceBetween: 10,		
			},  
			576: {
				spaceBetween: 15,		
			}, 
		}
	});
}

// Инициализация слайдера news-main
const newsSliderMain = document.querySelector('.news-card__slider');

// Создаем медиа условие, проверяющее viewports на ширину менее 768 пикселей.
if (mediaQuery.matches) {
  let mySwiperNewsMain = new Swiper(newsSliderMain, {
		slidesPerView: 1,
		spaceBetween: 15,
		loop: false,
		breakpoints: {  
			0: {
				spaceBetween: 10,		
			},  
			576: {
				spaceBetween: 15,		
			}, 
		}
	});
}



// Sticky header
const header = document.querySelector('.header');
const first = document.querySelector('.first');
const navSocials = document.querySelector('.socials-change');
const bodyHeight = first.scrollHeight;

// const headerHeight = header.offsetHeight;
// const firstHeight = first.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance > lastScrollTop) {
		header.classList.remove('header--bg');		
		// first.style.marginTop = null;	

	} else {
		header.classList.add('header--bg');	
		// first.style.marginTop = `${headerHeight}px`;
	}

	if (scrollDistance === 0) {
		header.classList.remove('header--bg');		
		first.style.marginTop = null;
	}	
	
	let sum = bodyHeight - scrollDistance;
	let sumMore = sum < 300;

	if (sumMore) {
		navSocials.classList.add('opacity');
	} else {
		navSocials.classList.remove('opacity');
	}
	lastScrollTop = scrollDistance;

});

// Выпадающее меню на странице "Расписание"
document.addEventListener('DOMContentLoaded', () => {
	/*
		1. по клику на пункты верхнего меню открывать дропдаун
		2. по клику (повторному) на эти пункты - закрывать дропдаун
		3. по клику в любое место сайта, кроме меню - закрывать дропдаун
	*/

	const menuBtns = document.querySelectorAll('.menu__btn');
	const drops = document.querySelectorAll('.dropdown');

	menuBtns.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.menu__item').querySelector('.dropdown');

			menuBtns.forEach(el => {
				if (el !== currentBtn) {
					el.classList.remove('menu__btn--active');
				}
			});

			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('dropdown--active');
				}
			});

			drop.classList.toggle('dropdown--active');
			currentBtn.classList.toggle('menu__btn--active');
		});
	});

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.menu')) {
			menuBtns.forEach(el => {
				el.classList.remove('menu__btn--active');
			});

			drops.forEach(el => {
				el.classList.remove('dropdown--active');
			});
		}
	});
});


// TABS
document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector('.tabs');
	const tabsBtn = document.querySelectorAll('.tabs__btn');
	const tabsContent = document.querySelectorAll('.tabs__content');

	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('tabs__btn')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsBtn.forEach(el => { el.classList.remove('tabs__btn--active') });
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
				tabsHandler(tabsPath);
			}

			if (e.target.classList.contains('tabs__arrow--prev')) {
				let activeBtn = document.querySelector('.tabs__btn--active');
				let activeParent = activeBtn.closest('.tabs__item');
				let previousParent = activeParent.previousElementSibling;

				if (previousParent) {
					let prevActive = previousParent.querySelector('.tabs__btn')
					tabsBtn.forEach(el => { el.classList.remove('tabs__btn--active') });
					prevActive.classList.add('tabs__btn--active');

					let path = prevActive.dataset.tabsPath;
					tabsHandler(path);
				}
			}

			if (e.target.classList.contains('tabs__arrow--next')) {
				let activeBtn = document.querySelector('.tabs__btn--active');
				let activeParent = activeBtn.closest('.tabs__item');
				let nextParent = activeParent.nextElementSibling;

				if (nextParent) {
					let nextActive = nextParent.querySelector('.tabs__btn');
					tabsBtn.forEach(el => { el.classList.remove('tabs__btn--active') });
					nextActive.classList.add('tabs__btn--active');

					let path = nextActive.dataset.tabsPath;
					tabsHandler(path);
				}
			}
		});
	}

	const tabsHandler = (path) => {
		tabsContent.forEach(el => { el.classList.remove('tabs__content--active') });
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
	};
});


// LightGallery
lightGallery(document.getElementById('lightgallery'), {
	thumbnail: true,
	animateThumb: false,
	showThumbByDefault: false
});

let socialsBtns = document.querySelectorAll('.socials-change button');

// Отступ социалок при открытии модалки
// socialsBtns.forEach(el => {
// 	el.addEventListener('click', (e) => {
// 		let socialsBlock = document.querySelector('.socials-change');
// 		socialsBlock.classList.toggle('active');
// 	});

// });
// let modalWindow = document.querySelector('.graph-modal');

// modalWindow.addEventListener('click', () => {
// 	let socialsBlock = document.querySelector('.socials-change');
// 	socialsBlock.classList.toggle('active');
// });

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.header__nav');
const bodyEl = document.querySelector('body');
let navItemAll = document.querySelectorAll('.header__nav-item');


const toggleMenu = function () {
	menu.classList.toggle('open');
}
const toggleBurger = function () {
	btnMenu.classList.toggle('active');
}
const toggleMenuLine = function () {
	menuLine1.classList.toggle('active');
	menuLine2.classList.toggle('active');
	menuLine3.classList.toggle('active');
}
const bodyOverflow = function () {
	bodyEl.classList.toggle('hidden');
}
btnMenu.addEventListener('click', function (e) {
	e.stopPropagation();
	toggleMenu();
	toggleBurger();
	bodyOverflow();
	toggleMenuLine();
});
navItemAll.forEach((el) => {
	el.addEventListener("click", function () {
		if (menu.classList.contains("open")) {
			toggleMenu();
			toggleBurger();
			bodyOverflow();
		}
	});
})

const menuLine1 = document.querySelector('.top-bun');
const menuLine2 = document.querySelector('.meat');
const menuLine3 = document.querySelector('.bottom-bun');




// Modal Cards Select Styles
let selectSingle = document.querySelector('.__select');
let selectSingle_title = selectSingle.querySelector('.__select__title');
let selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

console.log(selectSingle_title);
// Toggle menu
selectSingle_title.addEventListener('click', () => {
	console.log('TSAD');
	if ('active' === selectSingle.getAttribute('data-state')) {
		selectSingle.setAttribute('data-state', '');
	} else {
		selectSingle.setAttribute('data-state', 'active');
	}
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
	selectSingle_labels[i].addEventListener('click', (evt) => {
		selectSingle_title.textContent = evt.target.textContent;
		selectSingle.setAttribute('data-state', '');
	});
}

// Calendar Datepicker

new AirDatepicker('#airdatepicker', {
	isMobile: true,
  autoClose: true,
});

let dataPickerEl = document.querySelector('#airdatepicker');
let calendarParent = document.querySelector('.timetable__calendar');



