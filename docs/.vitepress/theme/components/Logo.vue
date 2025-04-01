<template>
    <LightPhitterLogo v-show="!isDarkTheme" />
    <DarkPhitterLogo v-show="isDarkTheme" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useData } from "vitepress";
import DarkPhitterLogo from "../components/Icons/DarkPhitterLogo.vue";
import LightPhitterLogo from "../components/Icons/LightPhitterLogo.vue";

export default defineComponent({
    name: "Logo",
    components: { DarkPhitterLogo, LightPhitterLogo },
    data() {
        return {
            isDarkTheme: false,
            themeChangeCounter: 0,
            reloadGalton: true,
        };
    },

    created() {
        const { isDark } = useData();
        this.isDarkTheme = isDark.value;

        this.$watch(
            () => isDark.value,
            (newValue: boolean) => {
                this.isDarkTheme = newValue;
            }
        );
    },
});
</script>

<style lang="scss"></style>
