<template>
    <table>
        <thead>
            <tr>
                <User>
                    <th><UserInput></UserInput></th>
                    <th><UserList></UserList></th>
                </User>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>
<script setup lang="ts">
import User from '../../components/User/Index.vue';
import UserInput from '../../components/User/UserInput.vue';
import UserList from '../../components/User/UserList.vue';
</script>
