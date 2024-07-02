import React, { useState } from 'react';
import Layout from '../../components/Layout/Index';
import { IoSearch } from "react-icons/io5";
import { Box, InputAdornment, InputBase, Paper, Typography } from '@mui/material';
import MovieTrendList from '../../components/Movies';

const Home = () => {
    const [search, setSearch] = useState('')
    let trendingList,recommendingList =123
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{ setSearch(e.target.value)}
    return <Layout>
        <Box>
            <Paper component='form'
                sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#10141f', p: 1, border: 'none' }}>
                <InputBase placeholder='Search movies or TV series here'
                    sx={{
                        ml: 1,
                        flex: 1,
                        color: 'white',
                        border: 'none'
                    }} value={search}
                     onChange={handleChange}
                     startAdornment={<InputAdornment position='start'>
                        <IoSearch style={{color:'white'}}/>
                     </InputAdornment>}
                    />
            </Paper>
        </Box>
        <Box py={2} px={4}>
            {search ===''? (<Box width='100%'>
                <Box width='100%'>
                    <Typography variant='h5' component='h1' my={6} fontWeight={600}> Trending </Typography>
                    <MovieTrendList list={trendingList} />
                </Box>
                <Box width='100%'>
                    <Typography variant='h5' component='h1' my={6} fontWeight={600}> Recommended for you </Typography>
                    <MovieTrendList list={recommendingList} />
                </Box>
            </Box>):(<Box width='100%'>
                    <Typography variant='h5' component='h1' my={6} fontWeight={600}> Found </Typography>
                </Box>)}
        </Box>
    </Layout>
};

export default Home;