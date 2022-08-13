/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import { Card } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { ImExit } from 'react-icons/im';
import './ListBlogs.css';
import ButtonMenu from '../ButtonMenu';
// import { propTypes } from 'react-bootstrap/esm/Image';

export default function ListBlogs({
  listBlogs, handleClickExit, listTags, handleClickComment,
}) {

  return (

    <div className="general-container-list-post">
      <div className="menu8">
        {
            listBlogs.map((blog) => (
              <div key={blog.id}>
                <Card
                  hoverable
                  cover={(
                    <div className="head-card-post">
                      <div className="logo-user">
                        <img alt="example" src={blog.owner.picture} className="image-user-post" />
                      </div>
                      <div className="name-user">
                        {`${blog.owner.title}. ${blog.owner.firstName} ${blog.owner.lastName} `}
                      </div>
                    </div>
          )}
                  className="vertical card-post"
                >
                  <div className="body-card-post">
                    <div className="image-post">
                      <img alt="example" src={blog.image} className="image-post-user" />
                    </div>
                    <div className="info-post info-card-post">
                      <div className=" info1">
                        <li>
                          {`Fecha: ${blog.publishDate}`}
                        </li>
                        <li className="likes">
                          {`Likes: ${blog.likes}`}
                        </li>
                        <li>
                          {`${blog.text}`}
                        </li>
                      </div>
                      <div className=" info2 tags">
                        {'Tags: '}
                        {
                        blog.tags.map((tag) => (`#${tag} `))
                      }

                      </div>
                      <div className=" info3">
                        <ButtonMenu
                          handleClick={() => {

                            handleClickComment(blog.id);

                          }}
                          componentRender={<ImExit className="size-icon-list-post" />}
                          Label="     Comentarios"
                        />
                      </div>

                    </div>
                  </div>
                </Card>
              </div>
            ))
        }

      </div>
      <div className="menu9">
        <ButtonMenu
          handleClick={handleClickExit}
          componentRender={<ImExit className="size-icon-list-post" />}
          Label="REGRESAR AL MENU"
        />
      </div>
    </div>

  );

}

ListBlogs.propTypes = {
  listBlogs: PropTypes.array.isRequired,
  listTags: PropTypes.array.isRequired,
  handleClickExit: PropTypes.func.isRequired,
  handleClickComment: PropTypes.func.isRequired,
};
