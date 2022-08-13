import apiHandler from './apiHandler';
import { environment } from '../utils/config';

const { tenantRequest } = apiHandler;

function getUsers({ signal }) {

  const { appId } = environment;
  const method = 'GET';
  return tenantRequest('/user', {
    signal,
    method,
    headers: {
      'app-id': appId,
    },
  });

}

export default {
  getUsers,
};
