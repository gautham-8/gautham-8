<script setup>
import { computed } from 'vue';

const SECTIONS = [
    'ABOUT',
    'WORK EXPERIENCE',
    'EDUCATION',
    'PROJECTS',
    'SKILLS',
    'RESUME [R]',
];

const active_section = computed(() => {
    return SECTIONS[0];
});
</script>

<template>
    <div class="md:p-20 p-12">
        <div class="text-4xl font-bold mb-2">
            Gautham Mallipeddi
        </div>
        <div class="text-2xl font-light mb-4">
            Software Engineer
        </div>
        <div class="text-md text-gray-300">
            I develop full-stack applications and am currently exploring AI and ML technologies.
        </div>
        <div class="hidden md:block my-28">
            <div
                v-for="section in SECTIONS"
                class="my-2"
                :class="{
                    'text-green-300': section === active_section,
                    'text-gray-300': section !== active_section,
                }"
            >
                {{ section }}
            </div>
        </div>
    </div>
</template>
