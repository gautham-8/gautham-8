<script setup>
import { onMounted } from 'vue';
import LeftSection from './LeftSection.vue';
import RightSection from './RightSection.vue';

onMounted(() => {
    var cursor = document.querySelector('.blob');

    document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    });
});
</script>

<template>
    <div class="blob"></div>
    <div class="flex">
        <LeftSection class="w-2/5 sticky top-0 h-[calc(100vh)]" />
        <RightSection class="w-3/5" />
    </div>
</template>

<style>
.blob {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    background-image: linear-gradient(#1100ff 10%, #ffffff);;
    filter: blur(250px);
    transition: all 450ms ease-out;
    position: fixed;
    pointer-events: none;
    left: 0;
    top: 0;
    transform: translate(calc(-50% + 15px), -50%);
    z-index: -1;
}
</style>
