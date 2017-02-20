import React from 'react';

const { array } = React.PropTypes;

//check image function, derived from: http://stackoverflow.com/questions/18837735/check-if-image-exists-on-server-using-javascript
function doesImageExist(urlToImage)
{
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', '/images/' + urlToImage, false);
    xhr.send();

    if (xhr.status == "404" || !urlToImage || urlToImage.length === 0) {
        console.log("File doesn't exist");
        return false;
    } else {
        console.log("File exists");
        return true;
    }
}

const ImageGrid = React.createClass({
  propTypes: {
    items: array
  },

  render () {
    const images = this.props.items.map((item) => {

      //check if image is valid
      var imageSrc = item.picture;
      if (doesImageExist(imageSrc) == false) {
        imageSrc = 'noimage.png';
      }

      return (
          <div className="fl w-100 w-25-ns pa3" key={item.id}>

            <a href={`/details?id=${item.id}`}>
              <div className="container link hide-child">
                <span className="hover-image white dtc child w-100 h-100">
                  <span className="details-image pa2 ba v-mid">
                    View Details
                  </span>
                </span>
                <img className="image-crop" src={`/images/${imageSrc}`} />
    
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
