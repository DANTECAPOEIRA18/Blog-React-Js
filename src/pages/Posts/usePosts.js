import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
// import { message } from 'antd';
import { useHistory } from 'react-router-dom';
import apiPosts from '../../api/apiPosts';

const usePosts = () => {

  const history = useHistory();
  const [imageUser, setImageUser] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [listPosts, setListPosts] = useState([]);
  const [listTags, setListTags] = useState([]);
  const [listComments, setListComments] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const userInfo = useSelector(({ userReducer }) => userReducer.logged);
  const postsList = useSelector(({ postReducer }) => postReducer.listPosts);
  const tagsList = useSelector(({ tagsReducer }) => tagsReducer.listTags);
  const abortC = new AbortController();
  const { signal } = abortC;

  useEffect(() => {

    setImageUser(userInfo.imageUrl);
    setNameUser(userInfo.name);
    setListPosts(postsList);
    setListTags(tagsList);

  }, []);

  const returnMenu = () => {

    history.push('/menu');

  };

  const consultComments = async (postId) => {

    const comments = await apiPosts.getComments({ signal, postId });
    setListComments(comments.data);
    setIsModalVisible(true);

  };

  const handleOk = () => {

    setIsModalVisible(false);

  };

  const handleCancel = () => {

    setIsModalVisible(false);

  };

  return {
    imageUser,
    nameUser,
    listPosts,
    listTags,
    isModalVisible,
    listComments,
    handleOk,
    handleCancel,
    consultComments,
    returnMenu,
  };

};

export default usePosts;
