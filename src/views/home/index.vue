<template>
    <p>{{ username }}</p>
</template>
    
<script setup lang='ts'>
import { computed } from "vue";
import { useStore } from "@/store/index";
const store = useStore()

const username = computed(() => {
    return store.state.user.username
})
</script>
    
<style lang="scss" scoped>

</style>