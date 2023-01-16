import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import styles from "./favorite.module.scss";

import {Button} from "@components/atoms";
import {CardList} from "@components/organisms";

import {getName, setTheme} from "@my-store/favorite";

import {useBroadcastChannel} from "hooks/broadcast.hook";

const Favorite = () => {
   const broadcast = useBroadcastChannel("favorite-channel");
   const [state, setState] = useState({name: "light"});

   const handleBroadcast = useCallback((e: any) => {
      setState(prevState => ({...prevState, name: e.data}));
   }, []);

   useEffect(() => {
      if (broadcast) {
         broadcast.onmessage = handleBroadcast;
      }
   }, [broadcast, handleBroadcast]);

   const dispatch = useDispatch();
   const name = useSelector(getName);

   const handle = () => {
      dispatch(setTheme({name: name === "dark" ? "light" : "dark"}));
      broadcast.postMessage(name);
   };

   return (
      <div className={styles["root"]}>
         <div className="flex pb-5 px-3 m-auto pt-5 text-sm flex-col max-w-screen-lg items-center">
            <CardList items={[]} />
            <h1>{state.name}</h1>
            <div className="flex gap-2 mb-5">
               <Button variant="outlined" color="primary" onClick={handle}>
                  Outlined
               </Button>
               <Button variant="outlined" color="secondary" onClick={handle}>
                  Outlined
               </Button>
               <Button onClick={handle} color="primary">
                  Contained
               </Button>
               <Button onClick={handle} color="secondary">
                  Contained
               </Button>
               <Button variant="text" color="primary" onClick={handle}>
                  Text
               </Button>
               <Button variant="text" color="secondary" onClick={handle}>
                  Text
               </Button>
            </div>
            <div className="flex gap-2 mb-5">
               <Button loading variant="outlined" onClick={handle}>
                  Outlined
               </Button>
               <Button loading onClick={handle}>
                  Contained
               </Button>
               <Button loading variant="text" onClick={handle}>
                  Text
               </Button>
            </div>

            <div className="flex gap-2">
               <Button disabled variant="outlined" onClick={handle}>
                  Outlined
               </Button>
               <Button disabled onClick={handle}>
                  Contained
               </Button>
               <Button disabled variant="text" onClick={handle}>
                  Text
               </Button>
            </div>
         </div>
      </div>
   );
};

export default Favorite;
