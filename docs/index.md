<div class="logo-container">
    <LightPhitterLogo v-show="!isDarkTheme" class="logo" />
    <DarkPhitterLogo v-show="isDarkTheme" class="logo" />    
</div>

<p>
    Phitter analyzes datasets and determines the best analytical probability distributions that represent them. Phitter studies over 80 probability distributions, both continuous and discrete, 3 goodness-of-fit tests, and interactive visualizations. For each selected probability distribution, a standard modeling guide is provided along with spreadsheets that detail the methodology for using the chosen distribution in data science, operations research, and artificial intelligence.
</p>

<p>
    In addition, Phitter offers the capability to perform process simulations, allowing users to graph and observe minimum times for specific observations. It also supports queue simulations with flexibility to configure various parameters, such as the number of servers, maximum population size, system capacity, and different queue disciplines, including First-In-First-Out (FIFO), Last-In-First-Out (LIFO), and priority-based service (PBS).
</p>

<p>
    This repository contains the implementation of the python library and the kernel of <a href="https://phitter.io" target="_blank">Phitter Web</a>
</p>

<!--
<MiComponente titulo="Sección personalizada" descripcion="Este componente fue integrado en Markdown">
  Aquí puedo añadir contenido adicional que irá en el slot.
</MiComponente> -->

<script lang="ts">
import { defineComponent } from "vue";
import { useData } from "vitepress";

export default defineComponent({
    data() {
        return {
            isDarkTheme: false
        };
    },
    mounted() {
        const { isDark } = useData();
        this.isDarkTheme = isDark.value;
        
        this.$watch(
            () => isDark.value,
            (newValue: boolean) => {
                this.isDarkTheme = newValue;
            }
        );
    }
});
</script>

<style>
.logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo {
    max-width: 400px;
}
</style>
