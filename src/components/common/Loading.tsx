import styled from 'styled-components';

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingImg src='/img/spinner.gif' alt='loading'></LoadingImg>
    </LoadingContainer>
  );
};

setTimeout(Loading, 5000);

export default Loading;

const LoadingContainer = styled.div`
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

const LoadingImg = styled.img`
  font: 1rem 'Noto Sans KR';
  text-align: center;
  border: 1.5px solid $gray-4;
  border-top: 1.5px solid $gray-10;
  border-radius: 50%;

  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
