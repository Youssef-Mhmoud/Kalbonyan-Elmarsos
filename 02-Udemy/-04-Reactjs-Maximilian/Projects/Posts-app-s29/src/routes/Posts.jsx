import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const res = await fetch("http://localhost:8080/posts");
  const data = await res.json();
  return data.posts;
}
