import React from 'react';
import { Box, Hidden, Typography } from '@mui/material';
import { IoMdHome } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { MdMovie,MdLocalMovies } from "react-icons/md";
import { Link } from 'react-router-dom';

const navLinks = [{
    name: 'Home',
    path: '/',
    icon: <IoMdHome />
}, {
    name: 'Bookmarks',
    path: '/bookmark',
    icon: <FaBookmark />
}, {
    name: 'Movie',
    path: '/movie',
    icon: <MdMovie />
}, {
    name: 'TvSeries',
    path: '/tv-series',
    icon: <MdLocalMovies />
}]
const SideBar = () => {
    return (<Box sx={{
        backgroundColor:'#161d2f',
        padding:2,
        borderRadius:2,
        display:'flex',
        flexDirection:{
            xs:'row',
            lg:'column'
        },
        alignItems:'center',
        justifyContent:'space-between',
        width:{
            sm:'100%',
            lg:200
        }
    }}>
    <Box sx={{
        display:'flex',
        flexDirection:{
            xs:'row',
            lg:'column'
        },
        justifyContent:'space-between',
        alignItems:{
            xs:'center',
            lg:'start'
        },
        gap:3,
        width:'100%'
    }}>
        <Hidden smDown>
            <Typography variant='h5' component='h1' my={2} fontWeight={400} fontSize={18}>PikaShow</Typography>
        </Hidden>
        <Box sx={{
            py:{
                xs: '0px',
                ls:'16px'
            },
            display:'flex',
            flexDirection:{
                xs:'row',
                lg:'column'
            },
            gap:4
        }}>
      {navLinks.map((el)=>{
         return <Link key={el.name} to={el.path} style={{textDecoration:'none'}}>
        <Box sx={{
            display:'flex',
            alignItems:'center',
            gap:2,
            color:'white',
            textAlign:'center'
        }}> 
        {el.icon}
            <Hidden smDown>
            <Typography>{el.name}</Typography>
          </Hidden>
         </Box>
         </Link>
      })}
      </Box>
      </Box>
    </Box>
    );
};

export default SideBar;