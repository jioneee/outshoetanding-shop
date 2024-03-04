import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../context/authContext';
import { auth } from '../firebase';
import { useNavigate } from 'react-router';
import Logo from '../components/common/Logo';

const Login = () => {
  const navigate = useNavigate();
  const userInfo = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [isCreate, setIsCreate] = useState(false);
  const [isInputClicked, setIsInputClicked] = useState(false);

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
            <LoginHead>
              <Logo />
            </LoginHead>
            <LoginInput
              type='email'
              name='email'
              onChange={handleEmail}
              value={email}
              onFocus={() => setIsInputClicked(true)}
              onBlur={() => setIsInputClicked(false)}
              placeholder={isInputClicked === true ? '' : 'ID'}
            />
            <br />
            <LoginInput
              type='password'
              name='pwd'
              onChange={handlePwd}
              value={pwd}
              onFocus={() => setIsInputClicked(true)}
              onBlur={() => setIsInputClicked(false)}
              placeholder={isInputClicked === true ? '' : 'password'}
            />
            <br />
            <LoginButtonBox>
              <LoginButton type='submit'> {isCreate ? '회원가입' : '로그인'}</LoginButton>
              <br />
              <LoginButton onClick={handleClickCreate}>{isCreate ? '취소' : '회원가입'}</LoginButton>
            </LoginButtonBox>
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
  @media screen and (max-width: 768px) {
    width: 600px;
    margin: 50px;
  }
`;

const LoginBox = styled.div`
  box-sizing: border-box;
  padding: 0px;
  width: 700px;
  border: 3px solid #5b3f06;
  @media screen and (max-width: 768px) {
    width: 600px;
  }
`;
const LoginHead = styled.div`
  background-color: #5b3f06;
`;

const LoginButtonBox = styled.div`
  gap: 10px;
  align-items: center;
`;
const LoginInput = styled.input`
  margin: 20px;
  width: 250px;
  height: 30px;
  font-size: 20px;
`;
const LoginButton = styled.button`
  margin: 20px;
  width: 250px;
  height: 30px;
  background-color: #5b3f06;
  color: white;
  font-size: 15px;
`;
