import React, { createContext, useEffect, useState } from "react";

export type PostsType = {
  Name: string;
  Slug: string;
  CollectionID: string;
  ItemID: string;
  CreatedOn: string;
  UpdatedOn: string;
  PublishedOn: string;
  PostBody: string;
  PostSummary: string;
  MainImage: string;
  Thumbnailimage: string;
  Featured: boolean;
  Color: string;
  EditorsChoice: boolean;
  Authors: string;
  Category: string;
}[];
export type PostsType2 = {
  Name: string;
  Slug: string;
  CollectionID: string;
  ItemID: string;
  CreatedOn: string;
  UpdatedOn: string;
  PublishedOn: string;
  PostBody: string;
  PostSummary: string;
  MainImage: string;
  Thumbnailimage: string;
  Featured: boolean;
  Color: string;
  EditorsChoice: boolean;
  Authors: string;
  Category: string;
};

const defaultPosts = [
  {
    Name: "",
    Slug: "",
    CollectionID: "",
    ItemID: "",
    CreatedOn: "",
    UpdatedOn: "",
    PublishedOn: "",
    PostBody: "",
    PostSummary: "",
    MainImage: "",
    Thumbnailimage: "",
    Featured: false,
    Color: "",
    EditorsChoice: false,
    Authors: "",
    Category: "",
  },
];

export type CategoryType = {
  Name: string;
  Slug: string;
  CollectionID: string;
  ItemID: string;
  CreatedOn: string;
  UpdatedOn: string;
  PublishedOn: string;
  Description: string;
  Icon: string;
  Color: string;
}[];

export interface CategoryType2 {
  Name: string;
  Slug: string;
  CollectionID: string;
  ItemID: string;
  CreatedOn: string;
  UpdatedOn: string;
  PublishedOn: string;
  Description: string;
  Icon: string;
  Color: string;
}

const defaultCategory: CategoryType = [
  {
    Name: "",
    Slug: "",
    CollectionID: "",
    ItemID: "",
    CreatedOn: "",
    UpdatedOn: "",
    PublishedOn: "",
    Description: "",
    Icon: "",
    Color: "",
  },
];

export type AuthorsType = {
  Name: string;
  Slug: string;
  CollectionID: string;
  ItemID: string;
  CreatedOn: string;
  UpdatedOn: string;
  PublishedOn: string;
  Bio: string;
  BioSummary: string;
  Picture: string;
  Email: string;
  TwitterProfileLink: string;
  FacebookProfileLink: string;
}[];

const defaultAuthors = [
  {
    Name: "",
    Slug: "",
    CollectionID: "",
    ItemID: "",
    CreatedOn: "",
    UpdatedOn: "",
    PublishedOn: "",
    Bio: "",
    BioSummary: "",
    Picture: "",
    Email: "",
    TwitterProfileLink: "",
    FacebookProfileLink: "",
  },
];

export const PostsCtx = createContext<PostsType>(defaultPosts);
export const CategoryCtx = createContext<CategoryType>(defaultCategory);
export const AuthorsCtx = createContext<AuthorsType>(defaultAuthors);

// type DataContex = "posts" | "authors" | "category";

// export const useData = (data: DataContex) => {
//   switch (data) {
//     case "posts":
//       return useContext<PostsType>(PostsCtx);
//     case "authors":
//       return useContext<CategoryType>(CategoryCtx);
//     case "category":
//       return useContext<AuthorsType>(AuthorsCtx);
//   }
// };

interface Prop {
  children: React.ReactNode;
}

const DataProvider = ({ children }: Prop) => {
  const [posts, setPosts] = useState(defaultPosts);
  const [authors, setAuthors] = useState(defaultAuthors);
  const [category, setCategory] = useState(defaultCategory);

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
    fetch("http://localhost:4000/authors")
      .then((res) => res.json())
      .then((data) => setAuthors(data));
    fetch("http://localhost:4000/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));

    // fetch("https://sheddy-blog-default-rtdb.firebaseio.com/posts.json")
    //   .then((res) => res.json())
    //   .then((data) => setPosts(data))
    //   .catch((err) => console.log(err));

    // fetch("https://sheddy-blog-default-rtdb.firebaseio.com/authors.json")
    //   .then((res) => res.json())
    //   .then((data) => setAuthors(data))
    //   .catch((err) => console.log(err));
    // fetch("https://sheddy-blog-default-rtdb.firebaseio.com/category.json")
    //   .then((res) => res.json())
    //   .then((data) => setCategory(data))
    //   .catch((err) => console.log(err));
  }, []);
  return (
    <PostsCtx.Provider value={posts}>
      <AuthorsCtx.Provider value={authors}>
        <CategoryCtx.Provider value={category}>{children}</CategoryCtx.Provider>
      </AuthorsCtx.Provider>
    </PostsCtx.Provider>
  );
};

export default DataProvider;
