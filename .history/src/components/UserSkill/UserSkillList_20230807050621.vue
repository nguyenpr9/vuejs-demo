<template>
    <div class="viewer">
        <div @click="handleUpdate(u)" class="viewer-innner" v-for="u in users">
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
import type { UserSkill } from '@/UserType';
const { fetchData, users, id, request } = inject(UserSkillInject)!;

const handleUpdate = (u: UserSkill) => {
    request.value = {...u}
    id.value = u.id
};
</script>
<style>
.viewer {
    display: flex;
    flex-direction: column;
}
.viewer-innner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
a {
    text-decoration: none;
}
.router-link-active {
    text-decoration: dashed;
    color: green;
}
</style>
