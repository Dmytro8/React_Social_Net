import React from "react";

import classes from "./Post.module.scss";
import postImage from "../../../static/images/post-img.jpg";
import userImg from "../../../static/images/profile-img.jpg";

export const Post = () => {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const day = date.getDate();
  let month = months[date.getMonth()];
  if (month.length > 2) {
    month = month.slice(0, 3);
  }
  const year = date.getFullYear();

  const numberOfLikes = 75;

  return (
    <div className={classes.wrapper}>
      <div className={classes.details}>
        <div className={classes.userImg}>
          <img src={userImg} alt="user" />
        </div>
        <div className={classes.info}>
          <div>
            <span>Name Surname</span> added new post:
          </div>
          <div className={classes.createdDate}>{`${day} ${month} ${year}`}</div>
        </div>
        <div className={classes.changes}>
          <a href="#details">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
      <div className={classes.imageForPost}>
        <img src={postImage} alt="post" />
      </div>
      <main className={classes.main}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
        corrupti consectetur ex, amet quam deleniti laboriosam porro cum sunt
        eius expedita dolor nihil. Laborum dignissimos delectus deleniti
        obcaecati provident possimus, veniam a! Quibusdam et soluta ratione
        facere, explicabo sed quia corporis quidem eius veniam debitis molestiae
        ullam necessitatibus odit est?
      </main>
      <footer className={classes.community}>
        <div className={classes.comments}>
          <a href="#comment">
            <i className="far fa-comment-alt"></i>
          </a>
        </div>
        <div className={classes.share}>
          <a href="#share">
            <i className="fas fa-share"></i>
          </a>
        </div>
        <div className={classes.likes}>
          <a href="#like">
            <i className="far fa-heart"> {numberOfLikes}</i>
          </a>
        </div>
      </footer>
    </div>
  );
};
