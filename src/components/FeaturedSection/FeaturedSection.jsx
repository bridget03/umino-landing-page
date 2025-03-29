function FeaturedSection() {
  return (
    <div className="text-center container max-w-[1410px] mx-auto px-4 md:py-20 py-14 bg-[#fcfcfc]">
      <h2 className="text-[#111111] md:text-[45px] text-[36px] font-normal ">
        Featured Collections
      </h2>
      <p className="text-[#555555] md:text-[16px] py-2">
        Elevate your style with our chic featured collection—where fashion meets
        flair effortlessly.
      </p>

      <div className="grid grid-rows-3 grid-cols-2 md:grid-rows-2 md:grid-cols-3 gap-4 mt-6">
        <div className="row-span-2  md:row-span-2 md:order-1">
          <div className="relative">
            <img
              src="/clothing.png"
              alt="Clothing"
              className="w-full rounded-lg"
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full w-max shadow">
              Clothing
            </div>
          </div>
        </div>

        <div className="col-span-1 order-2 md:order-2">
          <div className="relative">
            <img
              src="/sunglasses.png"
              alt="Bags"
              className="w-full rounded-lg"
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full w-max shadow">
              Sunglasses
            </div>
          </div>
        </div>

        <div className=" md:col-span-1 row-span-2 md:row-span-2 order-1 md:order-4">
          <div className="relative">
            <img
              src="/sneaker.png"
              alt="Sneaker"
              className="w-full rounded-lg"
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full w-max shadow">
              Sneaker
            </div>
          </div>
        </div>

        <div className=" col-span-1 md:order-4">
          <div className="relative">
            <img src="/bag.png" alt="Bags" className="w-full rounded-lg" />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full w-max shadow">
              Bags
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSection;
