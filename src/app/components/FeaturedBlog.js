"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const BlogSlider = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.fluteconnect.com/api/v1/cms/home-blogs")
      .then((res) => setBlogs(res.data.data || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="px-4 py-6">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation
        modules={[Navigation]}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog._id}>
            <div className="rounded-lg overflow-hidden shadow-md bg-white">
              <a href="#">
                <img
                  src={blog.webFeaturedImage?.url}
                  alt={blog.webFeaturedImage?.alt || "Blog Image"}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-1">
                    {blog.title}
                  </h2>
                  <BlogSubtitle subTitle={blog.subTitle} />
                  <p className="text-sm text-gray-500 mt-2">
                    {new Date(blog.publish_date).toDateString()}
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

function BlogSubtitle({ subTitle }) {
  return (
    <h3
      className="text-sm text-gray-600"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(subTitle) }}
    />
  );
}

export default BlogSlider;
