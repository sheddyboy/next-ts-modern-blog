import Link from "next/link";
import React from "react";
import styles from "../styles/MainPannel.module.css";
import { PostsType } from "../store/DataProvider";
import { StateReducer, ActionReducer } from "./Blog";
import { blogMouseEnter, blogMouseLeave } from "../animation";
import { useRouter } from "next/router";

type MainPannelType = {
  blogArray: PostsType | undefined;
  dispatchCategory: React.Dispatch<ActionReducer>;
  stateCategory: StateReducer;
};

const MainPannel = ({
  blogArray,
  dispatchCategory,
  stateCategory,
}: MainPannelType) => {
  const { currentPage, numOfPages } = stateCategory;

  const router = useRouter();

  return (
    <div className={styles.mainPannel}>
      <div className={styles.mPannelBlog}>
        {blogArray &&
          blogArray.map((i, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${i.Thumbnailimage})` }}
              className={styles.blogItem}
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
          ))}
      </div>
      <div className={styles.mPannelNav}>
        {currentPage !== 1 && (
          <div
            className={styles.prev}
            onClick={() => {
              router.push("#blogScetion");
              dispatchCategory({ type: "Previous" });
            }}
          >
            &#8656;
          </div>
        )}
        {currentPage !== numOfPages && (
          <div
            className={styles.next}
            onClick={() => {
              router.push("#blogScetion");
              dispatchCategory({ type: "Next" });
            }}
          >
            &#8658;
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPannel;
