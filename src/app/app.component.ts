import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng2todo';

  todos=[
    {name: 'first', done: false},
    {name: 'second', done: true},
    {name: 'third', done: false}
  ];

  newTodo="";

  remain = ()=> {
    let c = 0;
    this.todos.forEach(t => {
      if(!t.done) {
        c++;
      }
      
    });
    return c;
  };



archive() {
  const oldTodos =this.todos;
  this.todos=[];
  oldTodos.forEach(t =>{

  if(!t.done) {
    this.todos.push(t);
  }
});
};
add() {
  let t = { name: this.newTodo, done:false};
  this.todos.push(t);
  this.newTodo='';
};
}