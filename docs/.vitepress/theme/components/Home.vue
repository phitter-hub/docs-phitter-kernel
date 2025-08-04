<template>
    <main class="home-main">
        <section class="home-s1">
            <div class="home-s1_x">
                <div class="logo-container"><Logo /></div>
                <p>
                    Phitter identifies optimal probability distributions by analyzing datasets, evaluating over 80 continuous and discrete distributions with goodness-of-fit tests
                    and interactive visualizations. It provides modeling guides and methodological spreadsheets for applications in data science, operations research, and AI.
                    Additionally, Phitter enables process and queuing simulations with configurable parameters, including servers, capacity, population size, and service discipline
                    FIFO, LIFO and PBS, ensuring adaptability to diverse research and operational needs.
                </p>

                <p>This web contains the documentation of the <a href="https://github.com/phitter-core/phitter-kernel" target="_blank">Phitter Python Library</a></p>

                <div class="a-buttons-section">
                    <a class="a-button" href="/documentation/intro/what-is-phitter">Documentation</a>
                    <a class="a-button ab2" href="https://phitter.io/" target="_blank">Phitter web</a>
                </div>
            </div>
        </section>

        <section class="home-s2">
            <GaltonBoard v-if="reloadGalton" class="galton-board" :key="themeChangeCounter" />
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useData } from "vitepress";
import GaltonBoard from "./GaltonBoard.vue";
import Logo from "./Logo.vue";

export default defineComponent({
    name: "Home",
    components: { GaltonBoard, Logo },
    data() {
        return {
            themeChangeCounter: 0,
            reloadGalton: true,
        };
    },
    methods: {
        updateScale() {
            if (window.innerWidth <= 479) {
                const container = this.$el.querySelector(".home-s1");
                const availableWidth = container.clientWidth;
                const scaleFactor = availableWidth / 400;
                document.documentElement.style.setProperty("--scale-factor", String(scaleFactor));
            }
        },
        reinitializeGaltonBoard() {
            this.reloadGalton = false;
            this.themeChangeCounter++;
            this.$nextTick(() => {
                this.reloadGalton = true;
            });
        },
    },
    created() {
        const { isDark } = useData();
        this.isDarkTheme = isDark.value;

        this.$watch(
            () => isDark.value,
            (newValue: boolean) => {
                this.reinitializeGaltonBoard();
            }
        );

        window.addEventListener("resize", this.updateScale);
        this.updateScale();
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.updateScale);
    },
});
</script>

<style lang="scss">
$pad: 10px;

.home-main {
    display: flex;
    margin-top: 80px;

    @media (0px <=width <=479px) {
        margin-top: 20px;
    }

    @media (0px <=width <=1099px) {
        flex-direction: column;
        align-items: center;
    }
}

.home-s1 {
    display: flex;
    justify-content: flex-end;
    padding-right: 0px + $pad;

    @media (0px <=width <=1099px) {
        justify-content: center;
        padding-right: 0px;
    }

    @media (1100px <= width) {
        width: 50%;
    }

    & .home-s1_x {
        @media (1100px <= width) {
            width: 450px;
        }

        @media (480px <=width <=1099px) {
            width: 400px;
        }

        p {
            font-weight: 500;
            margin-top: 0;
        }

        @media (0px <=width <=479px) {
            width: 100%;
            font-size: 14px;
        }
    }
}

.home-s2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 50px + $pad;

    @media (1100px <= width) {
        width: 50%;
    }

    @media (0px <=width <=1099px) {
        margin-top: 40px;
        justify-content: center;
        padding-left: 0px;
    }

    & .galton-board {
        @media (0px <=width <=479px) {
            transform: scale(var(--scale-factor));
            transform-origin: top center;
        }
    }
}

.a-buttons-section {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & :first-child {
        @media (480px <= width) {
            margin-right: 30px;
        }
    }

    @media (0px <=width <=1099px) {
        justify-content: space-between;
    }

    @media (0px <=width <=479px) {
        flex-direction: column;
    }
}

.a-button {
    background-color: var(--vp-button-brand-bg);
    color: var(--vp-button-brand-text) !important;
    border-radius: 30px;
    padding: 0.6rem 3rem;
    text-align: center;
    text-decoration: none !important;
    display: inline-block;
    font-weight: bolder;
    transition: color 0.25s, border-color 0.25s, background-color 0.25s;
    font-size: 14px;

    &.ab2 {
        background-color: var(--vp-button-alt-bg) !important;
        color: var(--vp-button-alt-text) !important;
        &:hover {
            background-color: var(--vp-button-alt-hover-bg) !important;
        }
    }

    &:hover {
        border-color: var(--vp-button-brand-hover-border);
        color: var(--vp-button-brand-hover-text);
        background-color: var(--vp-button-brand-hover-bg);
    }

    @media (480px <= width) {
        width: 180px;
    }

    @media (0px <=width <=479px) {
        width: 100%;
        &:nth-child(2) {
            margin-top: 12px;
        }
    }
}
</style>
