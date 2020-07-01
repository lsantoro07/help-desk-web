import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import logo from '../../assets/logo.svg';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { email } = data;

        await api.post('/password/forgot', {
          email,
        });

        addToast({
          type: 'success',
          title: 'Recuperação com sucesso!',
          description:
            'Foi enviado para seu e-mail as instruções para recuperar sua senha',
        });

        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao recuperar senha',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="help-desk" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Recuperar minha senha</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Button>Recuperar senha</Button>
        </Form>
        <Link to="/">
          <FiLogIn />
          Voltar para login
        </Link>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
