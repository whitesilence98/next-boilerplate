import React from "react";
import {NextPage} from "next";

import {Manga} from "@components/pages";

import {getManga} from "@services/manga.services";

export const getStaticProps = async () => {
   const {data} = await getManga();
   return {
      props: {data},
   };
};
const MangaPage: NextPage = ({data}: any) =>
   // & Partial<typeof data>
   {
      return <Manga mangaList={data} />;
   };

export default MangaPage;
