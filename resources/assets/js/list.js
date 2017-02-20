import React from 'react';
import { render } from 'react-dom';
import EquipmentImageGrid from './components/EquipmentImageGrid.jsx';

var equipmentUrl = "./api/equipment";
var listOfEquipment;

fetch(equipmentUrl)
  .then((result) => result.json())
  .then((data) => {
    console.log('data:', data);
    listOfEquipment = data;
    console.log('listOfEquipment:', listOfEquipment);
    render(<EquipmentListView name="Equipment" images= {listOfEquipment} />, document.getElementById("reactList"));
})

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
            <hr></hr>
          </div>
        </header>
        <div className="pt4 ph4">
          <EquipmentImageGrid items={ this.props.images }/>
        </div>
      </div>
    );
  }
});


