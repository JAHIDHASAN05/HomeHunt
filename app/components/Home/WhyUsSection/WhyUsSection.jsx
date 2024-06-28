import { AppartMentIcon, HomeIcon } from "../Banner/Banner";

export default function WhyUsSection() {
  return (
    <div className="my-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className=" font-bold text-3xl  uppercase">Why You Should Work With Us</h2>
          <p className="mt-2 text-base leading-8  tracking-tight  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="mt-10">
          <div className=" px-16 space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className=" flex flex-col justify-center items-center gap-2 ">

              <div className=" flex items-center justify-center h-12 w-12 rounded-md bg-white border border-black text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="Black" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>

              </div>
              <p className=" text-md leading-6 text-center font-bold ">Wide Range of Properties</p>

              <p className="text-center text-[12px] ">
                We offer expert legal help for all related property <br /> items in Dubai.
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center gap-2 ">

              <div className=" flex items-center justify-center h-12 w-12 rounded-md bg-white border border-black text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="Black" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                </svg>

              </div>
              <p className=" text-md leading-6  text-center font-bold ">Buy or Rent Homes</p>

              <p className="text-center text-[12px] ">
                We sell your home at the best market price and very <br />
                quickly as well.
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center gap-2 ">

              <div className=" flex items-center justify-center h-12 w-12 rounded-md bg-white border border-black text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>

              </div>
              <p className=" text-md leading-6 text-center  font-bold ">Trusted by Thousands</p>

              <p className="text-center text-[12px] ">
                We offer you free consultancy to get a loan for your <br />
                new home.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}