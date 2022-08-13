import React from 'react';
// import PropTypes from 'prop-types';

// import ResumeCards from '@common/containers/ResumeCards';
import {
  Button, Popconfirm,
} from 'antd';
import {
  faEraser,
  faTrash,
  faWrench,
  faPlay,
  faPause,
  faStop,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormularioPerfil from './FormFunctional';
import './Principal.css';
import logo from '../assets/img/logo_white.png';
import usePanel from './usePrincipal';

function Principal() {

  const {
    functionalData, keyboard, display, deleteCharacter, clearData, functionMotor,
    profiles, handleHidePerfilForm, handleEditPerfilClick, formPerfilVisible, running,
  } = usePanel();

  return (
    <>
      <div className="general-container">
        <div className="div1 div1-container">
          <div className="func func-container">
            <div className="f1">
              <Button
                className="btn third"
                type="ghost"
                shape="round"
                disabled={running}
                onClick={() => {

                  functionalData('f1');

                }}
              >
                f1
              </Button>
            </div>
            <div className="f2">
              <Button
                className="btn third"
                type="ghost"
                shape="round"
                disabled={running}
                onClick={() => {

                  functionalData('f2');

                }}
              >
                f2

              </Button>
            </div>
            <div className="f3">
              <Button
                className="btn third"
                type="ghost"
                shape="round"
                disabled={running}
                onClick={() => {

                  functionalData('f3');

                }}
              >
                f3

              </Button>
            </div>
            <div className="f4">
              <Button
                className="btn third"
                type="ghost"
                shape="round"
                disabled={running}
                onClick={() => {

                  functionalData('f4');

                }}
              >
                f4

              </Button>
            </div>
            <div className="f5">
              <Button
                className="btn third"
                type="ghost"
                shape="round"
                disabled={running}
                onClick={() => {

                  functionalData('f5');

                }}
              >
                f5

              </Button>
            </div>
          </div>
          <div className="keyboard keyboard-container">
            <div className="t1">
              <Button
                className="btn-keyboard third"
                type="ghost"
                shape="round"
                disabled={running}
                onClick={() => {

                  keyboard('1');

                }}
              >
                1

              </Button>
            </div>
            <div className="t2">
              <Button
                className="btn-keyboard third"
                type="ghost"
                shape="round"
                disabled={running}
                onClick={() => {

                  keyboard('2');

                }}
              >
                2

              </Button>
            </div>
            <div className="t3">
              <Button
                className="btn-keyboard third"
                type="ghost"
                shape="round"
                disabled={running}
                onClick={() => {

                  keyboard('3');

                }}
              >
                3

              </Button>
            </div>
            <div className="t4">
              <Button
                className="btn-keyboard third"
                type="ghost"
                shape="round"
                disabled={running}
                onClick={() => {

                  keyboard('4');

                }}
              >
                4

              </Button>
            </div>
            <div className="t5">
              <Button
                className="btn-keyboard third"
                type="ghost"
                shape="round"
                disabled={running}
                onClick={() => {

                  keyboard('5');

                }}
              >
                5

              </Button>
            </div>
            <div className="t6">
              <Button
                className="btn-keyboard third"
                type="ghost"
                shape="round"
                disabled={running}
                onClick={() => {

                  keyboard('6');

                }}
              >
                6

              </Button>
            </div>
            <div className="t7">
              <Button
                className="btn-keyboard third"
                type="ghost"
                shape="round"
                disabled={running}
                onClick={() => {

                  keyboard('7');

                }}
              >
                7

              </Button>
            </div>
            <div className="t8">
              <Button
                className="btn-keyboard third"
                type="ghost"
                shape="round"
                disabled={running}
                onClick={() => {

                  keyboard('8');

                }}
              >
                8

              </Button>
            </div>
            <div className="t9">
              <Button
                className="btn-keyboard third"
                type="ghost"
                shape="round"
                disabled={running}
                onClick={() => {

                  keyboard('9');

                }}
              >
                9

              </Button>
            </div>
            <div className="t0">
              <Button
                className="btn-keyboard third"
                type="ghost"
                shape="round"
                disabled={running}
                onClick={() => {

                  keyboard('0');

                }}
              >
                0

              </Button>
            </div>
            <div className="tdot">
              <Button
                className="btn-keyboard third"
                type="ghost"
                shape="round"
                disabled={running}
                onClick={() => {

                  keyboard('.');

                }}
              >
                .

              </Button>
            </div>
            <div className="tback">
              <Button
                className="btn-keyboard third"
                type="ghost"
                shape="round"
                disabled={running}
                onClick={() => {

                  deleteCharacter();

                }}
              >
                <FontAwesomeIcon icon={faEraser} />
              </Button>
            </div>
            <div className="clear">
              <Button
                className="btn-keyboard third"
                type="ghost"
                shape="round"
                disabled={running}
                onClick={() => {

                  clearData();

                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          </div>
        </div>
        <div className="div2 div2-container">
          <div className="settings settings-container">
            <div className="tsettings">
              <Button
                className="btn third"
                type="ghost"
                shape="round"
                disabled={running}
                onClick={() => {

                  handleEditPerfilClick();

                }}
              >
                <FontAwesomeIcon icon={faWrench} />
              </Button>
            </div>
            <div className="logo">
              <img src={logo} alt="logo" className="img-logo" />
            </div>
          </div>
          <div className="display">
            {(() => {

              if (display !== '') {

                return (
                  <h1 className="display-text">
                    {`${display} ft`}
                  </h1>
                );

              }

              return (
                <h1 className="display-text">
                  0
                </h1>
              );

            })()}

          </div>
          <div className="control control-container">
            <div className="pause">
              <Button
                className="btn-keyboard third pause-button"
                type="ghost"
                shape="round"
                disabled={!running}
                onClick={() => {

                  functionMotor('pause');

                }}
              >
                <FontAwesomeIcon icon={faPause} />
              </Button>
            </div>
            <div className="play">
              <Popconfirm
                title="Esta Seguro de la Accion?"
                onConfirm={() => {

                  functionMotor('play');

                }}
              >
                <Button
                  className="btn-keyboard third play-button"
                  type="ghost"
                  shape="round"
                >
                  <FontAwesomeIcon icon={faPlay} />
                </Button>
              </Popconfirm>

            </div>
            <div className="stop">
              <Button
                className="btn-keyboard third stop-button"
                type="ghost"
                shape="round"
                disabled={!running}
                onClick={() => {

                  functionMotor('stop');

                }}
              >
                <FontAwesomeIcon icon={faStop} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FormularioPerfil
        profiles={profiles}
        visible={formPerfilVisible}
        handleHidePerfilForm={handleHidePerfilForm}
      />
    </>
  );

}

// Principal.propTypes = {
//   className: PropTypes.string,
// };

Principal.defaultProps = {
  className: null,
};

export default Principal;
