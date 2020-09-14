import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

export default class ImageGallery extends Component {
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
        <ul className="ImageGallery">
          <ImageGalleryItem
            items={items}
            catchLargeImg={this.props.catchLargeImg}
          />
        </ul>
      </>
    );
  }
}
