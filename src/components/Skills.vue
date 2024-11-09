<script setup>
import SkillIconsHtml from '../../assets/icons/SkillIconsHtml.vue';
import SkillIconsCss from '../../assets/icons/SkillIconsCss.vue';
import SkillIconsJavascript from '../../assets/icons/SkillIconsJavascript.vue';
import SkillIconsVueLight from '../../assets/icons/SkillIconsVuejsLight.vue';
import SkillIconsReactLight from '../../assets/icons/SkillIconsReactLight.vue';
</script>

<template>
    <div class="flex flex-col items-center text-gray-50 mb-20">
        <div class="text-4xl">
            My skills
        </div>
        <div class="flex">
            Web skills:
            <SkillIconsHtml />
            <SkillIconsCss />
            <SkillIconsJavascript />
            <SkillIconsVueLight />
            <SkillIconsReactLight />
        </div>
    </div>
</template>
