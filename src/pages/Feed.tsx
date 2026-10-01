import { useEffect, useState } from "react";
import postsService from "../services/postsService";
import type { PostI } from "../interfaces/postI";
import Post from "../components/Post";
import CreatePost from "../components/CreatePost";
import commentsServices from "../services/commentsService";

export default function Feed() {
  const [posts, setPosts] = useState<PostI[]>([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  async function getAllPosts() {
    const response = await postsService.getAllPosts();
    setPosts(response.data.posts);
  }

  async function deletePost(postId: string) {
    const response = await postsService.deletePost(postId);
    getAllPosts();
  }

  async function createComment(postId: string, formData: FormData) {
    const response = await commentsServices.createComment(postId, formData);
    getAllPosts();
    return response;
  }

  async function deleteComment(postId: string, commentId: string) {
    const response = await commentsServices.deleteComment(postId, commentId);
    getAllPosts();
    return response;
  }

  async function updateComment(
    postId: string,
    commentId: string,
    formData: FormData,
  ) {
    const response = await commentsServices.updateComment(
      postId,
      commentId,
      formData,
    );

    await getAllPosts();
    return response;
  }

  return (
    <div className="max-w-3xl my-10 mx-auto">
      <div className="grid gap-4">
        <CreatePost getAllPosts={getAllPosts} />
        {posts.map((post) => (
          <Post
            post={post}
            deletePost={deletePost}
            createComment={createComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
          />
        ))}
      </div>
    </div>
  );
}
