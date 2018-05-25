import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';
 
const STORAGE_KEY = "my-todos"

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable()
export class HomeService {

    
    
    todos : Array<object> = []; 
    constructor(private http : HttpClient, @Inject(LOCAL_STORAGE) private storage: StorageService){

    }

    getTodos() {
        return new Promise((resolve, reject) => {
            this.todos = this.storage.get(STORAGE_KEY) || []
            resolve(this.todos)
        })

    }

    addTodo(obj){
        //alert(obj);
        return new Promise((resolve, reject) => {
            this.todos.push(obj)
            // Auto stringyfies the object
            this.storage.set(STORAGE_KEY, this.todos);
            resolve(this.todos)
        })

       
    }

    removeTodo(index: number){
        return new Promise((resolve, reject) => {
            this.todos = this.storage.get(STORAGE_KEY)
            this.todos.splice(index, 1);
            this.storage.set(STORAGE_KEY, this.todos)
            resolve(this.todos)
        })
    }


}