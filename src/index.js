// Import our custom CSS
import './scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import './assets/scroll_back_to_top';

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
	switch (page_type.toLowerCase()) {
		case 'portfolio':
			const container = document.createElement('div');
			const gallery_row = document.createElement('div');
			gallery_row.classList.add('row', 'justify-content-center');
			container.className = 'container my-4 fade-in';
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
			setTimeout(() => {
				container.classList.add('visible'); // Add visible class after a short delay
			}, 10);
			break;
		case 'about':
			// Create the main container
			const about_container = document.createElement('div');
			about_container.className = 'container-fluid fade-in mb-5';

			// Create the row
			const row = document.createElement('div');
			row.className = 'row justify-content-center';

			// Create the column
			const col = document.createElement('div');
			col.className = 'col-md-8';

			// Create the heading
			const heading = document.createElement('h1');
			heading.className = 'display-3 my-5 text-center about-me';
			heading.textContent = 'About Me';

			// Create the paragraph
			const paragraph = document.createElement('p');
			paragraph.className =
				'my-3 text-center text-secondary about-me-text px-2';
			paragraph.innerHTML = `Hi there! I’m Stefano, your friendly neighborhood 3D model magician.<br>For years, I’ve been sculpting virtual worlds, crafting intricate 3D models with Blender, and bringing them to life in Unity and Unreal Engine. Game development? It’s not just a hobby; it’s a full-blown love affair. But I don’t stop there—I’ve ventured into the realms of interior and exterior designs, construction, and even product modeling. From collaborating with visionary clients to dazzling event managers, I’ve turned ideas into jaw-dropping visuals that leave people wondering, ‘How did they do that?’  <br><br>
Whether I’m designing a game-ready dragon or a chic living room, I bring the same level of passion and detail (and maybe a little bit of caffeine-fueled madness). Let’s just say, if it’s 3D, I’m probably dreaming about it.Let’s create something amazing together—because nothing beats the joy of turning pixels into possibilities!"`;

			// Append heading and paragraph to the column
			col.appendChild(heading);
			col.appendChild(paragraph);

			// Append column to the row
			row.appendChild(col);

			// Append row to the container
			about_container.appendChild(row);

			// Append the container to the body or a specific element in your HTML
			main_container.appendChild(about_container);
			setTimeout(() => {
				about_container.classList.add('visible'); // Add visible class after a short delay
			}, 5);
			break;
		case 'contact':
			//smt
			break;
		default:
			//smt
			break;
	}
}
