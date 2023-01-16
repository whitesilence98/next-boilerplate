import React from "react";

interface IBannerProps {
   image?: string;
}

const Banner = ({image}: IBannerProps): JSX.Element => {
   return (
      <div>
         <div
            className="relative h-screen w-full flex items-center bg-cover bg-center"
            style={{
               backgroundImage: `url(${image})`,
            }}>
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75" />
            <main className="px-4 sm:px-6 lg:px-8 z-10">
               <h2 className="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl">
                  <span className="text-indigo-600 font-bold">Headline;</span> Here it is!
               </h2>
               <p className="mt-3 text-3xl text-white max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               </p>
               <div className="mt-5 sm:mt-8 sm:flex">
                  <div className="rounded-md shadow">
                     <a
                        href="#"
                        className="w-full flex items-center px-20 py-6 border border-transparent text-2xl leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out">
                        Get started
                     </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                     <a
                        href="#"
                        className="w-full flex items-center px-20 py-6 border border-transparent text-2xl leading-6 font-regular rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out">
                        Live demo
                     </a>
                  </div>
               </div>
            </main>
         </div>
      </div>
   );
};

Banner.defaultProps = {
   image: "https://placewaifu.com/image/1920/1080",
};

export {Banner};
