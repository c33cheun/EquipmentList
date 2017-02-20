import React from 'react';

const { array } = React.PropTypes;

const ImageGrid = React.createClass({
  propTypes: {
    items: array
  },

  render () {
    const images = this.props.items.map((item) => {
      return (
          <div className="fl w-100 w-25-ns pa3" key={item.id}>

            <a href={`/details?id=${item.id}`} className="link hide-child:hover">
              <div className="container">
                <img className="image-crop" src={`/images/${item.picture}`} />
                <span className="white dtc v-mid w-100 h-100 child bg-gold-40 pa5">
                  View Details
                </span>
                <div className="rate-container white pb1 pt1 ph2">
                  <b className='f4'>${item.rate}</b>
                  <span className='f6'>/mo</span>
                </div>
              </div>
              <div className="fl w-100 w-100-ns pa2 bg-light-grey bb bl br mid-grey">
                <span>{item.make} {item.model}</span>
              </div>
            </a>

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
