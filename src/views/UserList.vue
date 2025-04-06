<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const users = ref([]);


const getUsersData =  async () => {
    const loadUsers = await axios.get('http://localhost:3000/users');
    users.value = loadUsers.data;
}

async function deleteUser(id){
    
    await axios.delete(`http://localhost:3000/users/${id}`);
    users.value = users.value.filter(user => user.id !== id);
}

onMounted(() => {
    getUsersData();    
});


</script>


<template>
    <div>
        <h2 class="heading-h2">User List Page</h2>
        <router-link to="/users/create" class="btn btn-primary header-link">User Create</router-link>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>

             

                <tr v-for="(user, index) in users" :key="user.id">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>
                        {{ user.name }}
                    </td>
                    <td>{{ user.email }}</td>
                    <td>

                        <router-link :to="`/users/edit/${user.id}`" class="btn btn-success" style="margin-right: 10px;">Edit</router-link>

                        <button type="button" @click="deleteUser(user.id)" class="btn btn-danger">DELETE</button>
                    </td>
                </tr>
                <tr v-if="users.length === 0" colspan="3" align="center">
                    No data found.
                </tr>
                
            </tbody>
        </table>
    </div>
</template>


<style scoped>
.table {
    background-color: #fff;
}
</style>