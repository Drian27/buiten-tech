import { Metadata } from "next";
import SinglePortfolio from "@/components/Portfolio/SinglePortfolio";
import portfolioData from "@/components/Portfolio/portfolioData";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Buiten - Portfolio",
  description: "Explore our diverse portfolio showcasing our expertise and projects.",
};

const Portfolio = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container mb-20">
          <div className="w-full h-full grid grid-cols-1 text-center justify-center mb-16">
            <div className="">
              <h1 data-aos="fade-up" data-aos-delay="300" className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">Portfolio</h1>
              <p data-aos="fade-up" data-aos-delay="500" className="text-base font-medium leading-relaxed text-body-color">Client trust is key for us in collaborating and realizing their initiatives.</p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="800" className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mb-16 gap-8 lg:gap-10">
            {portfolioData.map((portfolio) => (
                <div
                  key={portfolio.id}
                  className="w-full lg:px-4 mb-10"
                >
                  <SinglePortfolio portfolio={portfolio} />
                </div>
              ))}
          </div>
          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;