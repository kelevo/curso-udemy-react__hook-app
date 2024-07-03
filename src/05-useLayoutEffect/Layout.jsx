import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {

    const { increment, counter } = useCounter( 1 );
    const {
        data,
        isLoading,
        hasError
    } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );

    // Si la data tiene un valor entonces toma la posicion 0
    // Transformar data en false !!data !-true !!-false
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BrackingBad Quotes</h1>
            <hr />

            {
                isLoading
                    ?   <LoadingQuote />
                    :   <Quote quote={ quote } author={ author } />
            }

            <button
                className='btn btn-primary'
                onClick={ () => increment() }
                disabled={ isLoading }
            >
                Next quote
            </button>
        </>
    )
}
