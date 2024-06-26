import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo2 from '../assets/logo2.svg';
import styles from './Sign.module.scss';
import eyeoff from '../assets/eyeoff.svg';
import eyeon from '../assets/eyeon.svg';
import Modal from './Modal';

function Sign() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nickname, setNickname] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    const checkFormValidity = () => {
      if (
        email &&
        !emailError &&
        nickname &&
        !nicknameError &&
        password &&
        !passwordError &&
        confirmPassword &&
        !confirmPasswordError &&
        termsAccepted
      ) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    };

    checkFormValidity();
  }, [
    email,
    emailError,
    nickname,
    nicknameError,
    password,
    passwordError,
    confirmPassword,
    confirmPasswordError,
    termsAccepted,
  ]);

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

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleNicknameBlur = () => {
    if (nickname.length > 10) {
      setNicknameError('10자 이하로 작성해 주세요.');
    } else {
      setNicknameError('');
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

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleConfirmPasswordBlur = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError('비밀번호가 일치하지 않습니다.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // test 추후 API 연동
    if (email === 'test@aa.com') {
      setModalMessage('이미 사용 중인 이메일입니다.');
      setShowModal(true);
    } else if (isFormValid) {
      setModalMessage('가입이 완료되었습니다!');
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    navigate('/login');
  };

  return (
    <div className={styles.signup}>
      <div>
        <Link to='/'>
          <img src={logo2} alt='로고' className={styles.signupLogo} />
        </Link>
        <p className={styles.signupTitle}>첫 방문을 환영합니다!</p>
      </div>
      <div className={styles.signupBox}>
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <div className={styles.signupputs}>
            <div className={styles.signupputBox}>
              <label className={styles.signupEmail}>이메일</label>
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
            <div className={styles.signupputBox}>
              <label className={styles.signupNickname}>닉네임</label>
              <input
                id='nickname'
                className={`${styles.nicknameInput} ${
                  nicknameError && styles.error
                }`}
                placeholder='닉네임을 입력해 주세요'
                value={nickname}
                onChange={handleNicknameChange}
                onBlur={handleNicknameBlur}
              />
              {nicknameError && (
                <div className={styles.errorNickname}>{nicknameError}</div>
              )}
            </div>
            <div
              className={`${styles.signupputBox} ${styles.passwordInputContainer}`}
            >
              <label className={styles.signupPassword}>비밀번호</label>
              <input
                className={`${styles.passwordInput} ${
                  passwordError && styles.error
                }`}
                type={showPassword ? 'text' : 'password'}
                placeholder='8자 이상 입력해 주세요'
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
            </div>
            {passwordError && (
              <div className={styles.errorPassword}>{passwordError}</div>
            )}
            <div
              className={`${styles.signupputBox} ${styles.passwordInputContainer}`}
            >
              <label className={styles.signupPassword}>비밀번호 확인</label>
              <input
                className={`${styles.passwordInput} ${
                  confirmPasswordError && styles.error
                }`}
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder='비밀번호를 한번 더 입력해 주세요'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                onBlur={handleConfirmPasswordBlur}
              />
              <button
                className={styles.eyeoffBtn}
                type='button'
                onClick={toggleConfirmPasswordVisibility}
              >
                <img
                  src={showConfirmPassword ? eyeon : eyeoff}
                  alt={showConfirmPassword ? 'eye-on' : 'eye-off'}
                  className={styles.eyeIcon}
                />
              </button>
            </div>
            {confirmPasswordError && (
              <div className={styles.errorPassword}>{confirmPasswordError}</div>
            )}
            <div className={styles.termsContainer}>
              <input
                type='checkbox'
                id='terms'
                checked={termsAccepted}
                onChange={handleTermsChange}
              />
              <label htmlFor='terms' className={styles.termsLabel}>
                이용약관에 동의합니다
              </label>
            </div>
          </div>
          <button
            className={`${styles.buttonSignup} ${
              isFormValid ? styles.enabled : ''
            }`}
            type='submit'
            disabled={!isFormValid}
          >
            가입하기
          </button>
        </form>
        <div className={styles.signupQ}>
          <p className={styles.signupQuestion}>
            이미 가입하셨나요?
            <Link to='/login' className={styles.signin}>
              로그인하기
            </Link>
          </p>
        </div>
      </div>
      {showModal && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  );
}

export default Sign;
