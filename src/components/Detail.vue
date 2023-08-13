<template>
    <div>
      <h2>User Details</h2>
      <div v-if="user">
        <p>Name: {{ user.first_name }} {{ user.last_name }}</p>
        <p>Email: {{ user.email }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        user: null
      };
    },
    created() {
      const userId = this.$route.params.id;
      axios.get(`https://reqres.in/api/users/${userId}`)
        .then(response => {
          this.user = response.data.data;
          console.log(response.data.data)
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
  </script>
  