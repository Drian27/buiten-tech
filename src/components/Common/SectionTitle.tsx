const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""} rounded-xl w-full p-5 mb-5`}>
        <h2 className="mb-5 text-sm font-bold leading-tight text-center text-black dark:text-white sm:text-2xl sm:leading-tight md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="text-sm !leading-relaxed text-body-color md:text-lg mb-10">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
