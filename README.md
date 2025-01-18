# Tech Quiz Test Suite

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description
A comprehensive test suite for a technical quiz application using Cypress for both component and end-to-end testing. Built using the MERN stack, this application allows users to take programming quizzes while demonstrating robust testing practices.

## Features
- Component testing with Cypress
- End-to-end testing implementation
- Quiz functionality with scoring system
- MongoDB integration for question storage
- Responsive React interface

## Technologies Used
- MongoDB
- Express.js
- React
- Node.js
- Cypress
- TypeScript
- Bootstrap

## Installation
1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Set up MongoDB:
   - Create a database named 'techquiz'
   - Run the seed script: `cd server && npm run seed`
4. Create a .env file in the server directory:
```env
MONGODB_URI=mongodb://127.0.0.1:27017/techquiz
```

## Usage
1. Start the development server:
```bash
npm run start:dev
```
2. Access the application at http://localhost:3001

### Running Tests
#### Component Tests
```bash
npx cypress open --component
```

#### E2E Tests
```bash
npx cypress open --e2e
```

## Credits
This project was created as part of a coding bootcamp challenge. Sources and References: Portions of the code and guidance were provided with assistance from ChatGPT, Tutors, and my Instructors.

## Walkthrough Video
[Link to Video Demonstration](https://drive.google.com/file/d/1DLB0u5qD_Z-jhwEE0V-60-7RafvAE5GQ/view?usp=sharing)

## Questions
For any questions, please contact me:
- GitHub: [JaceG](https://github.com/JaceG)
- Email: jace.galloway@gmail.com
