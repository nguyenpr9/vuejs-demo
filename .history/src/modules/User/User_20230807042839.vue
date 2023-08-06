<template>
    <UserSkillProvider>
        <table>
            <thead>
                <tr>
                    <UserProvider>
                        <th><UserInput></UserInput></th>
                    </UserProvider>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <UserProvider
                        ><td><UserList></UserList></td>
                    </UserProvider>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </UserSkillProvider>
</template>
<script setup lang="ts">
import UserProvider from '../../components/User/Index.vue';
import UserSkillProvider from '../../components/UserSkill/Index.vue';
import UserInput from '../../components/User/UserInput.vue';
import UserList from '../../components/User/UserList.vue';
</script>
