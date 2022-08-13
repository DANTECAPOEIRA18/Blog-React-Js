import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
// import { message } from 'antd';
// import { useHistory } from 'react-router-dom';
// import userActions from '../../state/users/actions';

const useMenu = () => {

  const [imageUser, setImageUser] = useState('');
  const [nameUser, setNameUser] = useState('');
  const userInfo = useSelector(({ userReducer }) => userReducer.logged);

  useEffect(() => {

    setImageUser(userInfo.imageUrl);
    setNameUser(userInfo.name);

  }, []);

  return {
    imageUser,
    nameUser,
  };

};

export default useMenu;
