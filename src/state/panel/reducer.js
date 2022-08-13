import constants from './constants';

const initState = {
  functionalData: {
    keyboardFunc: '',
    dataFunc: 0,
  },
  settings: {
    f1: 0,
    f2: 0,
    f3: 0,
    f4: 0,
    f5: 0,
  },
  keyboard: '',
  display: '',
  motorAction: 'stop',
  monitor: false,
};

function panelReducer(state = initState, { type, payload }) {

  switch (type) {

    case constants.FUNCTIONAL_DATA:
      return {
        ...state,
        functionalData: payload,
      };

    case constants.KEYBOARD:
      return {
        ...state,
        keyboard: payload,
      };

    case constants.SETTINGS:
      return {
        ...state,
        settings: payload,
      };
    case constants.DISPLAY:
      return {
        ...state,
        display: payload,
      };
    case constants.MOTOR_ACTION:
      return {
        ...state,
        motorAction: payload,
      };
    case constants.MONITOR:
      return {
        ...state,
        monitor: payload,
      };
    default:
      return state;

  }

}

export default panelReducer;
