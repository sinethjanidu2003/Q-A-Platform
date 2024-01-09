const questionArray = [
    {
      id: 1,
      question: "Who invented the bulb?",
      answers: [
        {
          1: {
            answer: "Thomas Edison",
            status: "false"
          },
        },
        {
          2: {
            answer: "Nikola Tesla",
            status: "false"
          },
        },
        {
          3: {
            answer: "Alexander Graham Bell",
            status: "true"
          },
        },
        {
          4: {
            answer: "Benjamin Franklin",
            status: "false"
          },
        },
      ],
      wait : 10
    },
    {
      id: 2,
      question: "What is the capital of France?",
      answers: [
        {
          1: {
            answer: "Berlin",
            status: "false"
          },
        },
        {
          2: {
            answer: "Madrid",
            status: "false"
          },
        },
        {
          3: {
            answer: "Paris",
            status: "true"
          },
        },
        {
          4: {
            answer: "Rome",
            status: "false"
          },
        },
      ],
      wait : 10

    },
    {
      id: 3,
      question: "Who wrote 'Romeo and Juliet'?",
      answers: [
        {
          1: {
            answer: "William Shakespeare",
            status: "true"
          },
        },
        {
          2: {
            answer: "Jane Austen",
            status: "false"
          },
        },
        {
          3: {
            answer: "Charles Dickens",
            status: "false"
          },
        },
        {
          4: {
            answer: "Mark Twain",
            status: "false"
          },
        },
      ],
      wait : 10
    },
    {
        id: 4,
        question: "In which year did the Titanic sink?",
        answers: [
          {
            1: {
              answer: "1905",
              status: "false"
            },
          },
          {
            2: {
              answer: "1912",
              status: "true"
            },
          },
          {
            3: {
              answer: "1920",
              status: "false"
            },
          },
          {
            4: {
              answer: "1935",
              status: "false"
            },
          },
        ],
        wait : 10
      },
      {
        id: 5,
        question: "What is the largest planet in our solar system?",
        answers: [
          {
            1: {
              answer: "Mars",
              status: "false"
            },
          },
          {
            2: {
              answer: "Jupiter",
              status: "true"
            },
          },
          {
            3: {
              answer: "Saturn",
              status: "false"
            },
          },
          {
            4: {
              answer: "Earth",
              status: "false"
            },
          },
        ],
        wait : 10
      },
      {
        id: 6,
        question: "Who is known as the 'Father of Computer Science'?",
        answers: [
          {
            1: {
              answer: "Alan Turing",
              status: "true"
            },
          },
          {
            2: {
              answer: "Steve Jobs",
              status: "false"
            },
          },
          {
            3: {
              answer: "Bill Gates",
              status: "false"
            },
          },
          {
            4: {
              answer: "Mark Zuckerberg",
              status: "false"
            },
          },
        ],
        wait : 10
      },

  ];


  module.exports = questionArray;