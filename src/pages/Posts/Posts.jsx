/* eslint-disable max-len */
import React from 'react';
import './Posts.css';
import { Modal } from 'antd';
import logo from '../../assets/img/chat.png';
import usePosts from './usePosts';
import ListBlogs from '../../components/ListBlogs';
import withAuth from '../../utils/withAuth';
// import Button from '../../components/ButtonMenu';

function PostsView() {

  const {
    imageUser, nameUser, returnMenu, listPosts, listTags, consultComments, isModalVisible, handleCancel, handleOk, listComments,
  } = usePosts();
  return (
    <>
      <div className="general-container-post">
        <div className="div1-post div1-container-post">
          <div className="logo-post">
            <img src={logo} alt="logo" className="img-logo-post" />
          </div>
          <div className="title-post">
            MI BLOG
          </div>
          <div className="user-post">
            <div className="Logo-space-post">
              <img src={imageUser} alt="User" className="imgRedonda-post" />
            </div>
            <div className="name-space-post">
              {nameUser}
            </div>
          </div>
        </div>
        <div className="div2-post">
          <div className="general-container-post-button">
            <div className="div2-post-b">
              <ListBlogs
                listBlogs={listPosts}
                listTags={listTags}
                handleClickExit={returnMenu}
                handleClickComment={consultComments}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal title="Comentarios" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className="modal-post">
        {
            listComments.map((comment) => (
              <div key={comment.id} className="comments-container">
                <div className="comment-image-user">
                  <img alt="example" src={comment.owner.picture} className="image-comment-post" />
                </div>
                <div className="comment-user">
                  <li>
                    {`${comment.owner.title}. ${comment.owner.firstName} ${comment.owner.lastName} `}
                  </li>
                  <li className="likes">
                    {`${comment.message}`}
                  </li>
                </div>
              </div>
            ))
        }
      </Modal>
    </>
  );

}

export default withAuth(PostsView);
