import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './components/SignUpForm';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import AuthProvider from './context/AuthContext';
import Navbar from './components/Navbar';
import Products from './pages/Product';

const App = () => (
  <AuthProvider>
    <Router>
      <Navbar />  {/* Navbar added here */}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
