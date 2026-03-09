<script setup>
import ExperienceCard from './ExperienceCard.vue';

const experiences = [
    {
        title: 'Software Engineer',
        company: 'SenseHawk',
        company_url: 'https://www.sensehawk.com',
        date: 'JUN 2024 - PRESENT',
        description: [
            `Secured <span class="font-semibold text-gray-200">high-value contracts with major clients</span>, including a global energy leader, by developing the 'Business Intelligence' module in TaskMapper, which offers dashboards for complex data visualization.`,
            `<span class="font-semibold text-gray-200">Developed 80%+ of the UI for SenseHawk's first AI agent</span>, NaaviX, featuring data visualization and real-time message streaming to reduce manual analysis time from 3+ hours to minutes.`,
            'Built <span class="font-semibold text-gray-200">Node.js</span> export service consuming <span class="font-semibold text-gray-200">Amazon SQS</span> events to generate dashboard PDFs via Browserless with custom pagination logic and scheduled email delivery to configured recipients.',
            `Contributed to the 'Project Management' module in TaskMapper, <span class="font-semibold text-gray-200">accounting for 30% of user traffic</span>, by enabling advanced features to effectively compete with and win business from users of legacy systems like Oracle Primavera. This supported SenseHawk's then <span class="font-semibold text-gray-200">record monthly revenue and $6 million in ARR.</span>`,
        ],
        skills: ['Vue.js', 'Vite', 'Pinia', 'Git', 'GitHub', 'npm', 'pnpm', 'Sass', 'CSS', 'HTML', 'VS Code'],
    },
    {
        title: 'Software Engineer Intern',
        company: 'SenseHawk',
        company_url: 'https://www.sensehawk.com',
        date: 'NOV 2022 - MAY 2024',
        description: [
            `Refined my SaaS application development skills by working on one of SenseHawk's best-selling modules, ‘Project Management’ , utilizing third-party libraries such as DHTMLX Gantt to meet our requirements.`,
            `Achieved a <span class="font-semibold text-gray-200">82% reduction in size</span> for the web application's main bundle, slashing it from over <span class="font-semibold text-gray-200">3.7MB</span> to approximately <span class="font-semibold text-gray-200">1000kB</span>. This optimization greatly enhances the loading time of the homepage.`,
            `Boosted application security by implementing ways to prevent <span class="font-semibold text-gray-200">XSS attacks</span> and <span class="font-semibold text-gray-200">CSV injections</span>.`,
            `Regularly updated frontend packages and dependencies, implementing migration changes as needed.`,
        ],
        skills: ['Vue.js', 'Vite', 'Pinia', 'Git', 'GitHub', 'npm', 'pnpm', 'Sass', 'CSS', 'HTML', 'VS Code'],
    },
];
</script>

<template>
    <div id="work-experience" class="mt-20 animate-fade-in delay-3">
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
