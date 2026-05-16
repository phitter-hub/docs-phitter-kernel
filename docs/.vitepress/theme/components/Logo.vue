<template>
    <div class="header-container">
        <LightPhitterLogo class="logo-light" />
        <DarkPhitterLogo class="logo-dark" />
        <div class="docs-text">DOCS</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DarkPhitterLogo from "../components/Icons/DarkPhitterLogo.vue";
import LightPhitterLogo from "../components/Icons/LightPhitterLogo.vue";

export default defineComponent({
    name: "Logo",
    components: { DarkPhitterLogo, LightPhitterLogo },
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

.logo-dark {
    display: none;
}

html.dark .logo-light {
    display: none;
}

html.dark .logo-dark {
    display: block;
}
</style>
