<template>
    <header :style="{ backgroundColor: bg }">
        <img class="logo" :src="logoUrl" @click="$router.push('/')" alt="今天吃啥" />
        <div class="input-group">
            <i class="i i-sousuo"></i>
            <input type="search" placeholder="搜索" />
        </div>
        <button class="login" @click="$router.push('/login')">登录</button>
    </header>
</template>
<script setup lang='ts'>
import { defineComponent, computed } from "vue";
import { useStore } from "@/store/index";

import logoUrl from "@/assets/logo.png";


const store = useStore()
const bg = computed(() => {
    return store.state.theme.headerColor;
})
const MainHeaderVue = defineComponent({
    name: "main-header",
    data() {
        return {

        }
    },
})
</script>
    
<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 64px;
    box-shadow: 0 6px 6px rgba($color: #000000, $alpha: 0.07);
    .logo {
        $size: 40px;
        width: $size;
        height: $size;
    }
    .input-group {
        display: flex;
        align-items: center;
        padding-left: 1rem;
        width: 31.25rem;
        border-radius: 4px;
        color: #aaa;
        background-color: var(--gray-nav-search-bg);
        i {
            font-size: 14px;
        }
        input[type="search"] {
            flex: 1 1 auto;
            padding: 0 1rem;
            height: calc(2rem + 2px);
            border-width: 0;
            background-color: initial;
            overflow: hidden;
            &:focus-visible {
                outline: none;
            }
        }
    }

    .login {
        padding: 4px 10px;
        height: 24px;
        line-height: 12px;
        font-size: 12px;
        border-width: 0px;
        border-radius: 999px;
        background-color: rgba($color: #000000, $alpha: 0.7);
        color: #fff;

        &:hover {
            background-color: rgba($color: #000000, $alpha: 0.9);
        }
    }
}
</style>