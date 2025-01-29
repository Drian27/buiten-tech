import React from "react";
import PIcon from "./CardIcon";

export default function Tools() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
        Technology & Tools That We Use
      </h2>
      <div className="flex items-center justify-center overflow-hidden">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
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
          <PIcon PIcon="redux.svg" Language="" />
          <PIcon PIcon="tailwind.svg" Language="" />
          <PIcon PIcon="vite.svg" Language="" />
          <PIcon PIcon="bootstrap.svg" Language="" />
          <PIcon PIcon="vercel.svg" Language="" />
          <PIcon PIcon="MUI.svg" Language="" />
          <PIcon PIcon="git.svg" Language="" />
          <PIcon PIcon="figma.svg" Language="" />
        </div>
      </div>
    </div>
  );
}
