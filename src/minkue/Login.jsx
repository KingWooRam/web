import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
const User = {
  email: 'user',
  pw: 'user',
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  // 이메일 입력 핸들러
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailValid(true);
  };

  // 비밀번호 입력 핸들러
  const handlePw = (e) => {
    setPw(e.target.value);
    setPwValid(true);
  
};

// 로그인 버튼 클릭 핸들러
const onClickConfirmButton = () => {
  if (email === User.email && pw === User.pw) {
    alert('로그인 성공!');
  } else {
    alert('등록되지 않은 회원이거나 입력한 값이 일치하지 않습니다.');
  }
};

// 이메일 및 비밀번호 유효성에 따라 버튼 활성화
useEffect(() => {
  if (emailValid && pwValid) {
    setNotAllow(false);
  } else {
    setNotAllow(true);
  }
  }, [emailValid, pwValid]);

return (
  <div className="page">
    <div className="titleWrap">
      <h1>로그인</h1>
    </div>
    <div className="contentWrap">
      <div className="inputTitle">아이디</div>
      <div className="inputWrap">
        <input
          type="text"
          className="input"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div className="errorMessageWrap">
        {!emailValid && email.length > 0 && (
          <div>올바른 이메일을 입력해주세요.</div>
        )}
      </div>
      <div className="inputTitle" style={{ marginTop: '26px' }}>
        비밀번호
      </div>
      <div className="inputWrap">
        <input
          type="password"
          className="input"
          value={pw}
          onChange={handlePw}
        />
      </div>
      <div className="errorMessageWrap">
        {!pwValid && pw.length > 0 && (
          <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
        )}
      </div>
      <div className="buttonWrap">
        <Link to="/page2" onClick={onClickConfirmButton} disabled={notAllow}>로그인</Link>
      </div>
      <hr />

    </div>
  </div>
);
}
