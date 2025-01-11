// Import our custom CSS
import './scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

const imagesData = [
	{
		images: [
			{
				src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
				alt: 'Boat on Calm Water',
			},
			{
				src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp',
				alt: 'Wintry Mountain Landscape',
			},
		],
	},
	{
		images: [
			{
				src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp',
				alt: 'Mountains in the Clouds',
			},
			{
				src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
				alt: 'Boat on Calm Water',
			},
		],
	},
	{
		images: [
			{
				src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp',
				alt: 'Waves at Sea',
			},
			{
				src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp',
				alt: 'Yosemite National Park',
			},
		],
	},
];
const main_container = document.querySelector('#main_content');
const nav_links = document.querySelectorAll('.nav-link');
document.addEventListener('DOMContentLoaded', () => {
	nav_links.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.stopPropagation();

			const page_name = e.currentTarget.querySelector('h1').textContent;
			changePage(e.target, page_name);
		});
	});
});

function changePage(active_element, page_name) {
	main_container.innerHTML = '';
	nav_links.forEach((link) => {
		const current = link.querySelector('h1');
		current.classList.remove('active');
		if (current.textContent === active_element.textContent) {
			current.classList.add('active');
			console.log(current);
		}
	});
	generateContent(page_name);
}

function generateContent(page_type) {
	const container = document.createElement('div');
	const gallery_row = document.createElement('div');
	gallery_row.classList.add('row', 'justify-content-center');
	container.className = 'container my-4 fade-in';
	switch (page_type.toLowerCase()) {
		case 'portfolio':
			imagesData.forEach((column) => {
				const colDiv = document.createElement('div');
				colDiv.className =
					'col-lg-4 mb-4 mb-lg-0 d-flex flex-column align-items-center';

				column.images.forEach((image) => {
					const img = document.createElement('img');
					img.src = image.src;
					img.alt = image.alt;
					img.className = 'w-100 shadow-1-strong rounded mb-4';

					colDiv.appendChild(img);
				});

				gallery_row.appendChild(colDiv);
			});
			container.appendChild(gallery_row);
			main_container.appendChild(container);
			break;
		case 'about':
			//smt
			break;
		case 'contact':
			//smt
			break;
		default:
			//smt
			break;
	}
	setTimeout(() => {
		container.classList.add('visible'); // Add visible class after a short delay
	}, 10); // Delay to ensure the transition is applied
}
