import { Component, OnInit } from '@angular/core';
import {TodoService} from './todo.service'


// Component should only contain methods that manipulate dom. Things like business logic, AJAX... have to be moved to Service class
@Component({
    selector: 'my-todo',
    template: `
        <div>   
            <input class="form-control" #todo (change)="0" type="text" placeholder="Enter a todo!!"/>
            <button class="btn btn-primary" (click) = "addTodo(todo.value)">Add Todo</button>

            <hr/>

            <ul class="list-group">
                <li [ngClass]="getClassForItem(todo.isDone)" *ngFor="let todo of todos;let i = index">
                        <span>
                            <p [ngStyle]= "{'color': getColor(todo.isDone)}">{{todo.text}}</p>
                            <button class="btn btn-danger" (click)="removeTodo(i)">X</button>
                        </span>
                    </li>
            </ul>

            <div>
                <button class="btn btn-success" (click) = "addTodo(todo.value)">Sync with the Server</button>

            </div>
        <div>
    `,
    providers: [TodoService]
})
export class TodoComponent implements OnInit {

    private todos;
       
    constructor(public todoService: TodoService) {
        console.log('CONSTRUCTOR **')
    }

    ngOnInit() { 
        console.log('ON INIT **')
        this.todoService.getTodos()
        .then((res) =>{
            console.log('In the component' ,res);
            this.todos = res;
        })
    }

    getClassForItem(isDone: boolean){
        if(isDone){
            return "list-group-item disabled"
        }
        else{
            return "list-group-item"
        }
    }
    getColor(isDone: boolean){
        if(isDone){
            return "green"
        }
        else{
            return "black"
        }
    }
    
    addTodo(todo: string){
        this.todoService.addTodo({text: todo})
        .then((res) =>{
            console.log('In the component -- post' ,res);
            this.todos = res;
        })
    }

    removeTodo(index: number){
        this.todoService.removeTodo(index)
        .then((res) =>{
            console.log('In the component -- remove' ,res);
            this.todos = res;
        })
    }

   

}