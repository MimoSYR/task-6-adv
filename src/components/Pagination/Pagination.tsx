import React from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store/store";
import { clickPage, nextPage, prevPage } from "../../redux/slice/blogsSlice";

const Pagination = () => {
  const dispatch = useDispatch<AppDispatch>();

  const totalPosts = useSelector(
    (state: RootState) => state.posts.allPosts.length
  );
  const currentPage = useSelector(
    (state: RootState) => state.posts.pagination.currentPage
  );
  const postsPerPage = useSelector(
    (state: RootState) => state.posts.pagination.postsPerPage
  );

  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const handlePrev = () => {
    dispatch(prevPage());
  };
  const handleNext = () => {
    dispatch(nextPage());
  };

  return (
    <div className="relative flex items-center justify-center my-12">
      {/* posts per page */}
      <div className="flex gap-1">
        {pages.map((page: number) => (
          <span
            onClick={() => dispatch(clickPage(page))}
            className={`py-2.5 px-4 cursor-pointer rounded-lg hover:text-violet-600 hover:shadow-md  ${
              currentPage === page
                ? "bg-violet-50 text-violet-600"
                : "text-slate-600 "
            }`}>
            {page}
          </span>
        ))}
      </div>
      {/* pagination controls */}
      <button
        disabled={currentPage === 1 ? true : false}
        onClick={() => handlePrev()}
        className="disabled:cursor-not-allowed disabled:text-gray-400 absolute left-0 top-0 bottom-0 flex cursor-pointer gap-2 items-center hover:text-violet-600">
        <GrLinkPrevious />
        <p>Previous</p>
      </button>
      <button
        disabled={currentPage === pages.length ? true : false}
        onClick={() => handleNext()}
        className="disabled:cursor-not-allowed disabled:text-gray-400 absolute right-0 top-0 bottom-0 flex cursor-pointer gap-2 items-center hover:text-violet-600">
        <p>Next</p>
        <GrLinkNext />
      </button>
    </div>
  );
};

// PostItem & Pagination have been added, and pagination has been handled with redux toolkit
export default Pagination;
