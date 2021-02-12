import React, { useCallback, useRef, useState } from 'react';
import { FiArrowLeft, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';
// import { map } from 'rxjs/operators';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar/Navbar';
import Pagination from '../../components/Pagination';

import { Container, Content, AnimatedContainer } from './styles';

interface SignUpFormData {
  cnpj: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const [cnpjData, setCnpjData] = useState('');
  const [handleClick, setHandleClick] = useState(false);
  const handleGetAllCnpj = useCallback(() => {
    return setHandleClick(true);
  }, []);

  const handleSubmitOneSearch = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          cnpj: Yup.string()
            .required('Digite um CNPJ valido')
            .min(10, 'Digite um CNPJ valido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        setCnpjData(data.cnpj);

        addToast({
          type: 'success',
          title: 'Busca realizada com sucesso!',
          description: 'Busca realizada com sucesso. ',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na busca',
          description:
            'Ocorreu um erro ao fazer a busca, cheque as informaçoes.',
        });
      }
    },
    [addToast],
  );

  return (
    <>
      <Navbar />
      <Container>
        <Content>
          <AnimatedContainer>
            <Form ref={formRef} onSubmit={handleSubmitOneSearch}>
              <h1>Buscar por CNPJ.</h1>
              <Input name="cnpj" icon={FiMail} type="text" placeholder="CNPJ" />

              <Button type="submit">Buscar</Button>
            </Form>
            <Button
              type="button"
              onClick={() => {
                handleGetAllCnpj();
              }}
            >
              <FiArrowLeft />
              Buscar todos
            </Button>
          </AnimatedContainer>
        </Content>

        <Pagination cnpj={cnpjData} renderValue={handleClick} />
      </Container>
    </>
  );
};

export default Home;
