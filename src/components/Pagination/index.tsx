import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, SubContainer } from './styles';

interface CnpjDataProps {
  nome?: string;
  fantasia?: string;
  cnpj: string;
  renderValue: boolean;
}

const Pagination: React.FC<CnpjDataProps> = ({ cnpj, renderValue }) => {
  const [resultCnpj, setResultCnpj] = useState<CnpjDataProps>();
  const [resultAllCnpj, setResultAllCnpj] = useState([]);

  useEffect(() => {
    api.get(`cnpj/get/${cnpj}`).then(response => {
      setResultCnpj(response.data);
    });
  }, [cnpj]);

  useEffect(() => {
    if (renderValue) {
      api.get(`cnpj/get-all`).then(response => {
        setResultAllCnpj(response.data);
      });
    }
  }, [renderValue]);

  return (
    <Container>
      {cnpj && (
        <SubContainer>
          <p>{resultCnpj?.nome}</p>
          <button>Info</button>
        </SubContainer>
      )}

      {renderValue &&
        resultAllCnpj.map(item => {
          return (
            <SubContainer key={item}>
              <p>{item}</p>
              <button>Exibir mais</button>
            </SubContainer>
          );
        })}
    </Container>
  );
};

export default Pagination;
