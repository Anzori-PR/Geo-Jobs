import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
  users: any;
  userCount: number = 0;

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.service.getAllUsers().subscribe((data) => {
      this.users = data;
      this.userCount = data.length;
    });
  }

  deleteUserById(id: any){
    this.service.deleteUser(id).subscribe((data) => {
      window.location.reload();
    });
  }

  searchUser() {

  }
  
  logOut() {
    sessionStorage.removeItem('role');
    window.location.href = '/';
  }
}
