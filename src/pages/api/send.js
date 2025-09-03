// import { Resend } from "resend";

// const resend = new Resend(import.meta.env.RESEND_API_KEY);

// export const GET: import("astro").APIRoute = async ({ request }) => {
//     // Simple health check or fallback
//     return new Response(JSON.stringify({ ok: true }), {
//         headers: { "content-type": "application/json" },
//     });
// };

// export const POST: import("astro").APIRoute = async ({ request }) => {
//     try {
//         const formData = await request.formData();
//         const name = String(formData.get('name') || '');
//         const email = String(formData.get('email') || '');
//         const message = String(formData.get('message') || '');
//         const services = formData.getAll('services').map(String);

//         const html = `
//             <h2>New message from contact form</h2>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Services:</strong> ${services.length ? services.join(', ') : 'None selected'}</p>
//             <p><strong>Message:</strong></p>
//             <p>${message.replace(/\n/g, '<br/>')}</p>
//         `;

//         const { data, error } = await resend.emails.send({
//             from: "no-reply@futures.ai",
//             to: "guzungeorge@gmail.com",
//             reply_to: email || undefined,
//             subject: `New message${name ? ` from ${name}` : ''}`,
//             html,
//         });

//         if (error) {
//             console.error('Error sending email:', error);
//             return new Response(JSON.stringify({ ok: false, error }), {
//                 status: 500,
//                 headers: { "content-type": "application/json" },
//             });
//         }

//         return new Response(JSON.stringify({ ok: true, id: data?.id }), {
//             headers: { "content-type": "application/json" },
//         });
//     } catch (err) {
//         console.error('Unhandled error in /api/send POST:', err);
//         return new Response(JSON.stringify({ ok: false, error: 'Internal Server Error' }), {
//             status: 500,
//             headers: { "content-type": "application/json" },
//         });
//     }
// };
