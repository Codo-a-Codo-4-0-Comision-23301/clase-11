import Card from "./Card";
import Video from "./Video";
import videoData from "@/datasource/videodatasources";

export default function Saludo( props ) {
 
    return(
        <div>
            <h2>
                Esto es un saludo para: { props.texto } 
                <br></br>
            </h2>
            <Card text={ props.texto }>
                { props.children }
            </Card>
           <Video url="https://www.w3schools.com/tags/movie.mp4"></Video>
           <Video url="https://www.w3schools.com/tags/movie.mp4"></Video>
           <Video url="https://www.w3schools.com/tags/movie.mp4"></Video>
           <Video url="https://www.w3schools.com/tags/movie.mp4"></Video>
           
        </div>
    );
}