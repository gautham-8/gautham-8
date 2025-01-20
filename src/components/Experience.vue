<script setup>
import ExperienceCard from './ExperienceCard.vue';

const experiences = [
    {
        title: 'Software Engineer',
        company: 'SenseHawk',
        company_url: 'https://www.sensehawk.com',
        date: 'JUN 2024 - PRESENT',
        description: [
            `I'm currently working on bringing a completely new version of one of the best-selling modules of SenseHawk's TaskMapper application called 'Project Management'.`,
            'This new version enables users to create really large schedules for their solar and infrastructure projects.',
            'They are expected to work like MS Projects and Oracle Primavera, but with the added advantage of using data from other modules of the platform.',
        ],
        skills: ['Vue.js', 'Pinia', 'SCSS', 'CSS', 'Git', 'GitHub'],
    },
    {
        title: 'Software Engineer Intern',
        company: 'SenseHawk',
        company_url: 'https://www.sensehawk.com',
        date: 'NOV 2022 - MAY 2024',
        description: [
            `Refined my SaaS application development skills by working on one of SenseHawk's best-selling modules, ‘Project Management’ , utilizing third-party libraries such as DHTMLX Gantt to meet our requirements.`,
            `Achieved a 50% reduction in size for the web application's main bundle, slashing it from over 2000kB to approximately 1000kB. This optimization greatly enhances the loading time of the homepage.`,
            `Boosted application security by implementing ways to prevent XSS attacks and CSV injections.`,
            `Regularly updated frontend packages and dependencies, implementing migration changes as needed.`,
        ],
        skills: ['Vue.js', 'Pinia', 'SCSS', 'CSS', 'Git', 'GitHub'],
    },
];
</script>

<template>
    <div class="mt-20">
        <ExperienceCard
            v-for="experience in experiences"
            :experience="experience"
            class="my-4"
        />
    </div>
</template>
