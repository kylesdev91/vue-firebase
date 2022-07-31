const app = Vue.createApp({
  data() {
    return {
      title: 'Magic Tree House',
      author: 'Mary Pope Ashborne',
      age: 73,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
  },
});

app.mount('#app');
