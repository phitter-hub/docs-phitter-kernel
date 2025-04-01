import DefaultTheme from "vitepress/theme";
import "./custom.css";
import "./publicSans.css";

import Home from "./components/Home.vue";
import Logo from "./components/Logo.vue";

const components = {
    Home,
    Logo,
};

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        Object.entries(components).forEach(([name, component]) => {
            app.component(name, component);
        });
    },
};
