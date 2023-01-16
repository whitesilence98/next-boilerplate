import {useEffect, useState} from "react";

export const useBroadcastChannel = (channel: string) => {
   const [broadcast, setBroadcast] = useState<any>(null);

   useEffect(() => {
      const broadcastChannel = new BroadcastChannel(channel);
      setBroadcast(broadcastChannel);
      return () => {
         broadcastChannel.close();
      };
   }, [channel]);

   return broadcast;
};
