<template>
    <div class="home">
     
      <Update/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src

  import Update from '@/components/Update.vue'
  export default {
    name: 'HomeView',
    components: {
      Update
    }
  }
  </script>
  