import React from 'react';

const { array } = React.PropTypes;

const ImageGrid = React.createClass({
  propTypes: {
    items: array
  },

  render () {
    const images = this.props.items.map((item) => {
      return (
        <a href={`/details?id=${item.id}`}>
          <div className="fl w-100 w-25-ns pa2 border-box h5" key={item.id}>
            <div className="container">
              <img className="image-crop" src={`/images/${item.picture}`} />
              <div className="rate-container"><b>{item.rate}</b>/mo</div>
            </div>
            <div className="fl w-100 w-100-ns pa2"> {item.make} {item.model} </div>
          </div>
        </a>
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
