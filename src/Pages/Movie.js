import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { Typography } from "@mui/material";
import useStyles from "../styles";
const Movie = () => {
  const { movies } = useSelector((state) => ({ ...state.movie }));
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <>
      <section className={classes.section}>
        <div className="row">
          <div className="col-md-6 ">
            <img src={movies.Poster} alt={movies.Title} className="mb-5" />
          </div>
          <div className="col-md-6">
            {" "}
            <div>
              <Typography align="left" variant="h3" gutterBottom component="h2">
                {movies.Title}
              </Typography>
              <Typography align="left" variant="h5" gutterBottom component="h5">
                Year : {movies.Year}
              </Typography>
              <Typography
                align="left"
                variant="body1"
                gutterBottom
                component="p"
              >
                {movies.Plot}
              </Typography>
              <Typography align="left" variant="h6" gutterBottom component="h6">
                Director : {movies.Director}
              </Typography>
              <Typography align="left" variant="h6" gutterBottom component="h6">
                Runtime : {movies.Runtime}
              </Typography>
              <Typography align="left" variant="h6" gutterBottom component="h6">
                Genre : {movies.Genre}
              </Typography>
              <Button
                variant="primary"
                className="mt-4"
                onClick={() => navigate("/")}
              >
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
