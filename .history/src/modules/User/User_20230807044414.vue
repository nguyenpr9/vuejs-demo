<template>
    <UserProvider>
        <UserSkillProvider>
            <table>
                <thead>
                    <tr>
                        <th><UserInput></UserInput></th>
                        <th><UserSkillInput></UserSkillInput></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><UserList></UserList></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </UserSkillProvider>
    </UserProvider>
</template>
<script setup lang="ts">
import UserProvider from '../../components/User/Index.vue';
import UserSkillProvider from '../../components/UserSkill/Index.vue';
import UserSkillInput from '../../components/UserSkill/UserSkillInput.vue';
import UserInput from '../../components/User/UserInput.vue';
import UserList from '../../components/User/UserList.vue';
</script>
<style>
td,th {
    border:1px solid black
}
</style>