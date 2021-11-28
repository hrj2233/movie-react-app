//useparams는 react router의 변수 값을 넘겨줌.
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div className={styles.loader}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.movie}>
          <img
            className={styles.img}
            src={movie.medium_cover_image}
            alt={movie.title}
          />
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.description_intro}</p>
            <p>language: {movie.language}</p>
            <p>Rating: {movie.rating}</p>
            <p>Year: {movie.year}</p>
            <ul className={styles.movie__genres}>
              Genres: [
              {movie.genres.map((a) => (
                <li>{a}</li>
              ))}
              ]
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
