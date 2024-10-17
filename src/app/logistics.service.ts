import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogisticsService {


  constructor() { }

  getUserList(){
    return [
      {"username" :"krish", "emailid" :"krishna@gmail.com","age" : 30},
      {"username" :"Ravi", "emailid" :"ravi@gmail.com","age" : 35},
      {"username" :"Saurav", "emailid" :"saurav@gmail.com","age" : 27},
      {"username" :"Ganesh", "emailid" :"ganesh@gmail.com","age" : 32}
    ];

  }

}
