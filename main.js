'use strict'

const { createApp } = Vue;

createApp({
    data() {
        return {
            text: 'Todolist',
            inputTodo: '',
            statuses: ['not done', 'done'],
            todoList: [],
            //isDone: false,
        }
    },
    methods: {
        addTodo() {
         if (this.inputTodo) {
             this.todoList.push({
                name: this.inputTodo,
                status: 'not done'
             });
             this.inputTodo = '';
            }
        },
        deleteTodo(index) {
            
          this.todoList.splice(index, 1);
        },
        doneTodo(index) {
           let newIndex = this.statuses.indexOf(this.todoList[index].status)
           if(++newIndex > 1) newIndex = 0;
           this.todoList[index].status = this.statuses[newIndex];
        }
        //doneTodo(index) {
        //  this.isDone = !this.isDone;
        //}
    }
}).mount('#app');


