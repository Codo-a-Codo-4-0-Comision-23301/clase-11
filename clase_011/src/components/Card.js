export default function Card( props ){
    return(
        <>
        <h3>
            <span>
                Esto es un span { props.text }
            </span>
            { props.children }
        </h3>
        </>
    );
}