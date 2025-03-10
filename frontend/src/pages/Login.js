import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Container, TextField, Button, Card, CardContent, Typography, Box } from '@mui/material';

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5002/api/users/login', data);
      if (response.data) {
        localStorage.setItem('token', 'dummy-auth-token'); // Store token
        setIsAuthenticated(true);
        navigate('/');
      }
    } catch (error) {
      alert('Invalid email or password');
    }
  };

  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>Login</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField fullWidth label="Email" {...register('email')} sx={{ mb: 2 }} />
            <TextField fullWidth type="password" label="Password" {...register('password')} sx={{ mb: 2 }} />
            <Button fullWidth variant="contained" color="primary" type="submit">Login</Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
