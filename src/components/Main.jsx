import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.scss';
import logo from '../assets/main_logo.svg';

function Main() {
  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <div>
          <Link to='/' className={styles.link}>
            <img src={logo} alt='메인페이지' />
          </Link>
        </div>
        <div className={styles.account}>
          <Link to='/login' className={styles.link}>
            <span className={styles.login}>로그인</span>
          </Link>
          <Link to='/signup' className={styles.link}>
            <span className={styles.signin}>회원가입</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Main;
