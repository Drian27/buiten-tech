import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <>
    <div className="w-full h-full lg:h-[300px] flex items-center justify-center text-center rounded-md bg-primary bg-opacity-10 text-primary">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div data-aos="zoom-in" className="p-8 sm:p-11 lg:p-4 xl:p-2 mb-8 lg:mt-11 mt-10">
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
          <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
    </>
  


    // <div className="w-full h-full grid justify-center text-center rounded-md bg-primary bg-opacity-10 text-primary">
    //   <div className="wow fadeInUp" data-wow-delay=".15s">
    //   {/* <div className="flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary shadow-lg">
    //   {icon}
    // </div> */}
    // {/* <div className="w-full flex justify-center text-center">
    //   <img className="img-service-cs" src="/images/portfolio/ibukota.png" alt=""></img>
    // </div> */}
    //     <div className="grup-text-service">
    //         <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
    //           {title}
    //         </h3>
    //         <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
    //           {paragraph}
    //         </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SingleFeature;
