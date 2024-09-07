import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import old from './images/oldhead.jpg';
import hat from './images/olldhat.jpg';
import ow2 from './images/oldred.jpg';
import oldw from './images/shrajan.jpg';
import ym from './images/youngmen.jpg';
import yw from './images/youngwomen.jpg';
import './Cardshow.css';

const About = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/manish_vokkaliga/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
          <radialGradient id="instagram-gradient-1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fd5" />
            <stop offset=".328" stopColor="#ff543f" />
            <stop offset=".348" stopColor="#fc5245" />
            <stop offset=".504" stopColor="#e64771" />
            <stop offset=".643" stopColor="#d53e91" />
            <stop offset=".761" stopColor="#cc39a4" />
            <stop offset=".841" stopColor="#c837ab" />
          </radialGradient>
          <path fill="url(#instagram-gradient-1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z" />
          <radialGradient id="instagram-gradient-2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#4168c9" />
            <stop offset=".999" stopColor="#4168c9" stopOpacity="0" />
          </radialGradient>
          <path fill="url(#instagram-gradient-2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z" />
          <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z" />
          <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
          <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z" />
        </svg>
      ),
    },
    {
      href: "https://www.facebook.com/profile.php?id=100091999928441",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
          <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
          <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z" />
        </svg>
      ),
    },
    {
      href: "https://x.com/manish_kumar28",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
          <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 Z M 38.375 14 C 35.204 16.829 32.401 19.145 29.438 21.25 C 29.865 22.597 29.869 23.946 29.875 25.312 C 29.875 28.604 29.875 31.896 29.875 35.188 L 27.125 35.188 C 27.125 32.604 27.125 30.021 27.125 27.438 C 27.125 26.938 27.125 26.437 27.125 25.938 C 25.687 27.198 24.292 28.51 22.688 29.625 C 22.167 28.823 21.594 28.021 20.969 27.188 C 22.823 25.99 24.385 24.406 25.75 22.75 C 23.896 20.927 22.219 18.969 20.406 17.125 C 19.688 18.094 18.969 19.062 18.25 20.062 C 17.635 19.51 17.073 18.927 16.406 18.438 C 17.375 16.927 18.417 15.5 19.375 14 C 17.979 14 16.573 14 15.188 14 L 15.188 12.062 C 18.365 12.062 21.542 12.062 24.719 12.062 C 24.719 13.115 24.719 14.167 24.719 15.188 C 26.479 16.948 28.24 18.729 30.062 20.438 C 32.198 18.802 34.323 17.167 36.438 15.438 C 37.75 14.365 39.021 13.25 40.344 12.219 C 40.281 12.115 40.156 11.906 40.094 11.812 C 39.531 11.812 38.979 11.812 38.438 11.812 C 37.75 11.812 37.052 11.812 36.375 11.812 C 36.375 12.208 36.375 13 36.375 14 Z" />
        </svg>
      ),
    },
  ];

  const people = [
    {
      name: 'Robert',
      designation: 'Developer',
      hobbies: 'Reading, Hiking, Gaming',
      image: old,
    },
    {
      name: 'Emily',
      designation: 'Designer',
      hobbies: 'Sketching, Traveling, Photography',
      image: ow2,
    },
    {
      name: 'Michael',
      designation: 'Project Manager',
      hobbies: 'Cooking, Biking, Blogging',
      image: hat,
    },
    {
      name: 'Sophia',
      designation: 'Data Scientist',
      hobbies: 'Coding, Chess, Painting',
      image: yw,
    },
    {
      name: 'David',
      designation: 'Marketing Specialist',
      hobbies: 'Writing, Yoga, Gardening',
      image: ym,
    },
    {
      name: 'Shrajan',
      designation: 'HR Manager',
      hobbies: 'Music, Movies, Running',
      image: oldw,
    },
  ];

  return (
    <div className="main-container">
      {people.map((person, index) => (
        <Card key={index} className="card">
          <CardMedia component="img" alt={person.name} height="200" image={person.image} />
          <CardContent className="card-content">
            <Typography variant="h5" component="div" className="center-text">
              {person.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="center-text">
              {person.designation}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="center-text">
              Hobbies: {person.hobbies}
            </Typography>
            <div className="social-icons">
              {socialLinks.map((link, linkIndex) => (
                <a key={linkIndex} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default About;
