<template>
    <input type="text" @keyup.enter="onEnter" v-model="username" placehoder="username" />
</template>
<script setup lang="ts">
import { inject, ref } from 'vue';
import { UserInject } from '../../injection/UserInject';
import { UserSkillInject } from '../../injection/UserSkillInject';
import { createUser } from '../../axios';
import { useRouter } from 'vue-router';
const username = ref('');
const { fetchData } = inject(UserInject)!;
const { fetchData: fetchSkillData  } = inject(UserSkillInject)!;
const router = useRouter()
const onEnter = async () => {
    const res = await createUser({ username: username.value });
    if (res.status === 200) {
        fetchData();
        fetchSkillData(res.data.username)
        router.push(`/users/${res.data.username}`)
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
