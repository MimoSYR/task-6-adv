import { useSelector } from "react-redux";
import Pagination from "../components/Pagination/Pagination";
import type { RootState } from "../redux/store/store";
import PostItem from "../components/PostItem/PostItem";

const HomePage = () => {
  const allPosts = useSelector((state: RootState) => state.posts.allPosts);
  const currentPage = useSelector(
    (state: RootState) => state.posts.pagination.currentPage
  );
  const postsPerPage = useSelector(
    (state: RootState) => state.posts.pagination.postsPerPage
  );

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const singlePagePosts = allPosts.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="flex flex-col">
      {/* LOGO */}
      <div className="border-t border-b border-[#00000057] text-center">
        <h1 className="text-7xl md:text-[160.8px]  lg:text-[243px] font-bold uppercase text-clip text-center">
          the blog
        </h1>
      </div>
      {/* RECENT BLOG POST */}
      <div>
        <h2 className="capitalize">recent blog posts</h2>
      </div>
      {/* ALL BLOG POSTS */}
      <div>
        <h2 className="capitalize">all blog posts</h2>
        <div>
          {/* posts list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {singlePagePosts.map((post) => (
              <PostItem
                key={post.id}
                image={post.image}
                author={post.author}
                title={post.title}
                paragraph={post.paragraph}
                categories={post.categories}
              />
            ))}
          </div>
          {/* pagination */}
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
