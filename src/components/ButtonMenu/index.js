/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
// import { FcGoogle } from 'react-icons/fc';
// import { GoogleLogin } from 'react-google-login';
import { Button } from 'antd';
import './Button.css';
// import { propTypes } from 'react-bootstrap/esm/Image';

export default function ButtonMenu({ handleClick, componentRender, Label }) {

  return (

    <Button onClick={handleClick} className="btn-keyboard-menu">
      <div className="button-container-menu">
        <div className="logo-button-menu">
          {componentRender}
        </div>
        <div className="text-button-menu">
          {Label}
        </div>
      </div>
    </Button>

  );

}

ButtonMenu.propTypes = {
  handleClick: PropTypes.func.isRequired,
  componentRender: PropTypes.any.isRequired,
  Label: PropTypes.string.isRequired,
};
