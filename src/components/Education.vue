<script setup>
const EDUCATION = [
    {
        title: 'B.Tech in Computer Science and Engineering',
        institute: 'VNR Vignana Jyothi Institute of Engineering and Technology',
        institute_url: 'https://vnrvjiet.ac.in/',
        duration: '2020 - 2024',
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
]
</script>

<template>
    <div class="mt-10">
        <div v-for="edu in EDUCATION">
            <div class="w-full flex gap-4 rounded-lg px-4 py-2">
                <div class="w-1/4 text-xs mt-0.5">
                    {{ edu.duration }}
                </div>
                <div class="w-3/4 text-sm">
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
                        <img src="../assets/TEDx.png" class="w-8 h-8 rounded-lg" />
                        <img src="../assets/TuringHut.png" class="w-8 h-8 rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>