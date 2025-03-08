import DefaultTheme from "vitepress/theme";
import "./custom.css";
import "./publicSans.css";

import MiComponente from "../components/MiComponente.vue";
import OtroComponente from "../components/OtroComponente.vue";
import DarkPhitterLogo from "../components/Icons/DarkPhitterLogo.vue";
import LightPhitterLogo from "../components/Icons/LightPhitterLogo.vue";

const components = {
    MiComponente,
    OtroComponente,
    DarkPhitterLogo,
    LightPhitterLogo,
    Animation,
};

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        Object.entries(components).forEach(([name, component]) => {
            app.component(name, component);
        });
    },
};
