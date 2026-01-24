import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const TestSwiper = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "50px auto" }}>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        autoHeight={true} // adjust height automatically per slide
        style={{ width: "100%" }}
      >
        <SwiperSlide>
          <div style={{ background: "#add8e6", padding: "30px", borderRadius: "8px", width: "80%", margin: "0 auto", textAlign: "center" }}>
            Slide 1
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ background: "#90ee90", padding: "30px", borderRadius: "8px", width: "80%", margin: "0 auto", textAlign: "center" }}>
            Slide 2
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ background: "#ff7f7f", padding: "30px", borderRadius: "8px", width: "80%", margin: "0 auto", textAlign: "center" }}>
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestSwiper;
