import { InjectionKey } from "vue"
import { createStore, Store, useStore as baseUseStore } from "vuex"
import createPersistedState from "vuex-persistedstate"
import { userState, store as user } from "./modules/user"
import { themeState, store as theme } from "./modules/theme"
export interface RootState {
    user: userState,
    theme: themeState
}

export const key: InjectionKey<Store<RootState>> = Symbol()

export const store: Store<RootState> = createStore({
    modules: {
        user,
        theme
    },
    plugins: [
        createPersistedState({
            paths: ['user']
        })
    ]
})

export function useStore() {
    return baseUseStore(key)
}