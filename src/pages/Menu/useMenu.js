import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
// import { message } from 'antd';
import { useHistory } from 'react-router-dom';
import userActions from '../../state/users/actions';
import postActions from '../../state/post/actions';
import tagsActions from '../../state/tags/actions';
import apiUser from '../../api/apiUser';
import apiPosts from '../../api/apiPosts';

const useMenu = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const [imageUser, setImageUser] = useState('');
  const [nameUser, setNameUser] = useState('');
  const userInfo = useSelector(({ userReducer }) => userReducer.logged);
  const abortC = new AbortController();
  const { signal } = abortC;

  useEffect(() => {

    setImageUser(userInfo.imageUrl);
    setNameUser(userInfo.name);

  }, []);

  const usersView = async () => {

    const users = await apiUser.getUsers({ signal });
    dispatch(userActions.setListUsers(users.data));
    history.push('/users');

  };

  const postsView = async () => {

    const posts = await apiPosts.getPosts({ signal });
    const tags = await apiPosts.getTags({ signal });
    dispatch(postActions.setListPosts(posts.data));
    dispatch(tagsActions.setListTags(tags.data));

  };

  const exitApp = () => {

    const userLogged = {
      state: false,
      name: '',
      imageUrl: '',
      email: '',
    };
    dispatch(userActions.setLogged(userLogged));
    history.push('/');

  };

  return {
    imageUser,
    nameUser,
    usersView,
    postsView,
    exitApp,
  };

};

export default useMenu;
