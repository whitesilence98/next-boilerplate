import {configureStore} from "@reduxjs/toolkit";

import favorite from "./favorite";

export default configureStore({
   reducer: {favorite},
});
