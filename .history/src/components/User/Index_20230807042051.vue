<template>
    <UserInput></UserInput>
    <UserList></UserList>
</template>
<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';
import type { User } from '../../UserType';
import { fetchUser } from '../../axios';
import { UserInject } from '../../injection/UserInject';
import UserInput from './UserInput.vue';
import UserList from './UserList.vue';

const users = ref<User[]>([]);
const fetchData = async () => {
    const resUser = await fetchUser();
    if (resUser.status === 200) users.value = resUser.data;
    else users.value = [];
};

onMounted(fetchData);
provide(UserInject, {
    users,
    fetchData,
});
</script>
