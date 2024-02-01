import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  users:any[]=[];
 
  csvImport($event:any){
    const file = $event.target.files;
  }

}
