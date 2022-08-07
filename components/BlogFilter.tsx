import React, { useContext } from "react";
import { CategoryCtx, CategoryType2 } from "../store/DataProvider";
import Categories from "./Categories";
import styles from "../styles/BlogFilter.module.css";
import { ActionReducer, StateReducer } from "./Blog";

type BlogFilterProp = {
  searchRef: React.RefObject<HTMLInputElement>;
  dispatchCategory: React.Dispatch<ActionReducer>;
  stateCategory: StateReducer;
};

const BlogFilter = ({
  dispatchCategory,
  searchRef,
  stateCategory,
}: BlogFilterProp) => {
  const categoryCtx = useContext(CategoryCtx);

  return (
    <div className={styles.blogFilter}>
      <div className={styles.filters}>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.categories}>
            <h4>Categories</h4>
            <div className={styles.cList}>
              {categoryCtx &&
                categoryCtx.map((blogPost: CategoryType2, index) => (
                  <Categories
                    key={index}
                    blogPost={blogPost}
                    dispatchCategory={dispatchCategory}
                  />
                ))}
            </div>
          </div>
          <input
            type="text"
            placeholder="Search"
            className={styles.search}
            value={stateCategory.search}
            ref={searchRef}
            onChange={(e) => {
              dispatchCategory({
                type: "Search",
                value: e.target.value,
                ref: searchRef,
              });
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default BlogFilter;
