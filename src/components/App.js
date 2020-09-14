import React, { Component } from 'react';
import Layout from './Layout';
import Notification from './Notification';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import Button from './Button';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import pixabayApi from '../services/pixabayApi';

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: '',
    page: 1,
    largeImageUrl: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    pixabayApi
      .fetchImagesWithQuery(searchQuery, page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
    });
  };

  catchLargeImg = url => {
    this.setState({ largeImage: url });
  };

  closeModal = () => {
    this.setState({ largeImage: '' });
  };

  render() {
    const { images, loading, error, largeImage } = this.state;

    return (
      <Layout>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />

        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}

        {images.length > 0 && (
          <>
            <ImageGallery items={images} catchLargeImg={this.catchLargeImg} />
          </>
        )}
        {loading && (
          <Loader type="TailSpin" color="#3f51b5" height={100} width={100} />
        )}
        {!loading && images.length > 0 && <Button getMore={this.fetchImages} />}

        {largeImage && <Modal image={largeImage} onClose={this.closeModal} />}
      </Layout>
    );
  }
}
