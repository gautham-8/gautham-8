<script setup>
import LeftSection from './LeftSection.vue';
import RightSection from './RightSection.vue';
</script>

<template>
    <div class="flex">
        <LeftSection class="w-2/5 sticky top-0 h-[calc(100vh)]" />
        <RightSection class="w-3/5" />
    </div>
</template>