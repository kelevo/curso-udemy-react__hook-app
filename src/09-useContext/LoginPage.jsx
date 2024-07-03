import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

    const { user, setUser } = useContext( UserContext );

    return (
        <>
            <h1>Login Page</h1>
            <hr />

            <pre>
                { JSON.stringify( user, null, 4 ) }
            </pre>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setUser({ id: 123, name: 'Elizabeth Montalvo', email: 'eli@kelevo.com' }) }
            >
                Establecer usuario
            </button>
        </>
    )
}
