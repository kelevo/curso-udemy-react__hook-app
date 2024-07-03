import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {

    const initialState = [];

    const init = () => {
        
        let dataLocal = localStorage.getItem( 'todos' );
        return ( dataLocal ) ? JSON.parse( dataLocal ) : [];

    }

    const [todos, dispatchTodo] = useReducer( todoReducer, initialState, init );

    useEffect(() => {

        localStorage.setItem( 'todos', JSON.stringify( todos ) );

    }, [todos])
    

    const handleNewTodo = ( todo ) => {

        dispatchTodo({
            type: '[TODO] Add Todo',
            payload: todo
        });

    }

    const handleDeleteTodo = ( id ) => {

        dispatchTodo({
            type: '[TODO] Remove Todo',
            payload: id
        })

    }

    const handleToggleTodo = ( id ) => {

        dispatchTodo({
            type: '[TODO] Toggle Todo',
            payload: id
        })

    }

    return {
        todos,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo
    }

}
