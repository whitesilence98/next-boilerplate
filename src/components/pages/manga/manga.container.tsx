import * as React from "react";

import styles from "./manga.module.scss";

import {TextField} from "@components/atoms";
// import {CardList} from "@components/organisms";

const Manga = ({mangaList}: any) => {
   return (
      <div className={styles["root"]}>
         <div className="flex pb-5 px-3 m-auto pt-5 text-sm flex-col max-w-screen-lg items-center">
            <div className="w-full flex gap-2 flex-wrap my-5 px-4">
               <TextField />
            </div>
            {/* <CardList items={mangaList} /> */}
         </div>
      </div>
   );
};

export default Manga;
