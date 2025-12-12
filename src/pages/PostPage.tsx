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
  const recentPosts: Post[] = useMemo(() => {
    return (
      recentPostsIds
        // to remove current post id
        .filter((recentId) => recentId !== postId)
        // to find recent posts using recent posts ids
        .map((recentId) => allPosts.find((post) => post.id === recentId))
        // to remove any undefined result
        .filter((post): post is Post => !!post)
    );
  }, [recentPostsIds, allPosts, postId]);

  useEffect(() => {
    if (postId && !isNaN(postId)) {
      dispatch(addRecentPostId(postId));
    }
  }, [postId, dispatch]);

  return (
    <div className="px-8 lg:px-28 mb-[30px]">
      <div className="flex flex-col-reverse md:flex-row pt-[30px] gap-8 ">
        {/* side bar */}
        <div className="md:w-[60%] lg:w-[35%]">
          <h2 className="capitalize text-2xl font-semibold mb-8">
            recent blog posts
          </h2>
          <div className="flex flex-col gap-8">
            {recentPosts.map((recentPost) => (
              <PostItem key={recentPost?.id} {...recentPost} />
            ))}
          </div>
        </div>
        <div className="w-full mb-[30px]">
          {/* Post Details */}
          <section className="mb-[60px]">
            <h4 className="text-violet-700  font-semibold">
              {openedPost?.author} • {createdDate}
            </h4>
            <h1 className="text-[36px] font-bold my-8">{openedPost?.title}</h1>
            <img className="w-full mb-8" src={openedPost?.image} alt="" />
            <p className="text-[24px] text-slate-600">
              {openedPost?.paragraph}
            </p>
            {/* post sections */}
            <div className="my-4 flex flex-col gap-3">
              {openedPost?.sections.map((section) => (
                <div key={section.id}>
                  <h2 className="text-[16px] font-bold leading-6 text-slate-600 text-center">
                    {section.title}
                  </h2>
                  <img className="w-full my-2" src={section.image} alt="" />
                  <p className="text-[16px] text-slate-500">
                    {section.paragraph}
                  </p>
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
