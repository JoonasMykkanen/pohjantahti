import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    const adminEmail = process.env.ADMIN_EMAIL || "";

    const { data, error } = await resend.emails.send({
      from: 'Ilmoitus <info@pohjantahtikiinteistot.fi>',
      to: [adminEmail],
      subject: `Uusi kysely ${name}`,
      react: (
        <div>
          <h1>Uusi asiakas kiinnostui asunnosta</h1>
          <p><strong>Nimi:</strong> {name}</p>
          <p><strong>Sähköposti:</strong> {email}</p>
          <p><strong>Puhelin:</strong> {phone}</p>
          <p><strong>Viesti:</strong></p>
          <p>{message}</p>
        </div>
      ),
    });

    if (error) {
      console.log(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
