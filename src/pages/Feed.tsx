import { useEffect, useState } from "react";
import postsService from "../services/postsService";
import type { PostI } from "../interfaces/postI";
import Post from "../components/Post";
import CreatePost from "../components/CreatePost";

export default function Feed() {
  const [posts, setPosts] = useState<PostI[]>([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  async function getAllPosts() {
    const { data } = await postsService.getAllPosts();
    setPosts(data.posts);
  }

  async function deletePost(postId: string) {
    const response = await postsService.deletePost(postId);
    getAllPosts()
  }

  return (
    <div className="max-w-3xl my-10 mx-auto">
      <div className="grid gap-4">
        <CreatePost getAllPosts={getAllPosts} />
        {posts.map((post) => (
          <Post post={post} deletePost={deletePost} />
        ))}
      </div>
    </div>
  );
}
