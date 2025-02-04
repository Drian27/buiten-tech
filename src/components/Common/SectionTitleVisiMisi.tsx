const SectionTitleVisiMisi = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""} rounded-xl w-full h-[200px]`}
    >
      <h2 className="mb-4 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-3xl">
        {title}
      </h2>
      <p className="text-sm !leading-relaxed text-body-color md:text-lg lg:text-[16px] mb-10">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitleVisiMisi;