import { Star } from "@mui/icons-material";
import { List, ListItem, Typography, styled } from "@mui/material";

import React from 'react';

const Container = styled(List)`
  display: flex;
`;

const Banner = styled("img")({
  width: 47,
});

const MovieList = ({ movies }) => {
  return (
    <>
      {
      movies.map(movie => (
        <Container key={movie.id}>
          <ListItem>
            <Banner
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
          </ListItem>
          <ListItem>
            <Typography>{movie.original_title}</Typography>
          </ListItem>
          <ListItem>
            <Star color="warning" />
            <Typography>{movie.vote_average}</Typography>
          </ListItem>
          <ListItem>
            <Typography>{movie.release_date}</Typography>
          </ListItem>
        </Container>
      ))}
    </>
  );
};

export default MovieList;
