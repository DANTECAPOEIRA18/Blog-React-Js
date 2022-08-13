/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {
  Modal, Form, Input, Button, message,
} from 'antd';
import { useDispatch } from 'react-redux';
import './style.css';
import panelActions from '../../state/panel/actions';
import apiMotor from '../../api/apiMotor';

const FormularioPerfil = (props) => {

  const dispatch = useDispatch();
  const {
    visible,
    handleHidePerfilForm,
    profiles,
  } = props;

  const [form] = Form.useForm();

  const handleCancelarClick = () => {

    form.resetFields();
    handleHidePerfilForm();

  };

  const handleSubmitPerfil = async () => {

    const abortC = new AbortController();
    const { signal } = abortC;
    form.validateFields().then(async (rslt) => {

      console.log('PERFILES: ', rslt);
      dispatch(panelActions.setSettings({
        f1: parseFloat(rslt.f1),
        f2: parseFloat(rslt.f2),
        f3: parseFloat(rslt.f3),
        f4: parseFloat(rslt.f4),
        f5: parseFloat(rslt.f5),
      }));
      const response = await apiMotor.saveFunctionalOptions({
        signal,
        body: {
          F1: parseFloat(rslt.f1),
          F2: parseFloat(rslt.f2),
          F3: parseFloat(rslt.f3),
          F4: parseFloat(rslt.f4),
          F5: parseFloat(rslt.f5),
        },
      });
      if (response.response === 'OK') {

        message.success(response.response);

      } else {

        message.error('ALGO HA SALIDO MAL');

      }
      handleCancelarClick();

    });

  };

  useEffect(() => {

    if (!profiles.editProfile) {

      form.resetFields();

    } else {

      console.log(profiles.editProfile);
      form.setFieldsValue({
        f1: profiles.f1,
        f2: profiles.f2,
        f3: profiles.f3,
        f4: profiles.f4,
        f5: profiles.f5,
      });

    }

  }, [profiles.editProfile]);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Modal onCancel={handleCancelarClick} footer={false} className="container-form-perfil modal-content" visible={visible}>
        <p>{profiles.editProfile ? 'Editar Perfiles' : 'Editar Perfiles'}</p>
        <Form form={form} layout="vertical">

          <Form.Item
            name="f1"
            rules={[{ required: true, message: 'Debes asignar un Valor' }]}
            label="F1"
            className="text-number"
          >
            <Input placeholder="Ingrese un Valor" type="number" className="text-number" />
          </Form.Item>

          <Form.Item
            name="f2"
            rules={[{ required: true, message: 'Debes asignar un Valor' }]}
            label="F2"
          >
            <Input placeholder="Ingrese un Valor" type="number" />
          </Form.Item>

          <Form.Item
            name="f3"
            rules={[{ required: true, message: 'Debes asignar un Valor' }]}
            label="F3"
          >
            <Input placeholder="Ingrese un Valor" type="number" />
          </Form.Item>

          <Form.Item
            name="f4"
            rules={[{ required: true, message: 'Debes asignar un Valor' }]}
            label="F4"
          >
            <Input placeholder="Ingrese un Valor" type="number" />
          </Form.Item>

          <Form.Item
            name="f5"
            rules={[{ required: true, message: 'Debes asignar un Valor' }]}
            label="F5"
          >
            <Input placeholder="Ingrese un Valor" type="number" />
          </Form.Item>

          <div className="btn-form">
            <Button onClick={handleCancelarClick} className="button-form">Cancelar</Button>
            <Button onClick={handleSubmitPerfil} type="success" className="button-form-success">Guardar</Button>
          </div>
        </Form>
      </Modal>
    </>
  );

};

FormularioPerfil.defaultProps = {
  visible: false,
};

export default FormularioPerfil;
