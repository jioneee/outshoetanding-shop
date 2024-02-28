import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../context/authContext';
import { auth } from '../firebase';
import { useNavigate } from 'react-router';
import { ButtonS } from '../components/common/button';
const Login = () => {
  const navigate = useNavigate();
  const userInfo = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [isCreate, setIsCreate] = useState(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPwd(e.target.value);
  };

  const handleClickCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsCreate((pre) => !pre);
  };

  const handleSubit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isCreate) {
      createUserWithEmailAndPassword(auth, email, pwd)
        .then(() => {
          alert('회원가입 성공');
        })
        .catch((e) => {
          alert(e);
        });
    } else {
      signInWithEmailAndPassword(auth, email, pwd)
        .then(() => {
          alert('로그인 성공');
          navigate('/');
        })
        .catch((e) => {
          alert(e);
        });
    }
  };

  console.log('userInfo', userInfo);
  return (
    <div>
      <LoginContainer>
        <LoginBox>
          <form onSubmit={handleSubit}>
            <LoginHeader>LogIn</LoginHeader>
            <LoginInput type='email' name='email' onChange={handleEmail} value={email} />
            <br />
            <LoginInput type='password' name='pwd' onChange={handlePwd} value={pwd} />
            <br />
            <ButtonS type='submit'> {isCreate ? '회원가입' : '로그인'}</ButtonS>
            <ButtonS onClick={handleClickCreate}>{isCreate ? '취소' : '회원가입'}</ButtonS>
          </form>
        </LoginBox>
      </LoginContainer>
    </div>
  );
};

export default Login;

const LoginContainer = styled.div`
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const LoginBox = styled.div`
  box-sizing: border-box;
  padding: 20px;
  width: 700px;
  border: 3px solid #5b3f06;
`;

const LoginHeader = styled.header``;

const LoginInput = styled.input``;
