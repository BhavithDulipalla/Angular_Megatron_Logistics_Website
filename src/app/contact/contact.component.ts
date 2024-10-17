import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogisticsService } from '../logistics.service';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
/*
  userData:any[]= [];
  constructor(private logistics: LogisticsService){}    //  object is created

  ngOnInit(){  //  after constructor is executed 
    this.userData = this.logistics.getUserList();
    console.log(this.userData);
  }
*/
}
