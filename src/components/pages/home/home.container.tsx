import * as React from 'react';

import styles from './home.module.scss';

import {Banner} from '@components/molecules';
import {CardList} from '@components/organisms';

const Home = ({animeList}: any) => {
  return (
    <div className={styles['root']}>
      <Banner />
      <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
        <CardList items={animeList} />
      </div>
    </div>
  );
};

export default Home;
