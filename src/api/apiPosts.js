import apiHandler from './apiHandler';
import { environment } from '../utils/config';

const { tenantRequest } = apiHandler;

function getPosts({ signal }) {

  const { appId } = environment;
  const method = 'GET';
  return tenantRequest('/post?limit=50', {
    signal,
    method,
    headers: {
      'app-id': appId,
    },
  });

}

function getTags({ signal }) {

  const { appId } = environment;
  const method = 'GET';
  return tenantRequest('/tag', {
    signal,
    method,
    headers: {
      'app-id': appId,
    },
  });

}

export default {
  getPosts, getTags,
};
