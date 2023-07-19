import Header from "../components/common/Header";
import React, { useEffect, useState } from "react";
import { categoryMovies } from "../services/api";
import { Box, styled } from "@mui/material";

import Banner from "../components/Banner";
import { NOWPLAYING_API_URL } from "../constants/constants";
import UpNext from "../components/UpNext";
import Slide from "../components/Slide";

const Wrapper = styled(Box)`
  display: flex;
  padding: 20px 0;
`;

const Component = styled(Box)`
  padding: 0 100px;
`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await categoryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
    };
    getData();
  }, []);
  return (
    <>
      <Header />
      <Component>
        <Wrapper>
          <Banner movies={movies} />
          <UpNext movies={movies} />
        </Wrapper>
        <Slide movies={movies} />
      </Component>
    </>
  )
};
export default Home;
