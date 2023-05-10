import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Container } from './App.styled';
import { SearchBar } from './Searchbar/Searchbar';
import { fetchImages } from 'Service/fetchApi';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImage, setTotalImage] = useState(0);
  const limit = 500;

  useEffect(() => {
    const handleFetchImages = async (searchQuery, page) => {
      try {
        setIsLoading(true);
        const data = await fetchImages(searchQuery, page);
        const resultImages = data.hits;
       
        if (!resultImages.length) {
          alert('According to the result of the request, there are no photos!');
          return;
        }
        setImages(prevImages =>
          page === 1 ? [...resultImages] : [...prevImages, ...resultImages]
        );
        setTotalImage(data.totalHits);
      } catch (error) {
        setImages([]);
        alert('Something went wrong! Please, try later.');
      } finally {
        setIsLoading(false);
      }
    };
    if (!searchQuery) {
      return;
    }
    handleFetchImages(searchQuery, page);
  }, [page, searchQuery]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSubmit = newSearchQuery => {
    if (newSearchQuery === '' || newSearchQuery === searchQuery) {
      return;
    }
    setImages([]);
    setSearchQuery(newSearchQuery);
    setPage(1);
    setTotalImage(0);
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      {isLoading ? (
        <Loader />
      ) : (
        images.length !== 0 &&
        images !== limit &&
        images.length < totalImage && <Button onClick={handleLoadMore} />
      )}
    </Container>
  );
};

App.protoType = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
}.isRequired;