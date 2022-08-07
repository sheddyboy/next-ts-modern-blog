import Link from "next/link";
import React from "react";
import { blogMouseEnter, blogMouseLeave } from "../../animation";
import { useRandomPosts } from "../../hooks/Hooks";
import styles from "../../styles/Crypto.module.css";

const Crypto = () => {
  const randonCryptoArray = useRandomPosts(4, "Crypto");

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.heading}>
            <h2>#Crypto</h2>
            <div className="headingUnderline"></div>
          </div>
          <div className={styles.content}>
            {randonCryptoArray[0] && (
              <div className={styles.gridBox}>
                <div
                  className={styles.gridBoxItem}
                  style={{
                    backgroundImage: `url(${randonCryptoArray[0].Thumbnailimage})`,
                  }}
                  onMouseEnter={(e) => blogMouseEnter(e.currentTarget)}
                  onMouseLeave={(e) => blogMouseLeave(e.currentTarget)}
                >
                  <Link href={`/blog/${randonCryptoArray[0].Slug}`}>
                    <a>
                      <div className={styles.tag}>
                        <p>{randonCryptoArray[0].Category}</p>
                      </div>
                      <h3>{randonCryptoArray[0].Name}</h3>
                    </a>
                  </Link>
                </div>
                <div
                  className={styles.gridBoxItem}
                  style={{
                    backgroundImage: `url(${randonCryptoArray[1].Thumbnailimage})`,
                  }}
                  onMouseEnter={(e) => blogMouseEnter(e.currentTarget)}
                  onMouseLeave={(e) => blogMouseLeave(e.currentTarget)}
                >
                  <Link href={`/blog/${randonCryptoArray[1].Slug}`}>
                    <a>
                      <div className={styles.tag}>
                        <p>{randonCryptoArray[1].Category}</p>
                      </div>
                      <h3>{randonCryptoArray[1].Name}</h3>
                    </a>
                  </Link>
                </div>
                <div
                  className={styles.gridBoxItem}
                  style={{
                    backgroundImage: `url(${randonCryptoArray[2].Thumbnailimage})`,
                  }}
                  onMouseEnter={(e) => blogMouseEnter(e.currentTarget)}
                  onMouseLeave={(e) => blogMouseLeave(e.currentTarget)}
                >
                  <Link href={`/blog/${randonCryptoArray[2].Slug}`}>
                    <a>
                      <div className={styles.tag}>
                        <p>{randonCryptoArray[2].Category}</p>
                      </div>
                      <h3>{randonCryptoArray[2].Name}</h3>
                    </a>
                  </Link>
                </div>
                <div
                  className={styles.gridBoxItem_Main}
                  style={{
                    backgroundImage: `url(${randonCryptoArray[3].Thumbnailimage})`,
                  }}
                  onMouseEnter={(e) => blogMouseEnter(e.currentTarget)}
                  onMouseLeave={(e) => blogMouseLeave(e.currentTarget)}
                >
                  <Link href={`/blog/${randonCryptoArray[3].Slug}`}>
                    <a>
                      <div className={styles.tag}>
                        <p>{randonCryptoArray[3].Category}</p>
                      </div>
                      <h3>{randonCryptoArray[3].Name}</h3>
                    </a>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crypto;
