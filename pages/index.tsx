import React from "react";
import {NextPage} from "next";

import {BASE_URL} from "@constants";

import {Seo} from "@components/atoms";
import {Home} from "@components/pages";

import axios from "axios";
// import {getAnime} from "@services/anime.services";

const SAMPLE_META = {
   title: "Home",
   siteName: "Home",
   description:
      "A starter for Next.js, Tailwind CSS, and TypeScript with Absolute Import, Seo, Link component, pre-configured with Husky",
   url: "https://tsnext-tw.thcl.dev",
   image: "https://theodorusclarence.com/favicon/large-og.jpg",
   type: "website",
   robots: "follow, index",
};

const SEARCH_BASE_URL = `${BASE_URL}/product`;

export const getStaticProps = async () => {
   const data = await axios.get(SEARCH_BASE_URL);
   return {
      props: {data},
   };
};

const HomePage: NextPage = ({data}: any) => {
   console.log("🐳 Win -> {data}", {data});
   return (
      <>
         <Seo {...SAMPLE_META} />
         <Home animeList={[]} />
      </>
   );
};

export default HomePage;
