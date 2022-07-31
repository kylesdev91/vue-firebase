const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'Magic Tree House',
      author: 'Mary Pope Ashborne',
      age: 73,
    };
  },
  methods: {
    toogleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount('#app');
