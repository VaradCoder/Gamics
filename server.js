const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Server-side validation
  const errors = [];

  // Check for unique email in your database
  // Replace the following code with a database query to check if the email is already registered.
  // You'll need to use the database you've set up.
  // Example using MongoDB (make sure you have the MongoDB driver installed):
  // const userWithEmail = await db.collection('users').findOne({ email });

  // If a user with the same email exists, push an error message to the errors array.
  // if (userWithEmail) {
  //   errors.push('Email is already registered.');
  // }

  // Check password complexity (e.g., at least 8 characters)
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long.');
  }

  // If there are validation errors, respond with an error message
  if (errors.length > 0) {
    res.status(400).json({ errors });
    return;
  }

  // If validation passes, store user data in your database
  // Replace this code with the appropriate code to store user data in your chosen database.
  // Example using MongoDB:
  // await db.collection('users').insertOne({ username, email, password });

  // You can also send a confirmation email here if needed

  // Redirect to a success page or display a success message
  // For now, send a simple JSON response
  res.json({ message: 'Registration successful' });
});
const port = 5500;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
