<template>
    <input type="text" @keyup.enter="onEnter" v-model="username" />
</template>
<script setup lang="ts">
import { inject, ref } from 'vue';
import { UserInject } from '../../injection/UserInject';
import { createUser } from '../../axios';
const username = ref('');
const { fetchData } = inject(UserInject)!;

const onEnter = async () => {
    const res = await createUser({ username: username.value });
    if (res.status === 200) {
        fetchData();
        username.value = '';
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
