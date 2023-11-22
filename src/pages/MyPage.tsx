import styled from 'styled-components';
import Error from '../components/common/Error';

const MyPage = () => {
  return (
    <div>
      <MyPageContainer>
        <Error />
      </MyPageContainer>
    </div>
  );
};

export default MyPage;

const MyPageContainer = styled.div``;
