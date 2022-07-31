const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: 'Diary of a Wimpy Kid', author: 'Jeff Kinney' },
        { title: 'Dinosaurs Before Dark', author: 'Mary Pope Osborne' },
        { title: 'Mummies Before Moring', author: 'Mary Pope Osborne' },
      ],
    };
  },
  methods: {
    toogleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount('#app');
