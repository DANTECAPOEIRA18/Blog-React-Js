import apiHandler from './apiHandler';

const { tenantRequest } = apiHandler;

function getFunctionalOptions({ signal }) {

  const method = 'GET';
  return tenantRequest('/load-parameters', {
    signal,
    method,
  });

}

function getStateMotor({ signal }) {

  const method = 'GET';
  return tenantRequest('/load-state-motor', {
    signal,
    method,
  });

}

function saveFunctionalOptions({ signal, body }) {

  const method = 'POST';
  return tenantRequest('/save-parameters', {
    signal,
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  });

}

function saveActionMotor({ signal, body }) {

  const method = 'POST';
  console.log('BODY:', body);
  return tenantRequest('/state-motor', {
    signal,
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  });

}

function displayQuantity({ signal }) {

  const method = 'GET';

  return tenantRequest('/display-quantity', {
    signal,
    method,
  });

}

export default {
  getFunctionalOptions, saveFunctionalOptions, saveActionMotor, getStateMotor, displayQuantity,
};
