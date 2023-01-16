import React from "react";
import {Provider} from "react-redux";
import {AppProps} from "next/app";

import "@styles/globals.css";
import "@styles/colors.css";
import "@components/molecules/loading/loading-module.scss";

import {PageLoading} from "@components/molecules";
import Layout from "@components/layout";

import store from "@my-store";

function MyApp({Component, pageProps}: AppProps) {
   return (
      <Provider store={store}>
         <Layout>
            <PageLoading overlay />
            <Component {...pageProps} />
         </Layout>
      </Provider>
   );
}

export default MyApp;
