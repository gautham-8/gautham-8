<script setup>
import { reactive, onMounted } from 'vue';

const state = reactive({
    show_image: false,
});

onMounted(() => {
    setTimeout(() => {
        state.show_image = true;
    }, 1000);
})
</script>

<template>
    <div class="w-full min-h-[calc(100vh)] flex gap-y-3 flex-col items-center">
        <div class="my-10 flex items-center gap-10">
            <div class="w-[600px]">
                <div class="text-5xl text-gray-50">
                    Hey, I'm Gautham Mallipeddi
                </div>
                <div class="text-2xl text-gray-50 mt-6">
                    I'm a Software Engineer with experience in full-stack development and machine learning.
                </div>
            </div>
            <div>
                <img 
                    src="../../assets/images/Picture.jpg"
                    class="w-60 rounded-full"
                    alt="Profile"
                />
            </div>
        </div>
        <div class="perspective-1000 ml-60">
            <div class="text-2xl text-gray-50 -ml-16 mb-10">
                Resumes feel bland and boring, so I developed this website instead... (and flex my skills? 😬)
            </div>
            <div
                class="rounded-lg border-gray-200 w-[1000px] h-[600px] transform transition-transform duration-1000 overflow-hidden"
                :style="{ transform: state.show_image ? 'rotateY(25deg) rotateX(20deg)' : 'rotateY(0deg)' }"
            >
                <img 
                src="../../assets/images/Resume.jpg"
                class="transition-opacity duration-1000"
                :class="state.show_image ? 'opacity-100' : 'opacity-0'"
                alt="Banner"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
</style>
