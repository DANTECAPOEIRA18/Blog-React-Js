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
import './Users.css';
import logo from '../../assets/img/chat.png';
import useUsers from './useUsers';
import ListUsers from '../../components/ListUsers';
// import Button from '../../components/ButtonMenu';

function UserView() {

  const {
    imageUser, nameUser, returnMenu, listUsers,
  } = useUsers();
  return (
    <>
      <div className="general-container-user">
        <div className="div1-user div1-container-user">
          <div className="logo-user">
            <img src={logo} alt="logo" className="img-logo-user" />
          </div>
          <div className="title-user">
            MI BLOG
          </div>
          <div className="user-user">
            <div className="Logo-space-user">
              <img src={imageUser} alt="" className="imgRedonda-user" />
            </div>
            <div className="name-space-user">
              {nameUser}
            </div>
          </div>
        </div>
        <div className="div2-user">
          <div className="general-container-user-button">
            <div className="div2-user-b">
              <ListUsers
                listUsers={listUsers}
                handleClickExit={returnMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default UserView;
