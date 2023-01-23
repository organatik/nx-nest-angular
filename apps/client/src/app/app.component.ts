import { Component } from '@angular/core';
import { UsersService } from '@b2x/client/data-access-api';

@Component({
  selector: 'b2x-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private userApiService: UsersService) {}
  users$ = this.userApiService.userControllerGetAllUser();
  title = 'client';
}
