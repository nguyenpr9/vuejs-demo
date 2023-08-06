<template>
    <form @submit.prevent="submitForm">
        <input type="text" v-model="skill" />
        <select v-model="level">
            <option :value="0"></option>
            <option :value="1"></option>
            <option :value="2"></option>
            <option :value="3"></option>
            <option :value="4"></option>
            <option :value="5"></option>
        </select>
        <button type="submit" @click="submitForm">Add</button>
    </form>
</template>
<script setup lang="ts">
import { inject, ref } from 'vue';
import { UserInject } from '../../injection/UserInject';
import { createUser } from '../../axios';
const skill = ref('');
const level = ref(0);
const { fetchData } = inject(UserInject)!;

const onEnter = async () => {
    const res = await createUser({ skill: skill.value });
    if (res.status === 200) {
        fetchData();
        skill.value = '';
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
