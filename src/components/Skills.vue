<script setup>
import SkillIconsAnacondaLight from '../../assets/icons/SkillIconsAnacondaLight.vue';
import SkillIconsBootstrap from '../../assets/icons/SkillIconsBootstrap.vue';
import SkillIconsC from '../../assets/icons/SkillIconsC.vue';
import SkillIconsCpp from '../../assets/icons/SkillIconsCpp.vue';
import SkillIconsCss from '../../assets/icons/SkillIconsCss.vue';
import SkillIconsEclipseLight from '../../assets/icons/SkillIconsEclipseLight.vue';
import SkillIconsExpressjsLight from '../../assets/icons/SkillIconsExpressjsLight.vue';
import SkillIconsFigmaLight from '../../assets/icons/SkillIconsFigmaLight.vue';
import SkillIconsFlaskLight from '../../assets/icons/SkillIconsFlaskLight.vue';
import SkillIconsGit from '../../assets/icons/SkillIconsGit.vue';
import SkillIconsGithubLight from '../../assets/icons/SkillIconsGithubLight.vue';
import SkillIconsGitlabLight from '../../assets/icons/SkillIconsGitlabLight.vue';
import SkillIconsHtml from '../../assets/icons/SkillIconsHtml.vue';
import SkillIconsJavaLight from '../../assets/icons/SkillIconsJavaLight.vue';
import SkillIconsJavascript from '../../assets/icons/SkillIconsJavascript.vue';
import SkillIconsMongodb from '../../assets/icons/SkillIconsMongodb.vue';
import SkillIconsNodejsLight from '../../assets/icons/SkillIconsNodejsLight.vue';
import SkillIconsNpmDark from '../../assets/icons/SkillIconsNpmDark.vue';
import SkillIconsPiniaLight from '../../assets/icons/SkillIconsPiniaLight.vue';
import SkillIconsPnpmLight from '../../assets/icons/SkillIconsPnpmLight.vue';
import SkillIconsPostman from '../../assets/icons/SkillIconsPostman.vue';
import SkillIconsPythonLight from '../../assets/icons/SkillIconsPythonLight.vue';
import SkillIconsPytorchLight from '../../assets/icons/SkillIconsPytorchLight.vue';
import SkillIconsReactLight from '../../assets/icons/SkillIconsReactLight.vue';
import SkillIconsSass from '../../assets/icons/SkillIconsSass.vue';
import SkillIconsScikitlearnLight from '../../assets/icons/SkillIconsScikitlearnLight.vue';
import SkillIconsTailwindcssLight from '../../assets/icons/SkillIconsTailwindcssLight.vue';
import SkillIconsTensorflowLight from '../../assets/icons/SkillIconsTensorflowLight.vue';
import SkillIconsTypescript from '../../assets/icons/SkillIconsTypescript.vue';
import SkillIconsViteLight from '../../assets/icons/SkillIconsViteLight.vue';
import SkillIconsVscodeLight from '../../assets/icons/SkillIconsVscodeLight.vue';
import SkillIconsVueLight from '../../assets/icons/SkillIconsVuejsLight.vue';
import Tree from 'primevue/tree';
import { computed } from 'vue';

const tree_values = computed(() => {
    return [
        {
            key: 'technical_skills',
            label: 'Technical skills',
            children: [
                {
                    key: 'frontend',
                    label: 'Frontend skills',
                    children: [
                        { key: 'frontend_skills_values', label: 'Frontend skills values' },
                    ]
                },
                {
                    key: 'backend',
                    label: 'Backend skills',
                    children: [
                        { key: 'backend_skills_values', label: 'Backend skills values' },
                    ]
                },
                {
                    key: 'programming_languages',
                    label: 'Programming languages',
                    children: [
                        { key: 'programming_languages_values', label: 'Programming languages values' },
                    ]
                },
                {
                    key: 'version_control',
                    label: 'Version control',
                    children: [
                        { key: 'version_control_values', label: 'Version control values' },
                    ]
                },
                {
                    key: 'ai_ml',
                    label: 'Artificial Intelligence and Machine Learning',
                    children: [
                        { key: 'ai_ml_values', label: 'AI/ML values' },
                    ]
                },
                {
                    key: 'tools',
                    label: 'Tools',
                    children: [
                        { key: 'tools_values', label: 'Tools values' },
                    ]
                }
            ]
        },
        {
            key: 'soft_skills',
            label: 'Soft skills',
            children: [
                { key: 'soft_skills_values', label: 'Leadership, Time management, Ownership' }
            ]
        }
    ];
});
</script>

<template>
    <div class="flex flex-col items-center text-gray-50 mb-20">
        <div class="text-4xl">
            My skills
        </div>
        <Tree 
            :value="tree_values"
            class="w-full md:w-[800px]"
            :expandedKeys="{ 'technical_skills': true, 'frontend': true, 'backend': true, 'programming_languages': true, 'version_control': true, 'soft_skills': true, 'ai_ml': true, 'tools': true, }"
        >
            <template #default="slotProps">
                <div v-if="slotProps.node.key === 'frontend_skills_values'" class="flex gap-3">
                    <SkillIconsReactLight class="hover:scale-110 transition duration-500" />
                    <SkillIconsVueLight class="hover:scale-110 transition duration-500" />
                    <SkillIconsViteLight class="hover:scale-110 transition duration-500" />
                    <SkillIconsPiniaLight class="hover:scale-110 transition duration-500" />
                    <SkillIconsTailwindcssLight class="hover:scale-110 transition duration-500" />
                    <SkillIconsBootstrap class="hover:scale-110 transition duration-500" />
                    <SkillIconsSass class="hover:scale-110 transition duration-500" />
                    <SkillIconsCss class="hover:scale-110 transition duration-500" />
                    <SkillIconsHtml class="hover:scale-110 transition duration-500" />
                    <SkillIconsFigmaLight class="hover:scale-110 transition duration-500" />
                </div>
                <div v-else-if="slotProps.node.key === 'backend_skills_values'" class="flex gap-3">
                    <SkillIconsNodejsLight class="hover:scale-110 transition duration-500" />
                    <SkillIconsExpressjsLight class="hover:scale-110 transition duration-500" />
                    <SkillIconsFlaskLight class="hover:scale-110 transition duration-500" />
                    <SkillIconsMongodb class="hover:scale-110 transition duration-500" />
                    <SkillIconsPostman class="hover:scale-110 transition duration-500" />
                </div>
                <div v-else-if="slotProps.node.key === 'programming_languages_values'" class="flex gap-3">
                    <SkillIconsJavascript class="hover:scale-110 transition duration-500" />
                    <SkillIconsTypescript class="hover:scale-110 transition duration-500" />
                    <SkillIconsPythonLight class="hover:scale-110 transition duration-500" />
                    <SkillIconsCpp class="hover:scale-110 transition duration-500" />
                    <SkillIconsJavaLight class="hover:scale-110 transition duration-500" />
                    <SkillIconsC class="hover:scale-110 transition duration-500" />
                </div>
                <div v-else-if="slotProps.node.key === 'version_control_values'" class="flex gap-3
                ">
                    <SkillIconsGit class="hover:scale-110 transition duration-500" />
                    <SkillIconsGithubLight class="hover:scale-110 transition duration-500" />
                    <SkillIconsGitlabLight class="hover:scale-110 transition duration-500" />
                </div>
                <div v-else-if="slotProps.node.key === 'ai_ml_values'" class="flex gap-3">
                    <SkillIconsPythonLight class="hover:scale-110 transition duration-500" />
                    <SkillIconsTensorflowLight class="hover:scale-110 transition duration-500" />
                    <SkillIconsPytorchLight class="hover:scale-110 transition duration-500" />
                    <SkillIconsScikitlearnLight class="hover:scale-110 transition duration-500" />
                </div>
                <div v-else-if="slotProps.node.key === 'tools_values'" class="flex gap-3">
                    <SkillIconsVscodeLight class="hover:scale-110 transition duration-500" />
                    <SkillIconsAnacondaLight class="hover:scale-110 transition duration-500" />
                    <SkillIconsEclipseLight class="hover:scale-110 transition duration-500" />
                    <SkillIconsNpmDark class="hover:scale-110 transition duration-500" />
                    <SkillIconsPnpmLight class="hover:scale-110 transition duration-500" />
                </div>
                <div v-else>
                    {{ slotProps.node.label }}
                </div>
            </template>
            <template #nodetoggleicon="{ expanded }">
                <div class="text-gray-50">
                    <template v-if="expanded">-</template>
                    <template v-else>+</template>
                </div>
            </template>
        </Tree>

    </div>
</template>

<style>
.p-tree {
    @apply bg-gray-900 !important;
}

.p-icon {
    @apply text-gray-50;
}

.p-tree-node-label {
    @apply text-gray-50;
}

.p-tree-node-toggle-button {
    @apply bg-gray-800;
}

.p-tree-node-toggle-button:hover {
    @apply bg-gray-700 !important;
}
</style>