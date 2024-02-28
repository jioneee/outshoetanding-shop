import styled from 'styled-components';
import { ReactNode, MouseEvent, FC } from 'react';

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const ButtonS: FC<ButtonProps> = ({ onClick, children, type }) => {
  return (
    <Small onClick={onClick} type={type}>
      {children}
    </Small>
  );
};

const ButtonM: FC<ButtonProps> = ({ onClick, children, type }) => {
  return (
    <Middle onClick={onClick} type={type}>
      {children}
    </Middle>
  );
};

const ButtonL: FC<ButtonProps> = ({ children }: { children: ReactNode }) => {
  return <Large>{children}</Large>;
};
export { ButtonS, ButtonM, ButtonL };
const Small = styled.button`
  height: 30px;
  width: 60px;
  background-color: #5b3f06;
  border-radius: 10%;
  color: white;
`;

const Middle = styled.button`
  height: 50px;
  width: 70px;
  background-color: #5b3f06;
  border-radius: 10%;
  color: white;
`;

const Large = styled.button`
  height: 60px;
  width: 90px;
  background-color: #5b3f06;
  border-radius: 10%;
  color: white;
`;
