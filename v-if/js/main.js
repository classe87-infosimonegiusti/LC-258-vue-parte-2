const { createApp } = Vue

createApp({
  data() {
    return {
      lampadinaAccesa: true,
      urlLampadina: 'https://isinnova.it/app/uploads/2021/03/lamapdina-edison-isinnova-blog.jpg'
    }
  },
  methods: {
    accendiSpengiLuce() {
        if (this.lampadinaAccesa == true) {
            this.lampadinaAccesa = false;
        } else {
            this.lampadinaAccesa = true;
        }
    }
  }
}).mount('#pippo')