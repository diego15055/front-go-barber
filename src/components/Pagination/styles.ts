import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 95%;
  margin-top: 4rem;
`;

export const SubContainer = styled.div`
  display: flex;
  height: 45px;
  border-bottom: 1px solid #ff9000;
  p {
    width: 95%;
    font-size: 1.4rem;
  }
  button {
    background: #ff9000;
    height: 40px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #312e38;
    width: 14rem;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }

  & + section {
    margin-top: 1rem;
  }
  & + div {
    margin-top: 1rem;
  }
`;
