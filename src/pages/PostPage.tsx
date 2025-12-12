import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import type { AppDispatch, RootState } from "../redux/store/store";
import { addRecentPostId } from "../redux/slice/blogsSlice";
import Newsletter from "../components/Newsletter/Newsletter";
import PostItem from "../components/PostItem/PostItem";
import type { Post } from "../interfaces/interfaces";

const createdDate = "1 Jan 2023";

const PostPage = () => {
  const { id } = useParams();

  const postId = Number(id);

  const dispatch = useDispatch<AppDispatch>();

  const openedPost = useSelector((state: RootState) =>
    state.posts.allPosts.find((p) => p.id === postId)
  );
  const recentPostsIds = useSelector(
    (state: RootState) => state.posts.recentPostsIds
  );
  const allPosts = useSelector((state: RootState) => state.posts.allPosts);
  const recentPosts = useMemo(() => {
    return recentPostsIds
      .map((recentId) => allPosts.find((post) => post.id === recentId))
      .filter((post): post is Post => !!post);
  }, [recentPostsIds, allPosts]);

  useEffect(() => {
    if (postId && !isNaN(postId)) {
      dispatch(addRecentPostId(postId));
    }
  }, [postId, dispatch]);

  return (
    <div className="px-8 lg:px-28">
      <div className="flex flex-col md:flex-row pt-[30px] gap-8">
        {/* side bar */}
        <div className="lg:w-[25%]">
          <h2 className="capitalize text-2xl font-semibold mb-8">
            recent blog posts
          </h2>
          <div className="flex flex-col">
            {recentPosts.map((recentPost) => (
              <PostItem key={recentPost?.id} {...recentPost} />
            ))}
          </div>
        </div>
        <div>
          {/* Post Details */}
          <section>
            <h4 className="text-violet-700  font-semibold">
              {openedPost?.author} • {createdDate}
            </h4>
            <h1>{openedPost?.title}</h1>
            <img className="w-full" src={openedPost?.image} alt="" />
            <p>{openedPost?.paragraph}</p>
            {/* post sections */}
            <div>
              {openedPost?.sections.map((section) => (
                <div key={section.id}>
                  <h2>{section.title}</h2>
                  <img className="w-full" src={section.image} alt="" />
                  <p>{section.paragraph}</p>
                </div>
              ))}
            </div>
          </section>
          {/* newsletter */}
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
