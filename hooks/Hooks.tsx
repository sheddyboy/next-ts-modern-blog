import { useContext } from "react";
import { PostsCtx, PostsType } from "../store/DataProvider";

// type category = "Tech" | "Learn" | "Crypto" | "UI/UX" | "Travel";
type featuredOrEditors = "Featured" | "EditorsChoice";

export const useRandomPosts = (
  numOfPosts: number,
  category?: string | null,
  // category?: category | null,
  featuredOrEditors?: featuredOrEditors
) => {
  const postCtx = useContext(PostsCtx);
  let categoryPostsArray: PostsType;

  if (category) {
    categoryPostsArray = postCtx.filter((i) => i.Category === category);
  } else if (featuredOrEditors) {
    if (featuredOrEditors === "Featured") {
      categoryPostsArray = postCtx.filter((i) => i.Featured === true);
    } else {
      categoryPostsArray = postCtx.filter((i) => i.EditorsChoice === true);
    }
  } else {
    categoryPostsArray = [];
  }
  const shuffled = [...categoryPostsArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numOfPosts);
};
