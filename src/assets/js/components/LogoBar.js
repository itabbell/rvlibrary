import React from 'react';
import logo from '../../img/CURVE_logo_white.png';

function LogoBar() {
  return (
      <div className="logobar">
        <div className="row">
          <div className="columns small-6">
            <img src={logo} alt="The Learning Curve Logo" />
            <span className="logobar__title">Learning Curve Library</span>
          </div>
          <div className="columns small-6 logobar__identity-wrapper">
            <span className="logobar__identity">Welcome, Joe Smith</span>
          </div>
        </div>
      </div>
  );
}

export default LogoBar;