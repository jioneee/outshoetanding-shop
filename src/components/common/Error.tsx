import styled from 'styled-components';

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorText>요청한 페이지를 찾을 수 없습니다.</ErrorText>
    </ErrorContainer>
  );
};

export default Error;

const ErrorContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ErrorText = styled.div`
  font-size: large;
`;
