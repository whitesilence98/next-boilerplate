import React from 'react';
import {NextPage} from 'next';

import {Anime} from '@components/pages';

import {getAnime} from '@services/anime.services';

export const getStaticProps = async () => {
  const {data} = await getAnime();
  return {
    props: {data},
  };
};
const AnimePage: NextPage = ({data}: any) => {
  return <Anime animeList={data} />;
};

export default AnimePage;
