<template></template>
<script setup lang="ts">
import { ref } from 'vue';
import { User } from '../../UserType';
import { fetchUser } from '../../axios';

const user = ref<User[]>([]);
const fetchData = () => {
    const resUser = await fetchUser();
};
</script>
