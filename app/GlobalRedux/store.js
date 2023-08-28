'use client';

import { configureStore } from '@reduxjs/toolkit'
import formReducer from "./form";
import siteReducer from "./site";
import languageReducer from "./language";

export const store = configureStore({
    reducer: {
        form: formReducer,
        site: siteReducer,
        language: languageReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store;