import Genre from "./Genre";
function Container() {
    return (
        <>
          <div className="container">
      <h1>Movie App</h1>
      <Genre
        name="Comedy"
        description="Lighthearted and humorous films"
        movieTitle1="21 Jump Street"
        movieTitle2="The Hangover"
      />
      <Genre
        name="Romance"
        description="Love stories that will make you swoon"
        movieTitle1="The Notebook"
        movieTitle2="Sleepless in Seattle"
      />
    </div>
        </>
    )
}
export default Container;