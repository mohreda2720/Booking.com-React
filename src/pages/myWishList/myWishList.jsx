import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { delFav } from '../../store/action/actions';

const MyWishList = () => {
  const favMovie = useSelector((state) => state.movies);
  console.log(favMovie);
  const dispatch = useDispatch();

  const delMovie = (index) => {
    favMovie.splice(index, 1);
    dispatch(delFav(favMovie));
  };

  return (
    <div className="row">
      {favMovie.map((movie, index) => (
        <Card
          key={index}
          style={{
            width: '18rem',
            height: 'auto',
            margin: '20px',
            borderColor: 'light gray',
          }}
        >
          {/* <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            style={{ width: '100%', height: '300px' }}
          /> */}
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.release_date}</Card.Text>
            <button
              className="me-auto  bg-info rounded"
              onClick={() => delMovie(index)}
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Favourites;
