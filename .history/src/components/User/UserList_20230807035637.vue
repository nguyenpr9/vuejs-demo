<template>
    <div class="menu-link">
        <router-link v-for="u in user" :to="`/users/${u.username}`"></router-link>
    </div>
</template>
<script setup lang="ts">
import { inject } from 'vue';
import { UserInject } from '../../injection/UserInject';

const { user } = inject(UserInject);
</script>
