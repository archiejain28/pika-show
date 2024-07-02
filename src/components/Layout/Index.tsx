import { Box } from '@mui/material';
import React, { ReactNode } from 'react';
import SideBar from '../Sidebar';
interface LayoutProps{
    children:ReactNode
}
const Layout = ({children}:LayoutProps) => {
    return (
        <Box sx={{
            backgroundColor: "#10141F",
            display: 'flex',
            flexDirection: {
                xs: 'column',
                lg: 'row'
            },
            height: '100vh',
            overflowY: 'hidden',
            color: 'white',
            gap: 3,
            padding: 3
        }}><SideBar />
            <Box sx={{ width: '100%', overflowY: 'scroll' }}>
                {children}
            </Box>
        </Box>
    );
};

export default Layout;