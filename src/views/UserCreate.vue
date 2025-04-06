<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');


async function createUser() {

    if (!name.value) {
        alert('Please fill the user name');
        return;
    }

    const newUsers = {
        name: name.value,
        email: email.value,
        password: password.value
    };

    try {

        const loadUserData = await axios.get(`http://localhost:3000/users?email=${email.value}`);

        if (loadUserData.data.length > 0) {
            alert('Email is already registered.');
            return;
        }

        const response = await axios.post('http://localhost:3000/users', newUsers);
        router.push('/users');

    } catch (error) {
        console.log("error:", error);

    }

}


</script>


<template>
    <h2 class="heading-h2">User Create Page</h2>
    <router-link to="/users" class="btn btn-primary header-link">Back</router-link>

    <div class="row">
        <div class="col-md-6">
            <form @submit.prevent="createUser" style="background-color: #fff; padding: 20px;">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input v-model="name" type="text" class="form-control" id="name" placeholder="Enter name"
                        name="name">
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input v-model="email" type="email" class="form-control" id="email" placeholder="Enter email"
                        name="email">
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input v-model="password" type="password" class="form-control" id="pwd" placeholder="Enter password"
                        name="pwd">
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
            </form>

        </div>
    </div>

</template>