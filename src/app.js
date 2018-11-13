var app = new Vue({
    el: '#app', 
    data: {
        message: 'Hello Vuex!',
        todo: null,
        editTodo: null,
        todos: [],
    },
    methods: {
        add(todo) {
            if(!this.isTodoValid) { return; }

            this.todos.push({
                content: todo,
                finished: false,
                isEdited: false,
            });
            
            this.todo = null;
        },
        edit(todo) {
            this.editTodo = todo.content;
            todo.isEdited = true;
        },
        update(todo) {
            if(!this.isEditTodoValid) { return; }

            todo.content = this.editTodo;
            todo.isEdited = false;
        },
        remove(todo) {
            this.todos = this.todos.filter(item => item != todo);
        },
    },
    computed: {
        isTodoValid() { return !!this.todo; },
        isEditTodoValid() { return !!this.editTodo; },
        isTodoBeingEdited() { return this.todos.filter(todo => todo.isEdited).length > 0; },
    }
});