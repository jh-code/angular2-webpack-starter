import { Component, Input } from '@angular/core';
import { Todo } from '../../interfaces';

@Component({
    selector: 'todo-component',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent {
    @Input() todo: Todo;

    constructor() {
        // 
    }
};
