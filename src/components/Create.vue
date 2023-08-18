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
        <button class="btn btn-light">Create</button>

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
          email: '',
        }
      };
    },
    methods: {
      async createUser() {
      try {
        const response = await axios.post('https://reqres.in/api/users', this.newUser);

        console.log('User created:', response.data);
        // Handle success

        // Optionally, you can redirect to another route after successful user creation
        this.$router.push('/detail');
      } catch (error) {
        console.error('An error occurred:', error);
        // Handle error
      }
    },
  }
};
  </script>
  