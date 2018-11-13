var app = new Vue({
    el: '#app', 
    data: {
        message: 'Hello Vuex!',
        todo: null,
        todos: [],
    },
    methods: {
        add(todo) {
            if(!this.isTodoValid) {
                return;
            }
            this.todos.push({
                content: todo,
                finished: false,
            });
            
            this.todo = null;
        },
        remove(todo) {
            this.todos = this.todos.filter(item => item != todo);
        },
    },
    computed: {
        isTodoValid() {
            return !!this.todo; 
        }
    }
});