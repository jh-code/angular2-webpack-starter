import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { TodoService } from './services/todo.service';
import { Todo, State } from './interfaces';

// global styles
import './public/styles/bootstrap/bootstrap.css';
import './public/styles/style.css';

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    public navCollapsed: boolean = true;
    public currentRoute: string;
    public routerSub: Subscription;

    constructor(
        private router: Router
    ) {
        // 
    }

    public ngOnInit() {
        this.routerSub = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentRoute = event.url;
                this.navCollapsed = true;
            }
        });
    }

    public ngOnDestroy() {
        this.routerSub.unsubscribe();
    }
}
