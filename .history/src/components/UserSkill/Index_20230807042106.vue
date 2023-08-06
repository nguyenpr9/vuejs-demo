<template>
</template>
<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';
import type { UserSKillCreate, UserSkill } from '../../UserType';
import { fetchUserSkill } from '../../axios';
import { UserSkillInject } from '../../injection/UserSkillInject';
import UserInput from './UserInput.vue';
import UserList from './UserList.vue';
import { useRoute } from 'vue-router';

const isUpdate = ref(false);
const users = ref<UserSkill[]>([]);
const request = ref<UserSKillCreate>({
    username: '',
    level: 0,
    skill: ''
});
const route = useRoute();
const fetchData = async () => {
    console.log(route.params?.id);
    const resUser = await fetchUserSkill('');
    if (resUser.status === 200) users.value = resUser.data;
    else users.value = [];
};

onMounted(fetchData);
provide(UserSkillInject, {
    isUpdate,
    request,
    users,
    fetchData,
});
</script>
