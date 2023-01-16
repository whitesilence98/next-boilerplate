import React from "react";
import {NextPage} from "next";

import {Seo} from "@components/atoms";
import {Favorite} from "@components/pages";

import {getAnime} from "@services/anime.services";

const SAMPLE_META = {
   title: "Favor",
   siteName: "Favor",
   description:
      "A starter for Next.js, Tailwind CSS, and TypeScript with Absolute Import, Seo, Link component, pre-configured with Husky",
   url: "https://tsnext-tw.thcl.dev",
   image: "https://theodorusclarence.com/favicon/large-og.jpg",
   type: "website",
   robots: "follow, index",
};

export const getStaticProps = async () => {
   const {data} = await getAnime();
   return {
      props: {data},
   };
};

const FavoritePage: NextPage = ({data}: any) => {
   return (
      <>
         <Seo {...SAMPLE_META} />
         <Favorite />
      </>
   );
};

export default FavoritePage;
