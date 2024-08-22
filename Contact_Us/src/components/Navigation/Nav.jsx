import styles from "./Nav.module.css";
export default function Nav() {
  return (
    <nav className={`${styles.nav} container`}>
      <div className="nav-logo">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  )
}
