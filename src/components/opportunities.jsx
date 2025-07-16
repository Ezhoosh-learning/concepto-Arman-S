const Opportunities = () => {
  return (
    <>
      <div className="container mx-auto gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 flex flex-col mt-[74px] md:mt-[90px] xl:mt-[140px] px-3">
        <div className="w-full flex flex-row-reverse justify-between items-center">
          <button className="gap-2 w-6 h-6 flex justify-center items-center">
            <svg
              className="xl:hidden"
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
              className="bg-naturalgray-2 hidden xl:block 2xl:hidden"
              width="1100"
              height="1"
              viewBox="0 0 1100 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 0.5H183" stroke-linecap="round" />
            </svg>
            <svg
              className="bg-naturalgray-2 hidden 2xl:block"
              width="1300"
              height="1"
              viewBox="0 0 1300 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 0.5H183" stroke-linecap="round" />
            </svg>
          </div>
          <div className="px-[1px] gap-2">
            <p className="font-iransansx text-naturalgray-7 lg:text-xl xl:text-2xl whitespace-nowrap">
              فرصت های شغلی
            </p>
          </div>
        </div>
        <div className="w-full overflow-x-scroll overflow-y-hidden">
          <div className="gap-6 flex lg:justify-center">
            <div className=" flex flex-col justify-between items-center">
              <img
                className="size-[56px] lg:size-[65px] 2xl:size-[72px] rounded-[8px] object-cover"
                src="src/assets/images/jobcard1.png"
                alt="job"
              />
              <div className="w-[152px] lg:w-[180px] xl:w-[228px] h-[151px] rounded-3xl flex justify-center items-center mt-[-40px]">
                <div className="gap-[6px] flex flex-col justify-center items-center">
                  <p className="font-iransansxnumregular xl:text-lg text-naturalgray-7">
                    12 فرصت شغلی
                  </p>
                  <p className="text-[12px] xl:text-sm font-iransansxbold text-Primary text-center">
                    بلو بانک
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-between items-center">
              <img
                className="size-[56px] lg:size-[65px] 2xl:size-[72px] rounded-[8px] object-cover"
                src="src/assets/images/jobcard2.png"
                alt="job"
              />
              <div className="w-[152px] lg:w-[180px] xl:w-[228px] h-[151px] rounded-3xl flex justify-center items-center mt-[-40px]">
                <div className="gap-[6px] flex flex-col justify-center items-center">
                  <p className="font-iransansxnumregular xl:text-lg text-naturalgray-7">
                    16 فرصت شغلی
                  </p>
                  <p className="text-[12px] xl:text-sm font-iransansxbold text-Primary text-center">
                    آسیاتک
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-between items-center">
              <img
                className="size-[56px] lg:size-[65px] 2xl:size-[72px] rounded-[8px] object-cover"
                src="src/assets/images/jobcard3.png"
                alt="job"
              />
              <div className="w-[152px] lg:w-[180px] xl:w-[228px] h-[151px] rounded-3xl flex justify-center items-center mt-[-40px]">
                <div className="gap-[6px] flex flex-col justify-center items-center">
                  <p className="font-iransansxnumregular xl:text-lg text-naturalgray-7">
                    17 فرصت شغلی
                  </p>
                  <p className="text-[12px] xl:text-sm font-iransansxbold text-Primary text-center">
                    کارگزاری فارابی
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-between items-center">
              <img
                className="size-[56px] lg:size-[65px] 2xl:size-[72px] rounded-[8px] object-cover"
                src="src/assets/images/jobcard4.png"
                alt="job"
              />
              <div className="w-[152px] lg:w-[180px] xl:w-[228px] h-[151px] rounded-3xl flex justify-center items-center mt-[-40px]">
                <div className="gap-[6px] flex flex-col justify-center items-center">
                  <p className="font-iransansxnumregular xl:text-lg text-naturalgray-7">
                    10 فرصت شغلی
                  </p>
                  <p className="text-[12px] xl:text-sm font-iransansxbold text-Primary text-center">
                    بیمه بازار
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-between items-center">
              <img
                className="size-[56px] lg:size-[65px] 2xl:size-[72px] rounded-[8px] object-cover"
                src="src/assets/images/jobcard5.png"
                alt="job"
              />
              <div className="w-[152px] lg:w-[180px] xl:w-[228px] h-[151px] rounded-3xl flex justify-center items-center mt-[-40px]">
                <div className="gap-[6px] flex flex-col justify-center items-center">
                  <p className="font-iransansxnumregular xl:text-lg text-naturalgray-7">
                    13 فرصت شغلی
                  </p>
                  <p className="text-[12px] xl:text-sm font-iransansxbold text-Primary text-center">
                    گروه علی بابا
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Opportunities;
