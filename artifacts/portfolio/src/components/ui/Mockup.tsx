import React from "react";

export function LaptopMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-full drop-shadow-2xl">
      <div className="relative pt-[62%] w-full bg-black rounded-t-[1.5rem] md:rounded-t-[2rem] border-[8px] md:border-[12px] border-black shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-24 h-4 md:h-5 bg-black rounded-b-xl z-20"></div>
        <div className="absolute inset-0 bg-white">
          {children}
        </div>
      </div>
      <div className="relative w-[110%] -ml-[5%] h-4 md:h-6 bg-gray-300 rounded-b-xl shadow-md border-t border-gray-400 flex justify-center z-10">
          <div className="w-1/4 h-2 md:h-3 bg-gray-400 rounded-b-md"></div>
      </div>
    </div>
  );
}

export function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto border-black bg-black border-[8px] md:border-[12px] rounded-[2.5rem] h-[400px] md:h-[500px] w-[200px] md:w-[240px] drop-shadow-2xl overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-24 h-5 md:h-6 bg-black rounded-b-2xl z-20"></div>
      <div className="w-full h-full bg-white relative">
          {children}
      </div>
    </div>
  );
}

export function IsometricMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative group w-full pt-[65%] w-full mx-auto pb-10 perspective-[2000px]">
      <div className="absolute inset-0 top-4 bottom-10 left-4 right-8 transform rotateX(15deg) rotateY(-20deg) rotateZ(5deg) group-hover:rotateX(10deg) group-hover:rotateY(-15deg) transition-transform duration-700 ease-out shadow-[20px_20px_0px_rgba(0,0,0,1)] border-[4px] border-black bg-white rounded-xl overflow-hidden flex flex-col">
          <div className="w-full h-6 md:h-8 bg-gray-200 border-b-[3px] border-black flex items-center px-3 gap-1.5 md:gap-2 shrink-0">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56] border-[2px] border-black"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e] border-[2px] border-black"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f] border-[2px] border-black"></div>
          </div>
          <div className="flex-1 relative bg-white">
            {children}
          </div>
      </div>
    </div>
  );
}
