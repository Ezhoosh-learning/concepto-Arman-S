const Hero = () => {
  return (
    <>
      <div className="container mx-auto  flex flex-col justify-between items-center gap-[34px] xl:gap-12 lg:mt-3 xl:mt-6 relative">
        <div className="w-full px-4 gap-4 flex flex-col items-center mt-7 md:gap-6 lg:gap-8">
          <h5 className="font-bold text-xl leading-[140%] md:leading-[150%] font-iransansxbold sm:text-Primaryshade-7 sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-[56px]">
            با سرچ کمتر نتیجه بهتر بگیر
          </h5>
          <p className="font-iransansxnumregular  text-[12px] sm:text-[14px] lg:text-[18px] xl:text-[20px] leading-[180%] text-center text-Primaryshade-5">
            کانسپتو اولین مرجع معتبر معرفی استارتاپ ها و شرکت های ایرانی
          </p>
          <div className="gap-4 flex flex-row justify-between items-center">
            <button className="h-8 rounded-[8px] gap-1 px-3 flex flex-row justify-center items-center bg-Primary lg:gap-2 lg:px-4 lg:h-10 xl:h-12">
              <svg
                className="lg:size-6"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16286 17.5H8.32952L9.16286 11.6667H6.24619C5.51286 11.6667 5.97119 11.0417 5.98786 11.0167C7.06286 9.11667 8.67953 6.28333 10.8379 2.5H11.6712L10.8379 8.33333H13.7629C14.0962 8.33333 14.2795 8.49167 14.0962 8.88333C10.8045 14.625 9.16286 17.5 9.16286 17.5Z"
                  fill="white"
                />
              </svg>
              <p className="font-iransansx text-sm text-white lg:text-lg">
                رایگان شروع کن!
              </p>
            </button>
            <button className="h-8 rounded-[8px] border border-naturalgray-8 gap-1 px-3 flex flex-row justify-center items-center lg:gap-2 lg:px-4 lg:h-10 xl:h-12">
              <p className="font-iransansx text-sm text-naturalgray-8 lg:text-lg">
                درباره کانسپتو
              </p>
              <svg
                className="lg:size-6"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7049 7.41L14.2949 6L8.29492 12L14.2949 18L15.7049 16.59L11.1249 12L15.7049 7.41Z"
                  fill="#2E303B"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full h-[280px] relative flex justify-center overflow-hidden md:hidden">
          <div className="w-fit p-0.5 rounded-[8px] bg-linear-to-b from-naturalgray-1 from-70% to-100%">
            <img
              className="w-[215px] h-[345px] rounded-[8px] z-10 object-cover object-top"
              src="./src/assets/images/aboutimg.png"
              alt="about"
            />
          </div>
          <div className="bg-linear-to-b to-white from-70% to-100% z-50 h-full w-full absolute top-0 right-0"></div>
        </div>
        <div className="hidden md:block">
          <img
            className=" rounded-3xl border-4 border-naturalgray-1 md:w-[600px] md:h-[440px] lg:w-[700px] lg:h-[490px] xl:w-[800px] xl:h-[530px] 2xl:w-[1016px] 2xl:h-[588px] object-cover object-top"
            src="./src/assets/images/heroimgbig.png"
            alt="concepto"
          />
        </div>
        <div className="hidden md:block absolute right-[40px] lg:right-[100px] top-[210px] xl:right-[150px] xl:top-[240px]">
          <img
            className=" rounded-2xl border-4 border-naturalgray-1 md:w-[160px] md:h-[300px] lg:w-[200px] lg:h-[360px] xl:w-[240px] xl:h-[400px] 2xl:w-[287px] 2xl:h-[465px] object-cover object-top"
            src="./src/assets/images/aboutimg.png"
            alt="concepto"
          />
        </div>
        <div className="hidden md:block absolute bottom-[-70px] left-[50px] lg:left-[100px]  xl:bottom-[-50px] xl:left-[180px] shadow-md">
          <img
            className=" rounded-2xl lg:w-[350px] lg:h-[200px] md:w-[330px] md:h-[200px] xl:w-[400px] xl:h-[250px] 2xl:w-[450px] 2xl:h-[280px] object-cover object-top"
            src="./src/assets/images/heroimgleftbot.png"
            alt="concepto"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
