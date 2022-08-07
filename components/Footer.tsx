import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link href={""}>
              <a>
                <Image alt="" src="/logo_1.svg" width={33} height={20} />
              </a>
            </Link>
            <p>Collaboration platform for modern teams.</p>
          </div>
          <div className={styles.links}>
            <div>
              <h2>Company</h2>
              <ul>
                <li>
                  <Link href={""}>
                    <a href="">About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <a href="">Careers</a>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <a href="">Support</a>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <a href="">Knowledgebase</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2>Features</h2>
              <ul>
                <li>
                  <Link href={""}>
                    <a href="">Screen Sharing</a>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <a href="">iOS & Android Apps</a>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <a href="">File Sharing</a>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <a href="">User Management</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2>Contact US</h2>
              <ul>
                <li>
                  <Link href={""}>
                    <a href="">info@teamapp.com</a>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <a href="">1-800-200-300</a>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <a href="">
                      1010 Sunset Blv.
                      <br />
                      Palo Alto, California
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          Copyright © 2020 My Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
