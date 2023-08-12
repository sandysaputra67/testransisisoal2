<template>
    <div>
      <h2>Edit User</h2>
      <form @submit.prevent="updateUser">
        <label for="firstName">First Name:</label>
        <input type="text" v-model="editedUser.first_name" required>
        <label for="lastName">Last Name:</label>
        <input type="text" v-model="editedUser.last_name" required>
        <label for="email">Email:</label>
        <input type="email" v-model="editedUser.email" required>
        <button type="submit">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        userId: null,
        editedUser: {
          first_name: '',
          last_name: '',
          email: ''
        }
      };
    },
    created() {
      this.userId = this.$route.params.id;
      this.fetchUser();
    },
    methods: {
      fetchUser() {
        axios.get(`https://reqres.in/api/users/${this.userId}`)
          .then(response => {
            this.editedUser = response.data.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
      updateUser() {
        axios.put(`https://reqres.in/api/users/${this.userId}`, this.editedUser)
          .then(response => {
            console.log('User updated:', response.data);
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
  