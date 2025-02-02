<script setup>
import ExperienceCard from './ExperienceCard.vue';

const experiences = [
    {
        title: 'Software Engineer',
        company: 'SenseHawk',
        company_url: 'https://www.sensehawk.com',
        date: 'JUN 2024 - PRESENT',
        description: [
            `Currently developing a new version of the 'Project Management' module for SenseHawk's TaskMapper application.`,
            'This update allows users to create extensive schedules for solar and infrastructure projects.',
            'Designed to function like MS Projects and Oracle Primavera, with the added benefit of integrating data from other platform modules.',
        ],
        skills: ['Vue.js', 'Vite', 'Pinia', 'Git', 'GitHub', 'npm', 'pnpm', 'Sass', 'CSS', 'HTML'],
    },
    {
        title: 'Software Engineer Intern',
        company: 'SenseHawk',
        company_url: 'https://www.sensehawk.com',
        date: 'NOV 2022 - MAY 2024',
        description: [
            `Refined my SaaS application development skills by working on one of SenseHawk's best-selling modules, ‘Project Management’ , utilizing third-party libraries such as DHTMLX Gantt to meet our requirements.`,
            `Achieved a <span class="font-semibold text-gray-200">50% reduction in size</span> for the web application's main bundle, slashing it from over <span class="font-semibold text-gray-200">2000kB</span> to approximately <span class="font-semibold text-gray-200">1000kB</span>. This optimization greatly enhances the loading time of the homepage.`,
            `Boosted application security by implementing ways to prevent <span class="font-semibold text-gray-200">XSS attacks</span> and <span class="font-semibold text-gray-200">CSV injections</span>.`,
            `Regularly updated frontend packages and dependencies, implementing migration changes as needed.`,
        ],
        skills: ['Vue.js', 'Vite', 'Pinia', 'Git', 'GitHub', 'npm', 'pnpm', 'Sass', 'CSS', 'HTML'],
    },
];
</script>

<template>
    <div class="mt-20">
        <p class="md:hidden block text-3xl font-semibold mb-4 px-4">
            Work experience
        </p>
        <ExperienceCard
            v-for="experience in experiences"
            :experience="experience"
            class="my-4"
        />
    </div>
</template>
