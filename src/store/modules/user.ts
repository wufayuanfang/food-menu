import { Module, } from "vuex";
import { RootState } from "../index";
export interface userState {
    username: string,
}

export const store:Module<userState,RootState> = {
    namespaced:true,
    state:():userState =>({
        username:"joel"
    }),
    mutations:{
        increment(state:userState,newValue:string):void {
            state.username = newValue 
        }
    }
}