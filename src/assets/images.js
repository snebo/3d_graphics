// Import images dynamically from the folder
const imagesContext = require.context(
	'./images/project_images',
	false,
	/\.(png|jpe?g|webp|gif)$/
);

// Create an array of image objects
const imagesArray = imagesContext.keys().map((imagePath) => {
	const src = imagesContext(imagePath); // Resolves the image path
	const alt = imagePath
		.split('/')
		.pop() // Get the file name
		.replace(/\.(png|jpe?g|webp|gif)$/, '') // Remove the file extension
		.replace(/-/g, ' ') // Replace dashes with spaces for readability
		.replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize words
	return { src, alt };
});

// Group the images into batches of two
const groupedImagesArray = [];
for (let i = 0; i < imagesArray.length; i += 2) {
	groupedImagesArray.push({
		images: imagesArray.slice(i, i + 2),
	});
}

console.log(groupedImagesArray);

export const images = groupedImagesArray;

// export const images = [
// 	{
// 		images: [
// 			{
// 				src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
// 				alt: 'Boat on Calm Water',
// 			},
// 			{
// 				src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp',
// 				alt: 'Wintry Mountain Landscape',
// 			},
// 		],
// 	},
// 	{
// 		images: [
// 			{
// 				src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp',
// 				alt: 'Mountains in the Clouds',
// 			},
// 			{
// 				src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
// 				alt: 'Boat on Calm Water',
// 			},
// 		],
// 	},
// 	{
// 		images: [
// 			{
// 				src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp',
// 				alt: 'Waves at Sea',
// 			},
// 			{
// 				src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp',
// 				alt: 'Yosemite National Park',
// 			},
// 		],
// 	},
// ];
