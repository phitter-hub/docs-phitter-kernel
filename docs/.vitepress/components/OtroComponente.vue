<template>
    <div class="mi-componente">
        <h2>{{ titulo }}</h2>
        <p>{{ descripcion }}</p>
        <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    titulo: {
        type: String,
        default: "Título por defecto",
    },
    descripcion: {
        type: String,
        default: "Esta es una descripción",
    },
});
</script>

<style module>
.mi-componente {
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    margin: 20px 0;
}
</style>
