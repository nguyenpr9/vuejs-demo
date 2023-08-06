<template>
    <UserProvider>
        <table>
            <thead>
                <tr>
                    <th><UserInput></UserInput></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><UserList></UserList></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </UserProvider>
</template>
<script setup lang="ts">
import UserProvider from '../../components/User/Index.vue';
import UserInput from '../../components/User/UserInput.vue';
import UserList from '../../components/User/UserList.vue';
</script>
