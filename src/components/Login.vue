<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');



async function loginUser() {
  const userLoginData = await axios.get(`http://localhost:3000/users?email=${email.value}&password=${password.value}`);

  if (userLoginData.data.length > 0) {

    const user = userLoginData.data[0];

    localStorage.setItem('user', JSON.stringify(user));

    router.push('dashboard');
  } else {
    alert('Invalid email or password');
  }

}


</script>

<template>

  <main>

    <div class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="loginUser">
        <input type="text" v-model="email" placeholder="Username">
        <input type="password" v-model="password" placeholder="Password">
        <button type="submit">Login</button>
        <a href="#" class="forgot">Forgot password?</a>
      </form>
    </div>


  </main>
</template>

<style scoped>
* {
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

main {
  /* background: linear-gradient(to right, #00b4db, #0083b0); */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.login-box {
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;
}

.login-box h2 {
  text-align: center;
  margin-bottom: 24px;
  color: #333;
}

.login-box input[type="text"],
.login-box input[type="password"] {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: 0.3s;
}

.login-box input[type="text"]:focus,
.login-box input[type="password"]:focus {
  border-color: #00b4db;
  outline: none;
}

.login-box button {
  width: 100%;
  padding: 12px;
  background-color: #00b4db;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-box button:hover {
  background-color: #0083b0;
}

.login-box .forgot {
  display: block;
  text-align: right;
  margin-top: 10px;
  font-size: 14px;
  color: #555;
  text-decoration: none;
}

.login-box .forgot:hover {
  text-decoration: underline;
}
</style>
