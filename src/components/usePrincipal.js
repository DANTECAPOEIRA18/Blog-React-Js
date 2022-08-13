/* eslint-disable max-len */
import {
  useCallback, useState, useEffect,
} from 'react';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// import { useTranslation } from 'react-i18next';
// import Socket from 'net';
import panelActions from '../state/panel/actions';
import apiMotor from '../api/apiMotor';

// const ENDPOINT = 'http://127.0.0.1:8000';
// import deviceActions from '@state/device/actions';
//   import devicesApi from '@api/devicesApi';
//   import getColumns from './columnsDevices';

function usePanel() {

  const dispatch = useDispatch();
  const funcData = useSelector(({ panel }) => panel.functionalData);
  const keyboardData = useSelector(({ panel }) => panel.keyboard);
  const displayData = useSelector(({ panel }) => panel.display);
  const monitor = useSelector(({ panel }) => panel.monitor);
  const motorAction = useSelector(({ panel }) => panel.motorAction);
  const profile = useSelector(({ panel }) => panel.settings);
  const [running, setRunning] = useState(false);
  const [formPerfilVisible, setFormPerfilVisible] = useState(false);
  const [flag, setFlag] = useState(false);
  const [profiles, setProfiles] = useState({
    editProfile: true,
    f1: 0,
    f2: 0,
    f3: 0,
    f4: 0,
    f5: 0,
  });
  let interval = 0;
  const abortC = new AbortController();
  const { signal } = abortC;
  const [display, setDisplay] = useState('');

  const functionalData = (value) => {

    dispatch(panelActions.setFunctionalData({
      ...funcData,
      keyboardFunc: value,
    }));
    dispatch(panelActions.setDisplay(profile[value]));

  };

  // useEffect(() => {

  //   const client = Socket(ENDPOINT);
  //   client.connect(8000, '127.0.0.1', () => {

  //     console.log('Connected');

  //   });
  //   client.on('data', (data) => {

  //     console.log(`Received: ${data}`);
  //     client.destroy(); // kill client after server's response

  //   });

  // }, []);

  const keyboard = useCallback((value) => {

    const dot = keyboardData.indexOf('.');
    let stringValue;
    if (value !== '.') {

      if (dot !== -1) {

        const dotString = keyboardData.substring(dot);
        if (dotString.length < 3) {

          stringValue = keyboardData + value;
          dispatch(panelActions.setKeyboard(stringValue));
          dispatch(panelActions.setDisplay(stringValue));

        }

      } else {

        stringValue = keyboardData + value;
        dispatch(panelActions.setKeyboard(stringValue));
        dispatch(panelActions.setDisplay(stringValue));

      }

    } else if (dot === -1) {

      stringValue = keyboardData + value;
      dispatch(panelActions.setKeyboard(stringValue));
      dispatch(panelActions.setDisplay(stringValue));

    }

  }, [keyboardData]);

  const deleteCharacter = () => {

    const valueString = keyboardData.slice(0, -1);
    dispatch(panelActions.setKeyboard(valueString));
    dispatch(panelActions.setDisplay(valueString));

  };

  const clearData = () => {

    dispatch(panelActions.setKeyboard(''));
    dispatch(panelActions.setDisplay(''));

  };

  const functionMotor = (value) => {

    dispatch(panelActions.setMotorAction(value));

  };

  useEffect(() => {

    setDisplay(displayData);

  }, [displayData]);

  useEffect(() => {

    async function fetchData() {

      const status = await apiMotor.getStateMotor({ signal });
      const { state } = status;

      if (motorAction === 'play') {

        if (state.action === 'n/a' || state.action === 'stop') {

          if (displayData !== '' && displayData !== '0') {

            dispatch(panelActions.setMonitor(true));
            setRunning(true);
            const action = await apiMotor.saveActionMotor({
              signal,
              body: {
                action: motorAction, measure: displayData,
              },
            });
            if (action.response === 'OK') {

              dispatch(panelActions.setKeyboard(''));
              dispatch(panelActions.setDisplay(''));
              message.success('Accion exitosa');

            } else {

              message.error('Algo salio mal');
              dispatch(panelActions.setMotorAction('stop'));

            }

          } else {

            message.error('Introduzca una cifra valida');
            dispatch(panelActions.setMotorAction(''));

          }

        } else if (state.action === 'pause') {

          const action = await apiMotor.saveActionMotor({
            signal,
            body: {
              action: motorAction, measure: 'NA',
            },
          });
          if (action.response === 'OK') {

            message.success('Proceso Reanudado');

          } else {

            message.error('Algo salio mal');
            dispatch(panelActions.setMotorAction('stop'));

          }

        } else {

          dispatch(panelActions.setMotorAction('stop'));
          message.error('no se pudo iniciar acción');

        }

      } else if (motorAction === 'pause') {

        if (state.action === 'play') {

          const action = await apiMotor.saveActionMotor({
            signal,
            body: {
              action: motorAction, measure: 'NA',
            },
          });
          if (action.response === 'OK') {

            message.info('Proceso Pausado');

          } else {

            message.error('Algo salio mal');
            dispatch(panelActions.setMotorAction('stop'));

          }

        } else {

          dispatch(panelActions.setMotorAction(''));
          message.error('Orden Invalida');

        }

      } else if (motorAction === 'stop' && monitor === true) {

        if (state.action === 'play' || state.action === 'pause') {

          dispatch(panelActions.setMonitor(false));
          setRunning(false);
          dispatch(panelActions.setDisplay('0'));
          const action = await apiMotor.saveActionMotor({
            signal,
            body: {
              action: motorAction, measure: '0',
            },
          });
          if (action.response === 'OK') {

            message.error('Proceso Abortado');

          } else {

            message.error('Algo salio mal');
            dispatch(panelActions.setMotorAction('stop'));

          }

        } else {

          dispatch(panelActions.setMotorAction('stop'));
          message.error('Orden Invalida');

        }

      }

    }

    if (flag === true) {

      fetchData();

    } else {

      setFlag(true);

    }

  }, [motorAction]);

  useEffect(() => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    interval = setInterval(async () => {

      if (monitor) {

        const response = await apiMotor.displayQuantity({ signal });
        if (response.response === 'OK') {

          const valueString = (Math.round((parseFloat(response.currentValue) * 100), 0) / 100).toString();
          dispatch(panelActions.setDisplay(valueString));

          if (response.statusM1 === '1') {

            dispatch(panelActions.setMonitor(false));
            dispatch(panelActions.setMotorAction('stop'));
            message.success('Proceso de Conteo terminado');
            dispatch(panelActions.setMonitor(false));
            setRunning(false);
            dispatch(panelActions.setDisplay('0'));

          }

        }

      }

    }, 50);
    return () => clearInterval(interval);

    // clearInterval(internal);

  }, [monitor]);

  useEffect(() => {

    setProfiles({
      editProfile: true,
      f1: profile.f1,
      f2: profile.f2,
      f3: profile.f3,
      f4: profile.f4,
      f5: profile.f5,
    });

  }, [profile]);

  useEffect(() => {

    async function fetchData() {

      // You can await here
      const options = await apiMotor.getFunctionalOptions({ signal });

      dispatch(panelActions.setSettings({
        f1: options.F1,
        f2: options.F2,
        f3: options.F3,
        f4: options.F4,
        f5: options.F5,
      }));

      setProfiles({
        editProfile: true,
        f1: options.F1,
        f2: options.F2,
        f3: options.F3,
        f4: options.F4,
        f5: options.F5,
      });
      // ...

    }
    fetchData();

  }, [dispatch]);

  const handleEditPerfilClick = () => {

    setProfiles({
      editProfile: true,
      f1: profile.f1,
      f2: profile.f2,
      f3: profile.f3,
      f4: profile.f4,
      f5: profile.f5,
    });
    setFormPerfilVisible(true);

  };

  const handleHidePerfilForm = () => {

    setProfiles({
      editProfile: false,
      f1: 0,
      f2: 0,
      f3: 0,
      f4: 0,
      f5: 0,
    });
    setFormPerfilVisible(false);

  };

  return {
    functionalData,
    keyboard,
    display,
    deleteCharacter,
    clearData,
    functionMotor,
    formPerfilVisible,
    profiles,
    handleEditPerfilClick,
    handleHidePerfilForm,
    running,
  };

}

export default usePanel;
