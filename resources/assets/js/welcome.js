import React from 'react';
import { render } from 'react-dom';
import ImageGrid from './components/ImageGrid.jsx';

const { string } = React.PropTypes;

const reactHook = document.querySelector('[data-js="react-hook"]');

const InstructionComponent = React.createClass({
  propTypes: {
    name: string
  },

  render () {
    return (
      <div className="pt4"> 
        <header className="ph4">
          <img src="/images/dozr_logo.svg" />
          <div className="pt4">
            <h1 className="f3 fw5 ttu oswald">Welcome to The Programming challenge</h1>
            <ol className="pa0">
              <li className="pv1">Use the design documents as your guide for building a grid of equipment listings. <a target="_blank" href="https://drive.google.com/drive/folders/0B04K4CL8KavAdGNkUHFkdUVESHc?usp=sharing">here</a></li>
              <li className="pv1">Each listing should link to a detailed view of the listing.</li>
              <li className="pv1">All views need to responsive for mobile and desktop screens.</li>
              <li className="pv1">You can fetch all listing data from /api/equipment and details data at /api/equipment/[$id].</li>
              <li className="pv1">Use the included tachyons css library for styling your components. <a target="_blank" href="https://github.com/tachyons-css/tachyons">You can visit the tachyons github to get more info about this library.</a></li>
              <li className="pv1"><a href="/list">Link to Submission</a></li>
            </ol>
            
          </div>
        </header>
        <div className="pt4 ph4">
          <h3 className="fw1 ttu oswald">{`What youll be building`}</h3>
          <ImageGrid links={['listview.png', 'listing.png', 'mobile.png', 'guide.png']} />
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

render(<InstructionComponent/>, document.getElementById("welcomeInstructions"))