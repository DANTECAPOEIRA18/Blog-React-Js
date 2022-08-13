/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';
import { BiPodcast } from 'react-icons/bi';
import './MenuButtons.css';
import ButtonMenu from '../ButtonMenu';
import LogOut from '../Logout/Logout';
// import { propTypes } from 'react-bootstrap/esm/Image';

export default function SelectMenu({ handleClickUsers, handleClickPosts, handleClickExit }) {

  return (

    <div className="general-container-buttons">
      <div className="menu2">
        <ButtonMenu
          handleClick={handleClickUsers}
          componentRender={<FaUser className="size-icon-buttons" />}
          Label="USUARIOS"
        />
      </div>
      <div className="menu3">
        <ButtonMenu
          handleClick={handleClickPosts}
          componentRender={<BiPodcast className="size-icon-buttons" />}
          Label="POSTS"
        />
      </div>
      <div className="menu4">
        <LogOut
          onExit={handleClickExit}
        />
      </div>
    </div>

  );

}

SelectMenu.propTypes = {
  handleClickUsers: PropTypes.func.isRequired,
  handleClickPosts: PropTypes.func.isRequired,
  handleClickExit: PropTypes.func.isRequired,
};
