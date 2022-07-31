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
          isFav: true,
        },
        {
          title: 'Dinosaurs Before Dark',
          author: 'Mary Pope Osborne',
          img: 'assets/2.jpg',
          isFav: false,
        },
        {
          title: 'Mummies Before Moring',
          author: 'Mary Pope Osborne',
          img: 'assets/3.jpg',
          isFav: true,
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
