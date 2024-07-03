import { useTodo } from "../hooks"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export const TodoApp = () => {

    const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo();
    
    const contadorTodos = () => {

        let contador = 0;

        for ( const todo in todos ) {
            contador++;
        }

        return contador

    }


    return (
        <>
            <h1>TodoApp ({ contadorTodos() }) - <small> 1 pendientes </small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={ todos }
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }    
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd handleNewTodo={ handleNewTodo } />
                </div>
            </div>
        </>
    )
}
