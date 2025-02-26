<script setup>
const EDUCATION = [
    {
        title: 'B.Tech in Computer Science and Engineering',
        institute: 'VNR Vignana Jyothi Institute of Engineering and Technology',
        institute_url: 'https://vnrvjiet.ac.in/',
        duration: 'DEC 2020 - MAY 2024',
        grade: '8.96 CGPA',
        relevant_courses: [
            'Data Structures and Algorithms',
            'Object Oriented Programming through C++',
            'Database Management Systems',
            'Operating Systems',
            'Computer Networks',
            'Network Security',
            'Artificial Intelligence',
            'Machine Learning',
        ],
    },
];

function onTEDxClick() {
    document.getElementById('TEDx').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function onTuringHutClick() {
    document.getElementById('turing-hut').scrollIntoView({ behavior: 'smooth', block: 'center' });
}
</script>

<template>
    <div id="education" class="mt-20 animate-fade-in delay-3">
        <p class="md:hidden block text-3xl font-semibold mb-4 px-4">
            Education
        </p>
        <div v-for="edu in EDUCATION">
            <div class="w-full md:flex gap-4 rounded-lg px-4 py-2">
                <div class="md:w-1/4 text-xs mt-0.5">
                    {{ edu.duration }}
                </div>
                <div class="md:w-3/4 text-sm">
                    <div class="mb-3">
                        {{ edu.title }}
                        <br>
                        <a :href="edu.institute_url" target="_blank" class="underline">
                            {{ edu.institute }}
                        </a>
                    </div>
                    <div class="mb-3">
                        Grade: {{ edu.grade }}
                    </div>
                    <div class="flex items-center gap-2">
                        Activities:
                        <img src="../assets/TuringHut.png" class="w-8 h-8 rounded-lg cursor-pointer" @click="onTuringHutClick" />
                        <img src="../assets/TEDx.png" class="w-8 h-8 rounded-lg cursor-pointer" @click="onTEDxClick" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>