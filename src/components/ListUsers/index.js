/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import { Card } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { ImExit } from 'react-icons/im';
import './ListUsers.css';
import ButtonMenu from '../ButtonMenu';
// import { propTypes } from 'react-bootstrap/esm/Image';
const { Meta } = Card;

export default function ListUsers({ listUsers, handleClickExit }) {

  return (

    <div className="general-container-list-user">
      <div className="menu6">
        {
            listUsers.map((user) => (
              <div key={user.id}>
                <Card
                  hoverable
                  cover={<img alt="example" src={user.picture} className="image-user" />}
                  className="vertical card-user"
                >
                  <Meta title={`${user.title}. ${user.firstName} ${user.lastName} `} description="Participante del Blog" />
                </Card>
              </div>
            ))
        }

      </div>
      <div className="menu7">
        <ButtonMenu
          handleClick={handleClickExit}
          componentRender={<ImExit className="size-icon-list-user" />}
          Label="REGRESAR AL MENU"
        />
      </div>
    </div>

  );

}

ListUsers.propTypes = {
  listUsers: PropTypes.array.isRequired,
  handleClickExit: PropTypes.func.isRequired,
};
