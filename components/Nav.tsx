import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  const router = useRouter();
  const check = router.asPath.includes("/blog");
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
            {!check && (
              <Link href={"#blogScetion"}>
                <a className={styles.navLink}>Blog</a>
              </Link>
            )}
            {!check && (
              <Link href={"#editorsChoiceSection"}>
                <a className={styles.navLink}>Editor&apos;s Choice</a>
              </Link>
            )}
            {check && (
              <Link href={"#relatedPosts"}>
                <a className={styles.navLink}>Related Posts</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
