import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.logo}>
            <Image alt="" src="/logo.svg" width={66} height={26} />
          </div>
          <div className={styles.navLinks}>
            <Link href={"/"}>
              <a className={styles.navLink}>Home</a>
            </Link>
            <a className={styles.navLink}>Blog</a>
            <a className={styles.navLink}>Editor&apos;s Choice</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
