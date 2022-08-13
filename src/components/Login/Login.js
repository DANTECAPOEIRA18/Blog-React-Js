/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
// import React, { useEffect } from 'react';
// import {
//   faEraser,
//   faTrash,
//   faWrench,
//   faPlay,
//   faPause,
//   faStop,
// } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from 'react-google-login';
import { Button } from 'antd';
import './Login.css';
// import { propTypes } from 'react-bootstrap/esm/Image';

const clientId = '776484690454-gfstsjmv9j24euv9sphop8aco3rtcedq.apps.googleusercontent.com';

export default function Login({ onSuccess, onFailure }) {

  return (
    <GoogleLogin
      clientId={clientId}
      render={(renderProps) => (
        <Button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn-keyboard">
          <div className="button-container">
            <div className="logo-button">
              <FcGoogle className="size-icon" />
            </div>
            <div className="text-button">
              INICIAR SESIÓN
            </div>
          </div>
        </Button>
      )}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      // isSignedIn
    />
  );

}

Login.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};
