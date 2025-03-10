import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Container, TextField, Button, Card, CardContent, Typography, Box } from '@mui/material';

const SignUp = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5002/api/users/register', data);
      if (response.data) {
        localStorage.setItem('token', 'dummy-auth-token'); // Store token
        setIsAuthenticated(true);
        navigate('/');
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Signup failed. Try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>Create Your Account</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField fullWidth label="Username" {...register('username')} sx={{ mb: 2 }} />
            <TextField fullWidth label="Email" {...register('email')} sx={{ mb: 2 }} />
            <TextField fullWidth type="password" label="Password" {...register('password')} sx={{ mb: 2 }} />
            <Button fullWidth variant="contained" color="primary" type="submit">Sign Up</Button>
          </form>
          <Box textAlign="center" sx={{ mt: 2 }}>
            <Typography variant="body2">Already have an account? <Button onClick={() => navigate('/login')}>Login</Button></Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SignUp;
