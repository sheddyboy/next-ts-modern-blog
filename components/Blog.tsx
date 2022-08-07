import React, { useContext, useEffect, useReducer, useRef } from "react";
import { PostsCtx } from "../store/DataProvider";
import styles from "../styles/Blog.module.css";
import { PostsType } from "../store/DataProvider";
import SidePannel from "./SidePannel";
import BlogFilter from "./BlogFilter";
import MainPannel from "./MainPannel";

export type StateReducer = {
  dummyArray: PostsType | undefined;
  searchArray: PostsType | undefined;
  paginationArray: PostsType | undefined;
  categoryArray: string[];
  fPosts: PostsType | undefined;
  search: string | undefined;
  currentPage: number;
  postPerPage: number;
  numOfPages: number;
};

export type ActionReducer = {
  type: string;
  payload?: PostsType;
  value?: string;
  ref?: any;
};

const reducer = (state: StateReducer, action: ActionReducer) => {
  let fArray: PostsType | undefined = [];
  let yArray: string[] = [];
  let zArray: string[] = [];
  let index: number;
  let nOP: number;
  let val: string | undefined;
  switch (action.type) {
    case "StateUpdate":
      const indexOfLastPost = state.currentPage * state.postPerPage;
      const indexOfFirstPost = indexOfLastPost - state.postPerPage;
      const currentPosts = action.payload?.slice(
        indexOfFirstPost,
        indexOfLastPost
      );
      fArray = action.payload;
      if (fArray) {
        nOP = Math.ceil(fArray?.length / state.postPerPage);
      } else {
        nOP = 0;
      }
      return {
        ...state,
        fPosts: fArray,
        dummyArray: currentPosts,
        searchArray: currentPosts,
        paginationArray: currentPosts,
        numOfPages: nOP,
      };
    case "Update":
      if (state.dummyArray && state.paginationArray) {
        fArray = state.dummyArray.filter((i) => {
          return state.categoryArray.includes(i.Category);
        });
        if (fArray.length === 0) {
          fArray = [...state.paginationArray];
        }
      }
      return { ...state, dummyArray: fArray, searchArray: fArray };
    case "Search":
      val = action.value;
      let inputSearchString = action.ref.current.value.toLowerCase().trim();

      if (state.searchArray) {
        fArray = state.searchArray.filter((i) => {
          let blogItem = i.Name.toLowerCase();
          let categoryItem = i.Category.toLowerCase();
          return (
            blogItem.includes(inputSearchString) ||
            categoryItem.includes(inputSearchString)
          );
        });
      }

      return { ...state, dummyArray: [...fArray], search: val };
    case "SetCategory":
      if (action.value) {
        let arrayCheck = state.categoryArray.includes(action.value);

        if (!arrayCheck) {
          yArray = [...state.categoryArray, action.value];
        } else {
          index = state.categoryArray.indexOf(action.value);
          zArray = [...state.categoryArray];
          zArray.splice(index, 1);
          yArray = [...zArray];
        }
      }
      return {
        ...state,
        categoryArray: yArray,
      };
    case "Next":
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case "Previous":
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    default:
      return state;
  }
};

const Blog = () => {
  const postsCtx = useContext(PostsCtx);
  const searchRef = useRef<HTMLInputElement>(null);

  const [stateCategory, dispatchCategory] = useReducer(reducer, {
    dummyArray: [],
    categoryArray: [],
    paginationArray: [],
    fPosts: postsCtx,
    searchArray: [],
    search: "",
    currentPage: 1,
    postPerPage: 8,
    numOfPages: 0,
  });

  useEffect(() => {
    dispatchCategory({ type: "StateUpdate", payload: postsCtx });
  }, [postsCtx, stateCategory.currentPage]);

  return (
    <section className={styles.section} id="blogScetion">
      <div className="container">
        <div className={styles.grid}>
          <BlogFilter
            dispatchCategory={dispatchCategory}
            searchRef={searchRef}
            stateCategory={stateCategory}
          />
          <div className={styles.blogPosts}>
            <MainPannel
              stateCategory={stateCategory}
              blogArray={stateCategory.dummyArray}
              dispatchCategory={dispatchCategory}
            />
            <SidePannel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
