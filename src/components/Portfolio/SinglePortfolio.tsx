import { Portfolio } from "@/types/portfolio";
import Image from "next/image";
import Link from "next/link";

const SinglePortfolio = ({ portfolio }: { portfolio: Portfolio }) => {
  const { title, image, paragraph, name, company, category, type, tech_stack, publishDate } = portfolio;
  return (
    <>
      <div className="group relative overflow-hidden bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark rounded-lg">
        {/* <Link
          href="/blog-details"
          className="relative block aspect-[37/22] w-full"
        >
          <Image src={image} alt="image" className="object-cover" fill />
        </Link> */}
        <Link href={`/portfolio-details?id=${portfolio.id}`} className="relative block aspect-[37/22] w-full">
          <Image src={image} alt="image" className="object-cover" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`/portfolio-details?id=${portfolio.id}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph.length > 200
              ? `${paragraph.slice(0, 200)}...`
              : paragraph
            }
          </p>
          <div className="w-full text-center flex items-center">
              <div className="w-full">
                {/* <Link href={`/portfolio-details/${portfolio.id}`} className="rounded-xl p-5 bg-primary bg-opacity-10 text-primary text-sm">Read More</Link> */}
                <Link href={`/portfolio-details?id=${portfolio.id}`} className="rounded-xl p-5 bg-primary bg-opacity-10 text-primary text-sm">Read More</Link>
              </div>
            </div>
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              {/* <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={author.image} alt="author" fill />
                </div>
              </div> */}
            {/* <div className="inline-block">
              <p className="text-xs text-body-color">{publishDate}</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePortfolio;
