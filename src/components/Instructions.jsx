import buildingimg from "/src/assets/images/buildingimg.png";

const Instructions = () => {
  return (
    <>
      <div className="container mx-auto p-4 gap-6 mt-12 md:mt-[90px] xl:mt-[140px] flex flex-col md:flex-row md:justify-center">
        <div className="gap-4 flex flex-col justify-center items-center">
          <div className="w-[328px] md:w-[220px] lg:w-[290px] xl:w-[360px] 2xl:w-[450px] h-[129px] md:h-[140px] lg:h-[160px] xl:h-[200px] 2xl:h-[225px] relative flex justify-center items-center">
            <div className="w-[176px] md:w-[150px] lg:w-[170px] xl:w-[240px] 2xl:w-[307px] h-full bg-naturalgray-1 rounded-t-3xl relative p-[11px] flex flex-col justify-between items-center">
              <div className="bg-Primary size-[42px] xl:size-[60px] 2xl:size-[70px] absolute top-[34px] lg:top-[44px] xl:top-[53px] left-[22.4px] rounded-[12px] border-[2px] border-naturalgray-1 overflow-hidden flex justify-center">
                <img
                  className="w-[35px] xl:w-[60px] xl:h-[65px] h-[46px] 2xl:w-[70px] 2xl:h-[78px] mt-1"
                  src={buildingimg}
                  alt="building"
                />
              </div>
              <div className="w-full h-[42px] lg:h-[60px] xl:h-[80px] gap-[7px] px-[7px] bg-white rounded-[11px]"></div>
              <div className="w-full gap-[7px] flex justify-between items-center">
                <div className="w-1/2 h-[28px] md:h-[32px] lg:h-[40px] xl:h-[50px] 2xl:h-[60px] rounded-[11px] bg-white flex justify-center items-center">
                  <svg
                    className="xl:size-[20px]"
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1992 1.39536C14.1992 0.625361 13.5692 -0.00463867 12.7992 -0.00463867H1.59922C0.829219 -0.00463867 0.199219 0.625361 0.199219 1.39536V9.79536C0.199219 10.5654 0.829219 11.1954 1.59922 11.1954H12.7992C13.5692 11.1954 14.1992 10.5654 14.1992 9.79536V1.39536ZM12.7992 1.39536L7.19922 4.89536L1.59922 1.39536H12.7992ZM12.7992 9.79536H1.59922V2.79536L7.19922 6.29536L12.7992 2.79536V9.79536Z"
                      fill="#444859"
                    />
                  </svg>
                </div>
                <div className="w-1/2 h-[28px] md:h-[32px] lg:h-[40px] xl:h-[50px] 2xl:h-[60px] rounded-[11px] bg-white flex justify-center items-center">
                  <svg
                    className="xl:size-[20px]"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.27817 1.69529C3.32017 2.31829 3.42517 2.92729 3.59317 3.50829L2.75317 4.34829C2.46617 3.50829 2.28417 2.61929 2.22117 1.69529H3.27817ZM10.1802 10.1093C10.7752 10.2773 11.3842 10.3823 12.0002 10.4243V11.4673C11.0762 11.4043 10.1872 11.2223 9.34017 10.9423L10.1802 10.1093ZM3.95017 0.295288H1.50017C1.11517 0.295288 0.800171 0.610288 0.800171 0.995288C0.800171 7.56829 6.12717 12.8953 12.7002 12.8953C13.0852 12.8953 13.4002 12.5803 13.4002 12.1953V9.75229C13.4002 9.36729 13.0852 9.05229 12.7002 9.05229C11.8322 9.05229 10.9852 8.91229 10.2012 8.65329C10.1312 8.62529 10.0542 8.61829 9.98417 8.61829C9.80217 8.61829 9.62717 8.68829 9.48717 8.82129L7.94717 10.3613C5.96617 9.34629 4.34217 7.72929 3.33417 5.74829L4.87417 4.20829C5.07017 4.01229 5.12617 3.73929 5.04917 3.49429C4.79017 2.71029 4.65017 1.87029 4.65017 0.995288C4.65017 0.610288 4.33517 0.295288 3.95017 0.295288Z"
                      fill="#444859"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full h-[84px] lg:h-[100px] 2xl:h-[137px] rounded-2xl bg-Primarytint-3 absolute bottom-0 z-[-10]"></div>
          </div>
          <p className="font-iransansxbold text-sm lg:text-lg xl:text-[20px] text-naturalblack-1">
            شرکت‌های مورد علاقت رو پیدا کن
          </p>
        </div>
        <div className=" gap-4 flex flex-col justify-center items-center">
          <div className="w-[328px] md:w-[220px] lg:w-[290px] xl:w-[360px] 2xl:w-[450px] h-[129px] md:h-[140px] lg:h-[160px] xl:h-[200px] 2xl:h-[225px] relative flex justify-center items-center">
            <div className="w-[176px] md:w-[150px] lg:w-[170px] xl:w-[240px] 2xl:w-[307px] h-full bg-naturalgray-1 rounded-t-3xl p-[11px] flex flex-row justify-center flex-wrap gap-[7px] overflow-hidden">
              <div className="w-full h-7 lg:h-9 xl:h-12 gap-[7px] flex flex-row-reverse justify-between items-center">
                <div className="w-9 lg:w-11 xl:w-14 h-full rounded-xl bg-white flex justify-center items-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0993652 10.6953V12.0953H4.29937V10.6953H0.0993652ZM0.0993652 2.29526V3.69526H7.09937V2.29526H0.0993652ZM7.09937 13.4953V12.0953H12.6994V10.6953H7.09937V9.29526H5.69937V13.4953H7.09937ZM2.89937 5.09526V6.49526H0.0993652V7.89526H2.89937V9.29526H4.29937V5.09526H2.89937ZM12.6994 7.89526V6.49526H5.69937V7.89526H12.6994ZM8.49937 5.09526H9.89937V3.69526H12.6994V2.29526H9.89937V0.895264H8.49937V5.09526Z"
                      fill="#444859"
                    />
                  </svg>
                </div>
                <div className="h-full w-full rounded-xl px-[7px] flex flex-row-reverse justify-end items-center bg-white gap-[6px]">
                  <p className="font-iransansxnumregular text-[12px]">جستوجو</p>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.82788 7.77373H8.27488L8.07888 7.58473C8.76488 6.78673 9.17788 5.75073 9.17788 4.62373C9.17788 2.11073 7.14088 0.0737305 4.62788 0.0737305C2.11488 0.0737305 0.0778809 2.11073 0.0778809 4.62373C0.0778809 7.13673 2.11488 9.17373 4.62788 9.17373C5.75488 9.17373 6.79088 8.76073 7.58888 8.07473L7.77788 8.27073V8.82373L11.2779 12.3167L12.3209 11.2737L8.82788 7.77373ZM4.62788 7.77373C2.88488 7.77373 1.47788 6.36673 1.47788 4.62373C1.47788 2.88073 2.88488 1.47373 4.62788 1.47373C6.37088 1.47373 7.77788 2.88073 7.77788 4.62373C7.77788 6.36673 6.37088 7.77373 4.62788 7.77373Z"
                      fill="#444859"
                    />
                  </svg>
                </div>
              </div>
              <div className="size-[46px] xl:size-[68px] 2xl:size-[85px] border-2 border-naturalgray-1 bg-white rounded-xl"></div>
              <div className="size-[46px] xl:size-[68px] 2xl:size-[85px] border-2 border-naturalgray-1 bg-Primary rounded-xl overflow-hidden flex justify-center">
                <img
                  className="w-[35px] h-[46px] xl:w-[68px] xl:h-[73px] 2xl:w-[85px] 2xl:h-[95px] mt-1"
                  src={buildingimg}
                  alt="building"
                />
              </div>
              <div className="size-[46px] xl:size-[68px] 2xl:size-[85px] border-2 border-naturalgray-1 bg-white rounded-xl"></div>
              <div className="size-[46px] xl:size-[68px] 2xl:size-[85px] border-2 border-naturalgray-1 bg-white rounded-xl"></div>
              <div className="size-[46px] xl:size-[68px] 2xl:size-[85px] border-2 border-naturalgray-1 bg-white rounded-xl"></div>
              <div className="size-[46px] xl:size-[68px] 2xl:size-[85px] border-2 border-naturalgray-1 bg-white rounded-xl"></div>
            </div>
            <div className="w-full h-[84px] lg:h-[100px] 2xl:h-[137px] rounded-2xl bg-Primarytint-5 absolute bottom-0 z-[-10]"></div>
          </div>
          <p className="font-iransansxbold text-sm lg:text-lg xl:text-[20px] text-naturalblack-1">
            کسب و کارهای مناسب رو پیدا کن
          </p>
        </div>{" "}
        <div className="gap-4 flex flex-col justify-center items-center">
          <div className="w-[328px] md:w-[220px] lg:w-[290px] xl:w-[360px] 2xl:w-[450px] h-[129px] md:h-[140px] lg:h-[160px] xl:h-[200px] 2xl:h-[225px] relative flex justify-center items-center">
            <div className="w-[176px] md:w-[150px] lg:w-[170px] xl:w-[240px] 2xl:w-[307px] h-full bg-naturalgray-1 rounded-t-3xl relative p-[11px] flex flex-col justify-between items-center">
              <div className="bg-Primary size-[42px] xl:size-[60px] 2xl:size-[70px] absolute top-[34px] lg:top-[44px] xl:top-[53px] left-[22.4px] rounded-[12px] border-[2px] border-naturalgray-1 overflow-hidden flex justify-center">
                <img
                  className="w-[35px] xl:w-[60px] xl:h-[65px] h-[46px] 2xl:w-[70px] 2xl:h-[78px] mt-1"
                  src={buildingimg}
                  alt="building"
                />
              </div>
              <div className="w-full h-[42px] lg:h-[60px] xl:h-[80px] gap-[7px] px-[7px] bg-white rounded-[11px]"></div>
              <div className="w-full gap-[7px] flex justify-between items-center">
                <div className="w-1/2 h-[28px] md:h-[32px] lg:h-[40px] xl:h-[50px] 2xl:h-[60px] rounded-[11px] bg-white flex justify-center items-center">
                  <svg
                    className="xl:size-[20px]"
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1992 1.39536C14.1992 0.625361 13.5692 -0.00463867 12.7992 -0.00463867H1.59922C0.829219 -0.00463867 0.199219 0.625361 0.199219 1.39536V9.79536C0.199219 10.5654 0.829219 11.1954 1.59922 11.1954H12.7992C13.5692 11.1954 14.1992 10.5654 14.1992 9.79536V1.39536ZM12.7992 1.39536L7.19922 4.89536L1.59922 1.39536H12.7992ZM12.7992 9.79536H1.59922V2.79536L7.19922 6.29536L12.7992 2.79536V9.79536Z"
                      fill="#444859"
                    />
                  </svg>
                </div>
                <div className="w-1/2 h-[28px] md:h-[32px] lg:h-[40px] xl:h-[50px] 2xl:h-[60px] rounded-[11px] bg-white flex justify-center items-center">
                  <svg
                    className="xl:size-[20px]"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.27817 1.69529C3.32017 2.31829 3.42517 2.92729 3.59317 3.50829L2.75317 4.34829C2.46617 3.50829 2.28417 2.61929 2.22117 1.69529H3.27817ZM10.1802 10.1093C10.7752 10.2773 11.3842 10.3823 12.0002 10.4243V11.4673C11.0762 11.4043 10.1872 11.2223 9.34017 10.9423L10.1802 10.1093ZM3.95017 0.295288H1.50017C1.11517 0.295288 0.800171 0.610288 0.800171 0.995288C0.800171 7.56829 6.12717 12.8953 12.7002 12.8953C13.0852 12.8953 13.4002 12.5803 13.4002 12.1953V9.75229C13.4002 9.36729 13.0852 9.05229 12.7002 9.05229C11.8322 9.05229 10.9852 8.91229 10.2012 8.65329C10.1312 8.62529 10.0542 8.61829 9.98417 8.61829C9.80217 8.61829 9.62717 8.68829 9.48717 8.82129L7.94717 10.3613C5.96617 9.34629 4.34217 7.72929 3.33417 5.74829L4.87417 4.20829C5.07017 4.01229 5.12617 3.73929 5.04917 3.49429C4.79017 2.71029 4.65017 1.87029 4.65017 0.995288C4.65017 0.610288 4.33517 0.295288 3.95017 0.295288Z"
                      fill="#444859"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full h-[84px] lg:h-[100px] 2xl:h-[137px] rounded-2xl bg-Primarytint-3 absolute bottom-0 z-[-10]"></div>
          </div>
          <p className="font-iransansxbold text-sm lg:text-lg xl:text-[20px] text-naturalblack-1">
            با کسب و کارها ارتباط بگیر
          </p>
        </div>
      </div>
    </>
  );
};

export default Instructions;
