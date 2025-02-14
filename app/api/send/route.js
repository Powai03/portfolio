import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
    const body = await req.json();
    const { email, sujet, message } = body;
    const htmlspecialchars = (str) => {
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    };

    try {
        const sanitizedEmail = htmlspecialchars(email);
        const sanitizedSujet = htmlspecialchars(sujet);
        const sanitizedMessage = htmlspecialchars(message); //sécurisation des données

        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: ["kilian.dlcsr92@gmail.com", sanitizedEmail],
            subject: sanitizedSujet,
            html: `
        <h1>${sanitizedSujet}</h1>
<p>Bonjour,</p>

<p>Merci de m’avoir contacté. J’ai bien reçu votre message et je vais y répondre dans les plus brefs délais.</p>

<p>📩 <strong>Votre message :</strong></p>
<blockquote style="border-left: 4px solid #007bff; padding-left: 10px; color: #555;">
    ${sanitizedMessage}
</blockquote>

<p>Je reviendrai vers vous au plus vite. En attendant, n’hésitez pas à consulter mon portfolio ou à me suivre sur mes réseaux.</p>

<p>À très bientôt,</p>
<p><strong>Kilian Delcenserie</strong></p>
<p><strong>Powai</strong></p>

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
