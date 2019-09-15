import React from "react";

import classes from "./Post.module.scss";

export const Post = () => {
  return (
    <div>
      <div className={classes.imageForPost}>
        <img src="#" alt="post" />
      </div>
      <header className={classes.title}>Example title for example post</header>
      <main className={classes.main}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
        corrupti consectetur ex, amet quam deleniti laboriosam porro cum sunt
        eius expedita dolor nihil. Laborum dignissimos delectus deleniti
        obcaecati provident possimus, veniam a! Quibusdam et soluta ratione
        facere, explicabo sed quia corporis quidem eius veniam debitis molestiae
        ullam necessitatibus odit est?
      </main>
      <div className={classes.buttonLink}>
        {/* Link to component with the post */}
        <button className={classes.buttonLink}>Read</button>
      </div>
    </div>
  );
};
