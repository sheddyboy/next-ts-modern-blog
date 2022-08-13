import Link from "next/link";
import React, { useContext, useMemo } from "react";
import styles from "../styles/SidePannel.module.css";
import { PostsCtx, PostsType } from "../store/DataProvider";
import Image from "next/image";

const SidePannel = () => {
  const getMultipleRandom = (arr: PostsType, num: number) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const postCtx = useContext(PostsCtx);

  const fourRandomPosts = useMemo(
    () => getMultipleRandom(postCtx, 4),
    [postCtx]
  );
  return (
    <div className={styles.sidePannel}>
      <form className={styles.form}>
        <h5 className={styles.h5}>
          Subscribe! and receive Exclusively News and Updates!
        </h5>
        <input className={styles.nameInput} type="text" placeholder="Name" />
        <input className={styles.emailInput} type="email" placeholder="Email" />
        <input className={styles.phoneInput} type="tel" placeholder="Phone" />
        <button className={styles.submitBtn} type="submit">
          Submit
        </button>
      </form>
      <div className={styles.aboutUs}>
        <h6>About Us</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At habitant
          nulla egestas nulla nec ut consect
        </p>
        <div className={styles.social}>
          <Link href="http://www.facebook.com">
            <a>
              <Image alt="" src="/facebook.svg" width={30} height={30} />
            </a>
          </Link>
          <Link href="http://www.facebook.com">
            <a>
              <Image alt="" src="/twitter.svg" width={30} height={30} />
            </a>
          </Link>
          <Link href="http://www.facebook.com">
            <a>
              <Image alt="" src="/instagram.svg" width={30} height={30} />
            </a>
          </Link>
          <Link href="http://www.facebook.com">
            <a>
              <Image alt="" src="/youtube.svg" width={30} height={30} />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.mostPopular}>
        <h2>Most Popular</h2>
        <div className="headingUnderline"></div>
        <div className={styles.mostPopularContent}>
          {fourRandomPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.Slug}`}>
              <a>
                <h3>{post.Name}</h3>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidePannel;
