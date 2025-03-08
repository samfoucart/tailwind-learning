import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router";
import { NavLayout } from "./Components/Layout/NavLayout.tsx";
import { Content } from "./Components/Content.tsx";
import { BlogPosts } from "./Pages/BlogPosts/BlogPosts.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Content />} />
          <Route path="blog-posts" element={<BlogPosts />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
