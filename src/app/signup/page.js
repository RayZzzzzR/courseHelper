'use client'
import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        // Add signup API call here
        console.log('Signup details:', { name, email, password });
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
                bgcolor: '#f8f9fa',
                padding: 3,
            }}
        >
            <Typography variant="h4" mb={3}>
                Sign Up
            </Typography>
            <TextField
                label="Name"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
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
            <Button variant="contained" color="primary" onClick={handleSignup}>
                Sign Up
            </Button>
        </Box>
    );
};

export default SignupPage;