"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const VisiMisi = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Bagian Visi */}
        <SectionTitle
          title="Visi"
          paragraph="To lead the way in advancing inclusive technology, empowering
              individuals through education and innovation, and fostering a
              thriving, globally competitive society."
          center
          mb="40px"
        />

        {/* Bagian Misi */}
        <SectionTitle
          title="Misi"
          paragraph="Empowering all sectors with equitable access to technology-driven
              training and education, enhancing digital skills and advancing
              human resource excellence."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            ></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default VisiMisi;
