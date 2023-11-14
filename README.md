# World Capitals Quiz

Welcome to the World Capitals Quiz, a fun and educational quiz app built with Node.js and Express. Challenge yourself by guessing the capitals of various countries from around the world.

## Prerequisites

Before you embark on this quiz adventure, make sure you have the following installed on your local machine:

- **Node.js**
- **npm** (Node Package Manager)
- **PostgreSQL**

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/edriso/world-capitals-quiz.git
   cd world-capitals-quiz
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the PostgreSQL database:**

   - Create a database named `world`.
   - Create a table named `capitals` with columns `country` and `capital`.
   - Import the table data from the files within the `data` directory.

4. **Configure environment variables:**

   Rename the `.env.example` file to `.env` and provide your PostgreSQL database connection details:

   ```env
   DB_USER=your_postgres_user
   DB_HOST=your_postgres_host
   DB_DATABASE=world
   DB_PASSWORD=your_database_password
   DB_PORT=your_database_port
   ```

5. **Start the application:**

   ```bash
   npm start
   ```

   The app will be accessible at [http://localhost:3000](http://localhost:3000).

## How to Play

1. **Visit [http://localhost:3000](http://localhost:3000) in your web browser.**
2. **Start guessing the capitals of different countries.**
3. **Submit your answers and see your total score.**

Enjoy the quiz and test your knowledge of world capitals! If you have any feedback or would like to contribute, feel free to fork the repository and submit a pull request. Happy quizzing!
