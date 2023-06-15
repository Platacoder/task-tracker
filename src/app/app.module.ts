import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentShellComponent } from './components/content-shell/content-shell.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { NavBannerComponent } from './components/nav-banner/nav-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentShellComponent,
    UserListComponent,
    TaskListComponent,
    NavBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
