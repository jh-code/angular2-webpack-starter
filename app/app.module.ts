// angular stuff
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

// ngrx
import { StoreModule } from '@ngrx/store';
import { TodoReducer } from './reducers/todos.reducer';

// libraries
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// services
import { DataService } from './services/data.service';
import { TodoService } from './services/todo.service';

// components
import { TodoComponent } from './components/todo/todo.component';

// containers
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { AboutComponent } from './containers/about/about.component';
import { NoContentComponent } from './containers/no-content/no-content.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing,
        NgbModule.forRoot(),
        StoreModule.provideStore({ todos: TodoReducer })
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        NoContentComponent,
        TodoComponent
    ],
    providers: [
        DataService,
        TodoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
