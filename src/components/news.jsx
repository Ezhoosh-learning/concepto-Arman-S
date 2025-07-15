const News = () => {
  return (
    <>
      <div className="container mx-auto mt-16 sm:hidden">
        <div className="w-full relative pt-4  mt-16">
          <div className="absolute w-full top-0 z-[-2]">
            <img
              className="w-full h-[205px]"
              src="./src/assets/images/bannerimgphone.png"
              alt="banner"
            />
          </div>
          <div className="w-full gap-4 flex flex-col">
            <div className="w-full flex flex-row-reverse justify-between items-center my-2 px-4">
              <button className="gap-2 w-6 h-6 flex justify-center items-center">
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.70504 1.91L6.29504 0.5L0.295044 6.5L6.29504 12.5L7.70504 11.09L3.12504 6.5L7.70504 1.91Z"
                    fill="#ffffff"
                  />
                </svg>
              </button>
              <div className=" w-full px-2 gap-2 flex justify-center">
                <svg
                  className="xl:bg-white"
                  width="184"
                  height="1"
                  viewBox="0 0 184 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 0.5H183" stroke-linecap="round" />
                </svg>
              </div>
              <div className="px-[1px] gap-2">
                <p className="font-iransansx text-white whitespace-nowrap">
                  تازه ترین اخبار
                </p>
              </div>
            </div>
            <div className="overflow-x-scroll overflow-y-hidden">
              <div className="w-[500px] mx-4 flex gap-4">
                <div className="w-[242px] rounded-3xl max-w-[242px] max-h-[360p] py-1 gap-2 flex flex-col">
                  <div className="w-full">
                    <img
                      className="w-[242px] h-[129px] rounded-t-3xl"
                      src="./src/assets/images/newssnapp.png"
                      alt="news"
                    />
                  </div>
                  <div className="w-full px-4 gap-4 flex flex-col">
                    <div className="w-ful gap-1 flex flex-col">
                      <p className="font-iransansxbold text-[12px] text-naturalgray-5">
                        تجارت الکترونیکی
                      </p>
                      <div className="w-full gap-2 flex flex-col">
                        <p className="font-iransansxbold text-[14px] text-naturalgray-7 leading-[180%]">
                          اسنپ رکورد خود را با بیش از ۵ میلیون سفر روزانه شکست
                        </p>
                        <p className="font-iransansxnumregular text-[12px] text-naturalgray-6 line-clamp-3 leading-[180%]">
                          در ماه پایانی سال ۱۴۰۲، اسنپ رکورد ۵ میلیون و ۱۳۹ هزار
                          و ۶۵ سفر روزانه در سرویس خودرو و باکس را زد. این رکورد
                          در روز چهارشنبه، دوم اسفند، ثبت شد.
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex justify-between items-center flex-row-reverse">
                      <div className="gap-2 flex-row-reverse flex items-center">
                        <p className="text-[14px] font-iransansxnumregular text-naturalgray-4">
                          1402/12/11
                        </p>
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.83333 9.6687H7.5V11.3354H5.83333V9.6687ZM17.5 5.50203V17.1687C17.5 18.0854 16.75 18.8354 15.8333 18.8354H4.16667C3.24167 18.8354 2.5 18.0854 2.5 17.1687L2.50833 5.50203C2.50833 4.58537 3.24167 3.83537 4.16667 3.83537H5V2.1687H6.66667V3.83537H13.3333V2.1687H15V3.83537H15.8333C16.75 3.83537 17.5 4.58537 17.5 5.50203ZM4.16667 7.1687H15.8333V5.50203H4.16667V7.1687ZM15.8333 17.1687V8.83537H4.16667V17.1687H15.8333ZM12.5 11.3354H14.1667V9.6687H12.5V11.3354ZM9.16667 11.3354H10.8333V9.6687H9.16667V11.3354Z"
                            fill="#9095AA"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-row-reverse gap-3 items-center">
                        <p className="text-[14px] font-iransansxregular text-naturalgray-4">
                          فرهاد رئوفی
                        </p>
                        <img
                          className="size-6 rounded-3xl"
                          src="./src/assets/images/iconwriter1.png"
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[242px] rounded-3xl max-w-[242px] max-h-[360p] py-1 gap-2 flex flex-col">
                  <div className="w-full">
                    <img
                      className="w-[242px] h-[129px] rounded-t-3xl"
                      src="./src/assets/images/newssnapp.png"
                      alt="news"
                    />
                  </div>
                  <div className="w-full px-4 gap-4 flex flex-col">
                    <div className="w-ful gap-1 flex flex-col">
                      <p className="font-iransansxbold text-[12px] text-naturalgray-5">
                        تجارت الکترونیکی
                      </p>
                      <div className="w-full gap-2 flex flex-col">
                        <p className="font-iransansxbold text-[14px] text-naturalgray-7 leading-[180%]">
                          بار دیگر اسنپ فود به دلیل مشکل فنی از دسترس خارج شد
                        </p>
                        <p className="font-iransansxnumregular text-[12px] text-naturalgray-6 line-clamp-3 leading-[180%]">
                          بار دیگر اسنپ‌فود به‌دلیل مشکل فنی از دسترس کاربران
                          خارج شد. این مشکل اوایل بهمن هم تکرار شده بود و رفع آن
                          ساعت‌ها طول کشید.
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex justify-between items-center flex-row-reverse">
                      <div className="gap-2 flex-row-reverse flex items-center">
                        <p className="text-[14px] font-iransansxnumregular text-naturalgray-4">
                          1403/09/15
                        </p>
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.83333 9.6687H7.5V11.3354H5.83333V9.6687ZM17.5 5.50203V17.1687C17.5 18.0854 16.75 18.8354 15.8333 18.8354H4.16667C3.24167 18.8354 2.5 18.0854 2.5 17.1687L2.50833 5.50203C2.50833 4.58537 3.24167 3.83537 4.16667 3.83537H5V2.1687H6.66667V3.83537H13.3333V2.1687H15V3.83537H15.8333C16.75 3.83537 17.5 4.58537 17.5 5.50203ZM4.16667 7.1687H15.8333V5.50203H4.16667V7.1687ZM15.8333 17.1687V8.83537H4.16667V17.1687H15.8333ZM12.5 11.3354H14.1667V9.6687H12.5V11.3354ZM9.16667 11.3354H10.8333V9.6687H9.16667V11.3354Z"
                            fill="#9095AA"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-row-reverse gap-3 items-center">
                        <p className="text-[14px] font-iransansxregular text-naturalgray-4">
                          امیر بختیاری
                        </p>
                        <img
                          className="size-6 rounded-3xl"
                          src="./src/assets/images/iconwriter2.png"
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
