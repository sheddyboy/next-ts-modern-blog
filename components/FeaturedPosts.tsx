import Link from "next/link";
import React from "react";
import styles from "../styles/FeaturedPosts.module.css";
import { useRandomPosts } from "../hooks/Hooks";
import { blogMouseEnter, blogMouseLeave } from "../animation";

const FeaturedPosts = () => {
  const randomFeaturedArray = useRandomPosts(3, null, "Featured");

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.postHeading}>
            <h2 className={styles.featuredPostHeading}>Featured Post</h2>
            <div className="headingUnderline"></div>
          </div>
          <div className={styles.postContent}>
            <div className={styles.gridBox}>
              {randomFeaturedArray.map((i) => {
                return (
                  <div
                    key={i.ItemID}
                    className={styles.postImage}
                    style={{
                      backgroundImage: `url(${i.Thumbnailimage})`,
                    }}
                    onMouseEnter={(e) => blogMouseEnter(e.currentTarget)}
                    onMouseLeave={(e) => blogMouseLeave(e.currentTarget)}
                  >
                    <Link href={`/blog/${i.Slug}`}>
                      <a className={styles.postOverlay}>
                        <div className={styles.tag}>
                          <p>{i.Category}</p>
                        </div>
                        <h3>{i.Name}</h3>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
