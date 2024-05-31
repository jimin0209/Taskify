import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.scss';
import logo from '../assets/main_logo.svg';
import img1 from '../assets/main_img1.svg';
import img2 from '../assets/main_img2.svg';
import img3 from '../assets/main_img3.svg';
import img4 from '../assets/main_img4.svg';
import img5 from '../assets/main_img5.svg';
import img6 from '../assets/main_img6.svg';
import icon1 from '../assets/main_icon1.svg';
import icon2 from '../assets/main_icon2.svg';
import icon3 from '../assets/main_icon3.svg';

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
      <section className={styles.sec1}>
        <img src={img1} alt='img1' className={styles.img1} />
        <div>
          <span className={styles.title}>새로운 일정 관리</span>
          <span className={styles.taskify}>Taskify</span>
        </div>
        <div>
          <p className={styles.sub}>서비스의 메인 설명 들어갑니다.</p>
        </div>
        <Link to='/login' className={styles.toLogin}>
          로그인하기
        </Link>
      </section>
      <section className={styles.sec2}>
        <div className={styles.second}>
          <div className={styles.point1}>Point 1</div>
          <div>
            <p className={styles.secondTitle}>일의 우선순위를</p>
            <span className={styles.secondTitle}>관리하세요</span>
          </div>
        </div>
        <div>
          <img src={img2} alt='메인페이지' className={styles.img2} />
        </div>
      </section>
      <section className={styles.sec3}>
        <div className={styles.third}>
          <div>
            <img src={img3} alt='메인페이지' className={styles.img3} />
          </div>
          <div className={styles.sec3Sub}>
            <div className={styles.point2}>Point 2</div>
            <div>
              <p className={styles.thirdTitle}>해야 할 일을</p>
              <span className={styles.thirdTitle}>등록하세요</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sec4}>
        <p className={styles.fourthTitle}>생산성을 높이는 다양한 설정 ⚡</p>
        <div className={styles.sec4Con}>
          <div className={styles.sec4Sub1}>
            <div className={styles.imgBox1}>
              <img src={img4} alt='메인페이지' className={styles.img4} />
            </div>
            <div className={styles.imgCon1}>
              <p className={styles.imgConTitle}>대시보드 설정</p>
              <p className={styles.imgConSub}>
                대시보드 사진과 이름을 변경할 수 있어요.
              </p>
            </div>
          </div>

          <div className={styles.sec4Sub2}>
            <div className={styles.imgBox2}>
              <img src={img5} alt='메인페이지' className={styles.img5} />
            </div>
            <div className={styles.imgCon2}>
              <p className={styles.imgConTitle}>초대</p>
              <p className={styles.imgConSub}>
                새로운 팀원을 초대할 수 있어요.
              </p>
            </div>
          </div>

          <div className={styles.sec4Sub3}>
            <div className={styles.imgBox3}>
              <img src={img6} alt='메인페이지' className={styles.img6} />
            </div>
            <div className={styles.imgCon3}>
              <p className={styles.imgConTitle}>구성원</p>
              <p className={styles.imgConSub}>
                구성원을 초대하고 내보낼 수 있어요.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerBox}>
          <span className={styles.footerCodeit}>©codeit - 2023</span>
          <div className={styles.footerLinks}>
            <span className={styles.footerLink}>Privacy Policy</span>
            <span className={styles.footerLink}>FAQ</span>
          </div>
          <div className={styles.footerSns}>
            <img src={icon1} alt='로고' />
            <img src={icon2} alt='로고' />
            <img src={icon3} alt='로고' />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Main;
