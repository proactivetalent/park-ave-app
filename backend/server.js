import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, surname, email, message } = req.body;

  // Configure your email transport (using Gmail as example)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // replace with your Gmail
      pass: process.env.EMAIL_PASS,            // use an App Password, not your Gmail password
    },
  });

  try {
    await transporter.sendMail({
      from: '"Website Contact" <hamzafarrukh997@gmail.com>',
      to: 'hamzafarrukh997@gmail.com', // your destination email
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Surname: ${surname}
        Email: ${email}
        Message: ${message}
      `,
    });
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email.', error });
  }
});

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));