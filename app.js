const app = Vue.createApp({
  data() {
    return {
      url: 'www.thenetninja.co.uk',
      showBooks: true,
      books: [
        {
          title: 'The Chinese Mr.Wewo Yeezz',
          author: 'Mr.Yeese Geese',
          img: 'assets/Kyle.png',
          isFav: true,
        },
        {
          title: 'The Hotstuff Chinese Dad',
          author: "The Coder Who's a Geese",
          img: 'assets/Dad.png',
          isFav: true,
        },
        {
          title: 'The Fat Mrs. Wewo Geese',
          author: 'That Chunky Butt',
          img: 'assets/Kate.png',
          isFav: false,
        },
        {
          title: 'The Stinky Stinky Mommy',
          author: 'The Net Ninja',
          img: 'assets/Mom.png',
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toogleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toogleFav(book) {
      book.isFav = !book.isFav;
    },
  },
});

app.mount('#app');
