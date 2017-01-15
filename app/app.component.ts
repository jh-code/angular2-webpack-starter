import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// global styles
import './public/styles/bootstrap/bootstrap-reboot.css';
import './public/styles/bootstrap/bootstrap-grid.css';
import './public/styles/bootstrap/bootstrap.css';
import './public/styles/style.css';

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    public navCollapsed: boolean = true;

    constructor(private route: ActivatedRoute) {
        // 
    }

    public ngOnInit() {
        // 
    }

    public ngOnDestroy() {
        // 
    }
}
