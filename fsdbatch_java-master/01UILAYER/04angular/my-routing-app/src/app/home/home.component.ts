import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  //constructor() { }
    //ngOnInit() {}

    private todos;

    constructor(public homeService: HomeService) {
        console.log('CONSTRUCTOR **')
    }
  
  ngOnInit() { 
    console.log('ON INIT **')
    this.homeService.getTodos()
    .then((res) =>{
        console.log('In the component' ,res);
        this.todos = res;
    })
}



addTodo(todo: string, todo1: string, todo2: string, todo3: string){
    


    this.homeService.addTodo({name: todo, age: todo1, contact: todo2, email: todo3})
    .then((res) =>{
        console.log('In the component -- post' ,res);
        this.todos = res;
    })
}

removeTodo(index: number){
    this.homeService.removeTodo(index)
    .then((res) =>{
        console.log('In the component -- remove' ,res);
        this.todos = res;
    })
}

/*getClassForItem(isDone: boolean){
  isDone = false
  console.log("----isDone"+isDone);
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
}*/

}
