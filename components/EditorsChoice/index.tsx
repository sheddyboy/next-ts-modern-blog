import React from "react";
import Crypto from "./Crypto";
import Tech from "./Tech";
import styles from "../../styles/EditorsChoice.module.css";
import Link from "next/link";
import { useRandomPosts } from "../../hooks/Hooks";
import { blogMouseEnter, blogMouseLeave } from "../../animation";

const EditorsChoice = () => {
  const randomEditorsChoiceArray = useRandomPosts(4, null, "EditorsChoice");

  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.heading}>
              <h2>Editor&apos;s Chioce</h2>
              <div className="headingUnderline"></div>
            </div>
            <div className={styles.content}>
              <div className={styles.gridBox}>
                {randomEditorsChoiceArray.map((i) => (
                  <div
                    key={i.ItemID}
                    className={styles.gridBoxItem}
                    style={{
                      backgroundImage: `url(${i.Thumbnailimage})`,
                    }}
                    onMouseEnter={(e) => blogMouseEnter(e.currentTarget)}
                    onMouseLeave={(e) => blogMouseLeave(e.currentTarget)}
                  >
                    <Link href={`/blog/${i.Slug}`}>
                      <a>
                        <div className={styles.tag}>
                          <p>{i.Category}</p>
                        </div>
                        <h3>{i.Name}</h3>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Tech />
      <Crypto />
    </>
  );
};

export default EditorsChoice;
