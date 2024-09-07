import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import { red } from '@mui/material/colors';
import './Registration.css'
const Registration = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    college: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Reset form after submission
    setFormData({
      password: '',
      email: '',
      college: '',
    });
  };

  return (
    
    <Box
    
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      
      
    >
      <form onSubmit={handleSubmit} style={{ width: '300px' }}>
      <h1 class='reg'>Registration Form</h1>
        <FormControl fullWidth margin="normal">
          
          <InputLabel>College</InputLabel>
          <Select
            label="College"
            name="college"
            value={formData.college}
            onChange={handleChange}
          >
            <MenuItem value="">Select College</MenuItem>
            <MenuItem value="College A">Akshaya College, Puttur</MenuItem>
            <MenuItem value="College B">Alva's College, Moodubidre</MenuItem>
            <MenuItem value="College C">Carmel Degree College, Bantwal</MenuItem>
            <MenuItem value="College C">Sacred Heart College, Madanthyar</MenuItem>
            <MenuItem value="College C">Shree Devi College of Information Science, Mangalore</MenuItem>
            <MenuItem value="College C">Sri Venkataramana Swamy College, Bantwal</MenuItem>
            <MenuItem value="College C">Padua Degree College, Mangalore</MenuItem>
            <MenuItem value="College B">Alva's College, Moodubidre</MenuItem>
            <MenuItem value="College C">Carmel Degree College, Bantwal</MenuItem>
            <MenuItem value="College C">Sacred Heart College, Madanthyar</MenuItem>
            <MenuItem value="College C">Shree Devi College of Information Science, Mangalore</MenuItem>
            <MenuItem value="College A">Akshaya College, Puttur</MenuItem>
            <MenuItem value="College B">Alva's College, Moodubidre</MenuItem>
            <MenuItem value="College C">Carmel Degree College, Bantwal</MenuItem>
            <MenuItem value="College C">Sacred Heart College, Madanthyar</MenuItem>
            <MenuItem value="College C">Shree Devi College of Information Science, Mangalore</MenuItem>
            <MenuItem value="College C">Sri Venkataramana Swamy College, Bantwal</MenuItem>
            <MenuItem value="College C">Padua Degree College, Mangalore</MenuItem>
            <MenuItem value="College B">Alva's College, Moodubidre</MenuItem>
            <MenuItem value="College C">Carmel Degree College, Bantwal</MenuItem>
            <MenuItem value="College C">Sacred Heart College, Madanthyar</MenuItem>
            <MenuItem value="College C">Shree Devi College of Information Science, Mangalore</MenuItem>
            <MenuItem value="College A">Akshaya College, Puttur</MenuItem>
            <MenuItem value="College B">Alva's College, Moodubidre</MenuItem>
            <MenuItem value="College C">Carmel Degree College, Bantwal</MenuItem>
            <MenuItem value="College C">Sacred Heart College, Madanthyar</MenuItem>
            <MenuItem value="College C">Shree Devi College of Information Science, Mangalore</MenuItem>
            <MenuItem value="College C">Sri Venkataramana Swamy College, Bantwal</MenuItem>
            <MenuItem value="College C">Padua Degree College, Mangalore</MenuItem>
            <MenuItem value="College B">Alva's College, Moodubidre</MenuItem>
            <MenuItem value="College C">Carmel Degree College, Bantwal</MenuItem>
            <MenuItem value="College C">Sacred Heart College, Madanthyar</MenuItem>
            <MenuItem value="College C">Shree Devi College of Information Science, Mangalore</MenuItem>
            {/* Add more colleges as needed */}
          </Select>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            autoComplete="current-password"
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          style={{ marginTop: '16px' }}
        >
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Registration;
