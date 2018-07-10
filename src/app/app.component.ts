import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   todoInput: string = "";

  todos = [
    {
      isChecked: false,
      name: 'mow lawn'
    },
    {
      isChecked: true,
      name: 'eat ice cream'
    },
    {
      isChecked: false,
      name: 'watch mr.robot'
    }
  ];

  checkOffTodo(todo) {
    // Way 1
    // todo.isChecked = (todo.isChecked) ? false:true; 
    // Way 2
    todo.isChecked = !todo.isChecked; 
  }

  createTodo() {
    let trimmedInput = this.todoInput.trim();
    if(trimmedInput != ""){

      this.todos.push({
        isChecked: false,
        name: this.todoInput
      });
    }
    // code that will create a todo
    this.todoInput = "";
  }

  editTodo(todo) {
    // Get the index from the function
    let index = this.todos.indexOf(todo);

    // Storing the Todo Description
    let oldTodo = this.todos[index].name;

    // Prompt the user to change the text
    this.todos[index].name = prompt("Please edit your todo", this.todos[index].name);

    if (this.todos[index].name == null) {
      // If the user cancels on the Prompt, 
      // put the Old Todo Description back
      this.todos[index].name = oldTodo;
    }
  }

  deleteTodo(todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    // deletes todo
  }

  deleteAllTodos() {
    this.todos = [];
  }
}
