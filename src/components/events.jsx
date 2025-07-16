import eventimg1 from "/src/assets/images/eventimg1.png";
import eventimg2 from "/src/assets/images/eventimg2.png";
import eventimg3 from "/src/assets/images/eventimg3.png";
import eventimg4 from "/src/assets/images/eventimg4.png";

const Events = () => {
  return (
    <>
      <div className="container mx-auto flex justify-center mt-[70px] mb-[100px]">
        <div className="gap-4 flex flex-row flex-wrap items-center justify-center">
          <div className="w-full flex flex-row-reverse justify-between items-center m-2 mb-7">
            <button className="gap-2 flex justify-center items-center">
              <p className="hidden xl:block text-nowrap">مشاهده همه</p>
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
                width="1000"
                height="2"
                viewBox="0 0 1000 2"
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
              <p className="font-iransansx whitespace-nowrap lg:text-xl xl:text-2xl text-naturalgray-7">
                رویدادهای اخیر
              </p>
            </div>
          </div>
          <div className="w-[328px] md:w-[350px] lg:w-[450px] xl:w-[550px] 2xl:w-[600px] h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] 2xl:-[208px] rounded-xl lg:rounded-2xl xl:rounded-3xl border border-naturalgray-2 gap-2 flex">
            <img
              className="h-full w-auto rounded-r-xl lg:rounded-r-2xl xl:rounded-r-3xl"
              src={eventimg1}
              alt="events"
            />
            <div className="gap-3 p-2 md:p-3 xl:py-6 2xl:px-6 2xl:py-8 xl:px4 size-full flex flex-col">
              <div className="size-full gap-[2px] flex flex-col pl-2">
                <p className="font-iransansxbold text-[14px] md:text-[16px] lg:text-lg xl:text-xl text-naturalgray-7 leading-[180%]">
                  بوت کمپ برنامه نویسی دیجی کالا
                </p>
                <p className="line-clamp-2 font-iransansx text-[12px] xl:text-sm text-naturalgray-5 leading-[180%]">
                  در این دوره شما بر اساس سرفصل‌های تعیین شده توسط اساتید منتخب
                  دیجی‌کالا، بوژان و کوئرا آموزش می‌بینید و در نهایت امکان
                  استخدام در دیجی‌کالا را خواهید داشت
                </p>
              </div>
              <div className="w-full flex flex-row-reverse justify-between items-center">
                <div className="gap-1 flex">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.66667 7.33325H6V8.66659H4.66667V7.33325ZM14 3.99992V13.3333C14 14.0666 13.4 14.6666 12.6667 14.6666H3.33333C2.59333 14.6666 2 14.0666 2 13.3333L2.00667 3.99992C2.00667 3.26659 2.59333 2.66659 3.33333 2.66659H4V1.33325H5.33333V2.66659H10.6667V1.33325H12V2.66659H12.6667C13.4 2.66659 14 3.26659 14 3.99992ZM3.33333 5.33325H12.6667V3.99992H3.33333V5.33325ZM12.6667 13.3333V6.66659H3.33333V13.3333H12.6667ZM10 8.66659H11.3333V7.33325H10V8.66659ZM7.33333 8.66659H8.66667V7.33325H7.33333V8.66659Z"
                      fill="#737993"
                    />
                  </svg>
                  <p className=" font-iransansxnum text-[12px] lg:text-sm text-naturalgray-5">
                    29 بهمن
                  </p>
                </div>
                <div className="gap-1 flex">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00004 1.33325C5.42004 1.33325 3.33337 3.41992 3.33337 5.99992C3.33337 9.49992 8.00004 14.6666 8.00004 14.6666C8.00004 14.6666 12.6667 9.49992 12.6667 5.99992C12.6667 3.41992 10.58 1.33325 8.00004 1.33325ZM4.66671 5.99992C4.66671 4.15992 6.16004 2.66659 8.00004 2.66659C9.84004 2.66659 11.3334 4.15992 11.3334 5.99992C11.3334 7.91992 9.41337 10.7933 8.00004 12.5866C6.61337 10.8066 4.66671 7.89992 4.66671 5.99992Z"
                      fill="#737993"
                    />
                    <path
                      d="M8.00004 7.66659C8.92052 7.66659 9.66671 6.92039 9.66671 5.99992C9.66671 5.07944 8.92052 4.33325 8.00004 4.33325C7.07957 4.33325 6.33337 5.07944 6.33337 5.99992C6.33337 6.92039 7.07957 7.66659 8.00004 7.66659Z"
                      fill="#737993"
                    />
                  </svg>
                  <p className=" font-iransansxnum text-[12px] lg:text-sm text-naturalgray-5">
                    تهران، ایران
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[328px] md:w-[350px] lg:w-[450px] xl:w-[550px] 2xl:w-[600px] h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] 2xl:-[208px] rounded-xl lg:rounded-2xl xl:rounded-3xl border border-naturalgray-2 gap-2 flex">
            <img
              className="h-full w-auto rounded-r-xl lg:rounded-r-2xl xl:rounded-r-3xl"
              src={eventimg2}
              alt="events"
            />
            <div className="gap-3 p-2 md:p-3 xl:py-6 2xl:px-6 2xl:py-8 xl:px4 size-full flex flex-col">
              <div className="size-full gap-[2px] flex flex-col pl-2">
                <p className="font-iransansxbold text-[14px] md:text-[16px] lg:text-lg xl:text-xl text-naturalgray-7 leading-[180%]">
                  بوت کمپ برنامه نویسی دیجی کالا
                </p>
                <p className="line-clamp-2 font-iransansx text-[12px] xl:text-sm text-naturalgray-5 leading-[180%]">
                  در این دوره شما بر اساس سرفصل‌های تعیین شده توسط اساتید منتخب
                  دیجی‌کالا، بوژان و کوئرا آموزش می‌بینید و در نهایت امکان
                  استخدام در دیجی‌کالا را خواهید داشت
                </p>
              </div>
              <div className="w-full flex flex-row-reverse justify-between items-center">
                <div className="gap-1 flex">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.66667 7.33325H6V8.66659H4.66667V7.33325ZM14 3.99992V13.3333C14 14.0666 13.4 14.6666 12.6667 14.6666H3.33333C2.59333 14.6666 2 14.0666 2 13.3333L2.00667 3.99992C2.00667 3.26659 2.59333 2.66659 3.33333 2.66659H4V1.33325H5.33333V2.66659H10.6667V1.33325H12V2.66659H12.6667C13.4 2.66659 14 3.26659 14 3.99992ZM3.33333 5.33325H12.6667V3.99992H3.33333V5.33325ZM12.6667 13.3333V6.66659H3.33333V13.3333H12.6667ZM10 8.66659H11.3333V7.33325H10V8.66659ZM7.33333 8.66659H8.66667V7.33325H7.33333V8.66659Z"
                      fill="#737993"
                    />
                  </svg>
                  <p className=" font-iransansxnum text-[12px] lg:text-sm text-naturalgray-5">
                    29 بهمن
                  </p>
                </div>
                <div className="gap-1 flex">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00004 1.33325C5.42004 1.33325 3.33337 3.41992 3.33337 5.99992C3.33337 9.49992 8.00004 14.6666 8.00004 14.6666C8.00004 14.6666 12.6667 9.49992 12.6667 5.99992C12.6667 3.41992 10.58 1.33325 8.00004 1.33325ZM4.66671 5.99992C4.66671 4.15992 6.16004 2.66659 8.00004 2.66659C9.84004 2.66659 11.3334 4.15992 11.3334 5.99992C11.3334 7.91992 9.41337 10.7933 8.00004 12.5866C6.61337 10.8066 4.66671 7.89992 4.66671 5.99992Z"
                      fill="#737993"
                    />
                    <path
                      d="M8.00004 7.66659C8.92052 7.66659 9.66671 6.92039 9.66671 5.99992C9.66671 5.07944 8.92052 4.33325 8.00004 4.33325C7.07957 4.33325 6.33337 5.07944 6.33337 5.99992C6.33337 6.92039 7.07957 7.66659 8.00004 7.66659Z"
                      fill="#737993"
                    />
                  </svg>
                  <p className=" font-iransansxnum text-[12px] lg:text-sm text-naturalgray-5">
                    تهران، ایران
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[328px] md:w-[350px] lg:w-[450px] xl:w-[550px] 2xl:w-[600px] h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] 2xl:-[208px] rounded-xl lg:rounded-2xl xl:rounded-3xl border border-naturalgray-2 gap-2 flex">
            <img
              className="h-full w-auto rounded-r-xl lg:rounded-r-2xl xl:rounded-r-3xl"
              src={eventimg3}
              alt="events"
            />
            <div className="gap-3 p-2 md:p-3 xl:py-6 2xl:px-6 2xl:py-8 xl:px4 size-full flex flex-col">
              <div className="size-full gap-[2px] flex flex-col pl-2">
                <p className="font-iransansxbold text-[14px] md:text-[16px] lg:text-lg xl:text-xl text-naturalgray-7 leading-[180%]">
                  بوت کمپ برنامه نویسی دیجی کالا
                </p>
                <p className="line-clamp-2 font-iransansx text-[12px] xl:text-sm text-naturalgray-5 leading-[180%]">
                  در این دوره شما بر اساس سرفصل‌های تعیین شده توسط اساتید منتخب
                  دیجی‌کالا، بوژان و کوئرا آموزش می‌بینید و در نهایت امکان
                  استخدام در دیجی‌کالا را خواهید داشت
                </p>
              </div>
              <div className="w-full flex flex-row-reverse justify-between items-center">
                <div className="gap-1 flex">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.66667 7.33325H6V8.66659H4.66667V7.33325ZM14 3.99992V13.3333C14 14.0666 13.4 14.6666 12.6667 14.6666H3.33333C2.59333 14.6666 2 14.0666 2 13.3333L2.00667 3.99992C2.00667 3.26659 2.59333 2.66659 3.33333 2.66659H4V1.33325H5.33333V2.66659H10.6667V1.33325H12V2.66659H12.6667C13.4 2.66659 14 3.26659 14 3.99992ZM3.33333 5.33325H12.6667V3.99992H3.33333V5.33325ZM12.6667 13.3333V6.66659H3.33333V13.3333H12.6667ZM10 8.66659H11.3333V7.33325H10V8.66659ZM7.33333 8.66659H8.66667V7.33325H7.33333V8.66659Z"
                      fill="#737993"
                    />
                  </svg>
                  <p className=" font-iransansxnum text-[12px] lg:text-sm text-naturalgray-5">
                    29 بهمن
                  </p>
                </div>
                <div className="gap-1 flex">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00004 1.33325C5.42004 1.33325 3.33337 3.41992 3.33337 5.99992C3.33337 9.49992 8.00004 14.6666 8.00004 14.6666C8.00004 14.6666 12.6667 9.49992 12.6667 5.99992C12.6667 3.41992 10.58 1.33325 8.00004 1.33325ZM4.66671 5.99992C4.66671 4.15992 6.16004 2.66659 8.00004 2.66659C9.84004 2.66659 11.3334 4.15992 11.3334 5.99992C11.3334 7.91992 9.41337 10.7933 8.00004 12.5866C6.61337 10.8066 4.66671 7.89992 4.66671 5.99992Z"
                      fill="#737993"
                    />
                    <path
                      d="M8.00004 7.66659C8.92052 7.66659 9.66671 6.92039 9.66671 5.99992C9.66671 5.07944 8.92052 4.33325 8.00004 4.33325C7.07957 4.33325 6.33337 5.07944 6.33337 5.99992C6.33337 6.92039 7.07957 7.66659 8.00004 7.66659Z"
                      fill="#737993"
                    />
                  </svg>
                  <p className=" font-iransansxnum text-[12px] lg:text-sm text-naturalgray-5">
                    تهران، ایران
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[328px] md:w-[350px] lg:w-[450px] xl:w-[550px] 2xl:w-[600px] h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] 2xl:-[208px] rounded-xl lg:rounded-2xl xl:rounded-3xl border border-naturalgray-2 gap-2 flex">
            <img
              className="h-full w-auto rounded-r-xl lg:rounded-r-2xl xl:rounded-r-3xl"
              src={eventimg4}
              alt="events"
            />
            <div className="gap-3 p-2 md:p-3 xl:py-6 2xl:px-6 2xl:py-8 xl:px4 size-full flex flex-col">
              <div className="size-full gap-[2px] flex flex-col pl-2">
                <p className="font-iransansxbold text-[14px] md:text-[16px] lg:text-lg xl:text-xl text-naturalgray-7 leading-[180%]">
                  بوت کمپ برنامه نویسی دیجی کالا
                </p>
                <p className="line-clamp-2 font-iransansx text-[12px] xl:text-sm text-naturalgray-5 leading-[180%]">
                  در این دوره شما بر اساس سرفصل‌های تعیین شده توسط اساتید منتخب
                  دیجی‌کالا، بوژان و کوئرا آموزش می‌بینید و در نهایت امکان
                  استخدام در دیجی‌کالا را خواهید داشت
                </p>
              </div>
              <div className="w-full flex flex-row-reverse justify-between items-center">
                <div className="gap-1 flex">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.66667 7.33325H6V8.66659H4.66667V7.33325ZM14 3.99992V13.3333C14 14.0666 13.4 14.6666 12.6667 14.6666H3.33333C2.59333 14.6666 2 14.0666 2 13.3333L2.00667 3.99992C2.00667 3.26659 2.59333 2.66659 3.33333 2.66659H4V1.33325H5.33333V2.66659H10.6667V1.33325H12V2.66659H12.6667C13.4 2.66659 14 3.26659 14 3.99992ZM3.33333 5.33325H12.6667V3.99992H3.33333V5.33325ZM12.6667 13.3333V6.66659H3.33333V13.3333H12.6667ZM10 8.66659H11.3333V7.33325H10V8.66659ZM7.33333 8.66659H8.66667V7.33325H7.33333V8.66659Z"
                      fill="#737993"
                    />
                  </svg>
                  <p className=" font-iransansxnum text-[12px] lg:text-sm text-naturalgray-5">
                    29 بهمن
                  </p>
                </div>
                <div className="gap-1 flex">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00004 1.33325C5.42004 1.33325 3.33337 3.41992 3.33337 5.99992C3.33337 9.49992 8.00004 14.6666 8.00004 14.6666C8.00004 14.6666 12.6667 9.49992 12.6667 5.99992C12.6667 3.41992 10.58 1.33325 8.00004 1.33325ZM4.66671 5.99992C4.66671 4.15992 6.16004 2.66659 8.00004 2.66659C9.84004 2.66659 11.3334 4.15992 11.3334 5.99992C11.3334 7.91992 9.41337 10.7933 8.00004 12.5866C6.61337 10.8066 4.66671 7.89992 4.66671 5.99992Z"
                      fill="#737993"
                    />
                    <path
                      d="M8.00004 7.66659C8.92052 7.66659 9.66671 6.92039 9.66671 5.99992C9.66671 5.07944 8.92052 4.33325 8.00004 4.33325C7.07957 4.33325 6.33337 5.07944 6.33337 5.99992C6.33337 6.92039 7.07957 7.66659 8.00004 7.66659Z"
                      fill="#737993"
                    />
                  </svg>
                  <p className=" font-iransansxnum text-[12px] lg:text-sm text-naturalgray-5">
                    تهران، ایران
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

export default Events;
