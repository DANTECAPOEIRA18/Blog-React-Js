import React from 'react';
// import PropTypes from 'prop-types';

// import ResumeCards from '@common/containers/ResumeCards';
// import {
//   Button, Popconfirm,
// } from 'antd';
// import {
//   faEraser,
//   faTrash,
//   faWrench,
//   faPlay,
//   faPause,
//   faStop,
// } from '@fortawesome/free-solid-svg-icons';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import FormularioPerfil from './FormFunctional';
// import Login from '../../components/Login/Login';
import './Menu.css';
import logo from '../../assets/img/chat.png';
import useMenu from './useMenu';

function MenuView() {

  const { imageUser, nameUser } = useMenu();
  return (
    <>
      <div className="general-container-menu">
        <div className="div1-menu div1-container-menu">
          <div className="logo-menu">
            <img src={logo} alt="logo" className="img-logo-menu" />
          </div>
          <div className="title-menu">
            MI BLOG
          </div>
          <div className="user-menu">
            <div className="Logo-space-menu">
              <img src={imageUser} alt="" className="imgRedonda-menu" />
            </div>
            <div className="name-space-menu">
              {nameUser}
            </div>
          </div>
        </div>
        <div className="div2-menu">
          BOTONES
        </div>
      </div>
    </>
  );

}

export default MenuView;
