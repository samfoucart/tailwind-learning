import { useEffect, useState } from "react";
import { Link } from "react-router";

type blogPostAuthor = {
  id: number,
  fullName: string,
  email: string,
};

type blogPostHeader = {
  id: number,
  name: string,
  author: blogPostAuthor,
  originalPostDate: string,
  lastEditDate?: string,
  contentRef: string,
};

export function BlogPosts() {
  const [blogPosts, setBlogPosts] = useState<blogPostHeader[] | string | null>(null);

  function blogPostView() {
    if (blogPosts == null) {
      return (<p>Loading Blog Posts...</p>);
    }

    if (typeof blogPosts === 'string') {
      return (<p>{blogPosts}</p>)
    }

    return blogPosts.map((post) => {
      return (
      <>
        <Link className="border-b dark:border-slate-800" to={`${post.contentRef}`}>
          <div className="p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 flex flex-col">
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-200">{post.name}</h2>
            <p>Author: {post.author.fullName}</p>
            <p>Email: {post.author.email}</p>
            <p>Posted on: {post.originalPostDate}</p>
            {post.lastEditDate == null ? <></> : <p>Edited on: {post.lastEditDate}</p>}
          </div>
        </Link>
      </>
      );
    });
  }

  useEffect(() => {
    let ignore = false;

    async function fetchBlogPosts() {
      try {
        const response = await fetch(
          `content/blog-posts/blog-posts.json`
        );

        if (!ignore) {
          const blogPosts: blogPostHeader[] = await response.json();
          setBlogPosts(blogPosts);
        }
      } catch (error) {
        console.error(error);
        setBlogPosts('Could not retrieve blog posts. Please refresh the page.');
      }
    }

    fetchBlogPosts();

    return () => {
      ignore = true;
    };
  }, [])

  return (
    <>
      <div className="m-auto lg:max-w-6xl py-6 px-2 flex flex-col">
        {blogPostView()}
      </div>
    </>
  );
}
