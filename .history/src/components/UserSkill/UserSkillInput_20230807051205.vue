<template>
    <form @submit.prevent="submitForm">
        <label>
            Skill:
            <input type="text" v-model="request.skill" />
        </label>
        <label>
            Level:
            <select v-model="request.level">
                <option :value="0">Level 0</option>
                <option :value="1">Level 1</option>
                <option :value="2">Level 2</option>
                <option :value="3">Level 3</option>
                <option :value="4">Level 4</option>
                <option :value="5">Level 5</option>
            </select>
        </label>
        <button type="button" @click="submitForm">{{ id ? 'Edit' : 'Add' }}</button>
    </form>
</template>
<script setup lang="ts">
import { inject } from 'vue';
import { UserSkillInject } from '../../injection/UserSkillInject';
import { createUserSkill, updateUserSkill } from '../../axios';
import { useRoute } from 'vue-router';
const { fetchData, id, request } = inject(UserSkillInject)!;
const route = useRoute();
const submitForm = async () => {
    console.log(id.value);

    if (id.value) {
        const res = await updateUserSkill(id.value, request.value);
        if (res.status === 200) {
            fetchData();
            request.value = {};
            id.value = '';
        }
    } else {
        request.value.username = (route.params.id as string) ?? '';
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
