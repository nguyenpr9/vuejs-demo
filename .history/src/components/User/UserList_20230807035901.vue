<template>
    <div class="menu-link">
        <router-link v-for="u in users" :to="`/users/${u.username}`">{{ u.username }}</router-link>
    </div>
</template>
<script setup lang="ts">
import { inject } from 'vue';
import { UserInject } from '../../injection/UserInject';

const { users } = inject(UserInject)!;
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
