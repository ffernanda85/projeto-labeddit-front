import { CardViewComments } from "../../components/cards/comment/cardComments/CardViewComments";
import { CardCreateComment } from "../../components/cards/comment/cardCreateComment/CardCreateComment";
import { CardViewPosts } from "../../components/cards/post/cardPosts/CardViewPosts";
import { Header } from "../../components/header/Header";
import { useNavigate, useParams } from "react-router-dom";
import * as s from "./styleCommentPage";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function CommentPage() {
  const [comments, setComments] = useState([]);
  // const [post, setPost]= useState([])
  const context = useContext(GlobalContext);
  const params = useParams();

  const postId = params.postId;

  const showComments = async () => {
    const comments = await context.getComments(postId);
    setComments(comments.data);
  };

  useEffect(() => {
    // loadPost()
    showComments();
  }, [context.reload, context]);
  
  /* const loadPost = async () => {
    const result = await context.getPostById(postId)
    setPost(result.data);
  } */

  // console.log(post);
  /* const getPosts = async () => {
    const test = await context.getPosts();
    setPost(test.data);
   
  }
  const findPost = post?.find(postData => postData.id === postId)
  console.log(post);
  console.log(findPost); */

  return (
    <s.Container>
      <Header />
      <CardViewPosts post={context.postSelected} />
      <CardCreateComment postId={ postId } />
      {comments.map((comment) => (
        <CardViewComments key={comment.id} comment={comment} />
      ))}
    </s.Container>
  );
}
