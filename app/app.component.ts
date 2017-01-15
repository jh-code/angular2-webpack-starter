import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

// global styles
import './public/styles/bootstrap/bootstrap.css';
import './public/styles/style.css';

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [NgbProgressbarConfig]
})
export class AppComponent implements OnInit, OnDestroy {

    constructor(progressConfig: NgbProgressbarConfig) {
        progressConfig.max = 1000;
        progressConfig.striped = true;
        progressConfig.animated = true;
        progressConfig.type = 'success';
    }

    public ngOnInit() {
        // 
    }

    public ngOnDestroy() {
        // 
    }
}
