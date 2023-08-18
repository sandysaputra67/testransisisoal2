module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://reqres.in/api/users', // Ganti dengan URL backend Anda
          changeOrigin: true,
          ws:true
        }
      }
    }
  }