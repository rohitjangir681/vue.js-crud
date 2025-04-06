<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';


const route = useRoute();
const router = useRouter();

const user = ref({name: '', email: ''});


const getUserData = async () => {
    const loadData = await axios.get(`http://localhost:3000/users/${route.params.id}`); 
    user.value = loadData.data;
}

async function updateUser(){
    const updateUserData = await axios.put(`http://localhost:3000/users/${route.params.id}`, user.value);
    router.push('/users');
}

onMounted(() => {
    getUserData();
});


</script>


<template>
    <h2 class="heading-h2">Edit User Page</h2>
    <router-link to="/users" class="btn btn-primary header-link">Back</router-link>


    <div class="row">
        <div class="col-md-6">
            <form @submit.prevent="updateUser" style="background-color: #fff; padding: 20px;">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" v-model="user.name" class="form-control" id="name" placeholder="Enter name"
                        name="name">
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" v-model="user.email" class="form-control" id="email" placeholder="Enter email"
                        name="email">
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password"
                        name="pwd">
                </div>
                <button type="submit" class="btn btn-success">Update</button>
            </form>

        </div>
    </div>

</template>