import styles from './Header.module.scss';
import logo from '@/assets/logo.webp';

// 网站头部一般会用于多处，这里抽离出来以备复用
function Header() {
  return <>
    <h1 className={styles['title']}>
      <a href="https://www.wiley.com/en-cn"><img src={logo} alt="Wiley" title="Wiley" /></a>
    </h1>
  </>;
}

export default Header;
