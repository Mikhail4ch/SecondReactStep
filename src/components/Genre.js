import Movie from "./Movie";
function Genre({name, description, movieTitle1, movieTitle2}) {
    return (
        <>
         <div>
         <h2> {name} </h2>
         <p> {description} </p>
         <Movie title={movieTitle1} year={2012}/> 
         <Movie title={movieTitle2} year={1993}/> 
         </div>
        </>
    )
}
export default Genre;