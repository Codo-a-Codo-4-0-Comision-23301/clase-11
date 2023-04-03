import Card from "./Card";

export default function Saludo( props ) {
    return(
        <div>
            <h2>
                Esto es un saludo para: { props.texto } 
                <br></br>
            </h2>
            <Card text={ props.texto } >
                { props.children }
            </Card>
        </div>
    );
}