import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { PostsCtx } from "../store/DataProvider";
import styles from "../styles/SlideShow.module.css";
import { gsap } from "gsap";

const SlideShow = () => {
  const [sildeCounter, setSlideCounter] = useState(0);
  const postCtx = useContext(PostsCtx);

  const item = postCtx[sildeCounter];

  const boxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(boxRef.current, { opacity: "0" }, { opacity: "1" });
    const timer = setInterval(() => {
      setSlideCounter((sildeCounter) => (sildeCounter + 1) % postCtx.length);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [postCtx, sildeCounter]);

  return (
    <section>
      {/* <div
        ref={boxRef}
        style={{
          backgroundColor: "hotpink",
          height: "150px",
          width: "150px",
        }}
      >
        Hello
      </div> */}
      <div className={styles.slider}>
        <div
          ref={boxRef}
          className={styles.slide}
          style={{ backgroundImage: `url(${item.MainImage})` }}
        >
          <div className="container">
            <div className={styles.content}>
              <p>{`By ${item.Authors}`}</p>
              <h1>{item.Name}</h1>
              <p>{item.PostSummary}</p>
              <Link href={`/blog/${item.Slug}`}>
                <a className={styles.btn}>
                  <p>Read More</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {sildeCounter !== 0 && (
          <div
            onClick={() => {
              setSlideCounter(
                (sildeCounter) => (sildeCounter - 1) % postCtx.length
              );
            }}
            className={styles.lArror}
          >
            <div>&#8656;</div>
          </div>
        )}
        <div
          onClick={() => {
            setSlideCounter(
              (sildeCounter) => (sildeCounter + 1) % postCtx.length
            );
          }}
          className={styles.rArror}
        >
          <div>&#8658;</div>
        </div>
      </div>
    </section>
  );
};

export default SlideShow;
