import { createReducer } from "@reduxjs/toolkit";
import { buildQueries } from "@testing-library/react";
import { counterIncr } from "../action/counter-action";

// createReducer attend comme paramètre l'état initial du State qui est de 0 dans ce cas avant incrémentation
const initialState={
    count:0


//Reducer du compteur
const counterReducer = createReducer(initialState, (build) => {
    builder
        .addCase(counterIncr, action)=> {
    state.count += action.payload
})
};