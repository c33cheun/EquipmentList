import React from 'react';
import { render } from 'react-dom';
import EquipmentImageGrid from './components/EquipmentImageGrid.jsx';

var equipmentUrl = "./api/equipment";
var listOfEquipment;

fetch(equipmentUrl)
  .then((res) => res.json())
  .then((data) => {
    console.log('data:', data);
    listOfEquipment = data;
    console.log('listOfEquipment:', listOfEquipment);
    render(<EquipmentListView name="Equipment" images= {listOfEquipment} />, document.getElementById("reactList"));
})


const reactHook = document.querySelector('[data-js="react-hook"]');

const EquipmentListView = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    images: React.PropTypes.array
  },

  render () {
    console.log(this);
    return (
      <div className="pt4"> 
        <header className="ph4">
          <img src="/images/dozr_logo.svg" />
          <div className="pt4">
            <h1 className="f3 fw5 ttu oswald">List of Equipment</h1>
          </div>
        </header>
        <div className="pt4 ph4">
          <EquipmentImageGrid items={ this.props.images }/>
        </div>
        <div className="pa4 bg-light-grey">
          <span className="bg-gold br1 dib pa3">
            <a className="link link-underline white pa3" target="_blank" href="https://drive.google.com/drive/folders/0B04K4CL8KavAdGNkUHFkdUVESHc?usp=sharing">Download Design Files</a>
          </span>
        </div>
      </div>
    );
  }
});


