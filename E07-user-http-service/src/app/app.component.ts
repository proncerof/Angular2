import { Component } from '@angular/core';
import { UserService} from './user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  list: User[];

constructor(private service:UserService){
  this.getUsers();
}

  getUsers(){
    this.service.getUsers().subscribe(list=>this.list = list);
  }
}
