<template>
    <div class="home">
     
      <Users/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src

  import Users from '@/components/Users.vue'
  export default {
    name: 'HomeView',
    components: {
      Users
    }
  }
  </script>
  