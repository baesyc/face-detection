import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0 tc">
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3" >
          <img style={{paddingTop: '1px'}} src="https://img.icons8.com/ios/150/000000/brain.png"/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;