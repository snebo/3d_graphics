// Import images dynamically from the folder
const imagesContext = require.context(
	'./images/project_images',
	false,
	/\.(png|jpe?g|webp|gif)$/
);

// Create an array of image objects
const imagesArray = imagesContext.keys().map((imagePath) => {
	const src = imagesContext(imagePath);
	const fileName = imagePath.split('/').pop().toLowerCase();
	const alt = fileName
		.replace(/\.(png|jpe?g|webp|gif)$/, '')
		.replace(/-/g, ' ')
		.replace(/\b\w/g, (c) => c.toUpperCase());

	// Caption logic based on filename
	let caption;
	if (fileName.includes('concept')) {
		caption = 'Concept Design';
	} else if (fileName.includes('external')) {
		caption = 'Exterior Design';
	} else if (fileName.includes('interior')) {
		caption = 'Interior Design';
	} else if (fileName.includes('event')) {
		caption = 'Marketing Event';
	} else {
		// Get the first word of the filename for default caption
		const firstWord = fileName
			.replace(/\.(png|jpe?g|webp|gif)$/, '') // remove extension
			.replace(/[0-9()]/g, '') // remove numbers and parentheses
			.split('-')[0] // get first word
			.trim() // remove any extra spaces
			.replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize
		caption = `${firstWord} Design`;
	}

	return { src, alt, caption };
});
console.log(imagesArray);

// Group the images into batches of two
const groupedImagesArray = [];
for (let i = 0; i < imagesArray.length; i += 2) {
	groupedImagesArray.push({
		images: imagesArray.slice(i, i + 2),
	});
}

export const images = imagesArray;
