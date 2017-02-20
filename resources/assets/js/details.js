import React from 'react';
import { render } from 'react-dom';

const reactHook = document.querySelector('[data-js="react-hook"]');

//parse and get id from query string: http://stackoverflow.com/questions/2907482/how-to-get-the-query-string-by-javascript
function getQueryStrings() { 
  var assoc  = {};
  var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
  var queryString = location.search.substring(1); 
  var keyValues = queryString.split('&'); 

  for(var i in keyValues) { 
    var key = keyValues[i].split('=');
    if (key.length > 1) {
      assoc[decode(key[0])] = decode(key[1]);
    }
  } 

  return assoc; 
} 

var queryStrings = getQueryStrings();
var detailsId = queryStrings["id"];
console.log(detailsId);
var detailsUrl = "./api/equipment/";
detailsUrl = detailsUrl.concat(detailsId);
var detailsData;

fetch(detailsUrl)
  .then((result) => result.json())
  .then((data) => {
    console.log('data:', data);
    detailsData = data;
    console.log('equipmentDetails:', detailsData);
    render(<EquipmentDetailView details= {detailsData} />, reactHook);
})




const EquipmentDetailView = React.createClass({
  propTypes: {
    details: React.PropTypes.object
  },

  render () {
    console.log(this);
    var detailsDate = new Date(this.props.details.year);
    var year = detailsDate.getFullYear();
    return (
      <div className="pt4 pl3 pr3"> 
        <header>
          <div className="pb2">
            <img src="/images/dozr_logo.svg" />
          </div>
          <div className="pb4">
            <hr></hr>
          </div>
        </header>
        <div className="cf">
          <div className="fl w-100 w-25-ns pl3">
            <img className="image-crop" src={`/images/${this.props.details.picture}`} />
          </div>
          <div className="fl w-100 w-75-ns">
            <div className="fl pa2 w-100-ns detailsSide">

              <div className="fl w-100 pb3 f4">{year} {this.props.details.make} {this.props.details.model}</div>

              <div className="fl w-100 light-grey">
                  <div className="fl w-50 f5">Monthly Rate:</div>
                  <div className="fl w-50 f5">${this.props.details.rate}</div>
              </div>
              
              <div className="fl w-100 pt4">
                <div className="fl w-50 w-50-ns pr3">
                  <span className="bg-gold br1 dib pa3 button">
                    <a className="link link-underline white f6">Book Rental</a>
                  </span>
                </div>
                <div className="fl w-50 w-50-ns">              
                  <span className="bg-white br1 dib pa3 ba button ">
                    <a className="f6">Purchase</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


