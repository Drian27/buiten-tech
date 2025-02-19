import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import SinglePortfolio from "@/components/Portfolio/SinglePortfolio";
import portfolioData from "@/components/Portfolio/portfolioData";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <div>
      
    </div>
    // <section id="about" className="pt-16 md:pt-20 lg:pt-28">
    //   <div className="container">
    //     <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
    //       <div className="w-full h-auto grid grid-cols-1 place-content-center justify-center gap-5 mb-10 flex-wrap items-center">
    //         <h1 data-aos="fade-up" className="mb-5 text-sm font-bold leading-tight text-center text-black dark:text-white sm:text-2xl sm:leading-tight md:text-3xl lg:text-4xl">
    //           Our Featured Portfolio
    //         </h1>
    //       </div>
    //       <div className="-mx-4 flex flex-wrap items-center">
    //         <div className="w-full px-4 lg:w-1/2">
    //           <div
    //             className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
    //             data-wow-delay=".15s"
    //           >
    //             <Image
    //               src="/images/about/about-image-2.svg"
    //               alt="about image"
    //               fill
    //               className="drop-shadow-three dark:hidden dark:drop-shadow-none"
    //             />
    //             <Image
    //               src="/images/about/about-image-2-dark.svg"
    //               alt="about image"
    //               fill
    //               className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
    //             />
    //           </div>
    //         </div>
    //         <div className="w-full px-4 lg:w-1/2">
    //           <div className="max-w-[470px]">
    //             <div className="mb-9">
    //               <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
    //                 Bug free code
    //               </h3>
    //               <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
    //                 At Buiten Technology, we deliver meticulously crafted code to
    //                 ensure flawless performance and reliability, empowering your
    //                 business to operate with confidence and peace of mind.
    //               </p>
    //             </div>
    //             <div className="mb-9">
    //               <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
    //                 Premier support
    //               </h3>
    //               <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
    //                 Our dedicated team provides unparalleled support, offering
    //                 expert guidance and proactive solutions tailored to your
    //                 unique challenges, so you can focus on what matters
    //                 most—growing your business.
    //               </p>
    //             </div>
    //             <div className="mb-1">
    //               <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
    //                 Next.js
    //               </h3>
    //               <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
    //                 Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
    //                 consectetur adipiscing elit setim.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
        
    //   </div>
    // </section>
  );
};

export default AboutSectionOne;
