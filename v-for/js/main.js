const { createApp } = Vue

createApp({
  data() {
    return {
      numeroIterazioni: 49,
      studenti: [
        {
          nome: 'Mario',
          cognome: 'Rossi'
        }, 
        {
          nome: 'Valentina',
          cognome: 'Verdi'
        }, 
        {
          nome: 'Luca',
          cognome: 'Neri'
        }, 
      ]
    }
  },
  methods: {
    addStudente() {
      this.studenti.push(
        {
          nome: 'Pippo',
          cognome: 'Pluto'
        }
      );
    },
    stampoThis() {
      console.log(this.studenti);
    }
  }
}).mount('#app')