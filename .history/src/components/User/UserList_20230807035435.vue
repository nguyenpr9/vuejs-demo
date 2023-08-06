<template>
    
</template>
<script setup lang="ts">
import { inject } from 'vue';
import { UserInject } from '../../injection/UserInject';

const { user } = inject(UserInject);
</script>
