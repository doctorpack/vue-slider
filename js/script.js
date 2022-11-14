const arrImages = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

const timeSlider = 1.5 * 1000;
let direction = 1;
let activeIndex = 0;
let idInterval;
let isAutoplayActive = true;

renderSlider(arrImages);
startAutoplay();


// EVENT LISTENERS

// per disattivare l'autoslider se ci troviamo con il mouse sopra
document.querySelector('.slider').addEventListener('mouseenter', () => stopAutoplay());
// per riattivare l'autoslider quando spostiamo il mouse fuori dallo slider
document.querySelector('.slider').addEventListener('mouseleave', () => {
	if (isAutoplayActive) {
		startAutoplay();
	}
});

document.querySelector('.btn-invert').addEventListener('click', () => invertDirection());

document.querySelector('.btn-start-stop').addEventListener('click', function() {
	if (isAutoplayActive) {
		stopAutoplay();
		isAutoplayActive = false;
		this.innerHTML = 'Start';
	} else {
		startAutoplay();
		isAutoplayActive = true;
		this.innerHTML = 'Stop';
	}
});

const listSlides = document.querySelectorAll('.slide');

const listThumbs = document.querySelectorAll('.thumb-img');
listThumbs.forEach((eleThumb, index) => {
	eleThumb.addEventListener('click', () => {
		listSlides[activeIndex].classList.remove('active');
		listThumbs[activeIndex].classList.remove('active');
		activeIndex = index;
		listSlides[activeIndex].classList.add('active');
		listThumbs[activeIndex].classList.add('active');
		document.body.style.backgroundImage = `url('img/${arrImages[activeIndex].image}')`;
	})
});

// aggiungere gli event listeners ai due bottoni
const eleBtnRight = document.querySelector('.btn-right');
eleBtnRight.addEventListener('click', () => moveSlide(1));

const eleBtnLeft = document.querySelector('.btn-left');
eleBtnLeft.addEventListener('click', () => moveSlide(-1));

// FUNCTIONS

function renderSlider(arrImages) {
	const eleSliderViewer = document.querySelector('.slider-viewer');
	const eleSliderThumbs = document.querySelector('.thumbs');

	document.body.style.backgroundImage = `url('img/${arrImages[activeIndex].image}')`;
	// creare i tag immagine nell'html
	for (let i = 0; i < arrImages.length; i++) {
		const objSlide = arrImages[i];
		// creare le slide
		eleSliderThumbs.innerHTML = eleSliderThumbs.innerHTML + `<img src="img/${objSlide.image}" class="thumb-img ${i === 0 ? 'active' : ''}">`;
		eleSliderViewer.innerHTML += `
			<div class="slide ${i === 0 ? 'active' : ''}">
				<img src="img/${objSlide.image}" alt="${objSlide.title}">
				<div class="text">
					<h2>${objSlide.title}</h2>
					<p>${objSlide.text}</p>
				</div>
			</div>
		`
	}
}

function startAutoplay() {
	idInterval = setInterval(() => moveSlide(direction), timeSlider);
}

function stopAutoplay() {
	clearInterval(idInterval);
}

function invertDirection() {
	direction *= -1; // 1  * -1 = -1; -1 * -1 = 1
}

function moveSlide(direction) {
	// togliere la classe active dall'elemento attivo corrente
	listSlides[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');

	if (direction > 0) {
		activeIndex++;
		if (activeIndex === listSlides.length) {
			activeIndex = 0;
		}
	} else {
		if (activeIndex === 0) {
			activeIndex = listSlides.length;
		}
		activeIndex--;
	}

	// aggiungere la classe active all'elemento successivo
	listSlides[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	document.body.style.backgroundImage = `url('img/${arrImages[activeIndex].image}')`;
}