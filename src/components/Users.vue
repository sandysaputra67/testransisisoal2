<template>
    <div>
      <h2>List of Users</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.first_name }} {{ user.last_name }}
        </li>
      </ul>
      <button class="btn btn-light" @click="$router.push('/detail')">Create</button>

    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        users: []
      };
    },
    created() {
      axios.get('https://reqres.in/api/users')
        .then(response => {
          this.users = response.data.data;
          console.log("tes")
        })
        .catch(error => {
          console.error(error);
        });
    }
    
  };
  </script>
  