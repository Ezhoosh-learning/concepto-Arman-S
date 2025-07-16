import bannerimgphone from "/src/assets/images/bannerimgphone.png";
import bannerimgfull from "/src/assets/images/bannerimgfull.png";
import snappbannerimg from "/src/assets/images/snappbannerimg.png";
import snappiconimg from "/src/assets/images/snappiconimg.png";
import digikalabannerimg from "/src/assets/images/digikalabannerimg.png";
import digikalaiconimg from "/src/assets/images/digikalaiconimg.png";
import bannerfarabi from "/src/assets/images/bannerfarabi.png";
import farabiicon from "/src/assets/images/farabiicon.jpg";
import banneralibaba from "/src/assets/images/banneralibaba.png";
import alibabaicon from "/src/assets/images/alibabaicon.png";

const Companies = () => {
  return (
    <>
      <div className="relative pt-4 mt-16 md:mt-[100px] xl:mt-[200px]">
        <div className="absolute top-0 z-[-2] w-full">
          <img
            className=" w-full h-[210px] md:hidden"
            src={bannerimgphone}
            alt="banner"
          />
          <img
            className="hidden w-full md:block"
            src={bannerimgfull}
            alt="banner"
          />
        </div>
        <div className="container mx-auto gap-4 flex flex-col md:pt-10 xl:pt-[80px]">
          <div className="w-full flex flex-row-reverse justify-between items-center my-2 px-4 md:mb-[30px] xl:mb-[40px]">
            <button className="gap-2 flex flex-row justify-center items-center">
              <p className="hidden xl:block text-white text-nowrap">
                مشاهده همه
              </p>
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
                className="hidden xl:block 2xl:hidden bg-white"
                width="1000"
                height="1"
                viewBox="0 0 1000 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 1.26392H871"
                  stroke="#CBCED7"
                  stroke-linecap="round"
                />
              </svg>
              <svg
                className="hidden 2xl:block bg-white"
                width="1200"
                height="1"
                viewBox="0 0 1200 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 1.26392H871"
                  stroke="#CBCED7"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="px-[1px] gap-2">
              <p className="font-iransansx text-white whitespace-nowrap lg:text-lg xl:text-xl 2xl:text-2xl">
                شرکت‌های محبوب
              </p>
            </div>
          </div>
          <div className="overflow-x-scroll overflow-y-hidden xl:flex xl:justify-center xl:overflow-x-hidden">
            <div className="flex gap-4 mx-4 md:gap-6">
              <div className=" h-[360px] gap-4 rounded-3xl flex flex-col bg-white">
                <div className="w-full flex flex-col justify-startl">
                  <div className="w-full h-auto">
                    <img
                      className="w-[242px] min-w-[242px] lg:w-[288px] lg:min-w-[288px] h-[168px]"
                      src={snappbannerimg}
                      alt="snappimg"
                    />
                  </div>
                  <div className="w-full px-4 gap-4 flex mt-[-14px]">
                    <img
                      className="border-[3px] border-white size-16 rounded-xl object-cover object-center"
                      src={snappiconimg}
                      alt=""
                    />
                    <div className="w-full flex flex-col justify-end">
                      <p className="font-iransansxbold text-[12px] md:text-sm text-naturalgray-7">
                        شرکت اسنپ
                      </p>
                      <p className="font-iransansx text-[12px] md:text-sm text-naturalgray-5">
                        تجارت الکترونیکی
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 pb-3 gap-4">
                  <div className="w-full gap-2 flex">
                    <div className="w-full border border-naturalgray-1 p-2 gap-1 rounded-[8px] flex flex-col">
                      <p className="font-iransansxbold text-[12px] md:text-sm text-naturalgray-7">
                        مخاطبین جدید
                      </p>
                      <p className="font-iransansxnum text-[14px] md:text-[16px] text-Primary">
                        22,324
                      </p>
                    </div>
                    <div className="w-full border border-naturalgray-1 p-2 gap-1 rounded-[8px] flex flex-col">
                      <p className="font-iransansxbold text-[12px] md:text-sm text-naturalgray-7">
                        سرمایه گذاران
                      </p>
                      <p className="font-iransansxnum text-[14px] md:text-[16px] text-Primary">
                        392
                      </p>
                    </div>
                  </div>
                  <div className="w-full gap-4">
                    <div className="flex justify-between">
                      <div className="flex flex-row-reverse justify-between">
                        <p className="font-iransansxregular text-[14px] md:text-[16px] text-naturalgray-4">
                          تهران ,تهران
                        </p>
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.99996 2.16846C6.77496 2.16846 4.16663 4.77679 4.16663 8.00179C4.16663 12.3768 9.99996 18.8351 9.99996 18.8351C9.99996 18.8351 15.8333 12.3768 15.8333 8.00179C15.8333 4.77679 13.225 2.16846 9.99996 2.16846ZM5.83329 8.00179C5.83329 5.70179 7.69996 3.83512 9.99996 3.83512C12.3 3.83512 14.1666 5.70179 14.1666 8.00179C14.1666 10.4018 11.7666 13.9935 9.99996 16.2351C8.26663 14.0101 5.83329 10.3768 5.83329 8.00179Z"
                            fill="#9095AA"
                          />
                          <path
                            d="M9.99996 10.0851C11.1506 10.0851 12.0833 9.15238 12.0833 8.00179C12.0833 6.8512 11.1506 5.91846 9.99996 5.91846C8.84937 5.91846 7.91663 6.8512 7.91663 8.00179C7.91663 9.15238 8.84937 10.0851 9.99996 10.0851Z"
                            fill="#9095AA"
                          />
                        </svg>
                      </div>
                      <div className="px-1 gap-2">
                        <div className="gap-1 w-7 flex justify-center items-center">
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.6">
                              <path
                                d="M6.99996 10.8675L10.605 13.0433L9.64829 8.94246L12.8333 6.18329L8.63913 5.82746L6.99996 1.95996L5.36079 5.82746L1.16663 6.18329L4.35163 8.94246L3.39496 13.0433L6.99996 10.8675Z"
                                fill="#FFC51A"
                              />
                            </g>
                          </svg>
                          <p className="font-iransansxnum text-naturalgray-5 text-[14px] md:text-[16px]">
                            5
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[360px] gap-4 rounded-3xl flex flex-col bg-white">
                <div className="w-full flex flex-col justify-startl">
                  <div className="w-full h-auto">
                    <img
                      className="w-[242px] min-w-[242px] lg:w-[288px] lg:min-w-[288px]  h-[168px] rounded-t-3xl"
                      src={digikalabannerimg}
                      alt="snappimg"
                    />
                  </div>
                  <div className="w-full px-4 gap-4 flex mt-[-14px]">
                    <img
                      className="border-[3px] border-white size-16 rounded-xl object-cover object-center"
                      src={digikalaiconimg}
                      alt=""
                    />
                    <div className="w-full flex flex-col justify-end">
                      <p className="font-iransansxbold text-[12px] md:text-sm text-naturalgray-7">
                        شرکت دیجیکالا
                      </p>
                      <p className="font-iransansx text-[12px] md:text-sm text-naturalgray-5">
                        تجارت الکترونیکی
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 pb-3 gap-4">
                  <div className="w-full gap-2 flex">
                    <div className="w-full border border-naturalgray-1 p-2 gap-1 rounded-[8px] flex flex-col">
                      <p className="font-iransansxbold text-[12px] md:text-sm text-naturalgray-7">
                        مخاطبین جدید
                      </p>
                      <p className="font-iransansxnum text-[14px] md:text-[16px] text-Primary">
                        33,224
                      </p>
                    </div>
                    <div className="w-full border border-naturalgray-1 p-2 gap-1 rounded-[8px] flex flex-col">
                      <p className="font-iransansxbold text-[12px] md:text-sm text-naturalgray-7">
                        سرمایه گذاران
                      </p>
                      <p className="font-iransansxnum text-[14px] md:text-[16px] text-Primary">
                        504
                      </p>
                    </div>
                  </div>
                  <div className="w-full gap-4">
                    <div className="flex justify-between">
                      <div className="flex flex-row-reverse justify-between">
                        <p className="font-iransansxregular  text-[14px] md:text-[16px] text-naturalgray-4">
                          تهران ,تهران
                        </p>
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.99996 2.16846C6.77496 2.16846 4.16663 4.77679 4.16663 8.00179C4.16663 12.3768 9.99996 18.8351 9.99996 18.8351C9.99996 18.8351 15.8333 12.3768 15.8333 8.00179C15.8333 4.77679 13.225 2.16846 9.99996 2.16846ZM5.83329 8.00179C5.83329 5.70179 7.69996 3.83512 9.99996 3.83512C12.3 3.83512 14.1666 5.70179 14.1666 8.00179C14.1666 10.4018 11.7666 13.9935 9.99996 16.2351C8.26663 14.0101 5.83329 10.3768 5.83329 8.00179Z"
                            fill="#9095AA"
                          />
                          <path
                            d="M9.99996 10.0851C11.1506 10.0851 12.0833 9.15238 12.0833 8.00179C12.0833 6.8512 11.1506 5.91846 9.99996 5.91846C8.84937 5.91846 7.91663 6.8512 7.91663 8.00179C7.91663 9.15238 8.84937 10.0851 9.99996 10.0851Z"
                            fill="#9095AA"
                          />
                        </svg>
                      </div>
                      <div className="px-1 gap-2">
                        <div className="gap-1 w-7 flex justify-center items-center">
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.6">
                              <path
                                d="M6.99996 10.8675L10.605 13.0433L9.64829 8.94246L12.8333 6.18329L8.63913 5.82746L6.99996 1.95996L5.36079 5.82746L1.16663 6.18329L4.35163 8.94246L3.39496 13.0433L6.99996 10.8675Z"
                                fill="#FFC51A"
                              />
                            </g>
                          </svg>
                          <p className="font-iransansxnum text-naturalgray-5 text-[14px] md:text-[16px]">
                            4
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[360px] gap-4 rounded-3xl md:flex flex-col bg-white hidden ">
                <div className="w-full flex flex-col justify-startl">
                  <div className="w-full h-auto">
                    <img
                      className="w-[242px] min-w-[242px] lg:w-[288px] lg:min-w-[288px]  h-[168px] rounded-t-3xl"
                      src={bannerfarabi}
                      alt="snappimg"
                    />
                  </div>
                  <div className="w-full px-4 gap-4 flex mt-[-14px]">
                    <img
                      className="border-[3px] border-white size-16 rounded-xl object-cover object-center"
                      src={farabiicon}
                      alt=""
                    />
                    <div className="w-full flex flex-col justify-end">
                      <p className="font-iransansxbold text-[12px] md:text-sm text-naturalgray-7">
                        شرکت فارابی
                      </p>
                      <p className="font-iransansx text-[12px] md:text-sm text-naturalgray-5">
                        تجارت الکترونیکی
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 pb-3 gap-4">
                  <div className="w-full gap-2 flex">
                    <div className="w-full border border-naturalgray-1 p-2 gap-1 rounded-[8px] flex flex-col">
                      <p className="font-iransansxbold text-[12px] md:text-sm text-naturalgray-7">
                        مخاطبین جدید
                      </p>
                      <p className="font-iransansxnum text-[14px] md:text-[16px] text-Primary">
                        33,224
                      </p>
                    </div>
                    <div className="w-full border border-naturalgray-1 p-2 gap-1 rounded-[8px] flex flex-col">
                      <p className="font-iransansxbold text-[12px] md:text-sm text-naturalgray-7">
                        سرمایه گذاران
                      </p>
                      <p className="font-iransansxnum text-[14px] md:text-[16px] text-Primary">
                        504
                      </p>
                    </div>
                  </div>
                  <div className="w-full gap-4">
                    <div className="flex justify-between">
                      <div className="flex flex-row-reverse justify-between">
                        <p className="font-iransansxregular  text-[14px] md:text-[16px] text-naturalgray-4">
                          تهران ,تهران
                        </p>
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.99996 2.16846C6.77496 2.16846 4.16663 4.77679 4.16663 8.00179C4.16663 12.3768 9.99996 18.8351 9.99996 18.8351C9.99996 18.8351 15.8333 12.3768 15.8333 8.00179C15.8333 4.77679 13.225 2.16846 9.99996 2.16846ZM5.83329 8.00179C5.83329 5.70179 7.69996 3.83512 9.99996 3.83512C12.3 3.83512 14.1666 5.70179 14.1666 8.00179C14.1666 10.4018 11.7666 13.9935 9.99996 16.2351C8.26663 14.0101 5.83329 10.3768 5.83329 8.00179Z"
                            fill="#9095AA"
                          />
                          <path
                            d="M9.99996 10.0851C11.1506 10.0851 12.0833 9.15238 12.0833 8.00179C12.0833 6.8512 11.1506 5.91846 9.99996 5.91846C8.84937 5.91846 7.91663 6.8512 7.91663 8.00179C7.91663 9.15238 8.84937 10.0851 9.99996 10.0851Z"
                            fill="#9095AA"
                          />
                        </svg>
                      </div>
                      <div className="px-1 gap-2">
                        <div className="gap-1 w-7 flex justify-center items-center">
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.6">
                              <path
                                d="M6.99996 10.8675L10.605 13.0433L9.64829 8.94246L12.8333 6.18329L8.63913 5.82746L6.99996 1.95996L5.36079 5.82746L1.16663 6.18329L4.35163 8.94246L3.39496 13.0433L6.99996 10.8675Z"
                                fill="#FFC51A"
                              />
                            </g>
                          </svg>
                          <p className="font-iransansxnum text-naturalgray-5 text-[14px] md:text-[16px]">
                            4
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="h-[360px] gap-4 rounded-3xl sm:flex flex-col bg-white hidden">
                <div className="w-full flex flex-col justify-startl">
                  <div className="w-full h-auto">
                    <img
                      className="w-[242px] min-w-[242px] lg:w-[288px] lg:min-w-[288px]  h-[168px] rounded-t-3xl"
                      src={banneralibaba}
                      alt="snappimg"
                    />
                  </div>
                  <div className="w-full px-4 gap-4 flex mt-[-14px]">
                    <img
                      className="border-[3px] border-white size-16 rounded-xl object-cover object-center"
                      src={alibabaicon}
                      alt=""
                    />
                    <div className="w-full flex flex-col justify-end">
                      <p className="font-iransansxbold text-[12px] md:text-sm text-naturalgray-7">
                        شرکت علی بابا
                      </p>
                      <p className="font-iransansx text-[12px] md:text-sm text-naturalgray-5">
                        تجارت الکترونیکی
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 pb-3 gap-4">
                  <div className="w-full gap-2 flex">
                    <div className="w-full border border-naturalgray-1 p-2 gap-1 rounded-[8px] flex flex-col">
                      <p className="font-iransansxbold text-[12px] md:text-sm text-naturalgray-7">
                        مخاطبین جدید
                      </p>
                      <p className="font-iransansxnum text-[14px] md:text-[16px] text-Primary">
                        33,224
                      </p>
                    </div>
                    <div className="w-full border border-naturalgray-1 p-2 gap-1 rounded-[8px] flex flex-col">
                      <p className="font-iransansxbold text-[12px] md:text-sm text-naturalgray-7">
                        سرمایه گذاران
                      </p>
                      <p className="font-iransansxnum text-[14px] md:text-[16px] text-Primary">
                        504
                      </p>
                    </div>
                  </div>
                  <div className="w-full gap-4">
                    <div className="flex justify-between">
                      <div className="flex flex-row-reverse justify-between">
                        <p className="font-iransansxregular  text-[14px] md:text-[16px] text-naturalgray-4">
                          تهران ,تهران
                        </p>
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.99996 2.16846C6.77496 2.16846 4.16663 4.77679 4.16663 8.00179C4.16663 12.3768 9.99996 18.8351 9.99996 18.8351C9.99996 18.8351 15.8333 12.3768 15.8333 8.00179C15.8333 4.77679 13.225 2.16846 9.99996 2.16846ZM5.83329 8.00179C5.83329 5.70179 7.69996 3.83512 9.99996 3.83512C12.3 3.83512 14.1666 5.70179 14.1666 8.00179C14.1666 10.4018 11.7666 13.9935 9.99996 16.2351C8.26663 14.0101 5.83329 10.3768 5.83329 8.00179Z"
                            fill="#9095AA"
                          />
                          <path
                            d="M9.99996 10.0851C11.1506 10.0851 12.0833 9.15238 12.0833 8.00179C12.0833 6.8512 11.1506 5.91846 9.99996 5.91846C8.84937 5.91846 7.91663 6.8512 7.91663 8.00179C7.91663 9.15238 8.84937 10.0851 9.99996 10.0851Z"
                            fill="#9095AA"
                          />
                        </svg>
                      </div>
                      <div className="px-1 gap-2">
                        <div className="gap-1 w-7 flex justify-center items-center">
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.6">
                              <path
                                d="M6.99996 10.8675L10.605 13.0433L9.64829 8.94246L12.8333 6.18329L8.63913 5.82746L6.99996 1.95996L5.36079 5.82746L1.16663 6.18329L4.35163 8.94246L3.39496 13.0433L6.99996 10.8675Z"
                                fill="#FFC51A"
                              />
                            </g>
                          </svg>
                          <p className="font-iransansxnum text-naturalgray-5 text-[14px] md:text-[16px]">
                            4
                          </p>
                        </div>
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

export default Companies;
