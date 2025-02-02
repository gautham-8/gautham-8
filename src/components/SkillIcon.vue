<script setup>
import SkillIconsAnacondaLight from '../assets/skill-icons-vue/SkillIconsAnacondaLight.vue';
import SkillIconsBootstrap from '../assets/skill-icons-vue/SkillIconsBootstrap.vue';
import SkillIconsC from '../assets/skill-icons-vue/SkillIconsC.vue';
import SkillIconsCpp from '../assets/skill-icons-vue/SkillIconsCpp.vue';
import SkillIconsCss from '../assets/skill-icons-vue/SkillIconsCss.vue';
import SkillIconsEclipseLight from '../assets/skill-icons-vue/SkillIconsEclipseLight.vue';
import SkillIconsExpressjsLight from '../assets/skill-icons-vue/SkillIconsExpressjsLight.vue';
import SkillIconsFigmaLight from '../assets/skill-icons-vue/SkillIconsFigmaLight.vue';
import SkillIconsFlaskLight from '../assets/skill-icons-vue/SkillIconsFlaskLight.vue';
import SkillIconsGit from '../assets/skill-icons-vue/SkillIconsGit.vue';
import SkillIconsGithubLight from '../assets/skill-icons-vue/SkillIconsGithubLight.vue';
import SkillIconsGitlabLight from '../assets/skill-icons-vue/SkillIconsGitlabLight.vue';
import SkillIconsHtml from '../assets/skill-icons-vue/SkillIconsHtml.vue';
import SkillIconsJavaLight from '../assets/skill-icons-vue/SkillIconsJavaLight.vue';
import SkillIconsJavascript from '../assets/skill-icons-vue/SkillIconsJavascript.vue';
import SkillIconsMaterialuiLight from '../assets/skill-icons-vue/SkillIconsMaterialuiLight.vue';
import SkillIconsMongodb from '../assets/skill-icons-vue/SkillIconsMongodb.vue';
import SkillIconsNodejsLight from '../assets/skill-icons-vue/SkillIconsNodejsLight.vue';
import SkillIconsNpmDark from '../assets/skill-icons-vue/SkillIconsNpmDark.vue';
import SkillIconsPiniaLight from '../assets/skill-icons-vue/SkillIconsPiniaLight.vue';
import SkillIconsPnpmLight from '../assets/skill-icons-vue/SkillIconsPnpmLight.vue';
import SkillIconsPostman from '../assets/skill-icons-vue/SkillIconsPostman.vue';
import SkillIconsPythonLight from '../assets/skill-icons-vue/SkillIconsPythonLight.vue';
import SkillIconsPytorchLight from '../assets/skill-icons-vue/SkillIconsPytorchLight.vue';
import SkillIconsReactLight from '../assets/skill-icons-vue/SkillIconsReactLight.vue';
import SkillIconsSass from '../assets/skill-icons-vue/SkillIconsSass.vue';
import SkillIconsScikitlearnLight from '../assets/skill-icons-vue/SkillIconsScikitlearnLight.vue';
import SkillIconsTailwindcssLight from '../assets/skill-icons-vue/SkillIconsTailwindcssLight.vue';
import SkillIconsTensorflowLight from '../assets/skill-icons-vue/SkillIconsTensorflowLight.vue';
import SkillIconsTypescript from '../assets/skill-icons-vue/SkillIconsTypescript.vue';
import SkillIconsViteLight from '../assets/skill-icons-vue/SkillIconsViteLight.vue';
import SkillIconsVscodeLight from '../assets/skill-icons-vue/SkillIconsVscodeLight.vue';
import SkillIconsVueLight from '../assets/skill-icons-vue/SkillIconsVuejsLight.vue';

const props = defineProps({
    skill: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <SkillIconsAnacondaLight v-if="props.skill === 'Anaconda'" />
    <SkillIconsBootstrap v-else-if="props.skill === 'Bootstrap'" />
    <SkillIconsC v-else-if="props.skill === 'C'" />
    <SkillIconsCpp v-else-if="props.skill === 'C++'" />
    <SkillIconsCss v-else-if="props.skill === 'CSS'" />
    <SkillIconsEclipseLight v-else-if="props.skill === 'Eclipse'" />
    <SkillIconsExpressjsLight v-else-if="props.skill === 'Express.js'" />
    <SkillIconsFigmaLight v-else-if="props.skill === 'Figma'" />
    <SkillIconsFlaskLight v-else-if="props.skill === 'Flask'" />
    <SkillIconsGit v-else-if="props.skill === 'Git'" />
    <SkillIconsGithubLight v-else-if="props.skill === 'GitHub'" />
    <SkillIconsGitlabLight v-else-if="props.skill === 'GitLab'" />
    <SkillIconsHtml v-else-if="props.skill === 'HTML'" />
    <SkillIconsJavaLight v-else-if="props.skill === 'Java'" />
    <SkillIconsJavascript v-else-if="props.skill === 'JavaScript'" />
    <SkillIconsMaterialuiLight v-else-if="props.skill === 'Material UI'" />
    <SkillIconsMongodb v-else-if="props.skill === 'MongoDB'" />
    <SkillIconsNodejsLight v-else-if="props.skill === 'Node.js'" />
    <SkillIconsNpmDark v-else-if="props.skill === 'npm'" />
    <SkillIconsPiniaLight v-else-if="props.skill === 'Pinia'" />
    <SkillIconsPnpmLight v-else-if="props.skill === 'pnpm'" />
    <SkillIconsPostman v-else-if="props.skill === 'Postman'" />
    <SkillIconsPythonLight v-else-if="props.skill === 'Python'" />
    <SkillIconsPytorchLight v-else-if="props.skill === 'PyTorch'" />
    <SkillIconsReactLight v-else-if="props.skill === 'React.js'" />
    <SkillIconsSass v-else-if="props.skill === 'Sass'" />
    <SkillIconsScikitlearnLight v-else-if="props.skill === 'Scikit-learn'" />
    <SkillIconsTailwindcssLight v-else-if="props.skill === 'Tailwind CSS'" />
    <SkillIconsTensorflowLight v-else-if="props.skill === 'TensorFlow'" />
    <SkillIconsTypescript v-else-if="props.skill === 'TypeScript'" />
    <SkillIconsViteLight v-else-if="props.skill === 'Vite'" />
    <SkillIconsVscodeLight v-else-if="props.skill === 'VS Code'" />
    <SkillIconsVueLight v-else-if="props.skill === 'Vue.js'" />
    <div v-else>
        {{ props.skill }}
    </div>
</template>