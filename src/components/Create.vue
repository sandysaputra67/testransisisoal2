<template>
    <div>
      <h2>Create User</h2>
      <form @submit.prevent="createUser">
        <label for="firstName">First Name:</label>
        <input type="text" v-model="newUser.first_name" required>
        <label for="lastName">Last Name:</label>
        <input type="text" v-model="newUser.last_name" required>
        <label for="email">Email:</label>
        <input type="email" v-model="newUser.email" required>
        <button class="btn btn-light" @click="$router.push('/')">Create</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        newUser: {
          first_name: '',
          last_name: '',
          email: ''
        }
      };
    },
    methods: {
      createUser() {
        axios.post('https://reqres.in/api/users', this.newUser)
          .then(response => {
            console.log('User created:', response.data);
            // Handle success
          })
          .catch(error => {
            console.error(error);
            // Handle error
          });
      }
    }
  };
  </script>
  <style>

</style>