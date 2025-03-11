import DefaultTheme from "vitepress/theme";
import "./custom.css";
import "./publicSans.css";

import Home from "./components/Home.vue";

const components = {
    Home,
    // GaltonBoard,
    // DarkPhitterLogo,
    // LightPhitterLogo,
};

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        Object.entries(components).forEach(([name, component]) => {
            app.component(name, component);
        });
    },
};
