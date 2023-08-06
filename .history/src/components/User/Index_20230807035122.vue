<template></template>
<script setup lang="ts">
import { ref } from 'vue';
import { User } from '../../UserType';
import { fetchUser } from '../../axios';

const user = ref<User[]>([]);
const fetchData = async () => {
    const resUser = await fetchUser();
    if (resUser.status === 200) user.value = resUser.data;
    else user.value = [];
};
</script>
