<template>
    <UserInput></UserInput>
    <UserList></UserList>
</template>
<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';
import { User, UserSkill } from '../../UserType';
import { fetchUser, fetchUserSkill } from '../../axios';
import { UserInject } from '../../injection/UserInject';
import UserInput from './UserInput.vue';
import UserList from './UserList.vue';
import { useRoute } from 'vue-router';

const users = ref<UserSkill[]>([]);
const route = useRoute()
const fetchData = async () => {
    const resUser = await fetchUserSkill(route.query.username);
    if (resUser.status === 200) users.value = resUser.data;
    else users.value = [];
};

onMounted(fetchData);
provide(UserInject, {
    users,
    fetchData,
});
</script>
