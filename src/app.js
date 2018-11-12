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
            this.todos.push(todo);
            
            this.todo = null;
        },
    },
    computed: {
        isTodoValid() {
            return !!this.todo; 
        }
    }
});