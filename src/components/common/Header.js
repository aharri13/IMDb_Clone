import React, { useState } from 'react';
import { AppBar, Toolbar, styled, Box, Typography, InputBase } from '@mui/material';
import { logoURL } from '../../constants/constants';
import { Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material';
//Components
import HeaderMenu from './HeaderMenu';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../../constants/route';

const StyledToolbar = styled(Toolbar)`
background: #121212;
min-height: 56px !important;
padding: 0 100px !important;
justify-content: space-between;
& > * {
    padding: 0 15px;
}
& > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
        font-size: 14px;
        font-weight: 600;
    }
}
& > p {
    font-size: 14px;
    font-weight: 600;
}
`

const InputSearch = styled(InputBase)`
background: #FFFFFF;
height: 30px;
width: 55%;
border-radius: 5px;
`

const Logo = styled('img')({
    width: 64
})

const Header = () => {

const [open, setOpen] = useState(null);

const navigate = useNavigate();

const handleClick = (e) => {
    setOpen(e.currentTarget);
}

const handleClose = () => {
    setOpen(null);
}

    return(
        <AppBar position='static'>
            <StyledToolbar>
                <Logo src={logoURL} alt='logo' onClick={() => navigate(routePath.home)}/>
                <Box onClick={handleClick}>
                    <Menu />
                    <Typography>Menu</Typography>
                </Box>
                <HeaderMenu open={open} handleClose={handleClose}/>
                <InputSearch />
                <Typography>IMDb<Box component='span' color={'#4dabf5'}>Pro</Box></Typography>
                <Box>
                    <BookmarkAdd />
                    <Typography>Watchlist</Typography>
                </Box>
                <Typography>Sign In</Typography>
                <Box>
                    <Typography>EN</Typography>
                    <ExpandMore />
                </Box>
            </StyledToolbar>
        </AppBar>
    )
}

export default Header;