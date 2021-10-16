import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "KKKKKKKKK",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUvOd8Q-VihyupbJCdgjIR2FxnjGtAgMu3g&usqp=CAU",
    img: "https://picsum.photos/200/300",
    caption: "Subscribe and click the like button",
  },
  {
    id: "123",
    username: "KKKKKKKKK",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUvOd8Q-VihyupbJCdgjIR2FxnjGtAgMu3g&usqp=CAU",
    img: "https://picsum.photos/200/300",
    caption: "Subscribe and click the like button",
  },
  {
    id: "123",
    username: "KKKKKKKKK",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUvOd8Q-VihyupbJCdgjIR2FxnjGtAgMu3g&usqp=CAU",
    img: "https://picsum.photos/200/300",
    caption: "Subscribe and click the like button",
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
