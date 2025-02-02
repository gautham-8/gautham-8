<script setup>
import SkillIcon from './SkillIcon.vue';

const props = defineProps({
    experience: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="w-full flex gap-4 rounded-lg px-4 py-2">
        <div class="w-1/4 text-xs mt-0.5">
            {{ props.experience.date }}
        </div>
        <div class="w-3/4 text-sm">
            <div class="mb-4">
                {{ props.experience.title }},
                <a :href="props.experience.company_url" target="_blank" class="underline">
                    {{ props.experience.company }}
                </a>
            </div>

            <div v-for="point in props.experience.description" class="text-gray-400">
                <div class="my-1">
                    • <span v-html="point"/>
                </div>
            </div>

            <div v-if="props.experience.skills?.length" class="flex items-center gap-3 mt-4">
                <div class="flex items-center gap-2 flex-wrap">
                    <SkillIcon
                        v-for="skill in props.experience.skills"
                        :skill="skill"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
