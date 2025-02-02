<script setup>
import TuringCupLandingPage from '../assets/TuringCupLandingPage.png';
import TEDxLandingPage from '../assets/TEDxLandingPage.png';
import HospitalWebsite from '../assets/HospitalWebsite.png';
import SkillIcon from './SkillIcon.vue';

const projects = [
    {
        title: 'Problem setter and Peer-learning guide',
        organization: 'Turing Hut',
        organization_url: 'https://www.turinghut.org/',
        image_src: TuringCupLandingPage,
        image_url: 'https://www.turinghut.org/turingcup',
        date: 'JUN 2024 - PRESENT',
        description: [
            `I collaborated with my team to develop the webpage for Turing Hut's flagship coding contest, the Turing Cup. This effort set a record at the time, with over <span class="font-semibold text-gray-200">1,000 team registrations</span>, totaling more than 2,000 individual participants. As a problem setter, I have set problems for contests with global participation. I have also taught various competitive programming topics like bit manipulation, binary search in the peer learning sessions conducted by Turing Hut.`,
        ],
        skills: ['React.js', 'Material UI', 'Git', 'GitHub'],
    },
    {
        title: 'Technical Member',
        organization: 'TEDxVNRVJIET',
        organization_url: 'https://www.tedxvnrvjiet.com',
        image_src: TEDxLandingPage,
        image_url: 'https://www.tedxvnrvjiet.com',
        date: 'NOV 2022 - MAY 2024',
        description: [
            `Collaborated with a team of 4 to develop the website for TEDxVNRVJIET that helped in selling tickets worth over <span class="font-semibold text-gray-200">₹75,000</span>.`,
        ],
        skills: ['React.js', 'Tailwind CSS', 'Sass', 'CSS', 'HTML', 'Git', 'GitHub'],
    },
    {
        title: 'Hospital website - Managing appointments made easy!',
        // organization: 'Hospital Website',
        image_src: HospitalWebsite,
        image_url: 'https://github.com/gautham-8/Hospital-Website-Project',
        date: 'NOV 2022 - MAY 2024',
        description: [
            `Developed a full-stack web application enabling patients to conveniently <span class="font-semibold text-gray-200">book doctor appointments from home</span>, minimizing hospital wait times. The platform also provides detailed information on various hospital services.`,
        ],
        skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'GitHub'],
    },
];
</script>

<template>
    <div class="mt-20">
        <p class="md:hidden block text-3xl font-semibold mb-4 px-4">
            Projects
        </p>
        <div
            v-for="project in projects"
            class="mb-8 md:mb-4"
        >
            <div class="w-full md:flex gap-4 rounded-lg px-4 py-2">
                <a :href="project.image_url" target="_blank" class="md:w-1/4 h-fit text-xs mt-0.5">
                    <img :src="project.image_src" alt="TEDx Landing page" class="rounded w-2/3 md:w-full" />
                </a>
                <div class="md:w-3/4 text-sm mt-4 md:mt-0">
                    <div class="mb-2">
                        {{ project.title }}<template v-if="project.organization">,
                        </template>
                        <a v-if="project.organization" :href="project.organization_url" target="_blank" class="underline">
                            {{ project.organization }}
                        </a>
                    </div>

                    <div v-for="point in project.description" class="text-gray-400">
                        <div class="my-1" v-html="point"></div>
                    </div>

                    <div v-if="project.skills?.length" class="flex items-center gap-3 mt-4">
                        <div class="flex items-center gap-2 flex-wrap">
                            <SkillIcon
                                v-for="skill in project.skills"
                                :skill="skill"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
