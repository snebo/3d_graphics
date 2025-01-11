// Import our custom CSS
import './scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import { EMAIL_KEY } from './assets/enviroments';
import { images } from './assets/images';
import './assets/scroll_back_to_top';

emailjs.init({
	publicKey: EMAIL_KEY,
});

const imagesData = images;
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
	// Set the default page (Portfolio) when the page loads
	const defaultPageName = 'Portfolio'; // Change to your default page name
	const defaultNavLink = Array.from(nav_links).find(
		(link) => link.querySelector('h1').textContent === defaultPageName
	);

	if (defaultNavLink) {
		const defaultPageElement = defaultNavLink.querySelector('h1');
		changePage(defaultPageElement, defaultPageName);
	}
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
			col.className = 'col-md-9';

			// Create the heading
			const heading = document.createElement('h1');
			heading.className = 'display-3 my-5 text-center about-me';
			heading.textContent = 'About Me';

			// Create the paragraph
			const paragraph = document.createElement('p');
			paragraph.className =
				'my-3 text-center text-secondary about-me-text px-2';
			paragraph.innerHTML = `Hi there! I’m Stefano, your friendly neighborhood 3D model magician.<br>For years, I’ve been sculpting virtual worlds, crafting intricate 3D models with Blender, and bringing them to life in Unity and Unreal Engine. Game development? It’s not just a hobby; it’s a full-blown love affair. But I don’t stop there—I’ve ventured into the realms of interior and exterior designs, construction, and even product modeling. From collaborating with visionary clients to dazzling event managers, I’ve turned ideas into jaw-dropping visuals that leave people wondering, ‘How did they do that?’  <br><br>
Whether I’m designing a game-ready dragon or a chic living room, I bring the same level of passion and detail (and maybe a little bit of caffeine-fueled madness). Let’s just say, if it’s 3D, I’m probably dreaming about it. Let’s create something amazing together—because nothing beats the joy of turning pixels into possibilities!"`;

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
			// Create the container for the contact section
			const contactContainer = document.createElement('div');
			contactContainer.className = 'container-fluid fade-in mb-5';

			// Create the row
			const contactRow = document.createElement('div');
			contactRow.className = 'row justify-content-center';

			// Create the column
			const contactCol = document.createElement('div');
			contactCol.className = 'col-md-6 px-2';

			// Create the heading
			const contactHeading = document.createElement('h1');
			contactHeading.className = 'display-3 my-5 text-center';
			contactHeading.textContent = 'Contact Me';

			// Create the form container
			const contactFormContainer = document.createElement('form');
			contactFormContainer.className = 'container w-75 mb-5';

			// Name input field
			const contactNameDiv = document.createElement('div');
			contactNameDiv.className = 'mb-4';
			const contactNameLabel = document.createElement('label');
			contactNameLabel.setAttribute('for', 'contactName');
			contactNameLabel.className = 'form-label';
			contactNameLabel.textContent = 'Name *';
			const contactNameInput = document.createElement('input');
			contactNameInput.type = 'text';
			contactNameInput.id = 'contactName';
			contactNameInput.name = 'name';
			contactNameInput.placeholder = 'John Doe';
			contactNameInput.required = true;
			contactNameInput.className = 'form-control';
			contactNameDiv.appendChild(contactNameLabel);
			contactNameDiv.appendChild(contactNameInput);

			// Email input field
			const contactEmailDiv = document.createElement('div');
			contactEmailDiv.className = 'mb-4';
			const contactEmailLabel = document.createElement('label');
			contactEmailLabel.setAttribute('for', 'contactEmail');
			contactEmailLabel.className = 'form-label';
			contactEmailLabel.textContent = 'Email address *';
			const contactEmailInput = document.createElement('input');
			contactEmailInput.type = 'email';
			contactEmailInput.id = 'contactEmail';
			contactEmailInput.name = 'email';
			contactEmailInput.placeholder = 'name@example.com';
			contactEmailInput.required = true;
			contactEmailInput.className = 'form-control';
			contactEmailDiv.appendChild(contactEmailLabel);
			contactEmailDiv.appendChild(contactEmailInput);

			// Message textarea
			const contactMessageDiv = document.createElement('div');
			contactMessageDiv.className = 'mb-4';
			const contactMessageLabel = document.createElement('label');
			contactMessageLabel.setAttribute('for', 'contactMessage');
			contactMessageLabel.className = 'form-label';
			contactMessageLabel.textContent = 'Message *';
			const contactMessageTextarea = document.createElement('textarea');
			contactMessageTextarea.id = 'contactMessage';
			contactMessageTextarea.name = 'message';
			contactMessageTextarea.rows = 3;
			contactMessageTextarea.required = true;
			contactMessageTextarea.className = 'form-control';
			contactMessageDiv.appendChild(contactMessageLabel);
			contactMessageDiv.appendChild(contactMessageTextarea);

			// Submit button
			const contactButtonDiv = document.createElement('div');
			contactButtonDiv.className = 'mb-4';
			const contactSubmitButton = document.createElement('button');
			contactSubmitButton.type = 'submit';
			contactSubmitButton.className = 'btn btn-dark';
			contactSubmitButton.style.fontWeight = '600';
			contactSubmitButton.textContent = 'Submit';
			contactButtonDiv.appendChild(contactSubmitButton);

			// Append elements to form
			contactFormContainer.appendChild(contactNameDiv);
			contactFormContainer.appendChild(contactEmailDiv);
			contactFormContainer.appendChild(contactMessageDiv);
			contactFormContainer.appendChild(contactButtonDiv);

			// Append form to column
			contactCol.appendChild(contactHeading);
			contactCol.appendChild(contactFormContainer);

			// Append column to row, row to container
			contactRow.appendChild(contactCol);
			contactContainer.appendChild(contactRow);

			// Append to document body (or a specific container)
			main_container.appendChild(contactContainer);

			// Add form submission logic
			contactFormContainer.addEventListener('submit', function (event) {
				event.preventDefault();

				// Create FormData object
				const formData = new FormData(contactFormContainer);

				// Log form data entries
				for (const [key, value] of formData.entries()) {
					console.log(`${key}: ${value}`);
				}

				// Use EmailJS to send the form
				emailjs
					.sendForm(
						'portfolio_connect',
						'template_1dk1pxg',
						contactFormContainer
					)
					.then(
						() => {
							showAlert(true);
							contactFormContainer.reset(); // Clear form fields
						},
						(error) => {
							console.log('FAILED...', error);
							alert(
								'There was an error sending your message. Please try again later.'
							);
							showAlert(false, message);
						}
					);
			});
			setTimeout(() => {
				contactContainer.classList.add('visible'); // Add visible class after a short delay
			}, 5);
			break;
	}
}
function showAlert(sucessful, message = '') {
	if (sucessful) {
		//show sucessful alert
		const successAlert = document.getElementById('success-alert');
		successAlert.classList.add('show');
		setTimeout(() => {
			successAlert.classList.remove('show');
		}, 5000);
	} else {
		const failAlert = document.getElementById('fail-alert');
		failAlert.classList.add('show');

		failAlert.querySelector(
			'div'
		).textContent = `We Ran Into An Error: ${message}`;
		setTimeout(() => {
			failAlert.classList.remove('show');
		}, 5000);
	}
}
