import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { Users } from './types/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task-tracker';
  data$?: Observable<Users[]>;

  constructor(
    private _dataService: DataService
  ) {}

  ngOnInit(): void {
    this.data$ = this._dataService.getExistingUsersData$();
  }
}
