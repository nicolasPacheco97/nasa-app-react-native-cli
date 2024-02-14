const API_KEY = 'wJOYJ8kjiO0a7Gif0IhuIkKdNyVrd5COZV2970VD';
const API_URL = 'https://api.nasa.gov/planetary/apod';

export default async (urlParam = '') => {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}${urlParam?.length > 0 ? urlParam : ''}`,
    );
    const data = await response.json();
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject();
  }
};
