<template>
    <div class="header-container">
        <LightPhitterLogo v-show="!isDarkTheme" />
        <DarkPhitterLogo v-show="isDarkTheme" />
        <div class="docs-text">DOCS</div>
    </div>
</template>

<script lang="ts">
import { useData } from "vitepress";
import { defineComponent } from "vue";
import DarkPhitterLogo from "../components/Icons/DarkPhitterLogo.vue";
import LightPhitterLogo from "../components/Icons/LightPhitterLogo.vue";

export default defineComponent({
    name: "Logo",
    components: { DarkPhitterLogo, LightPhitterLogo },
    data() {
        return {
            isDarkTheme: true,
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

<style>
.header-container {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.docs-text {
    margin-left: auto;
    height: min-content;
    font-size: 1rem;
}
</style>
