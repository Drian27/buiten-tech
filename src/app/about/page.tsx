import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Gallery from "@/components/GalleryAbout/Gallery";
import Carousel from "@/components/OwlCarouselAbout/Carousel";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Buiten - About",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description=""
        breadcrumbLinks={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />

      <section className="">
        

        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center mt-20 mb-28">
              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                  data-wow-delay=".15s"
                >
                  <Image
                    src="/images/about/about-image-2.svg"
                    alt="about image"
                    fill
                    className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                  />
                  <Image
                    src="/images/about/about-image-2-dark.svg"
                    alt="about image"
                    fill
                    className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="w-full">
                  <div className="mb-9">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      IMPACTS
                    </h3>
                    <h1 className="mb-10 text-3xl font-bold leading-tight dark:text-white sm:text-2xl sm:leading-tight md:text-4xl lg:text-xl xl:text-4xl md:leading-tight text-body-color">
                      Reason To Choose Us
                    </h1>
                  </div>
                  <div className="w-full mb-9">
                    <div className="flex items-center gap-3 mx-1 mb-4">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM7.3825 14.7925L3.7925 11.2025C3.4025 10.8125 3.4025 10.1825 3.7925 9.7925C4.1825 9.4025 4.8125 9.4025 5.2025 9.7925L8.0925 12.6725L14.9725 5.7925C15.3625 5.4025 15.9925 5.4025 16.3825 5.7925C16.7725 6.1825 16.7725 6.8125 16.3825 7.2025L8.7925 14.7925C8.4125 15.1825 7.7725 15.1825 7.3825 14.7925Z" fill="#23BD33"/>
                      </svg>
                      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        Discover the Excellence of 220 Human Resources
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mx-1 mb-4">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM7.3825 14.7925L3.7925 11.2025C3.4025 10.8125 3.4025 10.1825 3.7925 9.7925C4.1825 9.4025 4.8125 9.4025 5.2025 9.7925L8.0925 12.6725L14.9725 5.7925C15.3625 5.4025 15.9925 5.4025 16.3825 5.7925C16.7725 6.1825 16.7725 6.8125 16.3825 7.2025L8.7925 14.7925C8.4125 15.1825 7.7725 15.1825 7.3825 14.7925Z" fill="#23BD33"/>
                      </svg>
                      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        With over a decade of Experience
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mx-1 mb-4">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM7.3825 14.7925L3.7925 11.2025C3.4025 10.8125 3.4025 10.1825 3.7925 9.7925C4.1825 9.4025 4.8125 9.4025 5.2025 9.7925L8.0925 12.6725L14.9725 5.7925C15.3625 5.4025 15.9925 5.4025 16.3825 5.7925C16.7725 6.1825 16.7725 6.8125 16.3825 7.2025L8.7925 14.7925C8.4125 15.1825 7.7725 15.1825 7.3825 14.7925Z" fill="#23BD33"/>
                      </svg>
                      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        Serving over 150 Happy and Resolved Clients
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mx-1 mb-4">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM7.3825 14.7925L3.7925 11.2025C3.4025 10.8125 3.4025 10.1825 3.7925 9.7925C4.1825 9.4025 4.8125 9.4025 5.2025 9.7925L8.0925 12.6725L14.9725 5.7925C15.3625 5.4025 15.9925 5.4025 16.3825 5.7925C16.7725 6.1825 16.7725 6.8125 16.3825 7.2025L8.7925 14.7925C8.4125 15.1825 7.7725 15.1825 7.3825 14.7925Z" fill="#23BD33"/>
                      </svg>
                      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        We Provide Premier Services
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mx-1 mb-4">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM7.3825 14.7925L3.7925 11.2025C3.4025 10.8125 3.4025 10.1825 3.7925 9.7925C4.1825 9.4025 4.8125 9.4025 5.2025 9.7925L8.0925 12.6725L14.9725 5.7925C15.3625 5.4025 15.9925 5.4025 16.3825 5.7925C16.7725 6.1825 16.7725 6.8125 16.3825 7.2025L8.7925 14.7925C8.4125 15.1825 7.7725 15.1825 7.3825 14.7925Z" fill="#23BD33"/>
                      </svg>
                      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        Efficient Time and Cost-effectiveness in Recruitment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center mt-20 mb-28">
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <h4 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    OUR VALUE
                  </h4>
                  <h1 className="mb-10 text-3xl font-bold leading-tight dark:text-white sm:text-2xl sm:leading-tight md:text-4xl lg:text-xl xl:text-4xl md:leading-tight text-body-color">
                    Buiten Tech
                  </h1>
                </div>
                <div className="mb-9">
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed mb-5">
                    “Embrace the Spirit of Always Improving You”
                  </p>
                  <p className="text-sm font-medium leading-relaxed text-body-color sm:text-sm sm:leading-relaxed mb-5">
                    "It's one of our greatest strengths. Our supportive work culture, filled with positive affirmations, embodies our love for ensuring our talents are always motivated to grow. One dream, one stride forward together".
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/about/about-image-2.svg"
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src="/images/about/about-image-2-dark.svg"
                  alt="about image"
                  fill
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-dark w-full h-auto">
          <div className="grid grid-cols-4 items-center gap-10 p-16 mb-28">
            <div className="card bg-white shadow-lg w-full h-[170px] rounded-lg p-14">
              <div className="card-body">
                <div className="w-full text-center grid items-center">
                  <h1 className="text-black text-4xl font-semibold mb-2">456+</h1>
                  <p className="text-[#777] text-sm font-normald">Projects</p>
                </div>
              </div>
            </div>

            <div className="card bg-white shadow-lg w-full h-[170px] rounded-lg p-14">
              <div className="card-body">
                <div className="w-full text-center grid items-center">
                  <h1 className="text-black text-4xl font-semibold mb-2">456+</h1>
                  <p className="text-[#777] text-sm font-normald">Clients</p>
                </div>
              </div>
            </div>

            <div className="card bg-white shadow-lg w-full h-[170px] rounded-lg p-14">
              <div className="card-body">
                <div className="w-full text-center grid items-center">
                  <h1 className="text-black text-4xl font-semibold mb-2">456+</h1>
                  <p className="text-[#777] text-sm font-normald">Awards</p>
                </div>
              </div>
            </div>

            <div className="card bg-white shadow-lg w-full h-[170px] rounded-lg p-14">
              <div className="card-body">
                <div className="w-full text-center grid items-center">
                  <h1 className="text-black text-4xl font-semibold mb-2">456+</h1>
                  <p className="text-[#777] text-sm font-normald">Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="grid grid-cols-1 justify-center text-center items-center mb-28">
            <div className="mb-10">
              <h1 className="text-white text-3xl font-semibold mb-3">Gallery</h1>
              <p className="text-white text-sm font-normal">Activity in Buiten Tech</p>
            </div>
            <div className="w-full h-full">
              {/* Content Galeri */}
              <Gallery />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="grid grid-cols-1 justify-center text-center items-center mb-1">
            <h1 className="text-white text-3xl font-semibold mb-3">Our Partner</h1>
            <p className="text-white text-sm font-normal">Buiten Tech Partnership</p>
          </div>
        </div>
        <div className="h-full w-full">
          {/* Carousel Our Partner */}
          <Carousel />
        </div>
      </section>

      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
