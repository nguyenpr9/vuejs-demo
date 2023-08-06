<template>
    <slot></slot>
</template>
<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';
import type { UserSKillCreate, UserSkill } from '../../UserType';
import { fetchUserSkill } from '../../axios';
import { UserSkillInject } from '../../injection/UserSkillInject';
import { useRoute } from 'vue-router';

const id = ref('');
const users = ref<UserSkill[]>([]);
const request = ref<UserSKillCreate>();
const route = useRoute();
const fetchData = async () => {
    const resUser = await fetchUserSkill(route.params.id as string);
    if (resUser.status === 200) users.value = resUser.data;
    else users.value = [];
};

onMounted(fetchData);
provide(UserSkillInject, {
    id,
    request,
    users,
    fetchData,
});
</script>
