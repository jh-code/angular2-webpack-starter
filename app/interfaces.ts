export interface Todo {
    id: number;
    title: string;
    desc: string;
    complete: boolean;
    timestamp: number;
}

export interface TodoEntity {
    [id: number]: Todo
};

export interface TodoState {
    ids: number[];
    entities: TodoEntity;
    selectedId: string | null;
}

export interface State {
    todos: TodoState;
}
