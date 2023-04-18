const { createApp } = Vue;
// Creare uan nuova Task
createApp({
  data() {
    return {
      newTask: "", 
      tasks: [], 
      errorMsg: "", 
    };
  },
  methods: {
    // Metodo per aggiungere un nuovo task
    addTask() {
      
      // Controlla se la lunghezza del task è inferiore a 5 caratteri
      
      if (this.newTask.length < 3) {
        
        // Oppure messaggio d'errore
        
        this.errorMsg = "Il testo deve avere almeno 3 caratteri.";
      } else {
        // Aggiunge il nuovo task all'inizio dell'array "tasks"
        this.tasks.unshift({ text: this.newTask, done: false });
      }
    },

    //metodo per rimuovere un task
    removeTask (index) {
    // controlla se un task selezionato e' stato completato  
    if(this.tasks[index].done){
    // lo rimuove dall'array tasks
    this.tasks.splice(index,1);
    
    } else {
    this.errorMsg = "Attenzione puoi eliminare il task solo se e' stato creato";
    
    // il messaggio di errore sparisce dopo 3 secondi

    setTimeout (()=>{
    this.errorMsg = "";  
    },3000);
    }
    }
  } 
}).mount("#app");
