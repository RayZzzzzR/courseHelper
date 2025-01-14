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
                ml:'20rem',
                mr:'20rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                bgcolor: '#eee',
                padding: 3,
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