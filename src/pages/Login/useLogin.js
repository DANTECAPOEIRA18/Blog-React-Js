import { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { gapi } from 'gapi-script';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { useHistory } from 'react-router-dom';
import userActions from '../../state/users/actions';

const clientId = '776484690454-gfstsjmv9j24euv9sphop8aco3rtcedq.apps.googleusercontent.com';

const useLogin = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {

    const initClient = () => {

      gapi.client.init({
        clientId,
        scope: '',
      });

    };
    gapi.load('client:auth2', initClient);

  }, []);

  const onSuccess = (res) => {

    const userLogged = {
      state: true,
      name: res.profileObj.name,
      imageUrl: res.profileObj.imageUrl,
      email: res.profileObj.email,
    };
    dispatch(userActions.setLogged(userLogged));
    message.success('Bienvenido');
    history.push('/menu');

  };

  const onFaulire = (res) => {

    message.error('Datos Incorrectos', res);

  };

  return {
    onSuccess,
    onFaulire,
  };

};

export default useLogin;
