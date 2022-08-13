import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
// import { message } from 'antd';
import { useHistory } from 'react-router-dom';

const useUsers = () => {

  const history = useHistory();
  const [imageUser, setImageUser] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [listUsers, setListUsers] = useState([]);
  const userInfo = useSelector(({ userReducer }) => userReducer.logged);
  const UsersList = useSelector(({ userReducer }) => userReducer.listUsers);

  useEffect(() => {

    setImageUser(userInfo.imageUrl);
    setNameUser(userInfo.name);
    setListUsers(UsersList);

  }, []);

  const returnMenu = () => {

    history.push('/menu');

  };

  return {
    imageUser,
    nameUser,
    listUsers,
    returnMenu,
  };

};

export default useUsers;
