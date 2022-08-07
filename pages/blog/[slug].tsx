import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { blogMouseEnter, blogMouseLeave } from "../../animation";
import SidePannel from "../../components/SidePannel";
import { useRandomPosts } from "../../hooks/Hooks";
import { PostsCtx, CategoryCtx, AuthorsCtx } from "../../store/DataProvider";
import styles from "../../styles/BlogPage.module.css";

const BlogPage = () => {
  const router = useRouter();
  const postCtx = useContext(PostsCtx);
  const categoryCtx = useContext(CategoryCtx);
  const authorsCtx = useContext(AuthorsCtx);

  const pageName = router.query.slug;

  const pageDataPosts = postCtx.find((i) => {
    return i.Slug === pageName;
  });
  const pageDataCategory = categoryCtx.find((i) => {
    return i.Name === pageDataPosts?.Category;
  });
  const pageDataAuthor = authorsCtx.find((i) => {
    return i.Slug === pageDataPosts?.Authors;
  });

  const randomTechPosts = useRandomPosts(4, pageDataCategory?.Name);
  return (
    <>
      <section className={styles.heading}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.blogHeading}>
              <div className={styles.title}>
                <h1>{pageDataPosts?.Name}</h1>
              </div>
              <p className={styles.title_p}>{pageDataPosts?.PostSummary}</p>
              <div className={styles.post}>
                <div
                  className={styles.imageWrapper}
                  style={{
                    backgroundImage: `url(${pageDataAuthor?.Picture})`,
                  }}
                ></div>
                <p>{pageDataAuthor?.Name}</p>
                <div className={styles.horizontalDivider}></div>
                <p>{"February 1, 2022"}</p>
                <div className={styles.horizontalDivider}></div>
                <div className={styles.socials}>
                  <Link href={""}>
                    <a>
                      <Image
                        alt=""
                        width={30}
                        height={30}
                        src="/twitter_bp.svg"
                      />
                    </a>
                  </Link>
                  <Link href={""}>
                    <a>
                      <Image
                        alt=""
                        width={30}
                        height={30}
                        src="/linkedin_bp.svg"
                      />
                    </a>
                  </Link>
                  <Link href={""}>
                    <a>
                      <Image
                        alt=""
                        width={30}
                        height={30}
                        src="/facebook_bp.svg"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.image}>
        <div className="container">
          <div
            className={styles.postImage}
            style={{
              backgroundImage: `url(${pageDataPosts?.MainImage})`,
            }}
          ></div>
        </div>
      </section>
      <section className={styles.content}>
        <div className="container">
          <div className={styles.blogContent}>
            <div className={styles.mainContent}>
              <div className={styles.richText}>
                {pageDataPosts && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: pageDataPosts?.PostBody,
                    }}
                  ></div>
                )}
              </div>
              <div className={styles.authorPostDetails}>
                <div
                  className={styles.authorImage}
                  style={{
                    backgroundImage: `url(${pageDataAuthor?.Picture})`,
                  }}
                ></div>
                <div className={styles.authorContent}>
                  <h4>WRITTEN BY</h4>
                  <p>{pageDataAuthor?.Name}</p>
                  <p>
                    Enim alias pariatur. Dolorem nobis quia veritatis. Qui
                    laboriosam sunt. Soluta sunt delectus perspiciatis provident
                    ab aspernatur autem volupta
                  </p>
                </div>
              </div>
              <div className={styles.comments}></div>
            </div>
            <SidePannel />
          </div>
        </div>
      </section>
      <section id="relatedPosts" className={styles.relatedPosts}>
        <div className="container">
          <div className={styles.postsContainer}>
            <h2>Related Posts</h2>
            <div className="headingUnderline"></div>
            <div className={styles.rPostItems}>
              {randomTechPosts[0] &&
                randomTechPosts.map((i) => (
                  <div
                    key={i.ItemID}
                    className={styles.rPostItem}
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
      </section>
    </>
  );
};

export default BlogPage;
