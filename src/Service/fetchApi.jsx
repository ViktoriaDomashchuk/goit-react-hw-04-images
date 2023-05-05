import axios from "axios";

const params = {
    key: '31688574-69e068f4257072d54456bdc7a',
    options: 'image_type=photo&orientation=horizontal&safesearch=true',
};
 
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchImages(query, page) {
    const response = await axios.get(
        `?key=${params.key}&q=${query}&${params.options}&per_page=12&page=${page}`
    );
    return response.data;
} 
