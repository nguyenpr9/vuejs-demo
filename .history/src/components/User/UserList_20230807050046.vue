<template>
    <div class="menu-link">
        <router-link v-for="u in users" :to="`/users/${u.username}`" @click="fetchData">{{ u.username }}</router-link>
    </div>
</template>
<script setup lang="ts">
import { inject } from 'vue';
import { UserInject } from '../../injection/UserInject';
import { UserSkillInject } from '../../injection/UserSkillInject';

const { users } = inject(UserInject)!;
const { fetchData } = inject(UserSkillInject)!;
</script>
<style>
.menu-link {
    display: flex;
    flex-direction: column;
}
a {
    text-decoration: none;
    color: black
}
.router-link-active {
    text-decoration: dashed;
    color: green;
}
</style>
