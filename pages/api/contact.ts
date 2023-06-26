import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER, // Replace with your email address
        subject: 'New Contact Form Submission',
        html: `
          <h3>Name:</h3>
          <p>${name}</p>
          <h3>Email:</h3>
          <p>${email}</p>
          <h3>Message:</h3>
          <p>${message}</p>
        `,
      });

      res.status(200).end();
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).end();
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
