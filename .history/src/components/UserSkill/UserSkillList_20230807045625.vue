<template>
    <div class="viewer">
        <div class="viewer-innner" v-for="u in users">
            <p>{{ u.skill }}</p>
            <p>Level {{ u.level }}</p>
            <button type="button">Delete</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { inject } from 'vue';
import { UserSkillInject } from '../../injection/UserSkillInject';
import { createUserSkill, updateUserSkill } from '../../axios';
const { fetchData, users } = inject(UserSkillInject)!;

</script>
<style>
.viewer {
    display: flex;
    flex-direction: column;
}
.viewer-innner {
    display: flex;
    flex-direction: row;
}
a {
    text-decoration: none;
}
.router-link-active {
    text-decoration: dashed;
    color: green;
}
</style>
