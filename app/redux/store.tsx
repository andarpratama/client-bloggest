"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "./feature/counterSlice";
import themeReducer from './feature/themeSlice ';



const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
  //add all your reducers here
},);

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: rootReducer,

 });