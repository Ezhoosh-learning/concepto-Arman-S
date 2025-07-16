const Categories = () => {
  return (
    <>
      <div className="container mx-auto px-4 xl:px-8 2xl:px-12 gap-6 flex flex-col justify-center items-center mt-14 md:mt-[100px] xl:mt-[150px]">
        <div className="w-full flex flex-row-reverse justify-between items-center">
          <button className="gap-2 w-6 h-6 flex justify-center items-center xl:hidden">
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.70504 1.91L6.29504 0.5L0.295044 6.5L6.29504 12.5L7.70504 11.09L3.12504 6.5L7.70504 1.91Z"
                fill="#737993"
              />
            </svg>
          </button>
          <div className=" w-full px-2 gap-2 flex justify-center">
            <svg
              className="sm:hidden"
              width="184"
              height="1"
              viewBox="0 0 184 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 0.5H183" stroke="#CBCED7" stroke-linecap="round" />
            </svg>
            <svg
              className="hidden xl:block"
              width="1090"
              height="2"
              viewBox="0 0 1090 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0.763916H1074"
                stroke="#CBCED7"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="px-[1px] gap-2">
            <p className="font-iransansx text-naturalgray-7 whitespace-nowrap lg:text-lg xl:text-2xl">
              دسته بندی ها
            </p>
          </div>
        </div>
        <div className="w-full gap-6 flex flex-col ">
          <div className="w-full flex flex-row-reverse justify-between">
            <div className="gap-2 flex flex-col justify-between items-center">
              <img
                className="size-[56px] lg:size-[60px] xl:size-[70px] 2xl:size-[80px] rounded-[100px] object-cover object-center"
                src="assets/images/category1.jpg"
                alt="category"
              />
              <p className="font-iransansxregular text-categorytext text-[12px] md:text-[14px] lg:text-[16px]">
                هوافضا
              </p>
            </div>
            <div className="gap-2 flex flex-col justify-between items-center">
              <img
                className="size-[56px] lg:size-[60px] xl:size-[70px] 2xl:size-[80px] rounded-[100px] object-cover object-center"
                src="assets/images/category2.png"
                alt="category"
              />
              <p className="font-iransansxregular text-categorytext text-[12px] md:text-[14px] lg:text-[16px]">
                هوش مصنوعی
              </p>
            </div>
            <div className="gap-2 flex flex-col justify-between items-center">
              <img
                className="size-[56px] lg:size-[60px] xl:size-[70px] 2xl:size-[80px] rounded-[100px] object-cover object-center"
                src="src/assets/images/category3.png"
                alt="category"
              />
              <p className="font-iransansxregular text-categorytext text-[12px] md:text-[14px] lg:text-[16px]">
                رسانه‌ها
              </p>
            </div>
            <div className="gap-2 flex flex-col justify-between items-center">
              <img
                className="size-[56px] lg:size-[60px] xl:size-[70px] 2xl:size-[80px] rounded-[100px] object-cover object-center"
                src="src/assets/images/category4.png"
                alt="category"
              />
              <p className="font-iransansxregular text-categorytext text-[12px] md:text-[14px] lg:text-[16px]">
                گرافیک
              </p>
            </div>
            <div className="gap-2 flex-col justify-between items-center hidden md:flex">
              <img
                className="size-[56px] lg:size-[60px] xl:size-[70px] 2xl:size-[80px] rounded-[100px] object-cover object-center"
                src="src/assets/images/category9.png"
                alt="category"
              />
              <p className="font-iransansxregular text-categorytext text-[12px] md:text-[14px] lg:text-[16px]">
                حسابداری
              </p>
            </div>
            <div className="gap-2 flex-col justify-between items-center hidden lg:flex">
              <img
                className="size-[56px] lg:size-[60px] xl:size-[70px] 2xl:size-[80px] rounded-[100px] object-cover object-center"
                src="src/assets/images/category10.png"
                alt="category"
              />
              <p className="font-iransansxregular text-categorytext text-[12px] md:text-[14px] lg:text-[16px]">
                حمل و نقل
              </p>
            </div>
            <div className="gap-2 flex-col justify-between items-center hidden xl:flex">
              <img
                className="size-[56px] lg:size-[60px] xl:size-[70px] 2xl:size-[80px] rounded-[100px] object-cover object-center"
                src="src/assets/images/category11.png"
                alt="category"
              />
              <p className="font-iransansxregular text-categorytext text-[12px] md:text-[14px] lg:text-[16px]">
                علمی
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row-reverse justify-between">
            <div className="gap-2 flex flex-col justify-between items-center">
              <img
                className="size-[56px] lg:size-[60px] xl:size-[70px] 2xl:size-[80px] rounded-[100px] object-cover object-center"
                src="src/assets/images/category5.png"
                alt="category"
              />
              <p className="font-iransansxregular text-categorytext text-[12px] md:text-[14px] lg:text-[16px]">
                ارز دیجیتال
              </p>
            </div>
            <div className="gap-2 flex flex-col justify-between items-center">
              <img
                className="size-[56px] lg:size-[60px] xl:size-[70px] 2xl:size-[80px] rounded-[100px] object-cover object-center"
                src="src/assets/images/category6.jpg"
                alt="category"
              />
              <p className="font-iransansxregular text-categorytext text-[12px] md:text-[14px] lg:text-[16px]">
                برنامه نویسی
              </p>
            </div>
            <div className="gap-2 flex flex-col justify-between items-center">
              <img
                className="size-[56px] lg:size-[60px] xl:size-[70px] 2xl:size-[80px] rounded-[100px] object-cover object-left"
                src="src/assets/images/category7.png"
                alt="category"
              />
              <p className="font-iransansxregular text-categorytext text-[12px] md:text-[14px] lg:text-[16px]">
                فیلم و سینما
              </p>
            </div>
            <div className="gap-2 flex flex-col justify-between items-center">
              <img
                className="size-[56px] lg:size-[60px] xl:size-[70px] 2xl:size-[80px] rounded-[100px] object-cover object-center"
                src="src/assets/images/category8.png"
                alt="category"
              />
              <p className="font-iransansxregular text-categorytext text-[12px] md:text-[14px] lg:text-[16px]">
                بیوتکنولوژی
              </p>
            </div>
            <div className="gap-2 flex-col justify-between items-center hidden md:flex">
              <img
                className="size-[56px] lg:size-[60px] xl:size-[70px] 2xl:size-[80px] rounded-[100px] object-cover object-center"
                src="src/assets/images/category12.png"
                alt="category"
              />
              <p className="font-iransansxregular text-categorytext text-[12px] md:text-[14px] lg:text-[16px]">
                پزشکی
              </p>
            </div>
            <div className="gap-2 flex-col justify-between items-center hidden lg:flex">
              <img
                className="size-[56px] lg:size-[60px] xl:size-[70px] 2xl:size-[80px] rounded-[100px] object-cover object-center"
                src="src/assets/images/category13.jpg"
                alt="category"
              />
              <p className="font-iransansxregular text-categorytext text-[12px] md:text-[14px] lg:text-[16px]">
                تجارت الکترونیکی
              </p>
            </div>
            <div className="gap-2 flex-col justify-between items-center hidden xl:flex">
              <img
                className="size-[56px] lg:size-[60px] xl:size-[70px] 2xl:size-[80px] rounded-[100px] object-cover object-center"
                src="src/assets/images/category14.png"
                alt="category"
              />
              <p className="font-iransansxregular text-categorytext text-[12px] md:text-[14px] lg:text-[16px]">
                موسیقی
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
