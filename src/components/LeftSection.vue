<script setup>
import { reactive, onMounted, onBeforeUnmount } from 'vue';
import CopyPageButton from './CopyPageButton.vue';

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
        <div class="text-4xl font-bold mb-2 animate-fade-in delay-1">
            Gautham Mallipeddi
        </div>
        <div class="flex items-center gap-3 text-2xl font-light mb-4 animate-fade-in delay-1">
            Software Engineer
            <a href="https://www.linkedin.com/in/gautham-mallipeddi/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/></svg>
            </a>
            <a href="https://github.com/gautham-8" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
        </div>
        <div class="text-md text-gray-300 animate-fade-in delay-1">
            I specialize in full-stack development with a keen interest in artificial intelligence and machine learning technologies.
        </div>
        <div class="mt-4 animate-fade-in delay-1">
            <CopyPageButton />
        </div>
        <div class="hidden md:block my-28 sections-font animate-fade-in delay-2">
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