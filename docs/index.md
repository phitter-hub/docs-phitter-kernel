<div>
    <img
        v-show="!isDarkTheme"
        class="light-mode"
        src="https://gist.githubusercontent.com/phitterio/170ce460d7e766545265772525edecf6/raw/71b4867c6e5683455cf1d68bea5bea7eda55ce7d/LightPhitterLogo.svg"
        alt="Light Mode Logo"
    />
    <img
        v-show="isDarkTheme"
        src="https://gist.githubusercontent.com/phitterio/66bc7f3674eac01ae646e30ba697a6d7/raw/e96dbba0eb26b20d35e608fefc3984bd87f0010b/DarkPhitterLogo.svg"
        alt="Dark Mode Logo"
    />
</div>

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