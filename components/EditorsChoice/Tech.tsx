import Link from "next/link";
import React from "react";
import { blogMouseEnter, blogMouseLeave } from "../../animation";
import { useRandomPosts } from "../../hooks/Hooks";
import styles from "../../styles/Tech.module.css";

const Tech = () => {
  const randomTechPosts = useRandomPosts(3, "Tech");

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.heading}>
            <h2>#Tech</h2>
            <div className="headingUnderline"></div>
          </div>
          <div className={styles.content}>
            {randomTechPosts[0] && (
              <div className={styles.gridBox}>
                <div
                  className={styles.gridBoxItem_Main}
                  style={{
                    backgroundImage: `url(${randomTechPosts[0].Thumbnailimage})`,
                  }}
                  onMouseEnter={(e) => blogMouseEnter(e.currentTarget)}
                  onMouseLeave={(e) => blogMouseLeave(e.currentTarget)}
                >
                  <Link href={`/blog/${randomTechPosts[0].Slug}`}>
                    <a>
                      <div className={styles.tag}>
                        <p>{randomTechPosts[0].Category}</p>
                      </div>
                      <h3>{randomTechPosts[0].Name}</h3>
                    </a>
                  </Link>
                </div>
                <div
                  className={styles.gridBoxItem}
                  style={{
                    backgroundImage: `url(${randomTechPosts[1].Thumbnailimage})`,
                  }}
                  onMouseEnter={(e) => blogMouseEnter(e.currentTarget)}
                  onMouseLeave={(e) => blogMouseLeave(e.currentTarget)}
                >
                  <Link href={`/blog/${randomTechPosts[1].Slug}`}>
                    <a>
                      <div className={styles.tag}>
                        <p>{randomTechPosts[1].Category}</p>
                      </div>
                      <h3>{randomTechPosts[1].Name}</h3>
                    </a>
                  </Link>
                </div>
                <div
                  className={styles.gridBoxItem}
                  style={{
                    backgroundImage: `url(${randomTechPosts[2].Thumbnailimage})`,
                  }}
                  onMouseEnter={(e) => blogMouseEnter(e.currentTarget)}
                  onMouseLeave={(e) => blogMouseLeave(e.currentTarget)}
                >
                  <Link href={`/blog/${randomTechPosts[2].Slug}`}>
                    <a>
                      <div className={styles.tag}>
                        <p>{randomTechPosts[2].Category}</p>
                      </div>
                      <h3>{randomTechPosts[2].Name}</h3>
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

export default Tech;
