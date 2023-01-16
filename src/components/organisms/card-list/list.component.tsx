import React from "react";

import styles from "./list.module.scss";

import {CardItem, CardLoading} from "@components/molecules";

import {motion} from "framer-motion";

interface IList {
   //   items: Post[];
   items: any;
   itemsPerRow?: number;
}

const CardList = ({items, itemsPerRow}: IList): JSX.Element => {
   const [loading, setLoading] = React.useState(true);

   React.useEffect(() => {
      if (items.length) {
         setTimeout(() => setLoading(false), 100);
      }
   }, [items]);

   if (!items.length) return <></>;

   if (loading)
      return (
         <div className={styles["root"]}>
            <div className={styles["item-wrapper"]}>
               {new Array(8).fill(1).map((value, index) => (
                  <CardLoading key={index.toString()} />
               ))}
            </div>
         </div>
      );

   return (
      <div className={styles["root"]}>
         <motion.div
            className={styles["item-wrapper"]}
            initial="hidden"
            animate="show"
            variants={variants}>
            {items.map((item: unknown, index: number) => {
               return <CardItem key={index.toString()} item={item} index={index} />;
            })}
         </motion.div>
      </div>
   );
};

CardList.defaultProps = {
   itemsPerRow: 4,
};

const variants = {
   hidden: {opacity: 0},
   show: {
      opacity: 1,
      transition: {
         staggerChildren: 0.5,
      },
   },
};

export default CardList;
