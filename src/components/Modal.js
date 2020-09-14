import React, { Component } from 'react';

export default class Madal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDoun);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDoun);
  }

  handleKeyDoun = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.image} alt="" />
        </div>
      </div>
    );
  }
}
