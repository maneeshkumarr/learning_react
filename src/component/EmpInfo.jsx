import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Avatar, Grid } from '@mui/material';
import './EmpInfo.css';
import manish from './images/manish.jpg';
import akshay from './images/Aksahy.jpg';
import adarsh from './images/adarsh.jpg';
import sagar from './images/shrajan.jpg';
import kiran from './images/kiran.jpg';

// Define the employee data
const employees = [
  {
    serialNumber: 1,
    profileName: 'Maneesh Kumar',
    profileImage: manish,
    designation: 'Software Engineer',
    department: 'Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'Node.js', 'Express', 'MySQL', 'MongoDB'],
    contact: {
      phone: '8792489207',
      email: 'manish.kumarr@example.com'
    },
    address: 'Kayarthadka'
  },
  {
    serialNumber: 2,
    profileName: 'Akshay Hebbar',
    profileImage: akshay,
    designation: 'Project Manager',
    department: 'Business Intelligence',
    skills: ['python', 'SQL'],
    contact: {
      phone: '9876543210',
      email: 'akshay.hebbar@example.com'
    },
    address: 'Kokkada'
  },
  {
    serialNumber: 3,
    profileName: 'Adarsh Gogate',
    profileImage: adarsh,
    designation: 'Product Manager',
    department: 'Marketing',
    skills: ['Excel', 'powerpoint'],
    contact: {
      phone: '7683403532',
      email: 'adarsh.gogate@example.com'
    },
    address: 'Belthangady'
  },
  {
    serialNumber: 4,
    profileName: 'Sagar Simha',
    profileImage: sagar,
    designation: 'Project Manager',
    department: 'Design',
    skills: ['Figma', 'Sketch'],
    contact: {
      phone: '9876543210',
      email: 'sagarr.simhaa@example.com'
    },
    address: 'Manglore'
  },
  {
    serialNumber: 5,
    profileName: 'Kiran Killur',
    profileImage: kiran,
    designation: 'Backend Developer',
    department: 'Development',
    skills: ['Java', 'Spring Boot'],
    contact: {
      phone: '9876783210',
      email: 'kirann.killlurm@example.com'
    },
    address: 'Banglore'
  },
  // Add more employee objects as needed
];

// Define the EmployeeTable component
const EmployeeTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Serial Number</TableCell>
            <TableCell>Profile Name</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Skills</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.serialNumber}>
              <TableCell>{employee.serialNumber}</TableCell>
              <TableCell>
                <Grid container alignItems="center">
                  <Grid item>
                    <Avatar src={employee.profileImage} alt={employee.profileName} />
                  </Grid>
                  <Grid item>
                    <Typography style={{ marginLeft: '10px' }}>{employee.profileName}</Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>{employee.designation}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>{employee.skills.join(', ')}</TableCell>
              <TableCell>{employee.contact.phone}</TableCell>
              <TableCell>{employee.contact.email}</TableCell>
              <TableCell>{employee.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Define the main App component
function App() {
  return (
    <div className="App">
      <Typography variant="h4" component="h1" gutterBottom>
        Employee Table
      </Typography>
      <EmployeeTable />
    </div>
  );
}

export default App;
