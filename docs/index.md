---
# https://vitepress.dev/reference/default-theme-home-page
# layout: home

# hero:
#   name: "Phitter Documentation"
#   text: "A VitePress Site"
#   tagline: My great project tagline
#   actions:
#     - theme: brand
#       text: Markdown Examples
#       link: /fit/markdown-examples
#     - theme: alt
#       text: API Examples
#       link: /simulation/api-examples

# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<div>

  <img class="light-mode" src="https://gist.githubusercontent.com/phitterio/170ce460d7e766545265772525edecf6/raw/71b4867c6e5683455cf1d68bea5bea7eda55ce7d/LightPhitterLogo.svg" alt="Light Mode Logo" />

  <img class="dark-mode" src="https://gist.githubusercontent.com/phitterio/66bc7f3674eac01ae646e30ba697a6d7/raw/e96dbba0eb26b20d35e608fefc3984bd87f0010b/DarkPhitterLogo.svg" alt="Dark Mode Logo" />
</div>

## Markdown Content

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style module>

/* Cuando está todo light */
.light-mode {
  display: block;
}
.dark-mode {
  display: none;
}

/* Cuando el tema oscuro esté activo */
html.dark .light-mode {
  display: none;
}
html.dark .dark-mode {
  display: block;
}

.button {
  color: red;
  font-weight: bold;
}
</style>
