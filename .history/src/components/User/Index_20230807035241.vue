<template></template>
<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';
import { User } from '../../UserType';
import { fetchUser } from '../../axios';
import { UserInject } from '../../injection/UserInject';

const user = ref<User[]>([]);
const fetchData = async () => {
    const resUser = await fetchUser();
    if (resUser.status === 200) user.value = resUser.data;
    else user.value = [];
};

onMounted(fetchData);
provide(UserInject, {
    fetchUser,
    user,
});
</script>
