export interface Todo {
    id: number;
    title: string;
    desc: string;
    complete: boolean;
}

export interface TodoState {
    ids: number[];
    entities: { [id: number]: Todo };
    selectedId: string | null;
}

export interface State {
    todos: TodoState;
}
