import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMovies, getMovie } from "../redux/feature/movieSlice";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./component.css";
const MoviesList = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => ({ ...state.movie }));
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row my-4 pt-4">
          {movies?.Search?.map((item, index) => (
            <div className="col-md-3 text-center">
              <Card
                className="my-3 carddata"
                key={index}
                onClick={() => {
                  dispatch(getMovie(item.imdbID)) &&
                    navigate(`/movie/${item.imdbID}`);
                }}
              >
                <Card.Img variant="top" src={item.Poster} alt={item.Title} />
                <Card.Body>
                  <Card.Title>{item.Title}</Card.Title>
                  <Card.Text>{item.Year}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Button
        className="m-2"
        variant="primary"
        onClick={() => {
          dispatch(getMovies("spider"));
        }}
      >
        1
      </Button>
      <Button
        className="m-2"
        variant="primary"
        onClick={() => {
          dispatch(getMovies("batman"));
        }}
      >
        2
      </Button>
    </>
  );
};

export default MoviesList;
