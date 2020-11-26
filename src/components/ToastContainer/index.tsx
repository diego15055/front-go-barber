import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast>
        <FiAlertCircle />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Nao foi possivel fazer login na aplicaçao</p>
        </div>
        <button type="button">
          <FiXCircle size={20} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
