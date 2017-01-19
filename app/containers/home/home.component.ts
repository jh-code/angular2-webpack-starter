import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../interfaces';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

    constructor() {
        // 
    }

    public ngOnInit() {
        // 
    }

    public ngOnDestroy() {
        // 
    }
}
