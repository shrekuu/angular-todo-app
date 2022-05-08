import { Component } from '@angular/core';
import storage from "../storage";

type TodoType = {
    content: string
    done: boolean,
}
type EditingTodoType = {
    content: string,
    index: number
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Angular Todo App';
    newTodo: TodoType = { content: '', done: false }
    todos: TodoType[] = storage.get(storage._todos) || []
    isTodoEditModalVisible = false
    editingTodo: EditingTodoType = { content: '', index: 1 }

    addTodo() {
        this.newTodo.content = this.newTodo.content.trim()
        if (this.newTodo.content === '') {
            return
        }
        this.todos = [{ ...this.newTodo }, ...this.todos]
        this.newTodo.content = ''
        this.updateStore()
    }

    removeTodo(index: number) {
        this.todos.splice(index, 1)
        this.updateStore()
    }

    showTodoEditModal(i: number) {
        this.editingTodo = { content: this.todos[i].content, index: i }
        this.isTodoEditModalVisible = true
    }

    handleTodoEditModalCancel() {
        this.editingTodo.content = ''
        this.isTodoEditModalVisible = false
    }

    handleTodoEditModalOk() {
        this.editingTodo.content = this.editingTodo.content.trim()
        if (this.editingTodo.content === '') {
            this.removeTodo(this.editingTodo.index)
            this.updateStore()
            this.isTodoEditModalVisible = false
            return
        }
        this.todos[this.editingTodo.index].content = this.editingTodo.content
        this.editingTodo.content = ''
        this.editingTodo.index = 1
        this.isTodoEditModalVisible = false
        this.updateStore()
    }

    updateStore(): void {
        storage.set(storage._todos, this.todos)
    }
}
