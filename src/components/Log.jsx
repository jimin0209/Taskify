import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo2 from '../assets/logo2.svg';
import styles from './Log.module.scss';
import eyeoff from '../assets/eyeoff.svg';
import eyeon from '../assets/eyeon.svg';
import Modal from './Modal';

function Log() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailBlur = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError('이메일 형식으로 작성해 주세요.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordBlur = () => {
    if (password.length < 8) {
      setPasswordError('8자 이상 작성해 주세요.');
    } else {
      setPasswordError('');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // test 추후 API 연동
    if (password === 'password123') {
      navigate('/mydashboard');
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.login}>
      <div>
        <Link to='/'>
          <img src={logo2} alt='로고' className={styles.loginLogo} />
        </Link>
        <p className={styles.loginTitle}>오늘도 만나서 반가워요!</p>
      </div>
      <div className={styles.loginBox}>
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <div className={styles.loginputs}>
            <div className={styles.loginputBox}>
              <label className={styles.loginEmail}>이메일</label>
              <input
                id='email'
                className={`${styles.emailInput} ${emailError && styles.error}`}
                placeholder='이메일을 입력해 주세요'
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
              />
              {emailError && (
                <div className={styles.errorEmail}>{emailError}</div>
              )}
            </div>
            <div
              className={`${styles.loginputBox} ${styles.passwordInputContainer}`}
            >
              <label className={styles.loginPassword}>비밀번호</label>

              <input
                className={`${styles.passwordInput} ${
                  passwordError && styles.error
                }`}
                type={showPassword ? 'text' : 'password'}
                placeholder='비밀번호를 입력해 주세요'
                value={password}
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
              />
              <button
                className={styles.eyeoffBtn}
                type='button'
                onClick={togglePasswordVisibility}
              >
                <img
                  src={showPassword ? eyeon : eyeoff}
                  alt={showPassword ? 'eye-on' : 'eye-off'}
                  className={styles.eyeIcon}
                />
              </button>
              {passwordError && (
                <div className={styles.errorPassword}>{passwordError}</div>
              )}
            </div>
          </div>
          <button className={styles.buttonLogin} type='submit'>
            로그인
          </button>
        </form>
        <div className={styles.loginQ}>
          <p className={styles.loginQuestion}>
            회원이 아니신가요?
            <Link to='/signup' className={styles.signup}>
              회원 가입하기
            </Link>
          </p>
        </div>
      </div>
      {showModal && (
        <Modal message='비밀번호가 일치하지 않습니다.' onClose={closeModal} />
      )}
    </div>
  );
}

export default Log;
