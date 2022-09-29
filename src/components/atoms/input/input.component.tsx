/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "./input.module.scss";

interface ITextFieldProps {
   value?: string;
}

const TextField = ({...rest}: ITextFieldProps): JSX.Element => {
   return (
      <form className={styles["search"]}>
         <input type="text" className={styles["search__input"]} placeholder="Search" {...rest} />
         {/* <img
          src="https://png.icons8.com/material-outlined/50/969090/search.png"
          className={styles['search__icon']}
          alt="search"
        /> */}
      </form>
   );
};

export default TextField;
