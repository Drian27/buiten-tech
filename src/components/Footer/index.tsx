"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 px-4">
          {/* Kolom 1: Logo dan Tentang Perusahaan (Lebih Lebar) */}
          <div className="lg:col-span-2 max-w-[500px]">
            <Link href="/" className="mb-6 block">
              <Image src="/images/logo/logo-buiten.png" alt="logo" width={160} height={40} />
            </Link>
            <p className="text-base text-body-color dark:text-body-color-dark mb-5">
              Kami adalah software house yang berdiri sejak tahun 2025 dan bergerak di bidang perangkat lunak.
            </p>
            <div className="flex items-center mb-5">
                <a
                  href="/"
                  aria-label="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="/"
                  aria-label="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                {/* <a
                  href="/"
                  aria-label="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    className="fill-current"
                  >
                    <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                  </svg>
                </a> */}
                <a
                  href="https://www.instagram.com/buitentech.info/" 
                  aria-label="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
              >
                  <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                  >
                      <rect
                          x="1.5"
                          y="1.5"
                          width="14"
                          height="14"
                          rx="4"
                          ry="4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                      />

                      <circle
                          cx="8.5"
                          cy="8"
                          r="3.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                      />

                      <circle
                          cx="13"
                          cy="4"
                          r="1"
                          fill="currentColor"
                      />
                  </svg>
              </a>
                <a
                  href="https://www.linkedin.com/in/buiten-tech-92059b352/"
                  aria-label="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    className="fill-current"
                  >
                    <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                  </svg>
                </a>
            </div>
          </div>

          {/* Kolom 2: Layanan Kami */}
          <div>
            <h2 className="mb-6 text-lg font-bold text-black dark:text-white">Layanan Kami</h2>
            <ul className="space-y-4">
              {["Website", "Mobile Apps", "System Digital", "Consultan"].map((service) => (
                <li key={service}>
                  <Link href="/" className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Produk */}
          <div>
            <h2 className="mb-6 text-lg font-bold text-black dark:text-white">Produk</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                  Photobin.id
                </Link>
              </li>
              <li>
                <Link href="https://pixelversemoment.com" target="_blank" className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                  pixelversemoment.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Portfolio */}
          <div>
            <h2 className="mb-6 text-lg font-bold text-black dark:text-white">Portfolio</h2>
            <ul className="space-y-4">
              {["Website", "Mobile Apps", "System Digital"].map((portfolio) => (
                <li key={portfolio}>
                  <Link href="/" className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    {portfolio}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 5: Cerita Kami */}
          <div>
            <h2 className="mb-6 text-lg font-bold text-black dark:text-white">Cerita Kami</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/portfolio" className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/buitentech.info" target="_blank" className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                  Social Media
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 6: Hubungi */}
          <div>
            <h2 className="mb-6 text-lg font-bold text-black dark:text-white">Hubungi</h2>
            <ul className="space-y-4">
              <li>
                <Link href="https://wa.me/6289638233061" target="_blank" className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                  +62 896-3823-3061
                </Link>
              </li>
              <li>
                <Link href="https://buitentech.co.id" target="_blank" className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                  Buiten.co.id
                </Link>
              </li>
              <li>
                <Link href="mailto:infobuitentech@gmail.com" target="_blank" className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                  infobuitentech@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Garis Pembatas */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183] mt-10"></div>

        {/* Copyright */}
        <div className="py-8 text-center">
          <p className="text-base text-body-color dark:text-white">©2025 PT Buiten Technology. Seluruh Hak Cipta.</p>
        </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
