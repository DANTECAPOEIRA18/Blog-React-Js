import constants from './constants';

const setFunctionalData = (values) => (dispatch) => {

  dispatch({
    type: constants.FUNCTIONAL_DATA,
    payload: values,
  });

};

const setSettings = (values) => (dispatch) => {

  dispatch({
    type: constants.SETTINGS,
    payload: values,
  });

};

const setKeyboard = (values) => (dispatch) => {

  dispatch({
    type: constants.KEYBOARD,
    payload: values,
  });

};

const setDisplay = (values) => (dispatch) => {

  dispatch({
    type: constants.DISPLAY,
    payload: values,
  });

};

const setMotorAction = (values) => (dispatch) => {

  dispatch({
    type: constants.MOTOR_ACTION,
    payload: values,
  });

};

const setMonitor = (values) => (dispatch) => {

  dispatch({
    type: constants.MONITOR,
    payload: values,
  });

};

export default {
  setFunctionalData, setSettings, setKeyboard, setDisplay, setMotorAction, setMonitor,
};
