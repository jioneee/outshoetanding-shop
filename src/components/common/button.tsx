import styled from 'styled-components';
import { ReactNode } from 'react';

const ButtonS = ({ children }: { children: ReactNode }) => {
  return <Small>{children}</Small>;
};

const ButtonM = ({ children }: { children: ReactNode }) => {
  return <Middle>{children}</Middle>;
};

const ButtonL = ({ children }: { children: ReactNode }) => {
  return <Large>{children}</Large>;
};
export { ButtonS, ButtonM, ButtonL };
const Small = styled.button`
  height: 30px;
  width: 60px;
  background-color: black;
  border-radius: 10%;
  color: white;
`;

const Middle = styled.button`
  height: 50px;
  width: 70px;
  background-color: black;
  border-radius: 10%;
  color: white;
`;

const Large = styled.button`
  height: 60px;
  width: 90px;
  background-color: black;
  border-radius: 10%;
  color: white;
`;
