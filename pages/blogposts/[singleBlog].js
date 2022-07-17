import React from "react";
import { useRouter } from "next/router";

const SingleBlog = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>This is single blog post</h1>
    </div>
  );
};

export default SingleBlog;
