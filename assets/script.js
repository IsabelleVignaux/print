const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Initialisation de l'index du carrousel
let currentSlideIndex = 0;

// Sélection des flèches gauche et droite
let leftArrow = document.querySelector('.arrow_left');
let rightArrow = document.querySelector('.arrow_right');

// Ajout d'écouteurs d'événements pour les flèches
// Calcul du nouvel index selon la direction et changement de l'image dans le carrousel
leftArrow.addEventListener("click", () => {
	//console.log("clic gauche");
	currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
	updateSlide(currentSlideIndex);
});
rightArrow.addEventListener("click", () => {
	//console.log("clic droit");
	nextImage();
});

// Sélection de l'image du carrousel et du conteneur de puces
let carrouselImages = document.querySelector('.banner-img');
let dotsContainer = document.querySelector('.dots');

// Fonction pour mettre à jour dans le carrousel : 
// l'image ainsi que la puce correspondante
function updateSlide(index) {
	//console.log("updateslide, index :", index);

	let targetImage = carrouselImages;
	//console.log("targetImage", targetImage);

	if (targetImage) {
		targetImage.src = `./assets/images/slideshow/${slides[index].image}`;
		targetImage.alt = `Banner Print-it ${slides[index].image}`;
	} else {
		console.error("L'élément image n'a pas été correctement sélectionné.");
		console.log("Carrousel Images :", carrouselImages);
	return;
	}

	// Mise à jour de la puce correpondant à l'image
	let dots = document.querySelectorAll('.dots .dot');
	dots.forEach((dot, i) => {
	if (i === index) {
		dot.classList.add('dot_selected');
	} else {
		dot.classList.remove('dot_selected');
	}
	});
}
  
// Création des puces correspondant à chaque image
// Et initialisation de la puce de l'index 0
slides.forEach((slide, index) => {
	let dot = document.createElement('div');
	dot.classList.add('dot');
	if (index === 0) {
		dot.classList.add('dot_selected');
	}
	dotsContainer.appendChild(dot);
	//console.log("dotsContainer :", dot.classList);
	//console.log("index :", index);
});

// Ajout d'écouteurs d'événements pour les différentes puces
// Quand on clic sur l'une d'elles, on appelle la fonction de MAJ
let dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		currentSlideIndex = index;
		updateSlide(currentSlideIndex);
	});
});

// Fonction pour passer à l'image suivante dans le carrousel
function nextImage() {
	currentSlideIndex = (currentSlideIndex + 1) % slides.length;
	updateSlide(currentSlideIndex);
}
  
// Mise en place d'un intervalle de 5 secondes
// pour le défilement du carrousel
// Appel de la fonction nextImage pour affichage image suivante
var intervalId = setInterval(nextImage, 5000);
