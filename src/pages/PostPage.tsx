import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import type { AppDispatch } from "../redux/store/store";
import { addRecentPostId } from "../redux/slice/blogsSlice";

const PostPage = () => {
  const { id } = useParams();

  const postId = Number(id);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (postId && !isNaN(postId)) {
      dispatch(addRecentPostId(postId));
    }
  }, [postId, dispatch]);

  return <div>PostPage {id}</div>;
};

export default PostPage;
