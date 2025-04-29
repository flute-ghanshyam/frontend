"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

const BannerSlider = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch("https://api.fluteconnect.com/api/v1/cms/web-banners")
      .then((res) => res.json())
      .then((data) => {
        setBanners(data.data || []);
      })
      .catch((err) => console.error("Failed to fetch banners:", err));
  }, []);

  return (
    <div className="w-full max-w-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner._id}>
            <img
              src={banner.web_view_image.asset.url}
              alt={banner.web_view_image.alt || banner.title}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
