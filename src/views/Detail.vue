<template>
    <div class="home">
     
      <Detail/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src

  import Detail from '@/components/Detail.vue'
  export default {
    name: 'HomeView',
    components: {
      Detail
    }
  }
  </script>
  