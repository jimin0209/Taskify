import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../assets/logo2.svg';
import styles from './Log.module.scss';
import eyeoff from '../assets/eyeoff.svg';

function Log() {
  return (
    <div className={styles.login}>
      <div>
        <Link to='/'>
          <img src={logo2} alt='로고' className={styles.loginLogo} />
        </Link>
        <p className={styles.loginTitle}>오늘도 만나서 반가워요!</p>
      </div>
      <div className={styles.loginBox}>
        <form className={styles.loginForm}>
          <div className={styles.loginputs}>
            <div className={styles.loginputBox}>
              <label className={styles.loginEmail}>이메일</label>
              <input
                id='email'
                className={styles.emailInput}
                placeholder='이메일을 입력해주세요'
              />
              <div className={styles.errorEmail}></div>
            </div>
            <div className={styles.loginputBox}>
              <label className={styles.loginPassword}>비밀번호</label>
              <input
                className={styles.passwordInput}
                type='password'
                placeholder='비밀번호를 입력해주세요'
              />
              <button className={styles.eyeoffBtn}>
                <img src={eyeoff} alt='eye' className={styles.eyeoff} />
              </button>
              <div className={styles.errorPassword}></div>
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
    </div>
  );
}

export default Log;
