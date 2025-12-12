import {  useSelector } from "react-redux";
import Pagination from "../components/Pagination/Pagination";
import type {  RootState } from "../redux/store/store";
import PostItem from "../components/PostItem/PostItem";

const HomePage = () => {
  const allPosts = useSelector((state: RootState) => state.posts.allPosts);
  const currentPage = useSelector(
    (state: RootState) => state.posts.pagination.currentPage
  );
  const postsPerPage = useSelector(
    (state: RootState) => state.posts.pagination.postsPerPage
  );
  const recentPostsIds = useSelector(
    (state: RootState) => state.posts.recentPostsIds
  );

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const singlePagePosts = allPosts.slice(firstPostIndex, lastPostIndex);

  const recentPost1 = allPosts.find((p) => p.id === recentPostsIds[0]);
  const recentPost2 = allPosts.find((p) => p.id === recentPostsIds[1]);
  const recentPost3 = allPosts.find((p) => p.id === recentPostsIds[2]);
  const recentPost4 = allPosts.find((p) => p.id === recentPostsIds[3]);

  return (
    <div className="flex flex-col px-8 lg:px-28">
      {/* LOGO */}
      <section className="mb-[60px] border-t border-b border-[#00000057] text-center">
        <h1 className="md:truncate text-7xl md:text-[130px] lg:text-[150px] xl:text-[200px] 2xl:text-[243px] font-bold uppercase text-clip text-center">
          the blog
        </h1>
      </section>
      {/* RECENT BLOG POST */}
      <section className="mb-[60px]">
        <h2 className="capitalize text-2xl font-semibold mb-8">
          recent blog posts
        </h2>
        <div className="grid lg:grid-rows-2 lg:grid-cols-2 gap-8">
          <div className="lg:row-span-2 lg:col-span-1 ">
            {/* grid post 1 */}
            {recentPost1 && (
              <PostItem
                id={recentPost1.id}
                image={recentPost1.image}
                author={recentPost1.author}
                title={recentPost1.title}
                paragraph={recentPost1.paragraph}
                categories={recentPost1.categories}
              />
            )}
          </div>
          <div className="lg:row-span-1 ">
            {/* grid post 2 */}
            {recentPost2 && (
              <PostItem
                id={recentPost2.id}
                image={recentPost2.image}
                author={recentPost2.author}
                title={recentPost2.title}
                paragraph={recentPost2.paragraph}
                categories={recentPost2.categories}
                style={"flex md:flex-row flex-col"}
                grid={true}
                imgStyle={" md:w-[50%] "}
              />
            )}
          </div>
          <div className="lg:row-span-1 ">
            {/* grid post 3 */}
            {recentPost3 && (
              <PostItem
                id={recentPost3.id}
                image={recentPost3.image}
                author={recentPost3.author}
                title={recentPost3.title}
                paragraph={recentPost3.paragraph}
                categories={recentPost3.categories}
                style={"flex md:flex-row flex-col"}
                grid={true}
                imgStyle={" md:w-[50%] "}
              />
            )}
          </div>
          <div className="lg:row-span-1 lg:col-span-2 ">
            {/* grid post 4 */}
            {recentPost4 && (
              <PostItem
                id={recentPost4.id}
                image={recentPost4.image}
                author={recentPost4.author}
                title={recentPost4.title}
                paragraph={recentPost4.paragraph}
                categories={recentPost4.categories}
                style={"flex lg:flex-row flex-col"}
              />
            )}
          </div>
        </div>
      </section>
      {/* ALL BLOG POSTS */}
      <section>
        <h2 className="capitalize text-2xl font-semibold mb-8">
          all blog posts
        </h2>
        <div>
          {/* posts list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {singlePagePosts.map((post) => (
              <PostItem
                key={post.id}
                id={post.id}
                image={post.image}
                author={post.author}
                title={post.title}
                paragraph={post.paragraph}
                categories={post.categories}
                pagination={true}
              />
            ))}
          </div>
          {/* pagination */}
          <Pagination />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
