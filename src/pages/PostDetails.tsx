import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { PostI } from "../interfaces/postI";
import postsService from "../services/postsService";
import Post from "../components/Post";
import commentsServices from "../services/commentsService";
import type { CommentI } from "../interfaces/commentI";

export default function PostDetails() {
  const { postId = "" } = useParams();
  const [post, setPost] = useState<PostI>();
  const [comments, setComments] = useState<CommentI[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  async function getPostDetails() {
    const response = await postsService.getPostDetails(postId);
    setPost(response.data.post);
    getPostComments();
    setIsLoading(false);
  }

  async function getPostComments() {
    const response = await commentsServices.getPostComments(postId);
    setComments(response.data.comments);
  }

  useEffect(() => {
    getPostDetails();
  }, []);

  async function deletePost(postId: string) {
    const response = await postsService.deletePost(postId);
    getPostDetails();
  }

  async function createComment(postId: string, formData: FormData) {
    const response = await commentsServices.createComment(postId, formData);
    getPostDetails();
    return response;
  }

  async function deleteComment(postId: string, commentId: string) {
    const response = await commentsServices.deleteComment(postId, commentId);
    getPostDetails();
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

    await getPostDetails();
    return response;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="max-w-3xl my-10 mx-auto">
      <Post
        post={post}
        deletePost={deletePost}
        createComment={createComment}
        deleteComment={deleteComment}
        updateComment={updateComment}
        comments={comments}
      />
    </div>
  );
}
