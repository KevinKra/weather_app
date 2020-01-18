export const getUserCoordinates = async () => {
	return new Promise((resolve, reject) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(({ coords }) => {
				resolve(coords);
			});
		} else {
			reject(new Error('Failed to get user coordinates.'));
		}
	});
};
