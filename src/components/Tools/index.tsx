import React from "react";
import PIcon from "./CardIcon";

export default function Tools() {
  return (
    <div className="container mx-auto py-8">
      <h2 data-aos="zoom-in" className="text-center mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-3xl lg:text-4xl md:leading-tight lg:mt-8 mt-3">
        Technology & Tools That We Use
      </h2>
      <div className="flex items-center justify-center overflow-hidden mb-14">
        <div className="container m-auto mt-[50px] grid grid-cols-3 place-content-center gap-x-[20px] gap-y-[26px] lg:grid-cols-8 xl:grid-cols-9">
          <PIcon PIcon="reactjs.svg" Language="" />
          <PIcon PIcon="android.svg" Language="" />
          <PIcon PIcon="java.svg" Language="" />
          <PIcon PIcon="flutter.svg" Language="" />
          <PIcon PIcon="swift.svg" Language="" />
          <PIcon PIcon="kotlin.svg" Language="" />
          <PIcon PIcon="javascript.svg" Language="" />
          <PIcon PIcon="python.svg" Language="" />
          <PIcon PIcon="golang.svg" Language="" />
          <PIcon PIcon="nodejs.svg" Language="" />
          <PIcon PIcon="nextjs.svg" Language="" />
          <PIcon PIcon="php.svg" Language="" />
          <PIcon PIcon="vuejs.svg" Language="" />
          <PIcon PIcon="laravel.svg" Language="" />
          <PIcon PIcon="nuxtjs.svg" Language="" />
          <PIcon PIcon="tailwind.svg" Language="" />
          <PIcon PIcon="vite.svg" Language="" />
          <PIcon PIcon="bootstrap.svg" Language="" />
          <PIcon PIcon="MUI.svg" Language="" />
          <PIcon PIcon="figma.svg" Language="" />
          <PIcon PIcon="typescript.svg" Language="" />
          <PIcon PIcon="mongo.svg" Language="" />
          <PIcon PIcon="angular.svg" Language="" />
          <PIcon PIcon="fastapi.svg" Language="" />
          <PIcon PIcon="ruby.svg" Language="" />
          <PIcon PIcon="unity.svg" Language="" />
          <PIcon PIcon="nest.svg" Language="" />
          <PIcon PIcon="unreal.svg" Language="" />
          <PIcon PIcon="dart.svg" Language="" />
          <PIcon PIcon="dotnet.svg" Language="" />
        </div>
      </div>
    </div>
  );
}
