const app = Vue.createApp({
  data() {
    return {
      url: 'www.thenetninja.co.uk',
      showBooks: true,
      books: [
        {
          title: 'Diary of a Wimpy Kid',
          author: 'Jeff Kinney',
          img: 'assets/1.jpg',
        },
        {
          title: 'Dinosaurs Before Dark',
          author: 'Mary Pope Osborne',
          img: 'assets/2.jpg',
        },
        {
          title: 'Mummies Before Moring',
          author: 'Mary Pope Osborne',
          img: 'assets/3.jpg',
        },
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
