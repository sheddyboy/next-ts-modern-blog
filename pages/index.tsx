import React from "react";
import Blog from "../components/Blog";
import EditorsChoice from "../components/EditorsChoice";
import FeaturedPosts from "../components/FeaturedPosts";
import SlideShow from "../components/SlideShow";

const index = () => {
  return (
    <>
      <SlideShow />
      <FeaturedPosts />
      <Blog />
      <EditorsChoice />
    </>
  );
};

export default index;
