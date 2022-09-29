import * as React from "react";

import styles from "./anime.module.scss";

import {CardList} from "@components/organisms";

const Anime = ({animeList}: any) => {
   return (
      <div className={styles["root"]}>
         <div className="flex pb-5 px-3 m-auto pt-5 text-sm flex-col max-w-screen-lg items-center">
            <CardList items={animeList} />
         </div>
      </div>
   );
};

export default Anime;
