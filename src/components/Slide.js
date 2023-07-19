import Carousel from "react-multi-carousel";
import { Box, Typography, styled } from '@mui/material';
import React from 'react';


const StyledBanner = styled('img')`
width: 100%;
margin-top: 20px;
`

const Title = styled(Typography)`
color: #FFFFFF;
display: flex;
`
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

const Slide = ({ movies }) => {
    return(
        <Box styled={{ marginTop: 20 }}>
            <Carousel swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            slidesToSlide={1}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px">
                {
                    movies.map(movie => (
                        <>
                        <StyledBanner key={movie.id} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
                        <Title>{movie.original_title}</Title>
                        </>
                    ))
                }
            </Carousel>
        </Box>
    )
}

export default Slide;