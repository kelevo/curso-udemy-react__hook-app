import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = ( iterationNumber = 100 ) => {

    for( let i = 0; i < iterationNumber; i++ ) {
        console.log('Ahi vamos!!!');
    }

    return `${ iterationNumber } iteraciones realizadas`;

}

export const MemoHook = () => {

    const { counter, increment } = useCounter( 4000 );
    const [show, setShow] = useState( true );

    const memorizedeValue = useMemo(() => heavyStuff( counter ), [counter])

    return (
        <>
            <h1>Memorize</h1>
            <hr />

            <h4> { memorizedeValue } </h4>

            <h4>Counter: <small> { counter } </small></h4>
            <br />
            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show ) }
            >
                Show/Hide { JSON.stringify( show ) }
            </button>
        </>
    )
}
