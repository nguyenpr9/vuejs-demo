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

const submitForm = async () => {
    if (id.value) {
        const res = await updateUserSkill(id.value, request.value);
        if (res.status === 200) {
            fetchData();
            request.value = {};
        }
    } else {
        const res = await createUserSkill(request.value);
        if (res.status === 200) {
            fetchData();
            request.value = {};
        }
    }
};
</script>
<style>
.menu-link {
    display: flex;
    flex-direction: column;
}
a {
    text-decoration: none;
}
.router-link-active {
    text-decoration: dashed;
    color: green;
}
</style>
