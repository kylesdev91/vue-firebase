const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'Magic Tree House',
      author: 'Mary Pope Ashborne',
      age: 73,
      x: 0,
      y: 0,
    };
  },
  methods: {
    toogleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount('#app');
