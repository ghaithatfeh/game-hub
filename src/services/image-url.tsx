import noImagePlaceholder from "../assets/no-image-placeholder.webp";
const imageUrl = (url: string) => {
	if (!url) return noImagePlaceholder;
	const index = url.indexOf("media/") + 6;
	const newUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);
	return newUrl;
};

export default imageUrl;
