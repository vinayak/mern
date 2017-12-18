import React, { Component } from 'react';

class CarouselIndex extends Component {
  constructor() {
    super();
    this.state = { message: '' };
  }
  componentWillMount() {
    fetch('/carousel')
      .then(response => response.json())
      .then(json => this.setState({ message: json }));
  }
  render() {
    console.log(this.state.message)
    return (
      <div className="CarouselIndex">
        Carousel Index
      </div>
    );
  }
}

export default CarouselIndex;
