<template>
    <input type="text" @keyup.enter="onEnter" v-model="username">
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
