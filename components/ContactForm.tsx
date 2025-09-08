"use client";

import { trackEvent } from '@/lib/gtag';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from "sonner"

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const resetFields = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message.');
      }

      toast.success("Viesti lähetetty🎉");
      resetFields();
      trackEvent('generate_lead', { method: 'email_form' });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="font-courier-prime text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
          Verkostoidutaanko?
        </h2>
        <div className="w-full flex justify-center">
          <p className="text-md text-center max-w-lg font-normal text-gray-600 mb-8">
            Ei hätää, en ole mikään myyntitykki. Olen korkeintaan hieman innostunut yrittäjä.
            Pistä vaan viestiä tulemaan, niin jutellaan ihan rennosti.
            <br />
            <br />
            Mulle saa myös soittaa vaikka ei olisi ostamassa mitään, tykkään sparrata ja vaihtaa ajatuksia
            yleisesti kaikesta mahdollisesta ja täten oppia uutta!
          </p>
        </div>
        <div className="max-w-2xl mx-auto text-black">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nimi</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Puhelinnumero</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Sähköposti</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Viesti</label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                required
              ></textarea>
            </div>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <div className="flex flex-col w-full sm:flex-row gap-4">
              <button
                id="action_email"
                type="submit"
                disabled={isSubmitting}
                className="hover:cursor-pointer w-full bg-blue-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Lähetetään...' : 'Lähetä tiedustelu sähköpostiin'}
              </button>
              <a
                id="action_phone"
                href="tel:+358400197329"
                onClick={() => trackEvent('generate_lead', { method: 'phone_form' })}
                className="hover:cursor-pointer w-full text-center bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-500 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Soita Joonakselle
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
