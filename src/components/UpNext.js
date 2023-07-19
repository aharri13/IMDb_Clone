import { Box, Card, CardContent, Typography, styled } from "@mui/material";
import React from "react";

const Component = styled(Box)`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-left: 20px;
  & > p {
    color: #f5c518;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const Poster = styled("img")({
  width: 88,
});

const Wrapper = styled(Box)`
  color: #ffffff;
  display: flex;
`;

const UpNext = ({ movies }) => {
  return (
    <Card sx={{ maxWidth: 550, maxHeight: 500, bgcolor: '#121212'}}>
      <CardContent>
        <Component>
          <Typography>Up Next</Typography>
          {movies.splice(0, 3).map((movie) => (
            <Wrapper>
              <Poster sx={{ paddingTop: 2 }}
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="poster"
              />
              <Typography sx={{ paddingLeft: 5, paddingTop: 5 }}>{movie.original_title}</Typography>
            </Wrapper>
          ))}
        </Component>
      </CardContent>
    </Card>
  );
};

export default UpNext;
