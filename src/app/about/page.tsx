import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Gallery from "@/components/GalleryAbout/Gallery";
import Carousel from "@/components/OwlCarouselAbout/Carousel";
import FiveStars from "@/components/star/FiveStars";

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
      {/* <Breadcrumb
        pageName="About"
        description=""
        breadcrumbLinks={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      /> */}

      <section className="">
        <div className="container margin-top-cs">
          <div className="mb-28 mt-20 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2">
                <div className="w-full content-text-about">
                    <h1 data-aos="fade-up" className="mb-5 text-3xl font-bold text-center lg:text-start leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                      Buiten Tech
                    </h1>
                    <p data-aos="zoom-in" data-aos-delay="300" className="text-base font-medium text-center lg:text-start leading-relaxed text-body-color sm:text-lg sm:leading-relaxed mb-3">
                      Berdiri sejak 2020, Buiten adalah agensi yang berfokus pada pengembangan digital dan solusi teknologi inovatif. Kami berkomitmen untuk memberikan layanan yang handal, mutakhir, dan dirancang khusus untuk memenuhi kebutuhan bisnis pelanggan kami.
                    </p>
                    <p data-aos="zoom-in" data-aos-delay="700" className="text-base font-medium text-center lg:text-start leading-relaxed text-body-color sm:text-lg sm:leading-relaxed mb-3">
                      Dengan dukungan para profesional yang telah berpengalaman mengelola dan mengembangkan solusi IT Buiten Tech adalah software house dengan pengalaman lebih dari 4 tahun, menghadirkan solusi digital inovatif bagi bisnis dan masyarakat di Indonesia serta membidik pasar global.
                    </p>
                  <div className="flex items-center gap-5 text-center lg:justify-start justify-center">
                    <button data-aos="fade-up" data-aos-delay="300" className="lg:w-[190px] md:w-[190px] h-[60px] w-full rounded-lg bg-primary px-5 py-2 text-[12px] lg:text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Build your first business
                    </button>
                    <div data-aos="fade-up" data-aos-delay="700" className="mx-3">
                      <FiveStars />
                      <p className="text-base text-[13px] font-medium leading-relaxed text-white">Customer is very happy </p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="w-full px-4 -mx-4 lg:w-1/2">
              <div
                data-aos="zoom-in" data-aos-delay="800"
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/about/bg-about-3.png"
                  alt="about image"
                  fill
                  className="object-contain image-about w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="-mx-4 mb-28 mt-20 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                data-aos="zoom-in" data-aos-delay="300"
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/about/bg-about-2.png"
                  alt="about image"
                  fill
                  className="object-contain image-about w-full h-full"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="w-full">
                <div className="mb-9">
                  <div data-aos="fade-up" data-aos-delay="500" className="flex items-center justify-center lg:justify-start gap-3 mb-5">
                    <hr className="hr-cs-about" />
                    <h4 className="text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      IMPACTS
                    </h4>
                  </div>
                  <h1 data-aos="fade-up" data-aos-delay="800" className="mb-10 text-3xl text-center lg:text-start font-bold leading-tight text-body-color dark:text-white sm:text-2xl sm:leading-tight md:text-4xl md:leading-tight lg:text-xl xl:text-4xl">
                    Reason To Choose Us
                  </h1>
                </div>
                <div data-aos="zoom-in" data-aos-delay="1000" className="mb-9 w-full">
                  <div className="mx-1 mb-4 flex items-center md:justify-center lg:justify-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM7.3825 14.7925L3.7925 11.2025C3.4025 10.8125 3.4025 10.1825 3.7925 9.7925C4.1825 9.4025 4.8125 9.4025 5.2025 9.7925L8.0925 12.6725L14.9725 5.7925C15.3625 5.4025 15.9925 5.4025 16.3825 5.7925C16.7725 6.1825 16.7725 6.8125 16.3825 7.2025L8.7925 14.7925C8.4125 15.1825 7.7725 15.1825 7.3825 14.7925Z"
                        fill="#23BD33"
                      />
                    </svg>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Discover the Excellence of 220 Human Resources
                    </p>
                  </div>
                  <div className="mx-1 mb-4 flex items-center md:justify-center lg:justify-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM7.3825 14.7925L3.7925 11.2025C3.4025 10.8125 3.4025 10.1825 3.7925 9.7925C4.1825 9.4025 4.8125 9.4025 5.2025 9.7925L8.0925 12.6725L14.9725 5.7925C15.3625 5.4025 15.9925 5.4025 16.3825 5.7925C16.7725 6.1825 16.7725 6.8125 16.3825 7.2025L8.7925 14.7925C8.4125 15.1825 7.7725 15.1825 7.3825 14.7925Z"
                        fill="#23BD33"
                      />
                    </svg>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      With over a decade of Experience
                    </p>
                  </div>
                  <div className="mx-1 mb-4 flex items-center md:justify-center lg:justify-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM7.3825 14.7925L3.7925 11.2025C3.4025 10.8125 3.4025 10.1825 3.7925 9.7925C4.1825 9.4025 4.8125 9.4025 5.2025 9.7925L8.0925 12.6725L14.9725 5.7925C15.3625 5.4025 15.9925 5.4025 16.3825 5.7925C16.7725 6.1825 16.7725 6.8125 16.3825 7.2025L8.7925 14.7925C8.4125 15.1825 7.7725 15.1825 7.3825 14.7925Z"
                        fill="#23BD33"
                      />
                    </svg>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Serving over 150 Happy and Resolved Clients
                    </p>
                  </div>
                  <div className="mx-1 mb-4 flex items-center md:justify-center lg:justify-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM7.3825 14.7925L3.7925 11.2025C3.4025 10.8125 3.4025 10.1825 3.7925 9.7925C4.1825 9.4025 4.8125 9.4025 5.2025 9.7925L8.0925 12.6725L14.9725 5.7925C15.3625 5.4025 15.9925 5.4025 16.3825 5.7925C16.7725 6.1825 16.7725 6.8125 16.3825 7.2025L8.7925 14.7925C8.4125 15.1825 7.7725 15.1825 7.3825 14.7925Z"
                        fill="#23BD33"
                      />
                    </svg>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      We Provide Premier Services
                    </p>
                  </div>
                  <div className="mx-1 mb-4 flex items-center md:justify-center lg:justify-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM7.3825 14.7925L3.7925 11.2025C3.4025 10.8125 3.4025 10.1825 3.7925 9.7925C4.1825 9.4025 4.8125 9.4025 5.2025 9.7925L8.0925 12.6725L14.9725 5.7925C15.3625 5.4025 15.9925 5.4025 16.3825 5.7925C16.7725 6.1825 16.7725 6.8125 16.3825 7.2025L8.7925 14.7925C8.4125 15.1825 7.7725 15.1825 7.3825 14.7925Z"
                        fill="#23BD33"
                      />
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

        <div className="h-auto w-full bg-white dark:bg-gray-dark">
          <div className="container">
            <div className="h-auto w-full mb-28 grid grid-cols-12 items-center gap-5 lg:gap-10 p-8 lg:p-20">
              <div data-aos="zoom-in" data-aos-delay="300" className="col-span-12 md:col-span-6 lg:col-span-3 card h-[170px] w-full rounded-lg bg-white p-14 shadow-lg">
                <div className="card-body">
                  <div className="grid w-full items-center text-center justify-center">
                    <h1 className="mb-2 text-4xl font-semibold text-black">
                      30+
                    </h1>
                    <p className="font-normald text-sm text-[#777]">Projects</p>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-delay="500" className="col-span-12 md:col-span-6 lg:col-span-3 card h-[170px] w-full rounded-lg bg-white p-14 shadow-lg">
                <div className="card-body">
                  <div className="grid w-full items-center text-center">
                    <h1 className="mb-2 text-4xl font-semibold text-black">
                      20+
                    </h1>
                    <p className="font-normald text-sm text-[#777]">Clients</p>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-delay="700" className="col-span-12 md:col-span-6 lg:col-span-3 card h-[170px] w-full rounded-lg bg-white p-14 shadow-lg">
                <div className="card-body">
                  <div className="grid w-full items-center text-center">
                    <h1 className="mb-2 text-4xl font-semibold text-black">
                      50+
                    </h1>
                    <p className="font-normald text-sm text-[#777]">Awards</p>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-delay="900" className="col-span-12 md:col-span-6 lg:col-span-3 card h-[170px] w-full rounded-lg bg-white p-14 shadow-lg">
                <div className="card-body">
                  <div className="grid w-full items-center text-center">
                    <h1 className="mb-2 text-4xl font-semibold text-black">
                    10+
                    </h1>
                    <p className="font-normald text-sm text-[#777]">Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="-mx-4 mb-28 mt-20 flex flex-wrap items-center">
            <div className="w-full px-5 lg:px-16 lg:w-1/2">
              <div className="w-full lg:max-w-[470px]">
                <div className="mb-9">
                  <div data-aos="zoom-in" data-aos-delay="300" className="flex items-center justify-center lg:justify-start gap-3 mb-5">
                    <hr className="hr-cs-about" />
                    <h4 className="text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      OUR VALUE
                    </h4>
                  </div>
                  <h1 data-aos="zoom-in" data-aos-delay="500" className="mb-10 text-3xl text-center lg:text-start font-bold leading-tight text-body-color dark:text-white sm:text-2xl sm:leading-tight md:text-4xl md:leading-tight lg:text-xl xl:text-4xl">
                    Buiten Tech
                  </h1>
                </div>
                <div className="mb-9">
                  <p data-aos="zoom-in" data-aos-delay="800" className="mb-5 text-base text-center lg:text-start font-medium leading-relaxed text-white sm:text-lg sm:leading-relaxed">
                    “Embrace the Spirit of Always Improving You”
                  </p>
                  <p data-aos="zoom-in" data-aos-delay="1000" className="mb-5 text-sm text-center lg:text-start font-medium leading-relaxed text-body-color sm:text-sm sm:leading-relaxed">
                    &quot;It&apos;s one of our greatest strengths. Our
                    supportive work culture, filled with positive affirmations,
                    embodies our love for ensuring our talents are always
                    motivated to grow. One dream, one stride forward together.&quot;
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-0 lg:px-4 lg:w-1/2">
              <div
                data-aos="zoom-in"
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/about/bg-about-1.png"
                  alt="about image"
                  fill
                  className="object-contain image-about w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="mb-28 grid grid-cols-1 items-center justify-center text-center">
            <div className="mb-10">
              <h1 data-aos="fade-up" data-aos-delay="300" className="mb-3 text-3xl font-semibold text-white">
                Gallery
              </h1>
              <p data-aos="fade-up" data-aos-delay="500" className="text-sm font-normal text-white">
                Activity in Buiten Tech
              </p>
            </div>
            <div className="h-full w-full">
              {/* Content Galeri */}
              <Gallery />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="mb-1 grid grid-cols-1 items-center justify-center text-center">
            <h1 data-aos="fade-up" data-aos-delay="300" className="mb-3 text-3xl font-semibold text-white">
              Our Partner
            </h1>
            <p data-aos="fade-up" data-aos-delay="500" className="text-sm font-normal text-white">
              Buiten Tech Partnership
            </p>
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
