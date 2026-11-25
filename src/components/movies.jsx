import MovieItem from './movieItem';
const Movies = (props)=>{
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem mymovie={movie} key={movie._id} Reload={props.ReloadData}></MovieItem>
        }
    );
}
export default Movies;