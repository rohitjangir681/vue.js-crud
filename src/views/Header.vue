<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const showDropdown = ref(false);


const user = JSON.parse(localStorage.getItem('user'));

function logoOut(){
    localStorage.removeItem('user');
    router.push('/');
}


</script>

<template>
    <div class="header">
        <h1>Dashboard</h1>
        <div class="user-container" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
            <div class="user">User Profile</div>


            <div v-if="showDropdown" class="dropdown">
                <p>Name: {{ user.name }}</p>
                <p>Email: {{ user.email }}</p>
                <p><a href="" @click.prevent="logoOut">LogOut</a></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background: #f4f4f4;
    align-items: center;
}

.user-container {
    position: relative;
}

.user {
    cursor: pointer;
    background: #e0e0e0;
    padding: 0.5rem 1rem;
    border-radius: 4px;
}

.dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border: 1px solid #ccc;
    padding: 0.75rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 100;
    min-width: 200px;
}
</style>