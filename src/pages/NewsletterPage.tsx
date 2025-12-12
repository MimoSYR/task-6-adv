import { useSelector } from "react-redux";
import Newsletter from "../components/Newsletter/Newsletter";
import type { RootState } from "../redux/store/store";
import PostItem from "../components/PostItem/PostItem";

const NewsletterPage = () => {
  const allPosts = useSelector((state: RootState) => state.posts.allPosts);

  const post1 = allPosts[0];
  const post2 = allPosts[1];
  const post3 = allPosts[2];

  return (
    <div className="px-8 lg:px-28">
      <Newsletter />
      <section className="mt-[60px] mb-[30px]">
        <h2 className="capitalize text-2xl font-semibold mb-8">
          all blog posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div>
            <PostItem {...post1} />
          </div>
          <div>
            <PostItem {...post2} />
          </div>
          <div className="md:col-span-2 xl:col-span-1">
            <PostItem {...post3} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterPage;
