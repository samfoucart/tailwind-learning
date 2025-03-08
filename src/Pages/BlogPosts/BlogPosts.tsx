import { useState } from "react";

export function BlogPosts() {
  const [blogPost, setBlogPost] = useState<string | null>(null);
  async function fetchPost() {
    const response = await fetch(
      `blog-posts/crafting-interpreters-part-1-review.md`
    );

    if (response.ok) {
      const responseText = await response.text();
      setBlogPost(responseText);
    }
  }

  return (
    <>
      <p>Hello</p>
      <button onClick={fetchPost}>hello</button>
      {blogPost == null ? <p>no post</p> : <p>{blogPost}</p>}
    </>
  );
}
