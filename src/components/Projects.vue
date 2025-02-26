<script setup>
import TuringCupLandingPage from '../assets/TuringCupLandingPage.png';
import TEDxLandingPage from '../assets/TEDxLandingPage.png';
import HospitalWebsite from '../assets/HospitalWebsite.png';
import CourseAI from '../assets/CourseAI.png';
import BrainDiseaseDetection from '../assets/BrainDiseaseDetection.png';
import SkillIcon from './SkillIcon.vue';

const projects = [
    {
        id: 'brain-disease-detection',
        title: 'Multiple Brain Disease Detection using Explainable AI',
        image_src: BrainDiseaseDetection,
        image_url: 'https://ijisae.org/index.php/IJISAE/article/view/6315',
        description: [
            `A research project dedicated to creating an <span class="font-semibold text-gray-200">Explainable Artificial Intelligence (XAI) model</span> for classifying MRI images while providing transparent and interpretable predictions. Key topics include AI transparency, model explainability, and brain region analysis to clarify how specific areas influence each decision. The project addresses the <span class="font-semibold text-gray-200">trust gap between AI and clinical practice</span> by empowering healthcare professionals to make more accurate and confident diagnoses using AI-driven diagnostic tools.`,
        ],
        skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'VS Code', 'Anaconda'],
    },
    {
        id: 'course-ai',
        title: 'Guiding the Learner in Selecting the Suitable Online Course Using Automated Al Tool',
        image_src: CourseAI,
        image_url: 'https://stm.bookpi.org/RATMCS-V7/article/view/12833',
        description: [
            `A project focused on CourseAI, an AI-powered tool designed to help students efficiently select top and relevant online courses. Topics covered include personalized course recommendations, AI-based course evaluation, filtering by factors like difficulty and student reviews, and <span class="font-semibold text-gray-200">addressing the growing challenge of identifying quality courses</span>. CourseAI aims to bridge passive online learning with active learning experiences, providing a hybrid educational approach tailored to student interests and career goals.`,
        ],
        skills: ['React.js', 'Python', 'Flask' , 'Git', 'GitHub', 'VS Code'],
        github_url: 'https://github.com/deepesh-16/course-ai',
    },
    {
        id: 'turing-hut',
        title: 'Problem setter and Peer-learning guide',
        organization: 'Turing Hut',
        organization_url: 'https://www.turinghut.org/',
        image_src: TuringCupLandingPage,
        image_url: 'https://www.turinghut.org/turingcup',
        description: [
            `A collaborative project to develop the webpage for Turing Hut’s flagship coding contest, the Turing Cup, which achieved over <span class="font-semibold text-gray-200">1,000 team registrations</span> and <span class="font-semibold text-gray-200">2,000+ participants.</span> As a problem setter, I have set problems for contests with global participation. I have also taught various competitive programming topics like bit manipulation, binary search in the peer learning sessions conducted by Turing Hut.`,
        ],
        skills: ['React.js', 'Material UI', 'Git', 'GitHub'],
        github_url: 'https://github.com/linustribevnr/turing-hut-website',
    },
    {
        id: 'TEDx',
        title: 'Technical Member',
        organization: 'TEDxVNRVJIET',
        organization_url: 'https://www.tedxvnrvjiet.com',
        image_src: TEDxLandingPage,
        image_url: 'https://www.tedxvnrvjiet.com',
        description: [
            `Developed an event website that sold tickets worth over <span class="font-semibold text-gray-200">₹75,000</span>.`,
        ],
        skills: ['React.js', 'Tailwind CSS', 'Sass', 'CSS', 'HTML', 'Git', 'GitHub'],
        github_url: 'https://github.com/tedxvnrvjiet/gh-tedxvnrvjiet',
    },
    {
        id: 'hospital-website',
        title: 'Hospital website - Managing appointments made easy!',
        // organization: 'Hospital Website',
        image_src: HospitalWebsite,
        image_url: 'https://github.com/gautham-8/Hospital-Website-Project',
        description: [
            `Developed a full-stack web application enabling patients to conveniently <span class="font-semibold text-gray-200">book doctor appointments from home</span>, minimizing hospital wait times. The platform also provides detailed information on various hospital services.`,
        ],
        skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'GitHub'],
        github_url: 'https://github.com/gautham-8/Hospital-Website-Project',
    },
];
</script>

<template>
    <div id="projects" class="mt-20 animate-fade-in delay-3">
        <p class="md:hidden block text-3xl font-semibold mb-4 px-4">
            Projects
        </p>
        <div
            v-for="project in projects"
            :id="project.id"
            :key="project.id"
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

                    <div v-if="project.github_url" class="mt-4">
                        <a :href="project.github_url" target="_blank" class="flex items-center gap-2 hover:text-[#FFF7AE] rounded-lg w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17H7q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12t-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17z"/></svg>
                            GitHub
                        </a>

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
