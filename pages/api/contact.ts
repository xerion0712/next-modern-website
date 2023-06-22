import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const sendEmail = async (emailData: { name: string; email: string; message: string }) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'maryamtufail78@gmail.com',
      pass: 'MaR@2503',
    },
  });

  const { name, email, message } = emailData;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'maryamtufail78@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
      </ul>
      <h3>Message</h3>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  try {
    await sendEmail({ name, email, message });
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email' });
  }
};

export default handler;
