import React from 'react';

const { array } = React.PropTypes;

const ImageGrid = React.createClass({
  propTypes: {
    items: array
  },

  render () {
    const images = this.props.items.map((item) => {
      return (
        <div className="fl w-25 pa2" key={item.id}>
          <img src={`/images/${item.picture}`} />
          <div>
          {item.make} {item.model}
          </div>
        </div>
      );
    });

    return (
      <div className="cf">
        {images}
      </div>
    );
  }
});

export default ImageGrid;
