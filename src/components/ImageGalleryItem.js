import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  componentDidUpdate() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  render() {
    const { items } = this.props;
    return (
      <>
        {items.map(({ id, webformatURL, tags, largeImageURL }) => (
          <li key={id} className="ImageGalleryItem">
            <img
              onClick={() => this.props.catchLargeImg(largeImageURL)}
              key={id}
              src={webformatURL}
              alt={tags}
              className="ImageGalleryItem-image"
            />
          </li>
        ))}
      </>
    );
  }
}
