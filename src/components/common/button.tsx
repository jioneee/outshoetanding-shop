import styled from 'styled-components';

const ButtonS = () => {
  return <Small>Small</Small>;
};
export { ButtonS };

const ButtonM = () => {
  return <Middle>Middle</Middle>;
};
export { ButtonM };

const ButtonL = () => {
  return <Large>Large</Large>;
};
export { ButtonL };
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
