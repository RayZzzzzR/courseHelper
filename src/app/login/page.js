"use client"
import { Box, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login details:', { email, password });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                bgcolor: '#eee',
                pl: 55,
                pr: 55, 
                bgcolor: "#eeeeee",
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23abcdef' fill-opacity='0.56' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`  
            }}
        >
            <Typography variant="h4" mb={3}>
                Login
            </Typography>
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                sx={{ mb: 3 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleLogin} sx={{mb:'1rem'}}>
                Login
            </Button>
            <Button variant="outlined" color="primary" href='\signup'>
                Sign Up
            </Button>
        </Box>
    );
};

export default LoginPage;
