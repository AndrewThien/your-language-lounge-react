import {Resend} from 'resend';

import {EmailTemplate} from './EmailTemplate';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
  try {
    const {name, email, phoneNumber, subject, message} = await req.json();
    console.log(name, email, phoneNumber, subject, message);
    const data = await resend.emails.send({
      from: 'Customer Enquiry <contact@langlounge.uk>',
      to: ['hello@langlounge.uk'],
      subject: subject,
      text: "",
      react: EmailTemplate({name: name, email: email, phoneNumber: phoneNumber, subject: subject, message: message})
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({error});
  }
}