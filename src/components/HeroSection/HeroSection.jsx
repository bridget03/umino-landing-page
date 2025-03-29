import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import "./styles.css";
function HeroSection() {
  const slides = ["/banner.png", "/banner2.png", "/banner3.png"];
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {slides.map((image) => (
          <SwiperSlide>
            <div
              className="md:h-[810px] h-[550px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="md:w-1/2 w-full ml-10 flex flex-col md:items-center items-baseline justify-center h-full">
                <h1
                  className="text-[#111111] md:text-[80px] text-[40px] font-normal md:text-center text-left "
                  style={{ fontFamily: "Instrument Sans" }}
                >
                  Stylish <br /> Top Trending
                </h1>
                <p className="md:text-[16px] text-[12px]">
                  So soft you don't want to take it off.
                </p>
                <button className="uppercase md:w-[200px] w-[180px] md:h-[55px] h-[50px] text-[12px] mt-10 p-2.5 rounded-[30px] cursor-pointer bg-[#111111] text-white transition duration-300 hover:bg-gray-500 hover:shadow-lg">
                  Explore now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>

      <button className="hidden md:inline swiper-button-prev absolute top-1/2 left-5 z-1000 text-black bg-white p-5 rounded-full hover:bg-[#111111] hover:text-white cursor-pointer">
        <MdArrowBackIosNew size={14} />
      </button>
      <button className="hidden md:inline swiper-button-next absolute top-1/2 right-5 z-10 text-black bg-white p-5 rounded-full hover:bg-[#111111] hover:text-white cursor-pointer">
        <MdArrowForwardIos size={14} />
      </button>
    </div>
  );
}

export default HeroSection;
