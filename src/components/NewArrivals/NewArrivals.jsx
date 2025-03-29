import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const products = [
  {
    id: 1,
    name: "Square Textured Striped",
    image: "/arrival1.png",
    price: 150,
    oldPrice: null,
    rating: 4.5,
    colors: ["#272D43", "#A93A3A", "#E1D6C7"],
    discount: null,
    status: "Sold Out",
  },
  {
    id: 2,
    name: "Square Textured Striped",
    image: "/arrival2.png",
    price: 150,
    oldPrice: 490,
    rating: 5,
    colors: ["#EEEEEE", "#D6D6D6", "#C2CADF"],
    discount: null,
    status: null,
  },
  {
    id: 3,
    name: "Square Textured Striped",
    image: "/arrival3.png",
    price: 150,
    oldPrice: null,
    rating: 4.5,
    colors: ["#08382C", "#492919", "#DFD3C2"],
    discount: 10,
    status: "Pre-Order",
  },
  {
    id: 4,
    name: "Square Textured Striped",
    image: "/arrival4.png",
    price: 150,
    oldPrice: null,
    rating: 5,
    colors: ["#08383C", "#492918", "#DFD3C3"],
    discount: null,
    status: null,
  },
];

function NewArrivals() {
  const [selectedColor, setSelectedColor] = useState(null);
  const swiperRef = useRef(null);

  return (
    <div className="relative container max-w-[1410px] mx-auto px-4 text-center bg-[#fcfcfc]">
      <h2 className="text-[#111111] md:text-[45px] text-[36px] font-normal">
        New Arrivals
      </h2>
      <p className="text-[#555555] md:text-[16px] text-[15px] pt-2 pb-10">
        Here's some of our new arrivals products people are in love with.
      </p>

      <div className="absolute left-41 flex gap-3">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="md:hidden flex -translate-y-1/2 bg-white text-black p-4 rounded-full shadow-md hover:bg-[#111111] hover:text-white cursor-pointer z-10"
        >
          <MdArrowBackIosNew size={12} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="md:hidden flex -translate-y-1/2 bg-white text-black p-4 rounded-full shadow-md hover:bg-[#111111] hover:text-white cursor-pointer z-10"
        >
          <MdArrowForwardIos size={12} />
        </button>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
        }}
        className="mt-6"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative p-4 rounded-lg">
              {product.discount !== null && (
                <div className="absolute top-8 left-8 bg-[#D73F0F] text-white text-[13px] px-2.5 py-1 rounded-[30px]">
                  -{product.discount}%
                </div>
              )}
              {product.status === "Sold Out" ? (
                <div className="absolute top-8 left-8 bg-[#757575] text-white text-[13px] px-2.5 py-1 rounded-[30px]">
                  {product.status}
                </div>
              ) : product.status === "Pre-Order" ? (
                <div className="absolute top-16 left-8 bg-[#177983] text-white text-[13px] px-2.5 py-1 rounded-[30px]">
                  {product.status}
                </div>
              ) : null}

              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-lg"
              />

              <div className="mt-4 text-left">
                <h3 className="font-normal text-[16px]">{product.name}</h3>

                <div className="text-[#111111]">
                  {"★".repeat(product.rating)}
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-[#111111]">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <div className="flex space-x-2 mt-2">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className="w-7 h-7 rounded-full flex items-center justify-center cursor-pointer"
                      style={{
                        border:
                          selectedColor === color
                            ? "2px solid black"
                            : `2px solid #dddddd`,
                        padding: "2px",
                      }}
                    >
                      <span
                        className="w-5 h-5 rounded-full"
                        style={{ backgroundColor: color }}
                      ></span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NewArrivals;
