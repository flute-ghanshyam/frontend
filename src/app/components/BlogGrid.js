"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
const BlogGrid = (is_featured = false) => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.fluteconnect.com/api/v1/cms/blogs?page=${page}&size=16&sorting=ASC&user_id=184`
      )
      .then((res) => {
        setBlogs(res.data.data);

        // Correctly get total pages from pagination.total
        const total = res.data.pagination.total;
        setTotalPages(Math.ceil(total / 16));
      })
      .catch((err) => console.error(err));
  }, [page]);

  const renderPagination = () => {
    const pageNumbers = [];
    const maxButtons = 5;

    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, start + maxButtons - 1);

    if (end - start < maxButtons - 1) {
      start = Math.max(1, end - maxButtons + 1);
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
        <div className="flex items-center gap-1 flex-wrap">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className={`px-3 py-1 rounded border ${
              page === 1
                ? "bg-gray-300 text-gray-600"
                : "bg-white hover:bg-blue-100"
            }`}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .slice(Math.max(0, page - 3), Math.min(totalPages, page + 2))
            .map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                className={`px-3 py-1 rounded border ${
                  page === num
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-blue-100"
                }`}
              >
                {num}
              </button>
            ))}

          {page + 2 < totalPages && (
            <>
              <span className="px-2">...</span>
              <button
                onClick={() => setPage(totalPages)}
                className="px-3 py-1 rounded border bg-white hover:bg-blue-100"
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className={`px-3 py-1 rounded border ${
              page === totalPages
                ? "bg-gray-300 text-gray-600"
                : "bg-white hover:bg-blue-100"
            }`}
          >
            Next
          </button>
        </div>

        {/* Go To Page */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const pageNum = parseInt(e.target.pageInput.value);
            if (pageNum > 0 && pageNum <= totalPages) {
              setPage(pageNum);
            }
          }}
          className="flex items-center gap-2 mt-4 sm:mt-0"
        >
          <label htmlFor="pageInput" className="text-white">
            Page #
          </label>
          <input
            id="pageInput"
            name="pageInput"
            type="number"
            min={1}
            max={totalPages}
            className="w-20 px-2 py-1 rounded border text-black"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Go
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="card-design rounded-lg overflow-hidden shadow-md"
          >
            <a href={`/magazine/${blog.slug.current}`}>
              <img
                src={blog.webFeaturedImage.url}
                alt={blog.webFeaturedImage.alt}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-red mb-1">
                  {blog.title}
                </h2>
                <BlogSubtitle subTitle={blog.subTitle} />
                <div className="text-sm text-gray-500 mt-2">
                  {new Date(blog.publish_date).toDateString()}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {renderPagination()}

      {/* Go to Page */}
      {}
    </div>
  );
};

export default BlogGrid;
function BlogSubtitle({ subTitle }) {
  return (
    <h3
      className="text-sm text-blue"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(subTitle) }}
    />
  );
}
