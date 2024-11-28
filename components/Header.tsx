import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const Header: React.FC = () => {
    console.log("Header component loaded");
    return (
        <AppBar position="fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 100,}}>
            <Toolbar>
                {/* サイト名 */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link href="/" passHref style={{ textDecoration: 'none', color: '#fff' }}>
                        Yoshikawa's Portfolio
                    </Link>
                </Typography>

                {/* ページへのリンク */}
                <Box>
                    <Link href="/home" passHref>
                        <Button color="inherit" style={{ color: '#fff' }}>Home</Button>
                    </Link>
                    <Link href="/concept" passHref>
                        <Button color="inherit" style={{ color: '#fff' }}>Concept</Button>
                    </Link>
                    <Link href="/products" passHref>
                        <Button color="inherit" style={{ color: '#fff' }}>Products</Button>
                    </Link>
                    <Link href="/contact" passHref>
                        <Button color="inherit" style={{ color: '#fff' }}>Contact</Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
