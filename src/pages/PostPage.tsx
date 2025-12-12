import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import type { AppDispatch } from "../redux/store/store";
import { addRecentPostId } from "../redux/slice/blogsSlice";
import Newsletter from "../components/Newsletter/Newsletter";

const PostPage = () => {
  const { id } = useParams();

  const postId = Number(id);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (postId && !isNaN(postId)) {
      dispatch(addRecentPostId(postId));
    }
  }, [postId, dispatch]);

  return (
    <div className="px-8 lg:px-28">
      <div className="flex flex-col md:flex-row">
        {/* side bar */}
        <div>
          <h2 className="capitalize text-2xl font-semibold mb-8">
            recent blog posts
          </h2>
        </div>
        <div>
          {/* Post Details */}
          <section></section>
          {/* newsletter */}
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
