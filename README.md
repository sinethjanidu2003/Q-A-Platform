# Q&A Platform
## Overview

This is a simple Q&A (Question and Answer) platform built on WebSocket technology. It allows real-time communication between users for a seamless and interactive question-and-answer experience.

## Note 

This project is not completed, This is designed to use in the E-learning platform - The full usage can be viewed at https://lms.biologynow.lk.

## Features

- Real-time Communication: Utilizes WebSocket for instant communication between users.
- Question Posting: Users can post questions to the platform.
- nswering Questions: Users can provide answers to questions posted by Professor.
- Notification System: Real-time notifications for new questions, answers, and upvotes.
- Login Anywhere from the world with the Game PIN - (Or Allow only internal Ips to work)

## Images




## Installation

1. Clone this repository to your local machine:

2. Navigate to the project directory:

3. Install the required dependencies:
    npm start

4. Start the server:
    node index.js | Nodemon index.js

5. The application will be available at `http://localhost:3000` in your web browser.

## Usage

1. Open the application in your web browser.

2. Enter a game PIN name or name  and start Answering Questions.

3. Answers will be updated real time.

4. At the end You can see who got the higest.

## Configuration

You can configure the application by editing the `config.js` file. You can change the port, chatroom name, or any other settings to suit your requirements.

## Dependencies

- [Express.js](https://expressjs.com/)
- [Socket.IO](https://socket.io/)

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix

3. Make your changes and commit them

4. Push your changes to your fork


5. Create a pull request to the original repository.



Enjoy chatting anonymously with this simple chat application!