import React from 'react';
import './Parallax.css';
import ild_tiger from '../../assets/ild_tiger.png';

const Parallax = () => (
  <div className="parallax">
    <div class="parallax-text">Parallax Component</div>
    <img class="parallax-image" src={ild_tiger} alt="fire tiger"></img>
  </div>
);

export default Parallax;
