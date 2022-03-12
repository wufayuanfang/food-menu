import { Module } from "vuex";
import { RootState } from "../index";


export interface themeState {
    headerColor: string
}


export const store: Module<themeState, RootState> = {
    namespaced: true,
    state: (): themeState => ({
        headerColor: "#fff",
    }),
    actions:{
        
    },
    mutations:{
        ['SET_HEADERCOLOR'](state: themeState, newValue: string): void {
            state.headerColor = newValue
        },
    }
}