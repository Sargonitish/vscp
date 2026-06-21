import type { Education } from '@/lib/types';

export const educationList: Education[] = [
  {
    id: 'bs-cs',
    degree: 'B.S. in Computer Science',
    institution: 'University of Technology',
    location: 'San Francisco, CA',
    startYear: '2020',
    endYear: '2024',
    description: 'Focused on software engineering, distributed systems, and machine learning. Graduated with honors.',
    highlights: [
      'GPA: 3.9/4.0',
      'Dean\'s List - All Semesters',
      'Research Assistant in Distributed Systems Lab',
      'Teaching Assistant for Data Structures & Algorithms',
      'Published paper on edge computing at IEEE conference',
      'Vice President of Computer Science Student Association',
    ],
  },
  {
    id: 'hs-diploma',
    degree: 'High School Diploma',
    institution: 'Science & Technology Academy',
    location: 'San Jose, CA',
    startYear: '2016',
    endYear: '2020',
    description: 'STEM-focused curriculum with advanced placement courses in computer science and mathematics.',
    highlights: [
      'Valedictorian',
      'AP Scholar with Distinction',
      'USACO Silver Division',
      'Robotics Team Captain',
      'National Honor Society President',
    ],
  },
];

export const interests = [
  { emoji: '🚀', label: 'Space Technology' },
  { emoji: '🎸', label: 'Guitar' },
  { emoji: '📚', label: 'Reading' },
  { emoji: '🏃', label: 'Running' },
  { emoji: '🎮', label: 'Gaming' },
  { emoji: '✈️', label: 'Travel' },
  { emoji: '📝', label: 'Blogging' },
  { emoji: '🧩', label: 'Puzzles' },
];

export const timeline = [
  { year: '2024', event: 'Graduated with B.S. in CS' },
  { year: '2024', event: 'Started at TechCorp as Software Engineer' },
  { year: '2023', event: 'Full-Stack Intern at StartupXYZ' },
  { year: '2022', event: 'First Open Source Contribution' },
  { year: '2021', event: 'Started Freelance Web Development' },
  { year: '2020', event: 'Began CS Degree at University of Technology' },
  { year: '2019', event: 'First Hackathon - Won 3rd Place' },
  { year: '2018', event: 'Built First Web App' },
];
