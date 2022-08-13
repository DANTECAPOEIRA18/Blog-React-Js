/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { GoogleLogout } from 'react-google-login';

const clientId = '776484690454-gfstsjmv9j24euv9sphop8aco3rtcedq.apps.googleusercontent.com';

function LogOut() {

  const onSuccess = () => {

    console.log('Log Out Success ');

  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Login"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );

}

export default LogOut;
