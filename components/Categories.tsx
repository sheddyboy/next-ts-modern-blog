import React, { useState } from "react";
import styles from "../styles/Categories.module.css";
import { CategoryType2 } from "../store/DataProvider";

type CategoryType5 = {
  blogPost: CategoryType2;
  dispatchCategory: any;
};

const Categories = ({ blogPost, dispatchCategory }: CategoryType5) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setActive(!active);
          dispatchCategory({
            type: "SetCategory",
            value: blogPost.Name,
          });
          dispatchCategory({ type: "Update" });
        }}
        key={blogPost.ItemID}
        className={`${styles.cListItem} ${active && styles.active}`}
      >
        {blogPost.Name}
      </div>
    </>
  );
};

export default Categories;
