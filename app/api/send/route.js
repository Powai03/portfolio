import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const  body  = await req.json();
  const { email, sujet, message } = body;
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ["kilian.dlcsr92@gmail.com", email],
      subject: sujet,
      html: 
        `
        <h1>${sujet}</h1>
        <p>Merci de m'avoir contacté, je reviendrai vers vous au plus vite.</p>
        <p><strong>Message envoyé :</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return res.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
