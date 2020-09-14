import axios from 'axios';

const myKey = '17697395-d82fa808be968b3a5a71f0627';
const per_page = '6';

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${myKey}&image_type=photo&orientation=horizontal&per_page=${per_page}`,
    )
    .then(response => response.data.hits);
};

export default { fetchImagesWithQuery };
