import React from "react";
import {NextPage} from "next";

import {Seo} from "@components/atoms";
import {Anime} from "@components/pages";

import {getAnime} from "@services/anime.services";

const SAMPLE_META = {
   title: "Anime",
   siteName: "Anime",
   description:
      "A starter for Next.js, Tailwind CSS, and TypeScript with Absolute Import, Seo, Link component, pre-configured with Husky",
   url: "https://play-lh.googleusercontent.com/CIQKgzbu5GuBvzZhevDvzWCF2QLbhn-p5lUV_Zy6g8pmp5vlaAYkSO6zxyeFGGTBdUg",
   image: "https://play-lh.googleusercontent.com/CIQKgzbu5GuBvzZhevDvzWCF2QLbhn-p5lUV_Zy6g8pmp5vlaAYkSO6zxyeFGGTBdUg",
   type: "website",
   robots: "follow, index",
};

export const getStaticProps = async () => {
   const {data} = await getAnime();
   return {props: {data}};
};
const AnimePage: NextPage = ({data}: any) => {
   return (
      <>
         <Seo {...SAMPLE_META} />
         <Anime animeList={data} />
      </>
   );
};

export default AnimePage;
