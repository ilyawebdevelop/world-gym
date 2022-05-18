import * as flsFunctions from "./modules/functions.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, Thumbs } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, Thumbs]);

// Инициализация слайдера intro__slider
const intoMainSlider = document.querySelector('.intro__slider');
let mySwiperIntroMain = new Swiper(intoMainSlider, { 	
  slidesPerView: 1,	
  spaceBetween: 0, 	
  autoplay: {
    delay: 7000,
  },
  loop: true,    
	navigation: {
    nextEl: '.intro__navigation-next',
    prevEl: '.intro__navigation-prev',
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
		el: '.pagination',
		clickable: true,
		type: 'bullets',   
	},
  loop: true,   
	navigation: {
    nextEl: '.navigation__arrow-next',
    prevEl: '.navigation__arrow-prev',
  },
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


// Sticky header
const header = document.querySelector('.header');
const first = document.querySelector('.first');
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
				tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
				tabsHandler(tabsPath);
			}

			if (e.target.classList.contains('tabs__arrow--prev')) {
				let activeBtn = document.querySelector('.tabs__btn--active');
				let activeParent = activeBtn.closest('.tabs__item');
				let previousParent = activeParent.previousElementSibling;

				if (previousParent) {
					let prevActive = previousParent.querySelector('.tabs__btn')
					tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
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
					tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
					nextActive.classList.add('tabs__btn--active');

					let path = nextActive.dataset.tabsPath;
					tabsHandler(path);
				}
			}
		});
	}

	const tabsHandler = (path) => {
		tabsContent.forEach(el => {el.classList.remove('tabs__content--active')});
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
	};
});

