import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Todo, State } from '../interfaces';
import { DataService } from './data.service';

@Injectable()
export class TodoService {
    public todos$: Observable<Todo[]>;
    public apiUrl: string = 'app/public/mock-data/todos.json';

    constructor(
        private store: Store<State>,
        private dataService: DataService
    ) {

        this.todos$ = this.store.select('todos');
        this.loadTodos();
    }

    public loadTodos() {
        let data = this.dataService.get(this.apiUrl)
        .subscribe((todos: Todo[]) => {
            this.store.dispatch({ type: 'LOAD', payload: todos });
            data.unsubscribe();
        });
    }

    public addTodo(todo: Todo) {
        this.store.dispatch({ type: 'INSERT', payload: todo });
    }

    public selectTodo(id: number) {
        this.store.dispatch({ type: 'SELECT', payload: id });
    }
};
