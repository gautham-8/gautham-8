<script setup>
import { reactive, onMounted, onBeforeUnmount } from 'vue';

const SECTIONS = [
    'ABOUT',
    'WORK EXPERIENCE',
    'EDUCATION',
    'PROJECTS',
    // 'SKILLS',
    'RESUME',
];

const state = reactive({
    active_section: SECTIONS[0],
});

function handleKeyPress(event){
    if (event.key === 'R' || event.key === 'r') {
        window.open('https://docs.google.com/document/d/1D9YIwWWVdWsGeWcl1L7n1oT225iZF7APGPB2yBC3F0E/edit?usp=sharing', '_blank');
    }
}

function handleSectionClick(section){
    if (section === 'RESUME') {
        window.open('https://docs.google.com/document/d/1D9YIwWWVdWsGeWcl1L7n1oT225iZF7APGPB2yBC3F0E/edit?usp=sharing', '_blank');
    }
    else {
        document.getElementById(section.replaceAll(' ', '-').toLowerCase()).scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function handleScroll() {
    let currentSection = SECTIONS[0];
    let closestSection = SECTIONS[0];
    let minDistance = Infinity;

    for (const section of SECTIONS) {
        const element = document.getElementById(section.replaceAll(' ', '-').toLowerCase());
        if (element) {
            const rect = element.getBoundingClientRect();
            const distance = Math.abs(rect.top - window.innerHeight / 2);

            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSection = section;
                break;
            }

            if (distance < minDistance) {
                minDistance = distance;
                closestSection = section;
            }
        }
    }

    state.active_section = currentSection === SECTIONS[0] ? closestSection : currentSection;
}

onMounted(() => {
    window.addEventListener('keyup', handleKeyPress);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

onBeforeUnmount(() => {
    window.removeEventListener('keyup', handleKeyPress);
    window.removeEventListener('scroll', handleScroll);
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
            I specialize in full-stack development with a keen interest in artificial intelligence and machine learning technologies.
        </div>
        <div class="hidden md:block my-28 sections-font">
            <div
                v-for="section in SECTIONS"
                class="my-2 flex items-center cursor-pointer w-fit"
                :class="{
                    'text-[#FFF7AE]': section === state.active_section,
                    'text-gray-300': section !== state.active_section,
                }"
                @click="handleSectionClick(section)"
            >
                {{ section }}
                <span v-if="section === 'RESUME'" class="w-fit h-fit px-1 py-0.5 ml-2 border border-gray-200 rounded text-xs">
                    R
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Giga:wght@100..900&family=Raleway&display=swap');

.sections-font {
    font-family: 'Raleway', sans-serif;
}
</style>