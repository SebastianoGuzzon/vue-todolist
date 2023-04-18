const Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: []
  },
  
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push({ text: this.newTodo });
        this.newTodo = '';
      }
    },
    
    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    }
  }
});

